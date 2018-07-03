const Controls = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="54"
    height="14"
    viewBox="0 0 54 14"
  >
    <g fill="none" fillRule="evenodd" transform="translate(1 1)">
      <circle
        cx="6"
        cy="6"
        r="6"
        fill="#FF5F56"
        stroke="#E0443E"
        strokeWidth=".5"
      />
      <circle
        cx="26"
        cy="6"
        r="6"
        fill="#FFBD2E"
        stroke="#DEA123"
        strokeWidth=".5"
      />
      <circle
        cx="46"
        cy="6"
        r="6"
        fill="#27C93F"
        stroke="#1AAB29"
        strokeWidth=".5"
      />
    </g>
  </svg>
)

export const WindowControl = ({titleBar}) => (
  <section>
    <aside>
      <Controls />
    </aside>
    <header>
      <span>{titleBar}</span>
    </header>

    <style jsx>
      {`
        aside {
          position: absolute;
        }
        section {
          position: relative;
          z-index: 2;
          background-color: #282c34;
          padding: 8px 16px;
          border-radius: 5px;
          width: 100%;
          max-width: 500px;
        }
        header {
          align-items: center;
          display: flex;
          justify-content: center;
        }
        span {
          display: inline-block;
          color: #bbb;
          text-align: center;
          font-size: 14px;
        }
      `}
    </style>
    <style jsx global>
      {``}
    </style>
  </section>
)
