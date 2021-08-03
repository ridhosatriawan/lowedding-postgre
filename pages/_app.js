import "../styles/globals.css";
import Head from "next/head";
import 'react-quill/dist/quill.snow.css'

function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta content="#333333" name="theme-color" />
        <base href="/" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta
          content="width=device-width,minimum-scale=1,maximum-scale=1,user-scalable=no"
          name="viewport"
        />
        <meta content="" name="keywords" />
        <meta content="" name="description" />
        <meta content="" name="author" />
        <link
          href="images/favicon.ico"
          rel="shortcut icon"
          type="image/x-icon"
        />
        
        <link href="images/apple-touch-icon.png" rel="apple-touch-icon" />
        <link href="css/bootstrap.min.css" rel="stylesheet" />
        <link href="css/style.css" rel="stylesheet" />
        <link href="css/responsive.css" rel="stylesheet" />
        <link href="css/custom.css" rel="stylesheet" />
        <link href="client/client-94d67260.css" rel="stylesheet" />
        <link href="client/index-f940058d.css" rel="stylesheet" />
        <title>Lowedding</title>
        <link
          href="/client/client.7899dcce.js"
          rel="modulepreload"
          as="script"
          crossOrigin="use-credentials"
        />
        <link href="/client/client-94d67260.css" rel="preload" as="style" />
        <link
          href="/client/index.e2e8dd47.js"
          rel="modulepreload"
          as="script"
          crossOrigin="use-credentials"
        />
        <link
          href="/client/inject_styles.5607aec6.js"
          rel="modulepreload"
          as="script"
          crossOrigin="use-credentials"
        />
        <link href="/client/index-f940058d.css" rel="preload" as="style" />
        <link href="css/style.css" rel="stylesheet" />
        <link href="css/responsive.css" rel="stylesheet" />
        <link href="css/custom.css" rel="stylesheet" />
        <link href="css/signin.css" rel="stylesheet" />
        <link
          rel="canonical"
          href="https://getbootstrap.com/docs/4.6/examples/sign-in/"
        />
        <link href="css/bootstrap.min.css" rel="stylesheet" />
        <link href="css/rich-text.css" rel="stylesheet"/>
      </Head>
      <Component {...pageProps} />

      <script src="js/jquery.min.js"></script>
      <script src="js/popper.min.js"></script>
      <script src="js/bootstrap.min.js"></script>

      <script src="js/jquery.magnific-popup.min.js"></script>
      <script src="js/jquery.pogo-slider.min.js"></script>
      <script src="js/slider-index.js"></script>
      <script src="js/smoothscroll.js"></script>
      <script src="js/form-validator.min.js"></script>
      <script src="js/contact-form-script.js"></script>
      <script src="js/custom.js"></script>
    </>
  );
}

export default MyApp;
