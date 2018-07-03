export const ProgressBar = ({percentage, value}) => (
  <React.Fragment>
    <span>{value}</span>
    <progress style={{width: `${percentage}%`}} />
    <style jsx>{`
      progress {
        -webkit-box-shadow: none;
        background-color: transparent;
        border-radius: 0px;
        box-shadow: none;
        height: 20px;
        margin-bottom: 0px;
        overflow: hidden;
      }

      span {
        border-radius: 0px;
        display: block;
        font-size: 14px;
        line-height: 20px;
        color: #09f;
      }
    `}</style>
  </React.Fragment>
)
