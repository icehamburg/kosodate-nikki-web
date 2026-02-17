import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "パスワードリセット - 子育て日記",
};

export default function PasswordResetPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="w-full max-w-md text-center">
        <div className="bg-white rounded-3xl p-10 shadow-lg">
          <div className="w-20 h-20 bg-[var(--color-bg)] rounded-2xl flex items-center justify-center text-4xl mx-auto mb-6">
            🔐
          </div>
          <h1 className="text-2xl font-black mb-3">パスワードリセット</h1>
          <p className="text-[var(--color-text-light)] mb-8 leading-relaxed">
            パスワードのリセットが完了しました。<br />
            アプリに戻って新しいパスワードでログインしてください。
          </p>

          <div
            className="rounded-2xl p-5 mb-8 text-left"
            style={{ backgroundColor: "var(--color-bg)" }}
          >
            <p className="text-sm font-bold mb-2">ログイン手順：</p>
            <ol className="text-sm text-[var(--color-text-light)] space-y-1.5 list-decimal list-inside">
              <li>この画面を閉じる</li>
              <li>子育て日記アプリを開く</li>
              <li>新しいパスワードでログイン</li>
            </ol>
          </div>

          <Link
            href="/"
            className="inline-block text-sm text-[var(--color-primary)] font-bold no-underline hover:underline"
          >
            トップページへ
          </Link>
        </div>

        <p className="mt-6 text-xs text-[var(--color-text-light)]">
          © 2025 子育て日記
        </p>
      </div>
    </div>
  );
}
