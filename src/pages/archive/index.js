import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PeriodList from "../../components/PeriodList"
import "./archive.css"

class ArchiveIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const periods = data.allMarkdownRemark.group

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Archive" />
        <h1>Blog Archive</h1>
        <PeriodList periods={periods} />
        <div className="archive-posts">
          {periods.map((period) => {
            let formattedDate = period.fieldValue
            if (Date.parse(period.fieldValue)) {
              const date = new Date(period.fieldValue)
              formattedDate = `${date.getMonth() + 1}/${date.getFullYear()}`
            }
            return (
              <div key={period.fieldValue} className="archive-month">
                <h2>
                  <Link to={period.fieldValue}>{formattedDate}</Link>
                </h2>
                <div className="posts-list">
                  {period.edges.map(({ node }) => {
                    const title = node.frontmatter.title || node.fields.slug
                    return (
                      <article key={node.fields.slug}>
                        <Link to={node.fields.slug}>
                          <h3>{title}</h3>
                        </Link>
                        <small>{node.frontmatter.date}</small>
                      </article>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default ArchiveIndex

export const pageQuery = graphql`
  query ArchiveQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { date: { ne: null } } }
    ) {
      group(field: frontmatter___date) {
        fieldValue
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
            }
          }
        }
      }
    }
  }
`
