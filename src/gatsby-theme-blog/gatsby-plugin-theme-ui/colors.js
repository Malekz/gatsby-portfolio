import merge from "deepmerge"
import defaultThemeColors from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors"

/*
 * Want to change your theme colors?
 * Try uncommenting the color overrides below
 * to go from default purple to a blue theme
 */

const black = `#000`
const brownish = `#b58900`
const blueGray = `#282c35`

export default merge(defaultThemeColors, {
  text: black,
  primary: brownish,
  heading: blueGray,
  modes: {
    dark: {
      background: blueGray,
      primary: brownish,
    },
  },
})
