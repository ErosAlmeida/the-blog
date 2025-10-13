import type { Metadata } from "next";

import "./globals.css";
import React from "react";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: {
    default: "  The Blog - este é um blog de Next.Js",
    template: "%s | the blog",
  },
  description: "Essa seria a descrição da pagina",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="pt-br">
      <body>
        <Container>
          <Header />

          {children}
          <footer>
            <p className="text-6xl font-bold text-center py-8">Footer</p>
          </footer>
        </Container>
      </body>
    </html>
  );
}
