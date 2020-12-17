const React = require("react")
const GlobalContextProvider = require("./src/utils/context").default

export const wrapRootElement = ({ element }) => (
  <GlobalContextProvider>{element}</GlobalContextProvider>
)
