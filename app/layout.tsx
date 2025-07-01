import './globals.css';
import Theme from '@/app/components/Theme';
//import Chatbotcomp from '@/app/components/Chatbotcomp';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className=''>

        <Theme>{children}</Theme>
        </html>
  );
}
