import "./globals.css";

export const metadata = {
  title: "Satta King Firm",
  description: "Satta King Firm is a trusted platform for Satta Matka enthusiasts, providing accurate results, tips, and insights into the world of Satta King. Stay updated with the latest Satta King results and enhance your gaming experience.",
  icons: {
    icon: '/favicon.ico',
  },
  viewport: { width: 'device-width', initialScale: 1 }
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
