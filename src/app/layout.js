import Header from "@/widgets/Header";
import Footer from "@/widgets/Footer";
import "@/styles/index.css";

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
