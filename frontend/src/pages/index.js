import * as React from "react"

import Layout from "../components/ui/layout"
import HeroBlock from "../components/home/heroBlock"
import PromotionalProducts from "../components/home/promotionalProducts"

const IndexPage = () => (
  <Layout>
    <HeroBlock />
    <PromotionalProducts />
  </Layout>
)

export default IndexPage
