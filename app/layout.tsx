import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import githublogo from "../public/icons/github-logo.png" 
import Link from "next/link";
import NoiseCanvas from "@/components/NoiseCanvas";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });


const header = (
  <header>
    <Link href="/">
      <h1 className="text-4xl font-bold text-center mt-4">Kernel 0verflow</h1>
    </Link>
    <p className="text-center mt-2 text-lg">
      Welcome to my Blog 👋🏻
    </p>
  </header>
);
const footer = (
  <footer className="fixed bottom-0 text-lg text-center w-full flex justify-center items-center gap-4">
    <p>Copyright &copy; Kernel0verflow - 2024</p>
    <a href="https://github.com/kernel0verflow">
      <Image src={githublogo} alt="GitHub" width={32} height={32} className="invert" />
    </a>
  </footer>
);

export const metadata: Metadata = {
  title: "Kernel0verflow - Personal Site",
  description: "This is my personal site and blog",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-800 min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NoiseCanvas />
          <div className="mx-auto max-w-6xl">
            {header}
            {children}
            {footer}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
