// pages/_app.js
import "../styles/globals.css";
import Navbar from "../app/components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
