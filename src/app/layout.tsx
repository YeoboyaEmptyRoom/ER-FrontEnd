'use client';

import GlobalStyle from '@/style/global';
import { ToastContainer } from 'react-toastify';
import { RecoilRoot } from 'recoil';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <RecoilRoot>
          <GlobalStyle />
          {children}
          <ToastContainer />
        </RecoilRoot>
      </body>
    </html>
  );
}
