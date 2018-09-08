/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d8247dcf68ed40a24ab6df2f3c75a58d"
  },
  {
    "url": "about/index.html",
    "revision": "c4e9188635472a5634298655a85675c3"
  },
  {
    "url": "assets/css/0.styles.3924c9eb.css",
    "revision": "92a50a7d55f0e6e255222b61e532a1d8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.285762ea.js",
    "revision": "93afbd4e91ed17280e84a6930dc81b17"
  },
  {
    "url": "assets/js/3.f20164e1.js",
    "revision": "d9ac7706886f6a5c441057c45b509af3"
  },
  {
    "url": "assets/js/4.2a436b3b.js",
    "revision": "8d8f4353310d2ca02f8b5552ada872e9"
  },
  {
    "url": "assets/js/5.82bcc038.js",
    "revision": "cfed5b01e2626e4253866abe7f4c8f7a"
  },
  {
    "url": "assets/js/6.060523c0.js",
    "revision": "0c55ce672fc10e9c46b2460696ee2f5f"
  },
  {
    "url": "assets/js/7.89be2b7a.js",
    "revision": "d87f3f69c1ec5d00495e00978862f0bb"
  },
  {
    "url": "assets/js/8.82d1f4b5.js",
    "revision": "a8b07624edf455f21e205d2534970d30"
  },
  {
    "url": "assets/js/9.481a71ab.js",
    "revision": "5c348dbbc47188e483e176ffdd14f216"
  },
  {
    "url": "assets/js/app.d146f598.js",
    "revision": "f74eaaa56efb49c2d29b28c4e08ef18e"
  },
  {
    "url": "components/buttom.html",
    "revision": "105a5c1cfc1ab336ff98e6e74c7d2fc9"
  },
  {
    "url": "components/index.html",
    "revision": "a10cf53e78faef51ddeb64da577e7104"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "52177864f56561f33354f3b82d47cbf8"
  },
  {
    "url": "intro/how.html",
    "revision": "6f0adf6ff44fa86a5f4591a5fd9a2be5"
  },
  {
    "url": "intro/index.html",
    "revision": "34aade97810f0f307aa46c8752af6227"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "vuejs.png",
    "revision": "7eef216e7faa0e293d3bf89b77abbf9e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
