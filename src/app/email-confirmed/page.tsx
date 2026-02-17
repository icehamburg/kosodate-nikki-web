import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "メール確認完了 - 子育て日記",
};

export default function EmailConfirmedPage() {
  return (
    <>
      <style>{`
        .page { min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 24px; background: #FFF9F7; }
        .wrapper { width: 100%; max-width: 420px; text-align: center; }
        .card { background: #fff; border-radius: 24px; padding: 48px 40px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); }
        .icon-box { width: 80px; height: 80px; background: #FFF9F7; border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; margin: 0 auto 24px; }
        .card h1 { font-size: 1.5rem; font-weight: 700; margin-bottom: 12px; }
        .card .desc { color: #636E72; margin-bottom: 32px; line-height: 1.8; font-size: 0.95rem; }
        .steps { background: #FFF9F7; border-radius: 16px; padding: 20px; margin-bottom: 32px; text-align: left; }
        .steps p { font-size: 0.9rem; font-weight: 700; margin-bottom: 8px; }
        .steps ol { font-size: 0.9rem; color: #636E72; padding-left: 20px; }
        .steps li { margin-bottom: 6px; }
        .link { color: #D97757; font-weight: 700; font-size: 0.9rem; }
        .link:hover { text-decoration: underline; }
        .copy { margin-top: 24px; font-size: 0.75rem; color: #636E72; }
      `}</style>
      <div className="page">
        <div className="wrapper">
          <div className="card">
            <div className="icon-box">✅</div>
            <h1>メール確認完了</h1>
            <p className="desc">
              メールアドレスの確認が完了しました。<br />
              アプリに戻ってログインしてください。
            </p>
            <div className="steps">
              <p>ログイン手順：</p>
              <ol>
                <li>この画面を閉じる</li>
                <li>子育て日記アプリを開く</li>
                <li>登録したメール・パスワードでログイン</li>
              </ol>
            </div>
            <Link href="/" className="link">トップページへ</Link>
          </div>
          <p className="copy">© 2025 子育て日記</p>
        </div>
      </div>
    </>
  );
}
