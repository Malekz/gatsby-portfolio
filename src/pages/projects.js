import React from "react"
import { graphql } from "gatsby"
import { css, Styled } from "theme-ui"

import Layout from "../gatsby-theme-blog/components/layout"
import SEO from "gatsby-theme-blog/src/components/seo"
import Project from "../components/project"

const ProjectPage = props => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const projects = data.allMdx.edges

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="Projects" />
      <Styled.h1
        css={css({
          mb: 4,
        })}
      >
        Projects
      </Styled.h1>
      <div>
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </Layout>
  )
}

export default ProjectPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      filter: { fileAbsolutePath: { regex: "/(projects)/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            link
            tech
            image {
              childImageSharp {
                fixed(width: 200) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`
