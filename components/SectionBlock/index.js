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

export const SectionBlock = ({boldTitle, children, id, isFlex, title}) => (
  <React.Fragment>
    <section id={id}>
      <header>
        <h2>
          {title} {boldTitle ? <strong>{boldTitle}</strong> : ''}
        </h2>
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
        ${isFlex ? 'justify-content: space-between;' : ''}
      }
      h2 {
        color: #000;
        font-size: 32px;
        font-weight: 300;
        line-height: 36px;
        padding-bottom: 32px;
        text-align: center;
      }
    `}</style>
  </React.Fragment>
)

SectionBlock.propTypes = {
  boldTitle: PropTypes.string,
  children: PropTypes.any,
  id: PropTypes.string,
  isFlex: PropTypes.bool,
  title: PropTypes.string
}
