import Typist from 'react-typist'

export const Logo = () => (
  <React.Fragment>
    <Typist startDelay={100}>sublime.codes</Typist>
    <style jsx global>
      {`
        .Typist {
          display: inline-block;
        }
        .Typist .Cursor {
          display: inline-block;
        }

        .Typist .Cursor--blinking {
          color: #0099ff;
          opacity: 1;
          animation: blink 1s linear infinite;
        }

        @keyframes blink {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}
    </style>
  </React.Fragment>
)
