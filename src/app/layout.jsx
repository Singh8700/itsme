import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import HeaderSection from "./home/header"
import Footer from "./footer/footer"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "It's me friend",
  description: "U know who I am",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${robotoMono.variable}`}
      >
        <HeaderSection/>
        <main style={{ minHeight: '100vh', position: 'relative', zIndex: 1 }}>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}