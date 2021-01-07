import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    color: {
      primary: string
      positive: string
      negative: string
    }
  }
}

// You are also able to use a 3rd party theme this way:
// import '@emotion/react'
// import { MuiTheme } from 'material-ui'

// declare module '@emotion/react' {
//   export interface Theme extends MuiTheme {}
// }