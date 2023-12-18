import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/themeProvider/ThemeProvider";

const monserat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "David's Portfolio!",
  description:
    "David's portfolio website is a comprehensive showcase of his skills, experiences, and accomplishments. The site is designed to provide an insightful overview of his professional journey, highlighting his key projects, achievements, and areas of expertise.",
  creator: "David Nikolovski",
  icons: {
    icon: "/Logo/SmallLogo.png",
  },
  keywords:
    "frontend developer, web developer, HTML, CSS, React, Next.js, Tailwind CSS, portfolio, street artist, Velnes.mk, Velnes.mk projects, David Nikolovski achievements, web development showcase",
  category: "Web Development, Frontend",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="theme">
      <body className={monserat.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
