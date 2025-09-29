import type { Metadata } from "next";

import "./globals.css";
import React from "react";


export const metadata: Metadata = {
  title: "  The Blog - este é um blog de Next.Js",
  description: "Essa seria a descrição da pagina",
};

type RootLayoutProps = {
  children: React.ReactNode;
}

export default function RootLayout({children}: Readonly<RootLayoutProps>) {
  return (
    <html lang="pt-br" >
      <body>

        {children}


      </body>
    </html>
  );
}
