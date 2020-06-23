import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import { css, Styled } from "theme-ui"

import Layout from "../gatsby-theme-blog/components/layout"
import SEO from "gatsby-theme-blog/src/components/seo"

const UsesPage = props => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="Uses" />
      <div>
        <Styled.h2
          css={css({
            mt: "10px",
            textAlign: "center",
          })}
        >
          STUFF I USE
        </Styled.h2>
        <Image
          fluid={data.file.childImageSharp.fluid}
          css={css({
            my: "50px",
            textAlign: "center",
          })}
        />
        <p>
          We (Developers) loves talking about our tools and setups. I thoguht
          I'd write down a few trinkets and few other tools I like to use in my
          day-to-day to be productive and have fun.
        </p>
        <p>
          <strong>
            No affiliate links on this page. Browse at ease. <span>😊</span>
          </strong>
        </p>

        <Styled.h3>Hardware</Styled.h3>
        <ul>
          <li>
            MacBook Pro (13-inch, 2019, Four Thunderbolt 3 ports). The processor
            is 2,4 GHz Quad-core Intel Core i5, 512 SSD with 16 GB Memory.
          </li>
          <li>Apple Magic Keyboard.</li>
          <li>Apple Magic Mouse.</li>
          <li>Samsung Curved Monitor C27F390FHU LED 68,6 cm (27), Full HD.</li>
          <li>VANMASS USB C Hub 9 in 1 Premium Aluminium Adapter.</li>
          <li>EMSA 515615 coffee Mug.</li>
          <li>iphone 11.</li>
        </ul>
        <Styled.h3>Editor & Development</Styled.h3>
        <ul>
          <li>Visual Studio Code (Monokai theme).</li>
          <li>iTerm 2 + zsh shell.</li>
          <li>NPM.</li>
          <li>Git.</li>
        </ul>
        <Styled.h3>Chrome Extensions</Styled.h3>
        <ul>
          <li>JSON Viewer.</li>
          <li>React Developer Tools.</li>
          <li>Postman Interceptor.</li>
          <li>Redux Dev Tools.</li>
          <li>Lighthouse.</li>
          <li>Google Tag Assistant.</li>
        </ul>
        <Styled.h3>Tech Stacks</Styled.h3>
        <p>
          HTML, CSS (SASS, LESS), Javascript, React, Node, Express, Gatbsy,{" "}
        </p>
        <Styled.h3>Other Softwares</Styled.h3>
        <ul>
          <li>Google Chrome.</li>
          <li>Slack.</li>
          <li>Google Hangouts.</li>
          <li>Trello.</li>
          <li>Spotify.</li>
          <li>CleanMyMacX.</li>
        </ul>
      </div>
    </Layout>
  )
}

export default UsesPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    file(relativePath: { eq: "office.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
