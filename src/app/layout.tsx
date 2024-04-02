"use client"
import { useEffect, useState } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import Menu from '@/components/menu';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <html lang="en">
      <body className={isClient ? inter.className : ''}>
        {children}
        {isClient && <Menu />}
      </body>
    </html>
  );
}
