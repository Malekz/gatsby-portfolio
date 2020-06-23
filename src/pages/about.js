import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

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
        <p>I use Javascript</p>
        <p>
          I made a career change in 2018 from B.A in English Language and
          Literature into web development.
        </p>
        <p>
          Actually, it all started in the summer of 2017 when I attended an
          event in Trivago’s headquarter office in Dusseldorf. There was that
          guy who spoke for 30 minutes about how he become a web developer in
          less than a year and now he is working for Trivago in a product used
          by millions of people around the globe.
        </p>
        <p>He ended his speech by saying the following:</p>
        <blockquote>
          I have never been satisfied and fulfilled personally and
          professionally as I am today .. the web is the future
        </blockquote>

        <p>His story sold me.</p>
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
        <p>
          Born in Syria, raised in Abu Dhabi, lived in Istanbul, and lives in
          beautiful Dinslaken, Germany.
        </p>
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
  }
`
