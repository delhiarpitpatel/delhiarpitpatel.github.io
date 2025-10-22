import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const geist = Geist({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Arpit Patel - Software Developer Portfolio",
  description: "Portfolio website of Arpit Patel, showcasing software development projects and professional experience",
  keywords: "Arpit Patel, Software Developer, Web Developer, Portfolio, Programming, Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="antialiased">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
