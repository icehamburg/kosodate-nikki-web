import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "子育て日記 - 話すだけで、記録になる育児日記アプリ",
  description: "「ミルク140飲んで、さっき寝たよ」と話すだけでAIが記録を作ります。夫婦・家族での共有や、Apple Watchだけでの記録にも対応。",
  metadataBase: new URL("https://kosodate-nikki.jp"),
  openGraph: {
    title: "子育て日記 - 話すだけで、記録になる育児日記アプリ",
    description: "「ミルク140飲んで、さっき寝たよ」と話すだけでAIが記録を作ります。夫婦・家族での共有や、Apple Watchだけでの記録にも対応。",
    locale: "ja_JP",
    type: "website",
    url: "https://kosodate-nikki.jp",
    siteName: "子育て日記",
  },
  twitter: {
    card: "summary_large_image",
    title: "子育て日記 - 話すだけで、記録になる育児日記アプリ",
    description: "「ミルク140飲んで、さっき寝たよ」と話すだけでAIが記録を作ります。夫婦・家族での共有や、Apple Watchだけでの記録にも対応。",
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
