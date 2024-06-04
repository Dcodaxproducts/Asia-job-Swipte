import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ReduxProvider from '../components/ReduxProvider';
import ClientWrapper from '../components/ClientWrapper';
import SessionProviderWrapper from '../components/SessionProviderWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ fontFamily: "'SfUi', sans-serif" }}>
        <SessionProviderWrapper>
          <ReduxProvider>
            <ClientWrapper>
              {children}
            </ClientWrapper>
          </ReduxProvider>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
