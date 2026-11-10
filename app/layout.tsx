import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ananya Bansal | Full-Stack Developer",
  description:
    "Portfolio of Ananya Bansal — Full-Stack Developer and B.E. Computer Science student at Chitkara University (9.0 CGPA). Building smart consumer-focused platforms, quick-commerce cart optimizers, and scalable full-stack applications.",
  keywords: [
    "Ananya Bansal",
    "Full-Stack Developer",
    "Portfolio",
    "PIKSY",
    "Quick Commerce",
    "Next.js",
    "React",
    "Node.js",
    "Chitkara University",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth h-full">
      <body className="min-h-full bg-[#0a090c] text-zinc-100 font-sans antialiased selection:bg-[#fef08a]/20 selection:text-[#fef08a]">
        {children}
      </body>
    </html>
  );
}
