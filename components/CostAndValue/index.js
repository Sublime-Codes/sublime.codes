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
          No matter if you need to create a Minimum Viable Product, if you want
          us to do an on-site workshop, need . We have a single We only accept
          projects with a minium of 3 hours.
        </p>
        <strong>100€ per person 👩‍💻 per hour 🕰</strong>
      </SectionBlockColumn>
    </SectionBlock>
    <style jsx>{``}</style>
  </>
)
