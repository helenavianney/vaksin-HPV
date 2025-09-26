import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "CariVaksinHPV | Temukan Lokasi Vaksinasi HPV Terdekat",
  description: "Temukan lokasi vaksinasi HPV terdekat untuk Anda dan keluarga. Lindungi diri dari kanker serviks dengan vaksinasi HPV di laboratorium klinik terpercaya.",
  keywords: "vaksin HPV, kanker serviks, kesehatan wanita, vaksinasi remaja, laboratorium klinik, Gardasil, Cervarix",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body
        className={`${inter.className} antialiased bg-gradient-to-b from-pink-50 to-white min-h-screen`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </body>
    </html>
  );
}
