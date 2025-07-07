import "./globals.css";
import Theme from "@/app/components/Theme";

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
