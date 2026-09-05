import "./globals.css";

export const metadata = {
  title: "Undangan Pernikahan",
  description: "Undangan pernikahan digital"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="id"><body>{children}</body></html>;
}
