import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー - 子育て日記",
};

export default function PrivacyPage() {
  return (
    <>
      {/* Header */}
      <header className="bg-white border-b border-black/5">
        <div className="max-w-[800px] mx-auto px-6 h-16 flex items-center">
          <Link
            href="/"
            className="flex items-center gap-3 text-[var(--color-primary)] font-black text-xl no-underline"
          >
            <span className="w-10 h-10 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-xl flex items-center justify-center text-lg">
              📔
            </span>
            子育て日記
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="py-16 md:py-24" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="max-w-[700px] mx-auto px-6">
          <h1 className="text-3xl font-black text-center mb-12">
            プライバシーポリシー
          </h1>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
            <p className="text-[var(--color-text-light)] mb-8">
              本アプリ「子育て日記」は、ユーザーの皆様の育児記録データを安全に管理します。
            </p>

            <Section title="収集するデータ">
              <ul className="list-disc list-inside space-y-2 text-[var(--color-text-light)]">
                <li>メールアドレス（アカウント認証用）</li>
                <li>育児記録データ（授乳、おむつ、睡眠等の記録）</li>
                <li>日記・写真データ</li>
              </ul>
            </Section>

            <Section title="データの利用目的">
              <ul className="list-disc list-inside space-y-2 text-[var(--color-text-light)]">
                <li>アプリのサービス提供</li>
                <li>ユーザーのデータ同期・バックアップ</li>
              </ul>
            </Section>

            <Section title="データの第三者提供">
              <p className="text-[var(--color-text-light)]">
                収集したデータを第三者に提供・販売することはありません。
              </p>
            </Section>

            <Section title="データの保管">
              <p className="text-[var(--color-text-light)]">
                データは Supabase
                のセキュアなクラウドサーバーに保存されます。SSL暗号化により通信は保護されています。
              </p>
            </Section>

            <Section title="データの削除">
              <p className="text-[var(--color-text-light)]">
                アカウントを削除すると、関連するすべてのデータが削除されます。削除をご希望の場合はお問い合わせください。
              </p>
            </Section>

            <Section title="お問い合わせ">
              <p className="text-[var(--color-text-light)]">
                プライバシーに関するお問い合わせ:{" "}
                <a
                  href="mailto:icehamburgs@gmail.com"
                  className="text-[var(--color-primary)] font-bold no-underline hover:underline"
                >
                  icehamburgs@gmail.com
                </a>
              </p>
            </Section>

            <p className="mt-12 text-sm text-[var(--color-text-light)] opacity-60">
              最終更新日: 2025年2月17日
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#2D3436] text-white/70 py-8">
        <div className="max-w-[800px] mx-auto px-6 text-center text-sm">
          <Link href="/" className="text-white/70 hover:text-white no-underline transition-colors">
            ← トップページに戻る
          </Link>
          <p className="mt-4">© 2025 Takuya Hiraoji. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-bold text-[var(--color-primary)] mb-3">
        {title}
      </h2>
      {children}
    </div>
  );
}
