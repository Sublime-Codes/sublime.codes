export const NavMenu = () => (
  <>
    <nav>
      <a href="#about">ABOUT</a>
      <a href="#team">TEAM</a>
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
        pointer-events: all;
        z-index: 999;
      }
      nav a {
        align-items: center;
        color: #999;
        display: flex;
        flex: 0 1 auto;
        height: 100%;
        justify-content: center;
        margin: 0 1em;
        padding: 0 1em;
        text-transform: lowercase;
        transition: all 0.3s ease;
        word-spacing: -0.2em;
      }
      nav a:hover {
        box-shadow: inset 0 -1px 0 #09f;
        padding-bottom: 10px;
        color: #000;
      }
    `}</style>
  </>
)
