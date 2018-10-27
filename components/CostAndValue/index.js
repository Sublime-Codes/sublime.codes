import {SectionBlock, SectionBlockColumn} from '../SectionBlock'

export const CostAndValue = () => (
  <>
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
        <strong>100€ per person 👩‍💻 per hour 🕰</strong>
      </SectionBlockColumn>
    </SectionBlock>
    <style jsx>{``}</style>
  </>
)
