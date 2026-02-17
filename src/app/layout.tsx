import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "子育て日記 - 赤ちゃんの成長をかんたん記録",
  description: "授乳・おむつ・睡眠をワンタップで記録。忙しい育児中でもサッと使える育児日記アプリ。",
  metadataBase: new URL("https://kosodate-nikki.jp"),
  openGraph: {
    title: "子育て日記 - 赤ちゃんの成長をかんたん記録",
    description: "授乳・おむつ・睡眠をワンタップで記録。忙しい育児中でもサッと使える育児日記アプリ。",
    locale: "ja_JP",
    type: "website",
    url: "https://kosodate-nikki.jp",
    siteName: "子育て日記",
  },
  twitter: {
    card: "summary_large_image",
    title: "子育て日記 - 赤ちゃんの成長をかんたん記録",
    description: "授乳・おむつ・睡眠をワンタップで記録。忙しい育児中でもサッと使える育児日記アプリ。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
