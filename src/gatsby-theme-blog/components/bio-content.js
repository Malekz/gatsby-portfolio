import React from "react"
import { Styled } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default function Bio() {
  return (
    <>
      Written by <strong>Malek Zarzour</strong>
      {` `}, a passionate frontend developer based in Dinslaken, Germany. This
      is where i share everything Frontend. Follow me{" "}
      <Styled.a href="http://twitter.com/malekzarzour">@malekzarzour</Styled.a>
    </>
  )
}
