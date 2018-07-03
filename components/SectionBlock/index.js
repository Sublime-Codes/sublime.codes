import PropTypes from 'prop-types'

export const SectionBlockColumn = ({children}) => (
  <React.Fragment>
    <div>{children}</div>
    <style jsx>{`
      div {
        flex: 0 0 49%;
      }
    `}</style>
  </React.Fragment>
)

SectionBlockColumn.propTypes = {
  children: PropTypes.any
}

export const SectionBlock = ({children, isFlex, title}) => (
  <React.Fragment>
    <section>
      <header>
        <h2>{title}</h2>
      </header>
      <div>{children}</div>
    </section>
    <style jsx>{`
      section {
        max-width: 900px;
        margin: 0 auto;
        padding: 48px 0;
      }
      div {
        display: ${isFlex ? 'flex' : 'block'};
        justify-content: space-between;
      }
      h2 {
        font-weight: 300;
        padding-bottom: 16px;
      }
      h2 strong {
        font-weight: 500;
      }
    `}</style>
  </React.Fragment>
)

SectionBlock.propTypes = {
  children: PropTypes.any,
  isFlex: PropTypes.bool,
  title: PropTypes.string
}
