import {Button} from '../Button'
import {SectionBlock} from '../SectionBlock'

export class ContactUs extends React.Component {
  state = {
    step: 0,
    who: 'person',
    what: 'create a new project',
    where: ''
  }

  render() {
    return (
      <React.Fragment>
        <SectionBlock
          title={
            <span id="contact">
              Get in touch, <strong>contact us</strong>
            </span>
          }
        >
          <form
            action="https://formspree.io/carlosvillu@gmail.com"
            method="POST"
          >
            <ol>
              <li>
                <span>
                  <label htmlFor="q1">What's your name? *</label>
                </span>
                <input
                  placeholder="Type your name here"
                  id="q1"
                  name="q1"
                  type="text"
                  tabIndex="0"
                  required
                />
              </li>
              <li>
                <span>
                  <label htmlFor="q3">What's your email?</label>
                </span>
                <input
                  placeholder="your@email.com"
                  id="q3"
                  name="q3"
                  tabIndex="0"
                  type="text"
                  required
                />
              </li>
              <li>
                <span>
                  <label htmlFor="q4">What's your position?</label>
                </span>
                <select id="q4" name="q4" tabIndex="0">
                  <option>entrepeneur</option>
                  <option>CTO</option>
                  <option>developer</option>
                  <option>person</option>
                </select>
              </li>
              <li>
                <span>
                  <label htmlFor="q5">What do you need?</label>
                </span>
                <select id="q5" name="q5" tabIndex="0">
                  <option>build a new idea</option>
                  <option>accelerate my current project</option>
                  <option>decouple my monolith</option>
                  <option>train my developers</option>
                </select>
              </li>
            </ol>
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
          ol {
            list-style: none;
            transition: height 0.4s;
            position: relative;
            margin: 0;
            padding: 0;
          }
          li {
            padding-bottom: 36px;
            z-index: 100;
            position: relative;
            transition: visibility 0s 0.4s, height 0s 0.4s;
          }
          li > span {
            display: block;
            overflow: hidden;
          }
          span label {
            display: block;
          }
          input {
            color: #222;
            font-size: 24px;
            font-weight: 300;
            width: 100%;
            padding: 16px 16px 4px 0;
            border: 0;
            border-bottom: 1px solid #eee;
          }
          input::placeholder {
            font-weight: 200;
          }
          form {
            border: 1px solid #eee;
            font-size: 16px;
            max-width: 500px;
            width: 100%;
            margin: 0 auto;
            padding: 16px;
          }
          select {
            background-color: #fff;
            background-image: url('data:image/svg+xml;utf8,<svg height="32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M24.3 11.3L16 19.6l-8.3-8.3a1 1 0 1 0-1.4 1.4l9 9c.4.4 1 .4 1.4 0l9-9c.4-.4.4-1 0-1.4a1 1 0 0 0-1.4 0z" fill="#121313"/></svg>');
            background-repeat: no-repeat;
            background-position: right center;
            border: 0;
            border-radius: 0;
            border-bottom: 1px solid #eee;
            color: #222;
            cursor: context-menu;
            font-size: 24px;
            font-weight: 300;
            margin-top: 16px;
            padding: 0px 48px 4px 0;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
          }
        `}</style>
      </React.Fragment>
    )
  }
}
