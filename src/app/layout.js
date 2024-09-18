import localFont from "next/font/local";
import Header from "@/widgets/Header";
import Footer from "@/widgets/Footer";
import "@/styles/index.css";

const geistSans = localFont({
  src: "../../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex flex-col items-center mx-auto">
          <div className="w-full max-w-[840px]">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
