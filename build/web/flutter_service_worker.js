'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".dart_tool/dartpad/web_plugin_registrant.dart": "7ed35bc85b7658d113371ffc24d07117",
".dart_tool/extension_discovery/vs_code.json": "23df96d4815162c746822ff7d37e13ed",
".dart_tool/package_config.json": "8a6bf7685e11fd9505711f4348b55503",
".dart_tool/package_config_subset": "9d695d3d4e44d1b2a0e540d5808831bc",
".dart_tool/version": "7e0c5b0110cefed320b3fd9cbf02c8bf",
".idea/libraries/Dart_SDK.xml": "45cf449e39d18076afa85358b2a2aa38",
".idea/libraries/KotlinJavaRuntime.xml": "de38cfadca3106f8aff5ab15dd81692f",
".idea/modules.xml": "4d004fff6bee905424f4e66ab6136f6a",
".idea/runConfigurations/main_dart.xml": "0ecf958af289efc3fc1927aa27a8442f",
".idea/workspace.xml": "25155dfb2368a7e35e1ebbecd505a418",
"analysis_options.yaml": "9e65f4b9beebb674c0dc252f70a5c177",
"assets/AssetManifest.bin": "9b9d0efc13e27deb050153a1ac3e162d",
"assets/AssetManifest.bin.json": "005ce3b67aaa7b94d6fe67ebdc0a0384",
"assets/AssetManifest.json": "495a3ffc58457cc5e70b39055381f003",
"assets/assets/img/skills/backtrack.jpg": "ed679022b2fba75752636a034e8f2670",
"assets/assets/img/skills/bf_bolt.jpg": "5357eae9a826c582d8918891b38ac505",
"assets/assets/img/skills/c_paste.jpg": "b6344972a722299fa369d69b29e8cc64",
"assets/assets/img/skills/d_pattern.jpg": "ed74fe6ff03f3b4dbdfd38c26414fc37",
"assets/assets/img/skills/encapsulate.jpg": "ac97d677975a47f6e99287d623492c8f",
"assets/assets/img/skills/f_clear.jpg": "e62be2648c28bc7279c45ffcd3e30975",
"assets/assets/img/skills/gamify.jpg": "8014e5f2d5a92b5ebfa7f93f9a43c07a",
"assets/assets/img/skills/h_beam.jpg": "34b98c34835ec48147cc6da68c13a009",
"assets/assets/img/skills/h_map.jpg": "af1e474e5040ee1e53bd005ce53f6278",
"assets/assets/img/skills/i_loop.jpg": "9f90a7cfdc4495cfb9517702b5ce8a64",
"assets/assets/img/skills/l_touch.jpg": "141065209f27a63771bd08823f8d9d8b",
"assets/assets/img/skills/r_wave.jpg": "600a7843940f192cad0920479cabe1b5",
"assets/assets/img/skills/s_blast.jpg": "ddb93258659fb4c1e306f7f572ac8905",
"assets/assets/img/skills/s_shell.jpg": "3288d7f268b9c5c11acc371632ff3765",
"assets/assets/img/skills/t_cast.jpg": "c435ea6d0180dd206c058eb259830fc0",
"assets/assets/img/skills/wireframe.jpg": "10760ec684b40ab56a121cb9b68b9793",
"assets/assets/img/vocations/algo_wizard.jpg": "b4f64b992f8fed6c82e7aef9278e6c48",
"assets/assets/img/vocations/code_junkie.jpg": "89fd4a69972a79ba7086a9577b0dfad3",
"assets/assets/img/vocations/terminal_raider.jpg": "3de6d593f4b637b23895ce6bd37340ab",
"assets/assets/img/vocations/ux_ninja.jpg": "f2436369e0ae83013a9d60357b7dae26",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "46f6a8a88b12966550775f43b794fe7a",
"assets/NOTICES": "30507ab0cee8472c2e67bd679bb87e7a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"flutter_bootstrap.js": "4057cc141536b6b877004f70676efdc6",
"flutter_rpg_93b5d.iml": "f9bf5c490675c84d098e6772a6f2a796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7c9223fa72f7cbea2de6d04ee404a382",
"/": "7c9223fa72f7cbea2de6d04ee404a382",
"lib/main.dart": "d8621d84413b0f1b1eeb5df51af935a1",
"main.dart.js": "834a729eeb8ee88f633693c78b3d972e",
"manifest.json": "47b79235204bcf03132e3b725bcd04fe",
"pubspec.lock": "a05640aaf6d99474fcdc8d9376217d71",
"pubspec.yaml": "f53da15606d8611b24fc6899590374ae",
"README.md": "7c4a6fa13035b15cb4294cc391133e66",
"test/widget_test.dart": "8cd65a497cbbdafd7e041b006e063759",
"version.json": "43fce67adeebf5641593114d665e6dc8",
"web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"web/index.html": "c59e19a7cf64821d12ba9877c1d08259",
"web/manifest.json": "c70155f0948372e8fcb1bf76eb1b9534"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
