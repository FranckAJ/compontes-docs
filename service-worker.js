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
    "revision": "55727295972bc11ca4addea376e1ab55"
  },
  {
    "url": "about/index.html",
    "revision": "7cae04c734709bcf80811cedc57a7cff"
  },
  {
    "url": "assets/css/0.styles.fde6c401.css",
    "revision": "c7e39a7834fbe90ef801bd42b9ae8f16"
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
    "url": "assets/js/app.2886f338.js",
    "revision": "96a9448f07492c8c3548aeba715de5b9"
  },
  {
    "url": "components/buttom.html",
    "revision": "f371f8f277ef185fed842fb0293e18cd"
  },
  {
    "url": "components/index.html",
    "revision": "2a3f45952c47daa6ae13b33bf343930a"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "45efc32ae2bc8bc7946468d0d50c0aa0"
  },
  {
    "url": "intro/how.html",
    "revision": "1080bccc2cccd6a7df1a9c1f7d7da769"
  },
  {
    "url": "intro/index.html",
    "revision": "7532d18c0532a8fcf6fcdb4504160e09"
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
