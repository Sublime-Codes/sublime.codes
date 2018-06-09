import {ProgressBar} from '../ProgessBar'

export const CostAndValue = () => (
  <>
    <section className="costandvalue">
      <div className="costandvalue-container">
        <div className="costandvalue-header">
          <h3 className="costandvalue-title">Some project ballpark figures</h3>
          <p className="costandvalue-text">
            Our portfolio is diverse but we are best fit for rapid prototypes
            and large complex software. With our startup background we are
            extremely good at evaluating ideas and squeezing the most out of a
            very small budget. With fast iterations you have an amazing product
            to start your business with.
          </p>
          <p className="costandvalue-text">
            We appreciate complex software as it allows us to make full use of
            our skills. Furthermore longer projects allow us developers to focus
            a lot more, resulting in high productivity. The projects we accept
            run from a few months to several years with a budget of 25k€ up to
            over 750k€.
          </p>
          <blockquote className="costandvalue-quote">
            <p>There is nothing more expensive in IT than cheap labor.</p>
            <span className="costandvalue-footer">A wise person</span>
          </blockquote>
        </div>
        <div className="costandvalue-body">
          <p className="costandvalue-text">Minimum viable product.</p>
          <ProgressBar percentage={20} />
          <p className="costandvalue-text">
            Simple mobile or web app (few 100% awesome features)
          </p>
          <ProgressBar percentage={40} />
          <p className="costandvalue-text">
            Mobile app that works with a fully fledged web app.
          </p>
          <ProgressBar percentage={55} />
          <p className="costandvalue-text">
            Full-featured web or mobile app that leaves no feature out.
          </p>
          <ProgressBar percentage={75} />
          <p className="costandvalue-text">
            Complex holy grail software. Highly scalable fully tested. It's a
            beast.
          </p>
          <ProgressBar percentage={100} />
        </div>
      </div>
    </section>
    <style jsx>{`
      .costandvalue {
        padding: 6em 0;
      }

      .costandvalue::after {
        content: '';
        display: table;
        clear: both;
      }
      .costandvalue-container {
        display: block;
        width: 90%;
        margin-left: auto;
        margin-right: auto;
        padding-left: 2%;
        padding-right: 2%;
      }
      .costandvalue-header,
      .costandvalue-body {
        position: relative;
        float: left;
        width: 100%;
        min-height: 1px;
      }
      .costandvalue-title {
        margin-bottom: 0.6em;
        font-size: 1.6em;
        line-height: 1.2;
      }

      .costandvalue-text {
        padding-bottom: 1em;
      }

      .costandvalue-quote {
        padding: 10px 20px;
        margin: 0 0 20px;
        font-size: 17.5px;
        border-left: 5px solid #eeeeee;
      }

      .costandvalue-footer {
        display: block;
        font-size: 80%;
        line-height: 1.42857143;
        color: #777777;
      }

      .costandvalue-footer::before {
        content: '\\2014 \\00A0';
      }

      @media (min-width: 54em) {
        .costandvalue-title:after {
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
        .costandvalue-header,
        .costandvalue-body {
          padding-left: 2%;
          padding-right: 2%;
        }
      }

      @media (min-width: 54em) {
        .costandvalue-header {
          max-width: 50%;
          flex-basis: 50%;
        }
      }
      @media (min-width: 54em) {
        .costandvalue-body {
          max-width: 50%;
          flex-basis: 50%;
        }
      }
    `}</style>
  </>
)
