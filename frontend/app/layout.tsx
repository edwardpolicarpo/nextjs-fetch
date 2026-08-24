import "@/app/ui/globals.css";
import { Geist_Mono, Instrument_Sans } from "next/font/google";
import { cn } from "@/lib/utils";

const instrumentSansHeading = Instrument_Sans({subsets:['latin'],variable:'--font-heading'});

const geistMono = Geist_Mono({subsets:['latin'],variable:'--font-mono'});


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("font-mono dark", geistMono.variable, instrumentSansHeading.variable)}
    >
      <body className="bg-background text-foreground">{children}</body>
    </html>
  );
}
