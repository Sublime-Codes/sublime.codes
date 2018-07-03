import {Topbar} from '../components/Topbar'
import {PageLayout} from '../components/PageLayout'
import {Panel} from '../components/Panel'
import {ContactUs} from '../components/ContactUs'
import {Hero} from '../components/Hero'
import {Separator} from '../components/Separator'
import {CostAndValue} from '../components/CostAndValue'
import {Team} from '../components/Team'

import {Section} from '../components/Section'

const Index = () => (
  <PageLayout
    description="Code consultancy studio. We help you creating your next MVP or project with care, focusing on quality and endurability. Best-in-class projects based on Javascript, ReactJS, GraphQL and Node."
    title="We make your next project, sublime"
  >
    <Topbar />
    <Hero />
    <Team />
    <CostAndValue />
    <ContactUs />
  </PageLayout>
)

export default Index
