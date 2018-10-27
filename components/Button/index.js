export const Button = ({children, onClick}) => (
  <>
    <button onClick={onClick}>{children}</button>
    <style jsx>{`
      button {
        align-items: center;
        background: #1a73e8;
        border: 0;
        border-radius: 4px;
        color: #fff;
        cursor: pointer;
        display: inline-flex;
        font-size: 16px;
        font-weight: 500;
        height: 40px;
        justify-content: center;
        line-height: 0;
        outline: none;
        overflow: hidden;
        padding: 0px 32px;
        position: relative;
        text-align: center;
        transition: background 0.2s ease-out;
        user-select: none;
        white-space: nowrap;
      }
      button:hover {
        background: #09f;
      }
    `}</style>
  </>
)
