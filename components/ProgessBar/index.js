export const ProgressBar = ({percentage}) => (
  <>
    <div className="progressBar">
      <div className="progressBar-fill" style={{width: `${percentage}%`}}>
        250k +
      </div>
    </div>
    <style jsx>{`
      .progressBar {
        margin-bottom: 0px;
        background-color: transparent;
        box-shadow: none;
        -webkit-box-shadow: none;
        border-radius: 0px;
        overflow: hidden;
        height: 20px;
      }

      .progressBar-fill {
        border-radius: 0px;
        background-color: #0a8bbb;
        font-size: 14px;
        float: left;
        height: 100%;
        width: 0%;
        line-height: 20px;
        color: #fff;
        text-align: center;
      }
    `}</style>
  </>
)
