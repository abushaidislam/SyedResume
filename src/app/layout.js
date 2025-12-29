import "bootstrap/dist/css/bootstrap.min.css";
import "katex/dist/katex.min.css";
import "../style.css";
import "../App.css";
import "../index.css";

import RootShell from "../components/RootShell";

export const metadata = {
  metadataBase: new URL("https://abushaidislam.vercel.app"),
  title: "Abu Syed | Full-Stack Developer & Designer",
  description:
    "Portfolio of Abu Syed - Full-Stack Developer specializing in React, Next.js, and modern web technologies. Building clean, responsive web experiences and reliable back-end services.",
  keywords: [
    "Abu Syed",
    "Full-Stack Developer",
    "Web Developer",
    "React",
    "Next.js",
    "JavaScript",
    "Portfolio",
    "Bangladesh",
  ],
  authors: [{ name: "Abu Syed", url: "https://github.com/abushaidislam" }],
  creator: "Abu Syed",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Abu Syed | Full-Stack Developer & Designer",
    description:
      "Building clean, responsive web experiences and reliable back-end services. Explore my projects and get in touch.",
    siteName: "Abu Syed Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abu Syed | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in React, Next.js, and modern web technologies.",
    creator: "@abushaidislam",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <RootShell>{children}</RootShell>
      </body>
    </html>
  );
}
