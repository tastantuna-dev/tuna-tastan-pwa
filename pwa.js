// S3 PWA foundation: service worker registration only, browser/PWA path
// only. Inside Electron the app:// protocol already serves fresh files
// with no-cache (see standaloneProtocol.cjs) - registering a second cache
// layer there would be redundant and is deliberately skipped, matching
// the progressive-enhancement pattern already used elsewhere in this app
// (window.tunaDesktop?.desktop).
(function () {
  const isElectron = !!(window.tunaDesktop && window.tunaDesktop.desktop);
  if (isElectron) return;
  if (!('serviceWorker' in navigator)) return;
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch((err) => {
      console.warn('[Tuna] service worker registration failed:', err.message);
    });
  });
})();
