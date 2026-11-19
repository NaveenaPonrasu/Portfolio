import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Naveena Ponrasu | Frontend Developer", description: "React, Next.js and frontend development portfolio." };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
