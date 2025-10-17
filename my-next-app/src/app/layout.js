// app/layout.js
import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Festify⚡",
  description: "Concert ticket booking website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "black", color: "white" }}>
        <Navbar />
        <div style={{ padding: "20px" }}>{children}</div>
      </body>
    </html>
  );
}