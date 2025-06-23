import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Artistly",
  description: "Book performing artists for your event",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="body-gradient">
        <div className="layout-container">
          <Header />
          <main className="main-content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
