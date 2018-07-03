import Head from 'next/head'
import {Footer} from '../Footer'

export const PageLayout = ({children, description = '', title = '', url}) => (
  <React.Fragment>
    <Head>
      <title>{`${title} - sublime.codes`}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {!!url && (
        <meta property="og:url" content={`http://sublime.codes${url}`} />
      )}
      {!!url && <link rel="canonical" href={`http://sublime.codes${url}`} />}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="sublime_codes" />
      <meta name="twitter:creator" content="sublime_codes" />
    </Head>
    <main>{children}</main>
    <Footer />
    <style jsx global>
      {`
        body {
          -webkit-font-smoothing: antialiased;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
            'Segoe UI Symbol';
          margin: 0;
          padding: 0;
          display: flex;
          min-height: 100vh;
          flex-direction: column;
          color: #242121;
          font-feature-settings: 'liga' 0;
          line-height: 1.8;
        }
        html {
          box-sizing: border-box;
        }
        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }
        a {
          text-decoration: none;
        }
        h1,
        h2,
        h3,
        h4 {
          margin: 0;
        }
        ::selection {
          background-color: #a8dcff;
        }
      `}
    </style>
  </React.Fragment>
)

PageLayout.propTypes = {}
