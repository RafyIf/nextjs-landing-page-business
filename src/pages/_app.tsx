import "~/src/styles/style.css";
import "~/src/styles/bootstrap.min.css";

export default function App(app: { Component: any; pageProps: any }) {
  const { Component, pageProps } = app;
  return <Component {...pageProps} />;
}
