export function isInAppBrowser(): boolean {
  if (typeof window === "undefined") return false;
  const ua = navigator.userAgent;
  return /FBAN|FBAV|Instagram|Messenger|Line|Twitter|TikTok|Snapchat|MicroMessenger/i.test(ua);
}

export function isAndroid(): boolean {
  if (typeof window === "undefined") return false;
  return /Android/i.test(navigator.userAgent);
}

export function isIOS(): boolean {
  if (typeof window === "undefined") return false;
  return /iPad|iPhone|iPod/i.test(navigator.userAgent);
}

/**
 * Attempt to open a URL in the device's default external browser.
 * Falls back to showing the URL when platform tricks are unavailable.
 */
export function openInExternalBrowser(url: string): void {
  const ua = navigator.userAgent;

  if (/Android/i.test(ua)) {
    // Android intent URL forces Chrome (or system browser)
    const intentUrl =
      "intent://" +
      url.replace(/^https?:\/\//, "") +
      "#Intent;scheme=https;package=com.android.chrome;end";
    window.location.href = intentUrl;
  } else if (/iPad|iPhone|iPod/i.test(ua)) {
    // iOS: x-safari-https opens in Safari from WebView
    window.location.href = url.replace(/^https/, "x-safari-https").replace(/^http([^s])/, "x-safari-http$1");
  } else {
    window.open(url, "_blank");
  }
}
