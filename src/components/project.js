import React from "react"
import { css, Styled } from "theme-ui"
import Image from "gatsby-image"

const Project = ({ project }) => (
  <div
    css={css({
      display: `flex`,
      flexWrap: `wrap`,
      marginTop: "50px",
    })}
  >
    <Image
      css={css({
        marginRight: "20px",
        marginBottom: "5px",
      })}
      fixed={project.node.frontmatter.image.childImageSharp.fixed}
    />
    <div
      css={css({
        display: "flex",
        flexDirection: "column",
        flex: 1,
        minWidth: 200,
      })}
    >
      <Styled.h3
        css={css({
          marginBottom: "5px",
        })}
      >
        <a
          css={css({
            textDecoration: `none`,
            color: `primary`,
          })}
          rel="noopener noreferrer"
          target="_blank"
          href={project.node.frontmatter.link}
        >
          {project.node.frontmatter.title}
        </a>
      </Styled.h3>
      <small
        css={css({
          fontStyle: `italic`,
        })}
      >
        Technology: {project.node.frontmatter.tech.join(", ")}
      </small>
      <p
        css={css({
          textDecoration: `none`,
          marginTop: "0",
        })}
      >
        {project.node.frontmatter.description}
      </p>
    </div>
  </div>
)
export default Project
