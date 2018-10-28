import {Logo} from '../Logo'
import {NavMenu} from '../NavMenu'

export const Topbar = () => (
  <React.Fragment>
    <header>
      <Logo />
      <NavMenu />
    </header>
    <style jsx>{`
      header {
        align-items: center;
        display: flex;
        flex-flow: row nowrap;
        height: 48px;
        justify-content: center;
        margin: 0 auto;
        max-width: 900px;
        padding: 32px 0;
        top: 0;
        width: 100%;
      }

      @media (min-width: 900px) {
        header {
          justify-content: space-between;
        }
      }
    `}</style>
  </React.Fragment>
)
