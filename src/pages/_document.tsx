// import type { Metadata } from "next";
import { Html, Head, Main, NextScript } from "next/document";

// export const metadata: Metadata = {
//   title: "PT GSA",
//   description: "SUSTAINABLE AQUACULTURE IN HARMONY WITH UNIVERSE",
// };

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Rubik:wght@400;500;600;700&display=swap"
          rel="stylesheet"
          type="text/css"
        />

        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          rel="stylesheet"
        />

        <link
          href="/lib/owlcarousel/assets/owl.carousel.min.css"
          rel="stylesheet"
        />
        <link href="/lib/animate/animate.min.css" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          async
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
        ></script>
        <script async src="/lib/wow/wow.min.js"></script>
        {/* <script async src="/lib/easing/easing.min.js"></script> */}
        {/* <script async src="/lib/waypoints/waypoints.min.js"></script> */}
        {/* <script async src="/lib/counterup/counterup.min.js"></script> */}
        {/* <script async src="/lib/owlcarousel/owl.carousel.min.js"></script> */}
      </body>
    </Html>
  );
}
