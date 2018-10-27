import {SectionBlock} from '../SectionBlock'

export const CostAndValue = () => (
  <React.Fragment>
    <SectionBlock
      isFlex
      title={
        <span id="price">
          We like transparency, <strong>for pricing too</strong>
        </span>
      }
    >
      <section>
        <p>
          No matter if you need to create a{' '}
          <strong>Minimum Viable Product</strong>, if you want us to do an{' '}
          <strong>on-site workshop</strong>, need somebody to review your{' '}
          <strong>frontend pull requests</strong> or prepare a new architecture
          for your legacy project and so on. We have a single price:
        </p>
        <i>100€ per person 👩‍💻 per hour 🕰</i>
      </section>
    </SectionBlock>
    <style jsx>{`
      i {
        display: block;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        text-align: center;
      }
      section {
        max-width: 500px;
        margin: 0 auto;
        width: 100%;
      }
    `}</style>
  </React.Fragment>
)
