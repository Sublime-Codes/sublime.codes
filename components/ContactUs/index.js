import {Button} from '../Button'
import {SectionBlock} from '../SectionBlock'

export function ContactUs() {
  return (
    <React.Fragment>
      <SectionBlock id="contact" title="Get in touch" boldTitle="contact us">
        <form action="https://formspree.io/carlosvillu@gmail.com" method="POST">
          <div>
            <fieldset>
              <label htmlFor="q1">Name (required)</label>
              <input
                placeholder="Type your name"
                id="q1"
                name="q1"
                tabIndex="0"
                type="text"
                required
              />
            </fieldset>
            <fieldset>
              <label htmlFor="q3">Email (required)</label>
              <input
                placeholder="Email address"
                id="q3"
                name="q3"
                tabIndex="1"
                type="text"
                required
              />
            </fieldset>
          </div>

          <div>
            <fieldset>
              <label htmlFor="q4">What's your position?</label>
              <select id="q4" name="q4" tabIndex="0">
                <option>entrepeneur</option>
                <option>CTO</option>
                <option>developer</option>
                <option>person</option>
              </select>
            </fieldset>
            <fieldset>
              <label htmlFor="q5">What do you need?</label>
              <select id="q5" name="q5" tabIndex="0">
                <option>build a new idea</option>
                <option>accelerate my current project</option>
                <option>decouple my monolith</option>
                <option>train my developers</option>
                <option>another thing</option>
              </select>
            </fieldset>
          </div>
          <footer>
            <Button>Send the message</Button>
          </footer>
        </form>
      </SectionBlock>
      <style jsx>{`
        footer {
          display: block;
          text-align: center;
        }

        div {
          display: block;
        }

        fieldset {
          border: 0;
          margin: 0;
          padding: 0;
          width: 100%;
        }

        label {
          display: block;
          font-weight: 600;
        }

        input {
          border: 0;
          border-bottom: 1px solid #eee;
          color: #222;
          font-size: 16px;
          margin-bottom: 32px;
          padding: 0px 16px 4px 0;
          width: 100%;
        }

        form {
          font-size: 16px;
          width: 100%;
          margin: 0 auto;
        }

        select {
          background-color: #fff;
          background-image: url('/static/select.svg');
          background-position: right center;
          background-repeat: no-repeat;
          border-bottom: 1px solid #eee;
          border-radius: 0;
          border: 0;
          color: #222;
          cursor: context-menu;
          font-size: 16px;
          margin-bottom: 32px;
          padding: 0px 48px 4px 0;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
        }

        @media (min-width: 900px) {
          div {
            display: flex;
            justify-content: space-between;
          }

          fieldset {
            width: 45%;
          }
        }
      `}</style>
    </React.Fragment>
  )
}
