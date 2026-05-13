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

const formId = "69fd9684630da6cd96c45be7";
const rootSelector = ".ff-69fd9684630da6cd96c45be7";

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
      const successVisible = root
        ?.querySelector<HTMLElement>('[data-ff-el="success"]')
        ?.checkVisibility?.();
      const succeeded =
        root?.getAttribute("data-ff-stage") === "success" || successVisible;

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
    <div
      className="ff-69fd9684630da6cd96c45be7"
      data-ff-el="root"
      data-ff-version="3"
      data-ff-type="inline"
      data-ff-name="inlineNoImage"
      data-ff-stage="default"
    >
      <link
        rel="preload"
        href="https://assets.flodesk.com/flodesk-sans.css"
        as="style"
      />
      <link
        rel="stylesheet"
        href="https://assets.flodesk.com/flodesk-sans.css"
      />
      <div
        data-ff-el="config"
        data-ff-config="eyJ0cmlnZ2VyIjp7Im1vZGUiOiJpbW1lZGlhdGVseSIsInZhbHVlIjowfSwib25TdWNjZXNzIjp7Im1vZGUiOiJyZWRpcmVjdCIsIm1lc3NhZ2UiOiIiLCJyZWRpcmVjdFVybCI6Imh0dHBzOi8vY29uc3VsdGFudC50ZWpuYXJheWFudGhhcnUuY29tLm5wL3RoYW5rcyJ9LCJjb2kiOmZhbHNlLCJzaG93Rm9yUmV0dXJuVmlzaXRvcnMiOnRydWUsIm5vdGlmaWNhdGlvbiI6ZmFsc2UsImdkcHIiOnsiYWNjZXB0c01hcmtldGluZyI6ZmFsc2UsInByaXZhY3lQb2xpY3kiOnsiZW5hYmxlZCI6ZmFsc2UsIm1hbmRhdG9yeSI6ZmFsc2V9fSwidHJhY2tpbmdDb25maWciOnsibWV0YVBpeGVsSWQiOiIiLCJjb29raWVCYW5uZXJFbmFibGVkIjpmYWxzZSwiZ29vZ2xlQW5hbHl0aWNzSWQiOiIifX0="
        style={{ display: "none" }}
      />

      <form
        action="https://form.flodesk.com/forms/69fd9684630da6cd96c45be7/submit"
        method="post"
        data-ff-el="form"
        className="rounded-md border border-gold-100 bg-white p-5 shadow-soft sm:p-8"
      >
        <div data-ff-el="content" className="fd-form-content">
          <div data-ff-el="fields" className="grid gap-5 sm:grid-cols-2">
            <Field
              id="ff-69fd9684630da6cd96c45be7-firstName"
              label="Full Name"
              name="firstName"
              placeholder="Your full name"
              tab="firstName::email"
            />
            <Field
              id="ff-69fd9684630da6cd96c45be7-email"
              label="Email"
              name="email"
              placeholder="you@example.com"
              tab="email:firstName:fields.whatsapp"
              type="email"
            />
            <Field
              id="ff-69fd9684630da6cd96c45be7-Tu3sZXewHc"
              label="WhatsApp Number"
              name="fields.whatsapp"
              placeholder="Your WhatsApp number"
              tab="fields.whatsapp:email:fields.businessName"
              type="tel"
            />
            <Field
              id="ff-69fd9684630da6cd96c45be7-4nJyduxuYM"
              label="Business Name"
              name="fields.businessName"
              placeholder="Your business name"
              tab="fields.businessName:fields.whatsapp:fields.websiteFacebookLink"
            />
            <div className="sm:col-span-2">
              <Field
                id="ff-69fd9684630da6cd96c45be7-CClCpCn1WO"
                label="Website or Facebook Page Link"
                name="fields.websiteFacebookLink"
                placeholder="Your website or Facebook page link"
                tab="fields.websiteFacebookLink:fields.businessName:submit"
              />
            </div>
            <input
              type="text"
              maxLength={255}
              name="confirm_email_address"
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div data-ff-el="footer" className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
            <button
              type="submit"
              data-ff-el="submit"
              data-ff-tab="submit"
              className="inline-flex h-14 items-center justify-center rounded-md bg-ink px-7 text-base font-semibold text-white shadow-soft transition hover:bg-gold-800 focus:outline-none focus:ring-4 focus:ring-gold-200"
            >
              <span data-draw-element="editable">
                Booking your FREE Consultation Call Now
              </span>
            </button>
            <p className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600">
              <LockKeyhole className="h-4 w-4 text-gold-700" aria-hidden="true" />
              We respect your privacy. No spam.
            </p>
          </div>
        </div>

        <div className="fd-form-success hidden rounded-md bg-gold-50 p-5 text-center text-ink" data-ff-el="success">
          <p className="font-semibold">Thank you for subscribing!</p>
        </div>
        <div className="fd-form-error mt-4 text-sm font-medium text-red-600" data-ff-el="error" />
      </form>
    </div>
  );
}

function Field({
  id,
  label,
  name,
  placeholder,
  tab,
  type = "text"
}: {
  id: string;
  label: string;
  name: string;
  placeholder: string;
  tab: string;
  type?: string;
}) {
  return (
    <div className="fd-form-group">
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-ink">
        {label}
        <span className="text-gold-700"> *</span>
      </label>
      <input
        id={id}
        className="fd-form-control h-12 w-full rounded-md border border-zinc-200 bg-[#fffaf0] px-4 text-base outline-none transition placeholder:text-zinc-400 focus:border-gold-400 focus:ring-4 focus:ring-gold-100"
        type={type}
        maxLength={255}
        name={name}
        placeholder={placeholder}
        data-ff-tab={tab}
        required
      />
    </div>
  );
}
