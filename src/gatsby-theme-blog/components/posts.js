import React from "react"

import Layout from "./layout"
import SEO from "gatsby-theme-blog/src/components/seo"
import PostList from "gatsby-theme-blog/src/components/post-list"
import Subscribe from "../../components/subscribe"

const Posts = ({ location, posts, siteTitle }) => (
  <Layout location={location} title={siteTitle}>
    <SEO title="Malek Zarzour" />
    <main>
      <PostList posts={posts} />
      <Subscribe />
    </main>
  </Layout>
)

export default Posts
