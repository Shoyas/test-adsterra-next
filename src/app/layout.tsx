import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          type="text/javascript"
          src="//pl24252731.profitablecpmrate.com/27/1e/d4/271ed43ee2559b2119a061e5132467f0.js"
        ></Script>
      </head>
      <body>
        {children}
        <Script
          type="text/javascript"
          src="//pl24826429.profitablecpmrate.com/ed/b6/e4/edb6e4719ef5bad0b1736107e807cb9a.js"
        ></Script>

        <Script
          async={true}
          data-cfasync="false"
          src="//pl24826417.profitablecpmrate.com/c598316bca5039563271e74844525536/invoke.js"
        ></Script>
        <div id="container-c598316bca5039563271e74844525536"></div>
      </body>
    </html>
  );
}
