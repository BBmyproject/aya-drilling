/** Google reCAPTCHA v3 disclosure (required when using the API). */
export default function RecaptchaNotice() {
  return (
    <p className="text-white/50 text-xs leading-relaxed max-w-xl">
      This site is protected by reCAPTCHA and the Google{" "}
      <a
        href="https://policies.google.com/privacy"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/70 underline hover:text-[#E53720]"
      >
        Privacy Policy
      </a>{" "}
      and{" "}
      <a
        href="https://policies.google.com/terms"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/70 underline hover:text-[#E53720]"
      >
        Terms of Service
      </a>{" "}
      apply.
    </p>
  );
}
