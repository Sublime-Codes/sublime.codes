import {NavMenu} from '../NavMenu'

export const Topbar = () => (
  <>
    <header>
      sublime.codes
      <NavMenu />
    </header>
    <style jsx>{`
      header {
        align-items: center;
        background-color: rgba(0, 0, 0, 0.35);
        color: #fff;
        display: flex;
        flex-flow: row nowrap;
        height: 48px;
        justify-content: space-between;
        padding: 0 16px;
        pointer-events: none;
        position: fixed;
        transition: background-color 1s ease;
        top: 0;
        width: 100%;
        z-index: 998;
      }
    `}</style>
  </>
)
