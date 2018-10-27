import {Logo} from '../Logo'

export const Footer = () => (
  <React.Fragment>
    <footer>
      <Logo />
      <i>Make your project sublime</i>
      <section>
        <br />
        🏢<br />
        Primer de Maig, 16<br />
        Local - UIKÚ<br />
        El Prat de Llobregat (Barcelona)<br />
        08820<br />
      </section>
    </footer>
    <style jsx>{`
      footer {
        align-items: center;
        background: #f0f0f0;
        flex-direction: column;
        display: flex;
        justify-content: center;
        padding: 32px;
        text-align: center;
      }
      i {
        font-family: Menlo, monospace;
        font-size: 10px;
      }
      section {
        font-size: 12px;
      }
    `}</style>
  </React.Fragment>
)
