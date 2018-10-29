export const Button = ({children, onClick}) => (
  <React.Fragment>
    <button onClick={onClick}>{children}</button>
    <style jsx>{`
      button {
        background: #0099ff;
        border: 0;
        border-radius: 4px;
        color: #fff;
        cursor: pointer;
        font-size: 16px;
        font-weight: 500;
        line-height: 40px;
        outline: none;
        overflow: hidden;
        padding: 0px 32px;
        transition: background 0.2s ease-out;
        user-select: none;
      }
      button:hover {
        background: #0079bc;
      }
    `}</style>
  </React.Fragment>
)
