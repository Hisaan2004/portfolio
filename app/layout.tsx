import './globals.css';
import Theme from '@/app/components/Theme';

const metadata = {
  title: 'Portfolio',
  description: 'Created by Hisaan Sakhawat',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
        <Theme>{children}</Theme>
  );
}
