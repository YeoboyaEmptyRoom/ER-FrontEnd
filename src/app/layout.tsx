'use client';

import GlobalStyle from '@/style/global';
import { RecoilRoot } from 'recoil';
import '../style/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <html lang="en">
        <body>{children}</body>
      </html>
    </RecoilRoot>
  );
}
