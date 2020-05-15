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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5f4a3e8c77231ec4d8906f77a1493d87"
  },
  {
    "url": "Alter/Add/index.html",
    "revision": "bf693c57211fc6311eef563d7762e50e"
  },
  {
    "url": "Alter/Drop/index.html",
    "revision": "45a59d4dba7a4a20489ec0a239aaf2a0"
  },
  {
    "url": "Alter/index.html",
    "revision": "8098bd29e4bf8c1b2ffadfcc3bb19e2a"
  },
  {
    "url": "Alter/Modify/index.html",
    "revision": "41e66d745599bee0f0ddf0250b9c6c8a"
  },
  {
    "url": "assets/css/0.styles.952cd49f.css",
    "revision": "f7e22994b093c3fac46076c55b8532d0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9db3beb7.js",
    "revision": "5a390e329c3bed4e1fb6eee4bde71381"
  },
  {
    "url": "assets/js/11.e697c479.js",
    "revision": "7ae83f7f468240c87f8bed9a3ae8372a"
  },
  {
    "url": "assets/js/12.8409e754.js",
    "revision": "6c0a6a9d34877a516fe88c9ebfa4c311"
  },
  {
    "url": "assets/js/13.45bf4c7e.js",
    "revision": "95acc7405e2249bdfbe744be2a8faa92"
  },
  {
    "url": "assets/js/14.21cca892.js",
    "revision": "8f2954cf0ea1cecb95eaf96cf7af9b11"
  },
  {
    "url": "assets/js/15.b7ba8f21.js",
    "revision": "4914a4f9d5e8c99c01c46e959e6433d9"
  },
  {
    "url": "assets/js/16.e34d122a.js",
    "revision": "669fe43c7d39c7ca7b4dd3d0ffe48f86"
  },
  {
    "url": "assets/js/17.05ebf805.js",
    "revision": "2abe303e8102c0e4823c0789252ea06b"
  },
  {
    "url": "assets/js/18.dbc7def5.js",
    "revision": "2ec6e2e7f0a489b16d684d5202459d26"
  },
  {
    "url": "assets/js/19.4c45a450.js",
    "revision": "95c0dd08954f430470615f186fae7d62"
  },
  {
    "url": "assets/js/20.be535854.js",
    "revision": "e86a10912a526a2438de0dc786a89e12"
  },
  {
    "url": "assets/js/21.f4ce8825.js",
    "revision": "238c158c33e587b60d0be4386dfc9be8"
  },
  {
    "url": "assets/js/22.5471f234.js",
    "revision": "e05ebc451b36ab139e7f69ff68890762"
  },
  {
    "url": "assets/js/23.4cdc25d8.js",
    "revision": "40bbd2f812efb647c14d76688504b0ca"
  },
  {
    "url": "assets/js/24.d359bf91.js",
    "revision": "b2e2898ca693c7b26e375c9f198dad77"
  },
  {
    "url": "assets/js/25.c2f48330.js",
    "revision": "9e09bd20fc115bee46031fcb937f6404"
  },
  {
    "url": "assets/js/26.3bfb2991.js",
    "revision": "62e8fa60f122acd3f4292814236533a8"
  },
  {
    "url": "assets/js/27.21cd3ff6.js",
    "revision": "1ecf8660f9ac4f632b862bff7d80b385"
  },
  {
    "url": "assets/js/28.bd4cc73c.js",
    "revision": "fd69e377b3f7642eb74d78a54ea3a2ee"
  },
  {
    "url": "assets/js/29.b7f87831.js",
    "revision": "73d4a2d14e1730fa36b11db09f1fbee5"
  },
  {
    "url": "assets/js/3.fd967907.js",
    "revision": "413396014027d16c207cbb627d750953"
  },
  {
    "url": "assets/js/30.009dca82.js",
    "revision": "0f883ee708fb5dfb847e134317191c6c"
  },
  {
    "url": "assets/js/31.e0958e36.js",
    "revision": "1f82f0c99e01ccbff81a27134e1e6d0d"
  },
  {
    "url": "assets/js/32.5949fc39.js",
    "revision": "e5f15fed8587cd143ffb67aea415ef1f"
  },
  {
    "url": "assets/js/33.7bd816f8.js",
    "revision": "94fe1af095aa32dea5cf6a72cad7edef"
  },
  {
    "url": "assets/js/34.1f6ae7b7.js",
    "revision": "828847a7ec36622ddba2496e3e7432b6"
  },
  {
    "url": "assets/js/35.9b947a0f.js",
    "revision": "690df690cb1f9876c6e2155dccfce5b3"
  },
  {
    "url": "assets/js/36.78197bf5.js",
    "revision": "4565d73b0a6737991b0b17de3a7f14ab"
  },
  {
    "url": "assets/js/37.a6941596.js",
    "revision": "59afdb89a3be8de67a0b222489e44c11"
  },
  {
    "url": "assets/js/38.a798342d.js",
    "revision": "19d850530381aa96df28f305417abd8b"
  },
  {
    "url": "assets/js/39.2c8a609a.js",
    "revision": "078e9f452cae8de079d883148d44a98a"
  },
  {
    "url": "assets/js/4.60f9e513.js",
    "revision": "cee513cbe2dabcb54257aba3835122db"
  },
  {
    "url": "assets/js/40.01db07d4.js",
    "revision": "4e0b0e3e328ab3f62c7e7b6bef6e0269"
  },
  {
    "url": "assets/js/41.4a20243a.js",
    "revision": "68c157122485b798c011e28077de03f2"
  },
  {
    "url": "assets/js/42.7205b62e.js",
    "revision": "ed6cd04bc61a54e3846b523ad0d16604"
  },
  {
    "url": "assets/js/43.82bfeaa0.js",
    "revision": "4829e96754994efe5422e2f3c75a2bce"
  },
  {
    "url": "assets/js/44.67507509.js",
    "revision": "6fd01998dde60ea0b0741dc432c25aaf"
  },
  {
    "url": "assets/js/45.23f9e36e.js",
    "revision": "b87c733945c75804a4db1760e29d35b4"
  },
  {
    "url": "assets/js/46.be7e1f31.js",
    "revision": "25fdd5f0c94daadac02c51fee85a202c"
  },
  {
    "url": "assets/js/47.afcd56ff.js",
    "revision": "a0361ba7907c85311df490e0bfa4e8bb"
  },
  {
    "url": "assets/js/48.037cbcfd.js",
    "revision": "3f4f97d9c2e77a07e41275efa0e379d7"
  },
  {
    "url": "assets/js/49.5f72eb07.js",
    "revision": "e8c1fc4da0db1dd2c8f2b594c81452f3"
  },
  {
    "url": "assets/js/5.e77f5379.js",
    "revision": "eff62f4dd21b8039a4b4996cc42e37f6"
  },
  {
    "url": "assets/js/50.05595f01.js",
    "revision": "80a25b62ae20022ccdc02f30c79f5ef8"
  },
  {
    "url": "assets/js/51.766020a1.js",
    "revision": "a97c2dbede832c9b0be2def0e5733570"
  },
  {
    "url": "assets/js/52.c02a6d04.js",
    "revision": "a8c530a76cd1b00f2d007f21037d4374"
  },
  {
    "url": "assets/js/53.1c17fb9b.js",
    "revision": "7bd980f0c438710f839c4360119b3e78"
  },
  {
    "url": "assets/js/54.fefc7d3b.js",
    "revision": "fcadad498b1d4726eac414d5228f46c1"
  },
  {
    "url": "assets/js/55.a2213b66.js",
    "revision": "c09d9cea2c1a4d60027813079301dd8b"
  },
  {
    "url": "assets/js/56.c59c1f60.js",
    "revision": "b801ae3d8097ecf0ce9e926ec8ddad60"
  },
  {
    "url": "assets/js/57.fc7ac676.js",
    "revision": "75c07bf9b39c8236cb0dcf0a1d171bca"
  },
  {
    "url": "assets/js/6.68876ef4.js",
    "revision": "52c3ecd91b43d4297ec2ae32e270d96c"
  },
  {
    "url": "assets/js/7.5505d32f.js",
    "revision": "6a0028c8eef1ee856a0ae15435463aff"
  },
  {
    "url": "assets/js/8.0f7e17c4.js",
    "revision": "9fe097fc3e2a7b06e770ff62086f2b18"
  },
  {
    "url": "assets/js/9.2007d4c8.js",
    "revision": "a47b5a499f213521261060849de8aaf8"
  },
  {
    "url": "assets/js/app.a0982d12.js",
    "revision": "2dc5c1a711ea1729fdac7e9c13ee8ea6"
  },
  {
    "url": "assets/js/vendors~docsearch.71a437fb.js",
    "revision": "ac59f3ca006aa2b4f041702b130daf48"
  },
  {
    "url": "Commit/index.html",
    "revision": "66279369f40c8005a06b710febc561f2"
  },
  {
    "url": "Create/index.html",
    "revision": "d94d373ee351950764a7164a7817628b"
  },
  {
    "url": "Delete/index.html",
    "revision": "384e22660e5c938f951389503f573043"
  },
  {
    "url": "Describe/index.html",
    "revision": "dd735b315b5342f00a4bd1914c25b0d4"
  },
  {
    "url": "Drop/index.html",
    "revision": "a3d682b1232d2a2f5893c17377a82a49"
  },
  {
    "url": "Group/index.html",
    "revision": "fcf5c0c4d0075b50af1dcd0c247704ce"
  },
  {
    "url": "GroupFunction/index.html",
    "revision": "2efeb1d037469b6d4dbee776dd146e64"
  },
  {
    "url": "index.html",
    "revision": "b9882371276a95462ebb24271ac3817b"
  },
  {
    "url": "Insert/index.html",
    "revision": "a69b31bff389a42c2a6d3ed9ded711bf"
  },
  {
    "url": "Join/index.html",
    "revision": "e49e91dac61e85afd66ee8f40b17b5dc"
  },
  {
    "url": "Join/Inner/CartesianProduct/index.html",
    "revision": "474aba8c70e20a0e5c78fb04d451a5e5"
  },
  {
    "url": "Join/Inner/Cross/index.html",
    "revision": "3b068151f76e64458e5b538a04b647fd"
  },
  {
    "url": "Join/Inner/Equijoin/index.html",
    "revision": "4d830ce109e9837583ef6823fd413fb0"
  },
  {
    "url": "Join/Inner/index.html",
    "revision": "bd1410267a9f02fb6f71787502c13d0b"
  },
  {
    "url": "Join/Inner/Inner/index.html",
    "revision": "2c0ae81f6e19f75e13751e1ee0a492ec"
  },
  {
    "url": "Join/Inner/Natural/index.html",
    "revision": "4704366edf1c92caf118e9e7935c0ccf"
  },
  {
    "url": "Join/Outer/Full/index.html",
    "revision": "d268bcae0cc8816e7da96b527033f010"
  },
  {
    "url": "Join/Outer/index.html",
    "revision": "876495e0fbb0f7d9b3165f76a170c5d1"
  },
  {
    "url": "Join/Outer/Left/index.html",
    "revision": "ea40e0a019fa10899eb404d2978b3f29"
  },
  {
    "url": "Join/Outer/Right/index.html",
    "revision": "80548b8316a625560eab1f721ae5649e"
  },
  {
    "url": "Normalization/1NF.html",
    "revision": "bfad42cf49afa4ff1e35aef5f389c0a6"
  },
  {
    "url": "Normalization/2NF.html",
    "revision": "247530376a17b148795340f82cc9af52"
  },
  {
    "url": "Normalization/3NF.html",
    "revision": "d2460f1a6b5e6167335334757ff40a8a"
  },
  {
    "url": "Normalization/4NF.html",
    "revision": "31fdfe44740481dd24df00d394205cd4"
  },
  {
    "url": "Normalization/5NF.html",
    "revision": "b1018375c7a71a7ffbe6ab2566f4da7a"
  },
  {
    "url": "Normalization/Boyce-CoddNF.html",
    "revision": "276cfa67f1d6041029bfe25a99c84e4e"
  },
  {
    "url": "Order/index.html",
    "revision": "4ce7799f453e25302fe7228a950017d7"
  },
  {
    "url": "Overall/Command/index.html",
    "revision": "72a40cdff0ce702da16094498b525ba6"
  },
  {
    "url": "Overall/DataType/index.html",
    "revision": "e4559bbe659a44a0b6c2a4c720de0c29"
  },
  {
    "url": "Overall/Relationship/index.html",
    "revision": "8c88026de72b68d70ac297e268762323"
  },
  {
    "url": "Overall/Table/index.html",
    "revision": "1b0db560d5c92b65feb402ca6cb44a3b"
  },
  {
    "url": "Rename/index.html",
    "revision": "6879f08b1fb28d5ae838c3cf1bac57ba"
  },
  {
    "url": "Rollback/index.html",
    "revision": "e6dafffafdb7124bf35ca6957afce024"
  },
  {
    "url": "Sample-Database/Countries.html",
    "revision": "89a3765b93215cd909ec2ac94e28aa32"
  },
  {
    "url": "Sample-Database/Departments.html",
    "revision": "d16b15ccf580092b0c8f34b86003b68c"
  },
  {
    "url": "Sample-Database/Employees.html",
    "revision": "21df0e331592547b5e871744b0dd0c1a"
  },
  {
    "url": "Sample-Database/index.html",
    "revision": "b7c5767e7f2f20c5dd814b98214dc1ac"
  },
  {
    "url": "Sample-Database/Job_History.html",
    "revision": "4503f8dc8e7b8375ac85f362861718a2"
  },
  {
    "url": "Sample-Database/Jobs.html",
    "revision": "094a410a91a0694f4d12ee54cd19b2dc"
  },
  {
    "url": "Sample-Database/Locations.html",
    "revision": "acaa7506cd3eb9d69efc5608934843bd"
  },
  {
    "url": "Sample-Database/Regions.html",
    "revision": "12aed09a038e17d2d2af9f9951387fc5"
  },
  {
    "url": "Savepoint/index.html",
    "revision": "b923dc3935638d8f3b46e8874f9bb123"
  },
  {
    "url": "Select/index.html",
    "revision": "17705eab8181dbad92aea1b8e63aca27"
  },
  {
    "url": "Subquery/index.html",
    "revision": "8becbcc1c9fc626fd479758e216a523f"
  },
  {
    "url": "th/index.html",
    "revision": "90cfe7e6bcbfb68ca11bf8bca9872eea"
  },
  {
    "url": "Update/index.html",
    "revision": "b37ab3e37b635e686ef8dcf6b14ef486"
  },
  {
    "url": "Where/index.html",
    "revision": "958d4f86bdf80ce5853bd5da3d0aed18"
  }
].concat(self.__precacheManifest || []);
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
