// src/templates/CategoryTemplate.js
import React from 'react'
import { graphql, Link } from 'gatsby'

const CategoryTemplate = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <div>
      <h1>{pageContext.category}</h1>
      <ul>
        {posts.map(({ node }) => (
          <li key={node.id}>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const query = graphql`
  query CategoryPosts($category: String) {
    allMarkdownRemark(
      filter: { frontmatter: { categories: { eq: $category } } }
    ) {
      edges {
        node {
          id
          fields { slug }
          frontmatter { title }
        }
      }
    }
  }
`

export default CategoryTemplate   