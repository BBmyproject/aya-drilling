export const RECAPTCHA_ACTIONS = {
  contact: "contact",
  career: "career",
} as const;

export type RecaptchaAction =
  (typeof RECAPTCHA_ACTIONS)[keyof typeof RECAPTCHA_ACTIONS];

type SiteverifyResponse = {
  success?: boolean;
  score?: number;
  action?: string;
  challenge_ts?: string;
  hostname?: string;
  "error-codes"?: string[];
};

export async function verifyRecaptchaToken(
  token: string | undefined,
  expectedAction: RecaptchaAction
): Promise<{ ok: true } | { ok: false }> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    console.error("RECAPTCHA_SECRET_KEY not configured");
    return { ok: false };
  }

  if (!token || typeof token !== "string") {
    return { ok: false };
  }

  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret, response: token }),
  });

  const data = (await res.json()) as SiteverifyResponse;

  if (!data.success) {
    return { ok: false };
  }

  const minScore = Number(process.env.RECAPTCHA_MIN_SCORE ?? 0.5);
  if (typeof data.score === "number" && data.score < minScore) {
    return { ok: false };
  }

  if (data.action !== expectedAction) {
    return { ok: false };
  }

  return { ok: true };
}
