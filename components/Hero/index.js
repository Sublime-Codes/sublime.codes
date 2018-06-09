// https://images.unsplash.com/photo-1417577097439-425fb7dec05e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=93a5dd474dcb87271705bb8a7edf8a98&auto=format&fit=crop&w=3289&q=80
export const Hero = () => (
  <>
    <div className="hero">
      <div className="hero-image" />
      <div className="hero-text">
        <h1>
          Let us make your next project <i>sublime</i>.
        </h1>
        <h2>40 years of experience combined in one consultancy team</h2>
      </div>
    </div>
    <style jsx>{`
      h1,
      h2 {
        color: #fff;
        font-size: 32px;
        font-family: 'Source Code Pro', monospace;
        letter-spacing: -1.5px;
        text-transform: uppercase;
        text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.35);
      }
      h2 {
        color: #eee;
        font-size: 24px;
        line-height: 100%;
      }
      .hero {
        position: relative;
        height: 65vh;
        width: 100%;
      }
      .hero-text {
        bottom: 0;
        padding: 64px;
        position: absolute;
        z-index: 2;
      }
      .hero-image {
        background-image: url('https://images.unsplash.com/photo-1417577097439-425fb7dec05e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=93a5dd474dcb87271705bb8a7edf8a98&auto=format&fit=crop&w=3289&q=80');
        background-size: cover;
        display: block;
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 1;
      }
      .hero-image::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-image: linear-gradient(to bottom right, #002f4b, #dc4225);
        opacity: 0.3;
      }
    `}</style>
  </>
)
