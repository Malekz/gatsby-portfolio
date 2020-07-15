import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import { Link } from "gatsby"

import { css, Styled } from "theme-ui"

import Layout from "../gatsby-theme-blog/components/layout"
import SEO from "gatsby-theme-blog/src/components/seo"

const AboutPage = props => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="About" />
      <div>
        <Styled.h2
          css={css({
            mt: "10px",
            textAlign: "center",
          })}
        >
          <span>Hey there 👋</span>
        </Styled.h2>
        <Image fluid={data.file.childImageSharp.fluid} css={css({})} />
        <p>
          I am Malek Zarzour, a frontend developer based in Dinslaken, Germany.
          I am an advocate for web performance and accessibility as well as a
          JAMstack enthusiast.
        </p>
        <p>
          I use Javascript because of its versatility and ongoing evolution.
        </p>
        <p>
          I made a career change in 2018 from B.A in English Language and
          Literature into web development.
        </p>

        <p>
          After a 12 month intensive Web Development Bootcamp in an
          international and multicultural environment institute, i've gained the
          most demanded skills taught in the industry and i believe i have what
          it takes to start my career as a frontend developer.
        </p>
        <p>
          During my learning experience in Digital Career Institute, I have
          learned that "writing clean code" and functions all day long in front
          of a black screen is not the most important skill to have.
        </p>
        <p>Being a human and good communicator is even more important.</p>
        <Styled.h2
          css={css({
            mt: "50px",
          })}
        >
          More about me
        </Styled.h2>
        <p>I am a husband and father of two.</p>
        <p>
          Born in Syria, raised in Dubai, lived two years in Istanbul, and now
          settled in beautiful Dinslaken, Germany.
        </p>
        <p>
          I like all kinds of sports, but Tennis and Table-tennis is my
          main-sport.
        </p>
        <p>
          Cooking? I've been told that i got the gift. I mainly cook
          middle-eastern cuisines. Who knows! you might taste my food one day.
        </p>
        <ul>
          {data.allFile.edges.map((file, index) => {
            return (
              <li
                css={css({
                  textDecoration: "none",
                })}
                key={`pdf-${index}`}
              >
                <Styled.a href={file.node.publicURL} download>
                  Download Resume
                </Styled.a>
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    file(relativePath: { eq: "avatar.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allFile(filter: { base: { eq: "resume.pdf" } }) {
      edges {
        node {
          publicURL
          name
        }
      }
    }
  }
`
