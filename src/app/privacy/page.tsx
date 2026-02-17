import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー - 子育て日記",
};

export default function PrivacyPage() {
  return (
    <>
      <style>{`
        .prv-header { background: #fff; border-bottom: 1px solid rgba(0,0,0,0.05); }
        .prv-header-inner { max-width: 800px; margin: 0 auto; padding: 0 24px; height: 64px; display: flex; align-items: center; }
        .prv-logo { display: flex; align-items: center; gap: 12px; color: #D97757; font-weight: 900; font-size: 1.25rem; }
        .prv-logo-icon { width: 40px; height: 40px; background: linear-gradient(135deg, #D97757 0%, #FFB088 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; }
        .prv-main { padding: 64px 0 96px; background: #FFF9F7; }
        .prv-container { max-width: 700px; margin: 0 auto; padding: 0 24px; }
        .prv-main h1 { font-size: 1.875rem; font-weight: 900; text-align: center; margin-bottom: 48px; }
        .prv-card { background: #fff; border-radius: 24px; padding: 40px 48px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
        .prv-card p { color: #636E72; margin-bottom: 16px; }
        .prv-section { margin-bottom: 32px; }
        .prv-section h2 { font-size: 1.1rem; font-weight: 700; color: #D97757; margin-top: 32px; margin-bottom: 12px; }
        .prv-section ul { color: #636E72; padding-left: 24px; margin-bottom: 16px; }
        .prv-section li { margin-bottom: 8px; }
        .prv-section a { color: #D97757; font-weight: 700; }
        .prv-section a:hover { text-decoration: underline; }
        .prv-date { margin-top: 40px; font-size: 0.85rem; color: #999; }
        .prv-footer { background: #2D3436; color: rgba(255,255,255,0.7); padding: 32px 0; }
        .prv-footer-inner { max-width: 800px; margin: 0 auto; padding: 0 24px; text-align: center; font-size: 0.9rem; }
        .prv-footer a { color: rgba(255,255,255,0.7); transition: color 0.2s; }
        .prv-footer a:hover { color: #fff; }
        .prv-footer p { margin-top: 16px; }
      `}</style>

      <header className="prv-header">
        <div className="prv-header-inner">
          <Link href="/" className="prv-logo">
            <div className="prv-logo-icon">📔</div>
            子育て日記
          </Link>
        </div>
      </header>

      <main className="prv-main">
        <div className="prv-container">
          <h1>プライバシーポリシー</h1>
          <div className="prv-card">
            <p>本アプリ「子育て日記」は、ユーザーの皆様の育児記録データを安全に管理します。</p>

            <div className="prv-section">
              <h2>収集するデータ</h2>
              <ul>
                <li>メールアドレス（アカウント認証用）</li>
                <li>育児記録データ（授乳、おむつ、睡眠等の記録）</li>
                <li>日記・写真データ</li>
              </ul>
            </div>

            <div className="prv-section">
              <h2>データの利用目的</h2>
              <ul>
                <li>アプリのサービス提供</li>
                <li>ユーザーのデータ同期・バックアップ</li>
              </ul>
            </div>

            <div className="prv-section">
              <h2>データの第三者提供</h2>
              <p>収集したデータを第三者に提供・販売することはありません。</p>
            </div>

            <div className="prv-section">
              <h2>データの保管</h2>
              <p>データは Supabase のセキュアなクラウドサーバーに保存されます。SSL暗号化により通信は保護されています。</p>
            </div>

            <div className="prv-section">
              <h2>データの削除</h2>
              <p>アカウントを削除すると、関連するすべてのデータが削除されます。削除をご希望の場合はお問い合わせください。</p>
            </div>

            <div className="prv-section">
              <h2>お問い合わせ</h2>
              <p>プライバシーに関するお問い合わせ: <a href="mailto:icehamburgs@gmail.com">icehamburgs@gmail.com</a></p>
            </div>

            <p className="prv-date">最終更新日: 2025年2月17日</p>
          </div>
        </div>
      </main>

      <footer className="prv-footer">
        <div className="prv-footer-inner">
          <Link href="/">← トップページに戻る</Link>
          <p>© 2025 Takuya Hiraoji. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
