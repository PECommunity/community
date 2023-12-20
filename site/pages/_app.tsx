import Script from 'next/script'
import './style.css'

export default function App({ Component, pageProps }) {
  const gaScript = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-E7KFWD585H');
  `
  return <>
    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-E7KFWD585H" />
    <Script id="google-analytics">
      {gaScript}
    </Script>
    <Component {...pageProps} />
  </>
}
