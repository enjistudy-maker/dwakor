export const metadata = {
  title: "K-Drama by Enji",
  description: "Mini web K-Drama: top list, daftar, dan detail trailer + Watch This!",
};

import "../styles/globals.css";
import Navbar from "../components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
