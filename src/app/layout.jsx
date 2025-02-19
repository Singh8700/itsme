import { Inter, Roboto_Mono } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import HeaderSection from "./home/header";
import Background from "./objects/Background";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rohit | It's Me, Friend - Discover Who I Am",
  description: "Unlock the mystery! Get to know Rohit like never before. Your search ends here.",
  keywords: "Rohit, know Rohit, who is Rohit, Singh87_Singh, Rohit's portfolio, web developer",
  author: "Rohit Singh",
  robots: "index, follow",
  canonical: "https://singh8700.github.io/itsme",

  // Open Graph (For Facebook, Instagram, LinkedIn)
  ogTitle: "Rohit | It's Me, Friend - You Know Who I Am!",
  ogDescription: "Discover the real Rohit. Are you ready to know the truth?",
  ogImage: "https://singh8700.github.io/itsme/assets/profile.jpg",
  ogUrl: "https://singh8700.github.io/itsme",
  ogType: "website",

  // Instagram Meta Tags (Uses Open Graph)
  instagramHandle: "@singh87_singh",

  // Twitter (Even if you don't have an account, it's good for sharing previews)
  twitterTitle: "Rohit | It's Me, Friend - Can You Guess?",
  twitterDescription: "You think you know Rohit? Find out the truth!",
  twitterImage: "https://singh8700.github.io/itsme/assets/profile.jpg",
  twitterCard: "summary_large_image",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="7-0CsP-a--qYOgotHrh_RWoQNI2fiVvugVg2wlmVzHI" />
      </Head>
      <body className={`${inter.variable} ${robotoMono.variable}`}>
        <Background />
        <HeaderSection />
        <main style={{ minHeight: "100vh", position: "relative", zIndex: 1 }}>
          {children}
        </main>
        {/* <Footer/> */}
      </body>
    </html>
  );
}
