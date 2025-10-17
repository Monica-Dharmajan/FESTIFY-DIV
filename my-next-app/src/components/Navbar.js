"use client";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const linkStyle = {
    color: "red",
    fontWeight: "bold",
    marginRight: "15px",
    textDecoration: "none",
    transition: "0.3s",
  };

  return (
    <nav style={{ backgroundColor: "black", padding: "10px 20px", display: "flex", justifyContent: "space-between" }}>
      <h1 style={{ color: "red", fontFamily: "Arial Black" }}>Festify⚡</h1>
      <div>
        {["/", "/products", "/services", "/contact", "/user", "/todo"].map((path, i) => (
          <Link key={i} href={path} style={linkStyle}>
            {path === "/" ? "Home" : path.replace("/", "")}
          </Link>
        ))}
      </div>
    </nav>
  );
}