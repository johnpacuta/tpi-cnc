"use client";

import * as React from "react";

type Props = {
  url: string;   // absolute is best, but relative works if you build it before passing
  title?: string;
};

export default function ShareModalButton({ url, title = "Share" }: Props) {
  const [open, setOpen] = React.useState(false);

  const linkedInHref =
    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;

  const facebookHref =
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-md border border-gray-300 px-3 py-1 text-sm hover:bg-gray-50"
      >
        Share
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          aria-modal="true"
          role="dialog"
          onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
        >
          {/* backdrop */}
          <button
            type="button"
            aria-label="Close share dialog"
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />

          {/* modal */}
          <div className="relative z-10 w-[92vw] max-w-md rounded-lg bg-white p-5 shadow-xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-base font-semibold text-gray-900">{title}</div>
                <div className="mt-1 text-sm text-gray-600 break-all">{url}</div>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-1 text-sm text-gray-600 hover:bg-gray-100"
              >
                Close
              </button>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-2">
              <a
                href={linkedInHref}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-gray-300 px-4 py-2 text-sm hover:bg-gray-50"
              >
                Share to LinkedIn
              </a>

              <a
                href={facebookHref}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-gray-300 px-4 py-2 text-sm hover:bg-gray-50"
              >
                Share to Facebook
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}