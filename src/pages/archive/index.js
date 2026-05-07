import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import "./archive.css"

const Archive = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const group = data.allMarkdownRemark.group || []

  const buildArchive = () => {
    // Manually group posts by month without using GraphQL group
    const archiveMap = {}

    data.allMarkdownRemark.edges.forEach(({ node }) => {
      if (node.frontmatter && node.frontmatter.date) {
        const dateStr = node.frontmatter.date
        if (!archiveMap[dateStr]) {
          archiveMap[dateStr] = {
            posts: [],
            dateStr,
          }
        }
        archiveMap[dateStr].posts.push({
          title: node.frontmatter.title,
          slug: node.fields.slug,
          date: dateStr,
        })
      }
    })

    return Object.keys(archiveMap)
      .sort((a, b) => new Date(b) - new Date(a))
      .slice(0, 100)
      .map((dateStr) => {
        const date = new Date(dateStr)
        const monthNum = date.getMonth() + 1
        const year = date.getFullYear()
        const formatted = `${monthNum}/${year}`

        return (
          <div key={dateStr} className="archive-month">
            <h2>
              <Link to={`/archive/${dateStr.substring(0, 7)}`}>
                {formatted}
              </Link>
            </h2>
            <div className="posts">
              {archiveMap[dateStr].posts.map((post) => (
                <div key={post.slug} className="post">
                  <Link to={post.slug}>
                    <h3>{post.title}</h3>
                  </Link>
                  <small>{post.date}</small>
                </div>
              ))}
            </div>
          </div>
        )
      })
  }

  const posts = data.allMarkdownRemark.edges || []

  return (
    <Layout title={siteTitle}>
      <SEO title="Archive" />
      <div className="archive-container">
        <div className="full-archive">
          <h1>Full Archive</h1>
          {buildArchive()}
        </div>
        <div className="recent-posts">
          <h1>Recent Posts</h1>
          {posts.slice(0, 10).map(({ node }) => (
            <article key={node.fields.slug} className="post-item">
              <header>
                <h3>
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {node.frontmatter.title || node.fields.slug}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
              </header>
              <section>
                <p>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </p>
              </section>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Archive

export const query = graphql`
  query ArchivePageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { date: { ne: null }, title: { ne: "" } } }
      limit: 2000
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
