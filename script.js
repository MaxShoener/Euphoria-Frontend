const iframe = document.getElementById('browserFrame');
const input = document.getElementById('urlInput');

function formatURL(url) {
  if (!url.startsWith('http')) {
    return 'https://www.google.com/search?q=' + encodeURIComponent(url);
  }
  return url;
}

function go() {
  iframe.src = formatURL(input.value);
}

function back() {
  iframe.contentWindow.history.back();
}

function forward() {
  iframe.contentWindow.history.forward();
}

function reload() {
  iframe.contentWindow.location.reload();
}
