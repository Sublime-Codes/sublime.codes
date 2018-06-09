import {Topbar} from '../components/Topbar'
import {PageLayout} from '../components/PageLayout'
import {Panel} from '../components/Panel'
import {ContactUs} from '../components/ContactUs'
import {Hero} from '../components/Hero'
import {Separator} from '../components/Separator'

const Index = () => (
  <PageLayout
    description="Aprende React desde cero, con ejemplos prácticos y con desarrolladores con experiencia. Artículos sobre las novedades del lenguaje y con tutoriales"
    title="We make your next project, sublime"
  >
    <Topbar />
    <Hero />
    <Panel />
    <Separator />
    <ContactUs />
  </PageLayout>
)

export default Index
