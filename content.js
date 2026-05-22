function cleanURL() {
  const url = new URL(window.location.href);
  
  if (url.searchParams.has('list') && url.searchParams.has('start_radio')) {
    url.searchParams.delete('list');
    url.searchParams.delete('start_radio');
    window.location.replace(url.toString());
  }
}

// Check on initial load
cleanURL();

// Watch for YouTube's client-side navigation
let lastUrl = location.href;
new MutationObserver(() => {
  if (location.href !== lastUrl) {
    lastUrl = location.href;
    cleanURL();
  }
}).observe(document, { subtree: true, childList: true });