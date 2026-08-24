import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// 語彙はASO(docs/aso-2026-08.md)と揃える: 「育児記録」「授乳」「話すだけ」「音声」
const SITE_TITLE = "子育て日記 - 話すだけの育児記録・育児日記アプリ";
const SITE_DESCRIPTION =
  "「ミルク140飲んで、さっき寝たよ」と話すだけで、AIが授乳・ミルク・睡眠の育児記録を自動でつくります。夫婦での共有や、Apple Watchだけでの記録にも対応。無料ではじめられます。";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: ["育児記録", "育児日記", "授乳記録", "子育て記録", "音声入力", "夫婦 共有", "Apple Watch"],
  metadataBase: new URL("https://kosodate-nikki.jp"),
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "ja_JP",
    type: "website",
    url: "https://kosodate-nikki.jp",
    siteName: "子育て日記",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
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
