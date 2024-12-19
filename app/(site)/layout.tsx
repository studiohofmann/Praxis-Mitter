import type { Metadata } from "next";
import "@/app/globals.css";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/footer/Footer";


export const metadata: Metadata = {
  title: "Praxis Mitter",
  description: "ihre praxis für eine gesunde lebensführung",
};

export const revalidate = 0; // Add this line to enable on-demand revalidation

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-switzer">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
