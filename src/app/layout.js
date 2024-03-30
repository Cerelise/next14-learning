import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";
// import ClientSideProviderTest from "@/components/clientSideProviderTest";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Cerelise's Blog",
    template: "%s | Cerelise's Blog",
  },
  description: "Next.js starter app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ClientSideProviderTest> */}
        <div className="container">
          <NavBar />
          {children}
          <Footer />
        </div>
        {/* </ClientSideProviderTest> */}
      </body>
    </html>
  );
}
