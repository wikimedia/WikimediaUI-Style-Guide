var _paq = _paq || [];
_paq.push(['setDomains', ['*.design.wikimedia.org.']]);
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
function embedTrackingCode() {
  var u='https://piwik.wikimedia.org/';
  _paq.push(['setTrackerUrl', u+'piwik.php']);
  _paq.push(['setSiteId', '16']);
  var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
  g.defer=true; g.async=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
}
if (window.addEventListener) {
    window.addEventListener('load', embedTrackingCode, false);
} else if (window.attachEvent) {
    window.attachEvent('onload',embedTrackingCode);
} else {
    embedTrackingCode();
}
