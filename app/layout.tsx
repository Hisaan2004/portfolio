import "./globals.css";
import Theme from "@/app/components/Theme";
export const metadata = {
  title: "Hisaan's Portfolio",
  description: "This is the website to find Hisaan's portfolio.",
  keywords: ["nextjs", "website", "portfolio"],
  authors: [{ name: "Hisaan Sakhawat" }],
  openGraph: {
    title: "Portfolio",
    description: "This is the website to find Hisaan's portfolio.",
    url: "https://portfolio-ten-alpha-8xozlnzrlv.vercel.app/",
    siteName: "Hisaan's Portfolio",
    images: [
      {
        url: "/webimg.jpg",
        width: 1200,
        height: 630,
        alt: "Preview image of Hisaan's portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hisaan's Portfolio",
    description: "Discover projects and skills by Hisaan Sakhawat.",
    images: ["/webimg.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="">
      <Theme>{children}</Theme>
    </html>
  );
}
