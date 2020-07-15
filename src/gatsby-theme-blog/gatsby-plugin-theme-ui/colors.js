import merge from "deepmerge"
import defaultThemeColors from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors"

/*
 * Want to change your theme colors?
 * Try uncommenting the color overrides below
 * to go from default purple to a blue theme
 */

const purple60 = `#663399`
// const purple30 = `#D9BAE8`
const grey90 = `#232129`
// const black80 = `#1B1F23`
const white = `#fff`
const lightBlack = `#282c35`
// const lightWhite = `rgba(255, 255, 255, 0.86)`
const opaqueLightYellow = `rgba(255, 229, 100, 0.2)`
const opaqueLightWhite = `hsla(0, 0%, 100%, 0.2)`
const lightGray = `hsla(0, 0%, 0%, 0.2)`
//const darkBrown = `#b58900`
//const lightBrown = `#d3a000`
const darkPink = `#e06066`
const lightPink = `#c5484d`
const lightGrey = `#ebeced`
const darkGrey = `#363c48`

export default merge(defaultThemeColors, {
  text: grey90,
  background: white,
  primary: darkPink,
  // secondary: lightBrown,
  secondary: lightPink,
  muted: lightGray,
  highlight: opaqueLightYellow,
  heading: grey90,
  accent: lightGrey,
  prism: {
    background: `#011627`,
    comment: `#809393`,
    string: `#addb67`,
    var: `#d6deeb`,
    number: `#f78c6c`,
    constant: `#82aaff`,
    punctuation: `#c792ea`,
    className: `#ffc98b`,
    tag: `#ffa7c4`,
    boolean: `#ff5874`,
    property: `#80cbc4`,
    namespace: `#b2ccd6`,
    highlight: `hsla(207, 95%, 15%, 1)`,
  },
  modes: {
    dark: {
      text: white,
      background: lightBlack,
      primary: lightPink,
      // secondary: darkBrown,
      secondary: darkPink,
      muted: opaqueLightWhite,
      highlight: purple60,
      heading: white,
      accent: darkGrey,
    },
  },
})
