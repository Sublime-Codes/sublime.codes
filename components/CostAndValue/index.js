import {SectionBlock} from '../SectionBlock'

export const CostAndValue = () => (
  <React.Fragment>
    <SectionBlock
      boldTitle="for pricing too"
      id="price"
      isFlex
      title="We like transparency,"
    >
      <section>
        <p>
          No matter if you need to create a{' '}
          <strong>Minimum Viable Product</strong>, if you want us to do an{' '}
          <strong>on-site workshop</strong>, need somebody to review your{' '}
          <strong>frontend pull requests</strong> or prepare a new architecture
          for your legacy project and so on. We are available for accelerating
          or complete your next challenge and we have a single price for that:
        </p>
        <i>100€ per person 👩‍💻 per hour 🕰</i>
      </section>
    </SectionBlock>
    <style jsx>{`
      i {
        display: block;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        text-align: center;
      }
      section {
        margin: 0 auto;
        max-width: 500px;
      }
    `}</style>
  </React.Fragment>
)
