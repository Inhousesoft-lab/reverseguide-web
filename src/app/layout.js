import Header from "@/widgets/Header";
import Footer from "@/widgets/Footer";
import "@/styles/index.css";

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex flex-col items-center w-full">
          <div className="w-full max-w-[840px] px-4 sm:px-6 md:px-8">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
