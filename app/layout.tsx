import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { AuroraBackground } from "@/components/ui/aurora-background"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jaar's Web-Portfolio",
  description: "Modern Minimalist Portfolio by jaar studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <AuroraBackground>
            {children}
          </AuroraBackground>
        </ThemeProvider>

      </body>
    </html>
  );
}
