"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-20 text-center">
      <h1 className="text-2xl">Something went wrong</h1>
      <p className="text-muted-foreground">
        {error.message || "Could not reach the employees service."}
      </p>
      <Button onClick={reset}>Try again</Button>
    </main>
  );
}
