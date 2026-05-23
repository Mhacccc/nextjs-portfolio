import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mark Louie O. Balaba | Full-Stack Engineer",
  description: "Full-Stack Software Engineer specializing in TypeScript ecosystems, scalable web applications, and minimalist design systems.",
  keywords: ["Mark Louie Balaba", "Full-Stack Engineer", "TypeScript", "React", "Next.js", "Portfolio"],
  authors: [{ name: "Mark Louie O. Balaba" }],
  openGraph: {
    title: "Mark Louie O. Balaba | Full-Stack Engineer",
    description: "Full-Stack Software Engineer specializing in TypeScript ecosystems and cloud infrastructure.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
