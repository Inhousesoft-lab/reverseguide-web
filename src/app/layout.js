import Header from "@/widgets/Header";
import Footer from "@/widgets/Footer";
import "@/styles/index.css";

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className="layout">
      <body className="layout__body">
        <Header />
        <main className="layout__main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
