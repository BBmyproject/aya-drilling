declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, opts: { action: string }) => Promise<string>;
    };
  }
}

export function loadRecaptcha(siteKey: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined") {
      resolve();
      return;
    }

    const onReady = () => {
      window.grecaptcha?.ready(() => resolve());
    };

    if (window.grecaptcha?.execute) {
      onReady();
      return;
    }

    const src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(siteKey)}`;
    if (document.querySelector(`script[src^="https://www.google.com/recaptcha/api.js"]`)) {
      onReady();
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = () => onReady();
    script.onerror = () => reject(new Error("reCAPTCHA failed to load"));
    document.head.appendChild(script);
  });
}

export async function executeRecaptcha(
  siteKey: string,
  action: string
): Promise<string> {
  await loadRecaptcha(siteKey);
  if (!window.grecaptcha?.execute) {
    throw new Error("reCAPTCHA unavailable");
  }
  return window.grecaptcha.execute(siteKey, { action });
}
