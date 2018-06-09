export const NavMenu = () => (
  <>
    <nav>
      <a href="#about">ABOUT</a>
      <a href="#we">WE</a>
      <a href="#vision">VISION</a>
      <a href="#contact">CONTACT</a>
    </nav>
    <style jsx>{`
      nav {
        align-items: center;
        display: flex;
        flex-flow: row nowrap;
        flex: 1 0 auto;
        height: 100%;
        justify-content: flex-end;
        margin-right: 2.2em;
        padding-top: 1px;
        pointer-events: all;
        z-index: 999;
      }
      nav a {
        align-items: center;
        color: #fff;
        color: #fff;
        display: flex;
        flex: 0 1 auto;
        height: 100%;
        justify-content: center;
        padding: 0 2em;
        text-transform: uppercase;
        transition: color 0.3s ease 0.1s;
        word-spacing: -0.2em;
      }
    `}</style>
  </>
)
