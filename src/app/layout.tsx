"use client";
import { useState } from "react";
import { AuthProvider } from "./firebase/AuthContext";
import Navbar from "./components/Navbar";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <html lang="en">
        <body>
          <Navbar />
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
