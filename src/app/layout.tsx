import './globals.css';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export const metadata = {
  title: 'Brikly',
  description: 'Your company description',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
