import type { Metadata } from "next";
import "./globals.css";
import { josefinSans } from "@/lib/font";
import TodoComponent from "@/components/TodoContext/TodoContext";
import Header from "@/components/Header/Header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ josefinSans.className } antialiased`}
      >
        <TodoComponent>
          <Header />
          {children}
        </TodoComponent>
      </body>
    </html>
  );
}
