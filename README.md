# NickMonaco.me

## 👨🏻‍💻 Customization

Create new pages like an About page in the `/pages` directory.
The minimum code is:

```js
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PageName = () => (
  <Layout>
    <SEO title="PageName" keywords={[`gatsby`, `application`, `react`]} />
    //CONTENT HERE
  </Layout>
)

export default PageName
```

## 🚀 Quick start

1.  **Start developing.**

    Navigate into the directory and start it up.

    ```sh
    cd nickmonaco-me/
    gatsby develop
    ```

2.  **Open the source code and start editing!**

    The site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._