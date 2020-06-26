import React from "react"
import { Styled } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default function Bio() {
  return (
    <>
      Written by <strong>Malek Zarzour</strong>
      {` `}, a passionate frontend developer based in Düsseldorf, Germany. This
      is my Digital Garden where i share everything Frontend. Follow me{" "}
      <Styled.a href="http://twitter.com/malekzarzour">@malekzarzour</Styled.a>
    </>
  )
}
