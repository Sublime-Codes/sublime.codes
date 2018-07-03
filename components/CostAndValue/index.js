import {ProgressBar} from '../ProgessBar'
import {SectionBlock, SectionBlockColumn} from '../SectionBlock'

export const CostAndValue = () => (
  <React.Fragment>
    <SectionBlock
      isFlex
      title={
        <span id="price">
          We like transparency, even for <strong>pricing</strong>
        </span>
      }
    >
      <SectionBlockColumn>
        <p>
          Our portfolio is diverse but we are best fit for rapid prototypes and
          large complex software. With our startup background we are extremely
          good at evaluating ideas and squeezing the most out of a very small
          budget. With fast iterations you have an amazing product to start your
          business with.
        </p>
        <p>
          We appreciate complex software as it allows us to make full use of our
          skills. Furthermore longer projects allow us developers to focus a lot
          more, resulting in high productivity. The projects we accept run from
          a few months to several years with a budget of 25k€ up to over 750k€.
        </p>
      </SectionBlockColumn>
      <SectionBlockColumn>
        <h4>Minimum viable product</h4>
        <ProgressBar percentage={20} value={'50k €'} />
        <h4>Simple mobile or web app (few 100% awesome features)</h4>
        <ProgressBar percentage={40} value={'50k - 75k €'} />
        <h4>Mobile app that works with a fully fledged web app.</h4>
        <ProgressBar percentage={55} value={'75k - 200k €'} />
        <h4>Full-featured web or mobile app that leaves no feature out.</h4>
        <ProgressBar percentage={75} value={'150k - 300k €'} />
        <h4>
          Complex holy grail software. Highly scalable fully tested. It's a
          beast.
        </h4>
        <ProgressBar percentage={100} value={'250k+ €'} />
      </SectionBlockColumn>
    </SectionBlock>
    <style jsx>{``}</style>
  </React.Fragment>
)
