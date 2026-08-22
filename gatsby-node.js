const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")
const { createNodeField } = require("gatsby")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const blogPost = path.resolve("./src/templates/blog-post.js")
  const monthlyArchive = path.resolve("./src/templates/monthly-archive.js")

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query: ${result.errors}`)
    return
  }

  const posts = result.data.allMarkdownRemark.edges

  // Create blog post pages
  posts.forEach(({ node }, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: node.fields.slug,
      component: blogPost,
      context: {
        slug: node.fields.slug,
        previous,
        next,
      },
    })
  })

  // Create monthly archive pages
  const months = new Map()

  posts.forEach(({ node }) => {
    const date = node.frontmatter.date
    if (date) {
      const month = date.substring(0, 7)
      if (!months.has(month)) {
        months.set(month, [])
      }
      months.get(month).push(node)
    }
  })

  months.forEach((postsForMonth, month) => {
    const [year, mm] = month.split("-")
    const displayMonth = parseInt(mm) + "/" + year

    // create date objects for the start and end of the month
    const startDate = new Date(`${year}-${mm}-01`)
    const endDate = new Date(`${year}-${mm}-31`)
    endDate.setHours(23, 59, 59, 999)

    postsForMonth.forEach((node, index) => {
      const previous =
        index === postsForMonth.length - 1 ? null : postsForMonth[index + 1]
      const next = index === 0 ? null : postsForMonth[index - 1]

      createPage({
        path: "/archive/" + month,
        component: monthlyArchive,
        context: {
          month,
          date: startDate.toISOString(),
          datePlus: endDate.toISOString(),
          displayMonth,
          previous,
          next,
        },
      })
    })
  })

  createPage({
    path: "/archive",
    component: path.resolve("./src/pages/archive/index.js"),
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: "slug",
      node,
      value,
    })
  }
}
