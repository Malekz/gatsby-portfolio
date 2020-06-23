import React from "react"
import { css, Styled } from "theme-ui"
import Header from "./header"
import useBlogThemeConfig from "gatsby-theme-blog/src/hooks/configOptions"
import Helmet from "react-helmet"

import Footer from "./home-footer"

export default ({ children, ...props }) => {
  const blogThemeConfig = useBlogThemeConfig()
  const { webfontURL } = blogThemeConfig

  return (
    <Styled.root>
      <Helmet>
        <link rel="stylesheet" href={webfontURL} />
      </Helmet>
      <Header {...props} />
      <div>
        <div
          css={css({
            maxWidth: `container`,
            mx: `auto`,
            px: 3,
            py: 4,
          })}
        >
          {children}
        </div>
      </div>
      <Footer />
    </Styled.root>
  )
}
