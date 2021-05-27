/* eslint-disable react/no-danger */
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {
            process.env.GA4_ANALYTICS === 'true' && (
              <script
                dangerouslySetInnerHTML={{
                  __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${process.env.GA4_ANALYTICS_KEY}');`,
                }}
              />
            )
          }
        </Head>
        <body className="no-js no-webp" data-fv={process.env.npm_package_version}>
          { process.env.GA4_ANALYTICS === 'true' && <noscript dangerouslySetInnerHTML={{ __html: `<frame src="https://www.googletagmanager.com/ns.html?id=${process.env.GA4_ANALYTICS_KEY}" height="0" width="0" style="display:none;visibility:hidden"></iframe>` }} /> }
          <Main />
          <NextScript />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                var ws=function(){var e=new Image;e.onload=WebP.onerror=function(){callback(2==e.height)},e.src="data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"},body=document.getElementsByTagName("body")[0];ws&&(body.classList.add("webp"),body.classList.remove("no-webp"),body.classList.remove("no-js"));
                function aload(t){"use strict";var e="data-aload";return t=t||window.document.querySelectorAll("["+e+"]"),void 0===t.length&&(t=[t]),[].forEach.call(t,function(t){t["LINK"!==t.tagName?"src":"href"]=t.getAttribute(e),t.removeAttribute(e)}),t}
                window.onload=function(){aload();};
                if(!window.aload) {window.aload = aload();}
              `,
            }}
          />
          <script />
        </body>
      </Html>
    )
  }
}

export default MyDocument
