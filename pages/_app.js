import '../styles/globals.css'

//here i need to wrap my context for all the components to have access to state

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
