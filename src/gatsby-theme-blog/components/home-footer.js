import React, { Fragment } from "react"
import { Styled, css } from "theme-ui"
import { graphql, StaticQuery } from "gatsby"

const Footer = () => {
  return (
    <StaticQuery
      query={graphql`
        query FooterQuery {
          site {
            siteMetadata {
              social {
                name
                url
              }
            }
          }
        }
      `}
      render={data => (
        <footer
          css={css({
            maxWidth: `container`,
            mx: `auto`,
            px: 3,
            pt: 4,
          })}
        >
          © {new Date().getFullYear()}{" "}
          <Styled.a href="https://www.gatsbyjs.org">zarzour.de</Styled.a>
          {` `}&bull;{` `}
          {data.site.siteMetadata.social.map((platform, i, arr) => (
            <Fragment key={platform.url}>
              <Styled.a
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {platform.name}
              </Styled.a>
              {arr.length - 1 !== i && (
                <Fragment>
                  {` `}&bull;{` `}
                </Fragment>
              )}
            </Fragment>
          ))}
        </footer>
      )}
    />
  )
}
export default Footer
