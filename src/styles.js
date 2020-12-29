import { useTheme } from '@emotion/react'
import { css, Global } from '@emotion/react'

function GlobalStyles() {
  const theme = useTheme()
  return (
    <Global styles={css`
      body: {
        margin: 0,
        padding: 0,
        fontFamily: "'Source Sans Pro', sans-serif"
        backgroundColor: green
    `} />
  )
}

export default GlobalStyles;