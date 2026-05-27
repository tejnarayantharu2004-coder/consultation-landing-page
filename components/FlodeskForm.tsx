"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { LockKeyhole } from "lucide-react";

declare global {
  interface Window {
    FlodeskObject?: string;
    fd?: {
      (...args: unknown[]): void;
      q?: unknown[];
    };
  }
}

const formId = "6a15cf7232852f9fbf9bef48";
const rootSelector = ".ff-6a15cf7232852f9fbf9bef48";

export default function FlodeskForm() {
  const router = useRouter();

  useEffect(() => {
    if (!window.fd) {
      window.FlodeskObject = "fd";
      const fn = (...args: unknown[]) => {
        window.fd!.q = window.fd!.q || [];
        window.fd!.q.push(args);
      };

      window.fd = fn;

      const firstScript = document.getElementsByTagName("script")[0];
      const version = `?v=${Math.floor(Date.now() / (120 * 1000)) * 60}`;

      const moduleScript = document.createElement("script");
      moduleScript.async = true;
      moduleScript.type = "module";
      moduleScript.src = `https://assets.flodesk.com/universal.mjs${version}`;
      firstScript.parentNode?.insertBefore(moduleScript, firstScript);

      const noModuleScript = document.createElement("script");
      noModuleScript.async = true;
      noModuleScript.noModule = true;
      noModuleScript.src = `https://assets.flodesk.com/universal.js${version}`;
      firstScript.parentNode?.insertBefore(noModuleScript, firstScript);
    }

    window.fd("form:handle", {
      formId,
      rootEl: rootSelector
    });

    const root = document.querySelector(rootSelector);
    let redirectTimer: ReturnType<typeof setTimeout> | undefined;

    const observer = new MutationObserver(() => {
      const succeeded = root?.getAttribute("data-ff-stage") === "success";

      if (succeeded && !redirectTimer) {
        redirectTimer = setTimeout(() => {
          router.push("/thanks");
        }, 1800);
      }
    });

    if (root) {
      observer.observe(root, {
        attributes: true,
        attributeFilter: ["data-ff-stage", "class"],
        childList: true,
        subtree: true
      });
    }

    return () => {
      observer.disconnect();
      if (redirectTimer) clearTimeout(redirectTimer);
    };
  }, [router]);

  return (
    <>
      <link
        rel="preload"
        href="https://assets.flodesk.com/flodesk-sans.css"
        as="style"
      />
      <link
        rel="stylesheet"
        href="https://assets.flodesk.com/flodesk-sans.css"
      />

      <style jsx global>{`
        [data-ff-el="root"].ff-6a15cf7232852f9fbf9bef48 *,
        [data-ff-el="root"].ff-6a15cf7232852f9fbf9bef48 *::before,
        [data-ff-el="root"].ff-6a15cf7232852f9fbf9bef48 *::after {
          box-sizing: border-box;
        }

        [data-ff-el="root"].ff-6a15cf7232852f9fbf9bef48 {
          color: #111111;
          background-color: transparent;
          font-family: Helvetica, sans-serif;
        }

        [data-ff-el="root"].ff-6a15cf7232852f9fbf9bef48 [hidden] {
          display: none !important;
        }

        [data-ff-el="root"].ff-6a15cf7232852f9fbf9bef48 .fd-form-control {
          width: 100%;
          display: block;
          outline: none;
          appearance: none;
        }

        [data-ff-el="root"].ff-6a15cf7232852f9fbf9bef48 .fd-form-content {
          position: relative;
        }

        [data-ff-el="root"].ff-6a15cf7232852f9fbf9bef48 .fd-form-success,
        [data-ff-el="root"].ff-6a15cf7232852f9fbf9bef48 .fd-form-error {
          display: none;
        }

        [data-ff-el="root"].ff-6a15cf7232852f9fbf9bef48[data-ff-stage="success"]
          .ff-6a15cf7232852f9fbf9bef48__content {
          display: none;
        }

        [data-ff-el="root"].ff-6a15cf7232852f9fbf9bef48[data-ff-stage="success"]
          .ff-6a15cf7232852f9fbf9bef48__success {
          display: block;
        }

        [data-ff-el="root"].ff-6a15cf7232852f9fbf9bef48 .ff-6a15cf7232852f9fbf9bef48__container {
          margin: 0 auto;
          max-width: none;
          overflow: visible;
          border: 0;
          background: transparent;
          box-shadow: none;
        }

        [data-ff-el="root"].ff-6a15cf7232852f9fbf9bef48 .ff-6a15cf7232852f9fbf9bef48__form {
          width: 100%;
          margin: 0;
          padding: 0;
          text-align: left;
        }

        [data-ff-el="root"].ff-6a15cf7232852f9fbf9bef48 .ff-6a15cf7232852f9fbf9bef48__title {
          display: none;
        }

        [data-ff-el="root"].ff-6a15cf7232852f9fbf9bef48 .ff-6a15cf7232852f9fbf9bef48__subtitle {
          display: none;
        }

        [data-ff-el="root"].ff-6a15cf7232852f9fbf9bef48 .ff-6a15cf7232852f9fbf9bef48__fields {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: 24px;
          row-gap: 26px;
          margin: 0 0 30px;
        }

        [data-ff-el="root"].ff-6a15cf7232852f9fbf9bef48 .ff-6a15cf7232852f9fbf9bef48__field {
          position: relative;
          margin: 0;
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        [data-ff-el="root"].ff-6a15cf7232852f9fbf9bef48 .ff-6a15cf7232852f9fbf9bef48__field:nth-of-type(5) {
          grid-column: 1 / -1;
        }

        [data-ff-el="root"].ff-6a15cf7232852f9fbf9bef48 .ff-6a15cf7232852f9fbf9bef48__control {
          order: 2;
          height: 64px;
          border: 1px solid #e1e1e1;
          border-radius: 8px;
          background: #fffaf0;
          color: #111111;
          padding: 0 18px;
          font-size: 16px;
          line-height: 1.4;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        [data-ff-el="root"].ff-6a15cf7232852f9fbf9bef48 .ff-6a15cf7232852f9fbf9bef48__control::placeholder {
          color: #9ca3af;
          opacity: 1;
        }

        [data-ff-el="root"].ff-6a15cf7232852f9fbf9bef48 .ff-6a15cf7232852f9fbf9bef48__control:focus {
          border-color: #b48937;
          box-shadow: 0 0 0 4px rgba(180, 137, 55, 0.15);
        }

        [data-ff-el="root"].ff-6a15cf7232852f9fbf9bef48 .ff-6a15cf7232852f9fbf9bef48__label {
          position: static;
          order: 1;
          margin: 0 0 10px;
          color: #000000;
          font-size: 15px;
          font-weight: 700;
          line-height: 1.2;
        }

        [data-ff-el="root"].ff-6a15cf7232852f9fbf9bef48 .ff-6a15cf7232852f9fbf9bef48__footer {
          display: flex;
          align-items: center;
          gap: 22px;
          text-align: left;
        }

        [data-ff-el="root"].ff-6a15cf7232852f9fbf9bef48 .ff-6a15cf7232852f9fbf9bef48__button {
          width: auto;
          min-height: 60px;
          border: 1px solid #111111;
          border-radius: 8px;
          background: #111111;
          color: #ffffff;
          padding: 15px 30px;
          cursor: pointer;
          font-size: 17px;
          font-weight: 700;
          transition: background-color 0.2s ease, transform 0.2s ease;
        }

        [data-ff-el="root"].ff-6a15cf7232852f9fbf9bef48 .ff-6a15cf7232852f9fbf9bef48__button:hover {
          background: #7c5d21;
          transform: translateY(-1px);
        }

        [data-ff-el="root"].ff-6a15cf7232852f9fbf9bef48 .ff-6a15cf7232852f9fbf9bef48__success-message {
          color: #111111;
          padding: 22px;
          border-radius: 8px;
          background: #fff5d1;
          font-size: 17px;
          line-height: 1.6;
        }

        [data-ff-el="root"].ff-6a15cf7232852f9fbf9bef48 .ff-6a15cf7232852f9fbf9bef48__error {
          margin-top: 14px;
          color: #c84e41;
          font-size: 14px;
          font-weight: 700;
        }

        @media (max-width: 767px) {
          [data-ff-el="root"].ff-6a15cf7232852f9fbf9bef48 .ff-6a15cf7232852f9fbf9bef48__form {
            padding: 24px;
          }

          [data-ff-el="root"].ff-6a15cf7232852f9fbf9bef48 .ff-6a15cf7232852f9fbf9bef48__fields {
            grid-template-columns: 1fr;
          }

          [data-ff-el="root"].ff-6a15cf7232852f9fbf9bef48 .ff-6a15cf7232852f9fbf9bef48__footer {
            align-items: stretch;
            flex-direction: column;
          }

          [data-ff-el="root"].ff-6a15cf7232852f9fbf9bef48 .ff-6a15cf7232852f9fbf9bef48__button {
            width: 100%;
          }
        }
      `}</style>

      <div
        className="ff-6a15cf7232852f9fbf9bef48"
        data-ff-el="root"
        data-ff-version="3"
        data-ff-type="inline"
        data-ff-name="inlineNoImage"
        data-ff-stage="default"
      >
        <div
          data-ff-el="config"
          data-ff-config="eyJ0cmlnZ2VyIjp7Im1vZGUiOiJpbW1lZGlhdGVseSIsInZhbHVlIjowfSwib25TdWNjZXNzIjp7Im1vZGUiOiJyZWRpcmVjdCIsIm1lc3NhZ2UiOiI8ZGl2IGRhdGEtcGFyYWdyYXBoPVwidHJ1ZVwiPkdvdCBpdCEgQ2hlY2sgeW91ciBpbmJveCBmb3IgYW4gZW1haWwgdG8gY29uZmlybSB5b3VyIHN1YnNjcmlwdGlvbi48L2Rpdj4iLCJyZWRpcmVjdFVybCI6Imh0dHBzOi8vY29uc3VsdGFudC50ZWpuYXJheWFudGhhcnUuY29tLm5wL3RoYW5rcyJ9LCJjb2kiOmZhbHNlLCJzaG93Rm9yUmV0dXJuVmlzaXRvcnMiOnRydWUsIm5vdGlmaWNhdGlvbiI6ZmFsc2UsImdkcHIiOnsiYWNjZXB0c01hcmtldGluZyI6ZmFsc2UsInByaXZhY3lQb2xpY3kiOnsiZW5hYmxlZCI6ZmFsc2UsIm1hbmRhdG9yeSI6ZmFsc2V9fSwidHJhY2tpbmdDb25maWciOnsibWV0YVBpeGVsSWQiOiIiLCJjb29raWVCYW5uZXJFbmFibGVkIjpmYWxzZSwiZ29vZ2xlQW5hbHl0aWNzSWQiOiIifX0="
          style={{ display: "none" }}
        />
        <div className="ff-6a15cf7232852f9fbf9bef48__container">
          <div className="ff-6a15cf7232852f9fbf9bef48__wrapper">
            <form
              className="ff-6a15cf7232852f9fbf9bef48__form"
              action="https://form.flodesk.com/forms/6a15cf7232852f9fbf9bef48/submit"
              method="post"
              data-ff-el="form"
            >
              <div className="ff-6a15cf7232852f9fbf9bef48__title">
                <div style={{ wordBreak: "break-word" }}>
                  <div data-paragraph="true">
                    <strong>Free 1:1 Consultation Call</strong>
                  </div>
                </div>
              </div>
              <div className="ff-6a15cf7232852f9fbf9bef48__subtitle">
                <div style={{ wordBreak: "break-word" }}>
                  <div data-paragraph="true">
                    Book a FREE Digital Marketing consultation call with me and
                    get a customized digital marketing strategy for your
                    business!
                  </div>
                </div>
              </div>
              <div
                className="ff-6a15cf7232852f9fbf9bef48__content fd-form-content"
                data-ff-el="content"
              >
                <div
                  className="ff-6a15cf7232852f9fbf9bef48__fields"
                  data-ff-el="fields"
                >
                  <div className="ff-6a15cf7232852f9fbf9bef48__field fd-form-group">
                    <input
                      id="ff-6a15cf7232852f9fbf9bef48-firstName"
                      className="ff-6a15cf7232852f9fbf9bef48__control fd-form-control"
                      type="text"
                      maxLength={255}
                      name="firstName"
                      placeholder="First name"
                      data-ff-tab="firstName::email"
                      required
                    />
                    <label
                      htmlFor="ff-6a15cf7232852f9fbf9bef48-firstName"
                      className="ff-6a15cf7232852f9fbf9bef48__label fd-form-label"
                    >
                      <div>
                        <div>First name</div>
                      </div>
                    </label>
                  </div>

                  <div className="ff-6a15cf7232852f9fbf9bef48__field fd-form-group">
                    <input
                      id="ff-6a15cf7232852f9fbf9bef48-email"
                      className="ff-6a15cf7232852f9fbf9bef48__control fd-form-control"
                      type="text"
                      maxLength={255}
                      name="email"
                      placeholder="Email address"
                      data-ff-tab="email:firstName:fields.whatsapp"
                      required
                    />
                    <label
                      htmlFor="ff-6a15cf7232852f9fbf9bef48-email"
                      className="ff-6a15cf7232852f9fbf9bef48__label fd-form-label"
                    >
                      <div>
                        <div>Email address</div>
                      </div>
                    </label>
                  </div>

                  <div className="ff-6a15cf7232852f9fbf9bef48__field fd-form-group">
                    <input
                      id="ff-6a15cf7232852f9fbf9bef48-dbtoPqjvne"
                      className="ff-6a15cf7232852f9fbf9bef48__control fd-form-control"
                      type="text"
                      maxLength={255}
                      name="fields.whatsapp"
                      placeholder="Whatsapp Number"
                      data-ff-tab="fields.whatsapp:email:fields.businessName"
                      required
                    />
                    <label
                      htmlFor="ff-6a15cf7232852f9fbf9bef48-dbtoPqjvne"
                      className="ff-6a15cf7232852f9fbf9bef48__label fd-form-label"
                    >
                      <div>
                        <div>Whatsapp Number</div>
                      </div>
                    </label>
                  </div>

                  <div className="ff-6a15cf7232852f9fbf9bef48__field fd-form-group">
                    <input
                      id="ff-6a15cf7232852f9fbf9bef48-f2pmzNbcdz"
                      className="ff-6a15cf7232852f9fbf9bef48__control fd-form-control"
                      type="text"
                      maxLength={255}
                      name="fields.businessName"
                      placeholder="Business Name"
                      data-ff-tab="fields.businessName:fields.whatsapp:fields.websiteOrFacebookLink"
                      required
                    />
                    <label
                      htmlFor="ff-6a15cf7232852f9fbf9bef48-f2pmzNbcdz"
                      className="ff-6a15cf7232852f9fbf9bef48__label fd-form-label"
                    >
                      <div>
                        <div>Business Name</div>
                      </div>
                    </label>
                  </div>

                  <div className="ff-6a15cf7232852f9fbf9bef48__field fd-form-group">
                    <input
                      id="ff-6a15cf7232852f9fbf9bef48-lexVCZK0b1"
                      className="ff-6a15cf7232852f9fbf9bef48__control fd-form-control"
                      type="text"
                      maxLength={255}
                      name="fields.websiteOrFacebookLink"
                      placeholder="Website or Facebook Page link"
                      data-ff-tab="fields.websiteOrFacebookLink:fields.businessName:submit"
                      required
                    />
                    <label
                      htmlFor="ff-6a15cf7232852f9fbf9bef48-lexVCZK0b1"
                      className="ff-6a15cf7232852f9fbf9bef48__label fd-form-label"
                    >
                      <div>
                        <div>Website or Facebook Page link</div>
                      </div>
                    </label>
                  </div>

                  <input
                    type="text"
                    maxLength={255}
                    name="confirm_email_address"
                    style={{ display: "none" }}
                  />
                </div>

                <div
                  className="ff-6a15cf7232852f9fbf9bef48__footer"
                  data-ff-el="footer"
                >
                  <button
                    type="submit"
                    className="ff-6a15cf7232852f9fbf9bef48__button fd-btn"
                    data-ff-el="submit"
                    data-ff-tab="submit"
                  >
                    <div>
                      <span data-draw-element="editable">
                        Booking your FREE Consultation Call Now
                      </span>
                    </div>
                  </button>
                  <p className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600">
                    <LockKeyhole
                      className="h-4 w-4 text-gold-700"
                      aria-hidden="true"
                    />
                    We respect your privacy. No spam.
                  </p>
                </div>
              </div>
              <div
                className="ff-6a15cf7232852f9fbf9bef48__success fd-form-success"
                data-ff-el="success"
              >
                <div className="ff-6a15cf7232852f9fbf9bef48__success-message">
                  <div>
                    <div>
                      <div data-paragraph="true">Thank you for subscribing!</div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="ff-6a15cf7232852f9fbf9bef48__error fd-form-error"
                data-ff-el="error"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
