import './globals.css';
import Theme from '@/app/components/Theme';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
        <Theme>{children}</Theme>
  );
}
