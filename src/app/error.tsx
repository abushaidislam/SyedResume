"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[88vh] items-center justify-center px-4">
      <div className="w-full max-w-xl rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur">
        <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
          <span className="text-xl font-bold">!</span>
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">Something went wrong</h1>
        <p className="mt-3 text-base text-muted-foreground/80">
          An unexpected error occurred. Try again, or refresh the page.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Button onClick={reset}>Try again</Button>
          <Button
            variant="outline"
            onClick={() => {
              window.location.reload();
            }}
          >
            Refresh
          </Button>
        </div>
        <details className="mt-6 rounded-xl border border-white/10 bg-black/20 p-4 text-left text-sm text-white/70">
          <summary className="cursor-pointer select-none font-medium text-white/80">Error details</summary>
          <pre className="mt-3 whitespace-pre-wrap break-words">{String(error?.message || error)}</pre>
        </details>
      </div>
    </div>
  );
}
