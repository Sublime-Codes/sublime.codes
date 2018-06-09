export const ContactUs = () => (
  <>
    <section className="contactUs">
      <div className="contactUs-container">
        <div className="contactUs-header">
          <h3 className="contactUs-title">Contacta nos</h3>
        </div>
        <div className="contactUs-body">
          <form
            action="https://formspree.io/carlosvillu@gmail.com"
            method="POST"
            className="contactUs-form"
          >
            <label className="contactUs-input">
              <span className="contactUs-label">Correo</span>
              <input
                className="contactUs-email"
                type="email"
                name="email"
                placeholder="user@server.com"
              />
            </label>
            <label className="contactUs-input">
              <span className="contactUs-label">Mensaje</span>
              <textarea
                className="contactUs-message"
                name="message"
                placeholder="tell me more..."
              />
            </label>
            <button type="submit" className="contactUs-button">
              <span>Work with us</span>
            </button>
          </form>
        </div>
      </div>
    </section>
    <style jsx>{`
      .contactUs {
        padding: 6em 0;
      }

      .contactUs::after {
        content: '';
        display: table;
        clear: both;
      }
      .contactUs-container {
        display: block;
        width: 90%;
        margin-left: auto;
        margin-right: auto;
        padding-left: 2%;
        padding-right: 2%;
      }
      .contactUs-header,
      .contactUs-body {
        position: relative;
        float: left;
        width: 100%;
        min-height: 1px;
      }

      .contactUs-title {
        margin-bottom: 0.6em;
        font-size: 1.6em;
        line-height: 1.2;
      }

      .contactUs-form {
        display: flex;
        flex-direction: row;
        flex-flow: wrap;
        margin: 1em auto 3em;
        width: 100%;
      }

      .contactUs-input {
        float: left;
        padding: 0.75em 0;
        width: 100%;
      }

      .contactUs-label {
        position: relative;
        color: #111;
      }

      .contactUs-email {
        border: 1px solid #a7a6a6;
        box-shadow: 0 2px 4px 0 #f2f2f2;
        cursor: text;
        font-size: 0.8em;
        padding: 1.25em;
        display: block;
        width: 100%;
        padding: 1.2rem 0 0.9rem;
        letter-spacing: 0.15em;
        color: rgba(0, 0, 0, 0.8);
        background: #fff;
        border: 0;
        border-bottom: 1px solid #d7d7d7;
        border-radius: 0;
        box-shadow: none;
        outline: 0;
        transition: all 0.25s ease-in;
        overflow: visible;
        line-height: normal;
      }

      .contactUs-message {
        border: 1px solid #a7a6a6;
        box-shadow: 0 2px 4px 0 #f2f2f2;
        cursor: text;
        font-size: 0.8em;
        padding: 1.25em;
        font-family: akkurta, Inconsolata, monospace;
        display: block;
        width: 100%;
        padding: 1.2rem 0 0.9rem;
        letter-spacing: 0.15em;
        color: rgba(0, 0, 0, 0.8);
        background: #fff;
        border: 0;
        border-bottom: 1px solid #d7d7d7;
        border-radius: 0;
        box-shadow: none;
        outline: 0;
        transition: all 0.25s ease-in;
        overflow: auto;
        vertical-align: text-bottom;
        width: 100%;
      }

      .contactUs-button {
        width: auto;
        padding: 0.6em 2em 0.45em;
        font-family: akkurta, Inconsolata, monospace;
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
        .contactUs-title:after {
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
        .contactUs-header,
        .contactUs-body {
          padding-left: 2%;
          padding-right: 2%;
        }
      }

      @media (min-width: 54em) {
        .contactUs-header {
          max-width: 33.33333%;
          flex-basis: 33.33333%;
        }
      }
      @media (min-width: 54em) {
        .contactUs-body {
          max-width: 66.66667%;
          flex-basis: 66.66667%;
        }
      }
    `}</style>
  </>
)
