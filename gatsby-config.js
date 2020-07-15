module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/content/projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/static/`,
      },
    },
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://Zarzour.us3.list-manage.com/subscribe/post?u=b36d3724bf6d4f90f6a2f6aec&amp;id=f8569a7788",
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Zarzour.de`,
    author: `Malek Zarzour`,
    description: `My site description...`,
    siteUrl: `https://zarzour.de/`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/malekz`,
      },
      {
        name: `github`,
        url: `https://github.com/malekz`,
      },
    ],
  },
}
