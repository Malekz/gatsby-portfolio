import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

import { css, Styled } from "theme-ui"
import Button from "../components/button"

// import { encode } from "../helpers/helpers"
import "../utils/global.css"

const styles = {
  card: {
    backgroundColor: "accent",
    padding: "2rem",
    borderRadius: "1rem",
    margin: "3rem 0 2rem",
    position: "relative",
    zIndex: 5,
    "::after": {
      content: '""',
      width: "10rem",
      height: "10rem",
      backgroundColor: "primary",
      borderRadius: "1rem",
      position: "absolute",
      top: "-2rem",
      right: "-1rem",
      zIndex: -1,
      transition: "all 1s ease-in-out",
      clipPath: "circle(5rem at calc(100% - 5rem) 5rem)",
    },
  },
  inputStyles: {
    width: "100%",
    outline: "none",
    border: "1px solid",
    borderColor: "primary",
    color: "text",
    padding: "15px",
    backgroundColor: "background",
    borderRadius: "0.25rem",
    boxSizing: "border-box",
  },
  label: {
    display: "block",
  },
}

function Subscribe() {
  const [email, setEmail] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = ({ target }) => {
    setEmail({ email, [target.name]: target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    addToMailchimp(email)
    setIsSubmitted(true)
  }

  /* original 
  const handleSubmit = e => {
    e.preventDefault()

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-u  rlencoded" },
      body: encode({ "form-name": "email", ...email }),
    }).then(() => setIsSubmitted(true))
  }
*/
  return (
    <div className={isSubmitted ? "card-filled" : ""} css={css(styles.card)}>
      <Styled.h3 style={{ margin: "0 0 0.5rem 0" }}>
        Subscribe to not miss out on new content.
      </Styled.h3>
      <Styled.p style={{ marginBottom: "1rem" }}>
        Keep up with things amazing things happening in <em>technology</em>,{" "}
        <em>business</em>, <em>software</em>, and <em>the web</em>.
      </Styled.p>
      {isSubmitted ? (
        <div style={{ fontSize: "1.5rem" }}>
          <em>Thank you for signing up!</em> 😊💛
        </div>
      ) : (
        <form
          name="email"
          method="post"
          data-netlify="true"
          //onSubmit={handleSubmit}
          onSubmit={handleSubmit}
          style={{ margin: 0 }}
        >
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="email" css={css(styles.label)}>
              Email
            </label>
            <input
              css={css(styles.inputStyles)}
              type="email"
              name="email"
              id="email"
              aria-label="Email"
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <Button type="submit">Subscribe</Button>
            <small>
              You will never receive spam and you can unsubscribe at any time.
            </small>
          </div>
        </form>
      )}
    </div>
  )
}

export default Subscribe
