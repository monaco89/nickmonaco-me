require("prism-themes/themes/prism-atom-dark.css")
require("prismjs/plugins/line-numbers/prism-line-numbers.css")

// export const onInitialClientRender = () => {
//   /* eslint-disable global-require */
//   require("typeface-nunito")
// }

const React = require("react")
const GlobalContextProvider = require("./src/utils/context").default

export const wrapRootElement = ({ element }) => (
  <GlobalContextProvider>{element}</GlobalContextProvider>
)
