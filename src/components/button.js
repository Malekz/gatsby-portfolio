import React from "react"
import { css } from "theme-ui"

const styles = {
  btn: {
    width: "100%",
    border: "1px solid",
    color: "primary",
    backgroundColor: "background",
    borderRadius: "0.25rem",
    padding: "15px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 500ms ease-in-out",
    ":hover": {
      color: "secondary",
      border: "1px solid secondary",
    },
  },
}
const Button = props => (
  <button css={css(styles.btn)} {...props}>
    {props.children}
  </button>
)

export default Button
