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
        color: #000;
        display: flex;
        flex-flow: row nowrap;
        height: 48px;
        justify-content: space-between;
        margin: 0 auto;
        max-width: 900px;
        padding: 32px 0;
        pointer-events: none;
        top: 0;
        transition: background-color 1s ease;
        width: 100%;
      }
    `}</style>
  </React.Fragment>
)
