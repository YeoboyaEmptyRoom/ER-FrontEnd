'use client';

import GlobalStyle from '@/style/global';
import '../style/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GlobalStyle />
      <body>{children}</body>
    </html>
  );
}
