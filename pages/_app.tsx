import '../styles/globals.css';
import '../plugins/fontawesome-free/css/all.min.css';
import '../plugins/overlayScrollbars/css/OverlayScrollbars.min.css';
import '../dist/css/adminlte.css';
import '../styles/Toggleswitch.css';


import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
