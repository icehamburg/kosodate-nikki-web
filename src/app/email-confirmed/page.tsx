import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "メール確認完了 - 子育て日記",
};

export default function EmailConfirmedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#FFF9F7]">
      <div className="w-full max-w-md text-center">
        <div className="bg-white rounded-3xl p-10 shadow-lg">
          <div className="w-20 h-20 bg-[#FFF9F7] rounded-2xl flex items-center justify-center text-4xl mx-auto mb-6">
            ✅
          </div>
          <h1 className="text-2xl font-black mb-3">メール確認完了</h1>
          <p className="text-[#636E72] mb-8 leading-relaxed">
            メールアドレスの確認が完了しました。<br />
            アプリに戻ってログインしてください。
          </p>

          <div className="bg-[#FFF9F7] rounded-2xl p-5 mb-8 text-left">
            <p className="text-sm font-bold mb-2">ログイン手順：</p>
            <ol className="text-sm text-[#636E72] space-y-1.5 list-decimal list-inside">
              <li>この画面を閉じる</li>
              <li>子育て日記アプリを開く</li>
              <li>登録したメール・パスワードでログイン</li>
            </ol>
          </div>

          <Link
            href="/"
            className="inline-block text-sm text-[#D97757] font-bold no-underline hover:underline"
          >
            トップページへ
          </Link>
        </div>

        <p className="mt-6 text-xs text-[#636E72]">
          © 2025 子育て日記
        </p>
      </div>
    </div>
  );
}
