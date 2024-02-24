import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Project C",
  description: "Created by Eduardo Bittencourt",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
