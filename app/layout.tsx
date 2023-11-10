import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const SpaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

export const metadata: Metadata = {
  title: "DevOverflow",
  description:
    "A community- driven by platform for asking and answring programming questions. Get hrlp, share Knowledge, and collaborate wht developers from around the world. Explore topics in web development, mobile app developmnet, algorithms, data structures, and amy more.",
  icons: {
    icon: "/assets/images/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
    appearance={{
      elements:{
        formButtonPrimary:'primary-gradient',
        footerPagesLink:'primary-text-gradient hover:text-primary-500'
      }
    }}>
      <html lang="en">
        <body className={`${inter.className} ${SpaceGrotesk.variable}`}>
          <h1 className="h1-bold">Hello Praveen</h1>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
