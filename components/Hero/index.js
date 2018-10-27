import {WindowControl} from './WindowControl'

// https://images.unsplash.com/photo-1417577097439-425fb7dec05e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=93a5dd474dcb87271705bb8a7edf8a98&auto=format&fit=crop&w=3289&q=80
export const Hero = () => (
  <React.Fragment>
    <div>
      <h1>
        Let us make your next project <i>sublime</i>
      </h1>
      <h2>40 years of experience combined in one consultancy team</h2>
    </div>
    <style jsx>{`
      h1,
      h2 {
        color: #222;
        display: block;
        font-size: 42px;
        font-weight: 300;
        letter-spacing: -1px;
      }
      h1 i {
        font-size: 42px;
        font-weight: 400;
      }
      h2 {
        color: #09f;
        font-size: 21px;
        font-weight: 300;
        line-height: 100%;
        letter-spacing: 0px;
        text-transform: none;
      }
      div {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 72px 0;
      }
    `}</style>
  </React.Fragment>
)
