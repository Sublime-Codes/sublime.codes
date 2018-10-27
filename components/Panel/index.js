export const Panel = () => (
  <>
    <section className="panel">
      <div className="panel-container">
        <div className="panel-header">
          <h3 className="panel-title">
            A JavaScript Consultancy Built for the Modern Web
          </h3>
        </div>
        <div className="panel-body">
          <p className="panel-text">This is a tex</p>
          <a className="panel-button" href="/">
            <span>Work with us</span>
          </a>
        </div>
      </div>
    </section>
    <style jsx>{`
      .panel {
        padding: 6em 0;
      }

      .panel::after {
        content: '';
        display: table;
        clear: both;
      }
      .panel-container {
        display: block;
        width: 90%;
        margin-left: auto;
        margin-right: auto;
        padding-left: 2%;
        padding-right: 2%;
      }
      .panel-header,
      .panel-body {
        position: relative;
        float: left;
        width: 100%;
        min-height: 1px;
      }
      .panel-text {
        padding-bottom: 1em;
      }
      .panel-title {
        margin-bottom: 0.6em;
        font-size: 1.6em;
        line-height: 1.2;
      }

      .panel-button {
        width: auto;
        padding: 0.6em 2em 0.45em;
        font-size: 0.7em;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 0.15em;
        line-height: 1.9;
        overflow: hidden;
        border: 0;
        border-radius: 0;
        transition: all 0.5s ease-in;
        cursor: pointer;
        -webkit-appearance: none;
        position: relative;
        display: inline-block;
        vertical-align: middle;
        color: #fff;
        background-color: #c43a31;
      }

      @media (min-width: 54em) {
        .panel-title:after {
          background: #d45c54;
          content: ' ';
          position: relative;
          top: 1.5rem;
          display: block;
          height: 1px;
          margin-bottom: 3.5rem;
        }
      }
      @media (min-width: 54em) {
        .panel-header,
        .panel-body {
          padding-left: 2%;
          padding-right: 2%;
        }
      }

      @media (min-width: 54em) {
        .panel-header {
          max-width: 33.33333%;
          flex-basis: 33.33333%;
        }
      }
      @media (min-width: 54em) {
        .panel-body {
          max-width: 66.66667%;
          flex-basis: 66.66667%;
        }
      }
    `}</style>
  </>
)
