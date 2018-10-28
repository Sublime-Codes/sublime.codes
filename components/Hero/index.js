export const Hero = () => (
  <React.Fragment>
    <div>
      <section />
      <h1>
        Let us make your next project <i>sublime</i>
      </h1>
      <h2>Over 40 years of experience combined in one consultancy team</h2>
    </div>
    <style jsx>{`
      h1,
      h2 {
        color: #222;
        display: block;
        font-size: 42px;
        font-weight: 300;
        letter-spacing: -1px;
        line-height: 100%;
        padding-bottom: 16px;
        text-align: center;
      }
      h1 i {
        font-size: 42px;
        font-weight: bold;
      }
      h2 {
        color: #09f;
        font-size: 21px;
        font-weight: 300;
        line-height: 100%;
        letter-spacing: 0px;
        text-transform: none;
      }
      section {
        background: radial-gradient(
            ellipse at center,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 1) 70%,
            rgba(255, 255, 255, 1) 100%
          ),
          url('/static/sublime.jpg');
        background-position: center;
        background-size: cover;
        height: 500px;
        opacity: 0.2;
        position: absolute;
        width: 100%;
        z-index: -1;
      }
      div {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 36px 0;
        width: 100%;
      }

      @media (min-width: 900px) {
        div {
          padding: 72px 0 96px;
        }
      }
    `}</style>
  </React.Fragment>
)
