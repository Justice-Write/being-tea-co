import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "http";
  const base = `${protocol}://${host}`;
  const title = "Being Tea Co. | Tea culture from leaf to golden light";
  const description =
    "Practical tea education exploring leaf, water, teaware, culture and mindful preparation. Established 2015.";

  return {
    metadataBase: new URL(base),
    title,
    description,
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      title,
      description,
      type: "website",
      images: [{ url: `${base}/og.png`, width: 1536, height: 869, alt: "Being Tea Co. — Tea culture from leaf to golden light." }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${base}/og.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
