import Image from "next/image";
import Link from "next/link";
import AuthRedirect from "./auth-redirect";

const APP_STORE_URL = "https://apps.apple.com/jp/app/%E5%AD%90%E8%82%B2%E3%81%A6%E8%A8%98%E9%8C%B2%E6%97%A5%E8%A8%98/id6758967429";

const features = [
  { icon: "🍼", title: "ワンタップ記録", desc: "授乳、おむつ、睡眠、体温、身長・体重など、よく使う記録をホーム画面からワンタップで入力。" },
  { icon: "⏱️", title: "授乳タイマー", desc: "母乳は左右別々にストップウォッチで計測。片手でかんたん操作。" },
  { icon: "📅", title: "24時間タイムライン", desc: "1日の流れがひと目でわかるタイムライン。生活リズムの把握に便利。" },
  { icon: "📊", title: "週間・月間まとめ", desc: "記録を自動集計してグラフ表示。授乳回数や睡眠時間の推移がわかる。" },
  { icon: "📝", title: "写真付き日記", desc: "毎日の出来事を写真と一緒に記録。大切な思い出をいつでも振り返れる。" },
  { icon: "📄", title: "PDF出力", desc: "記録と日記をPDFに出力。印刷して成長記録アルバムに残せる。" },
  { icon: "⌚", title: "Apple Watch対応", desc: "iPhoneを取り出さなくても手首からすぐに記録。ミルク量や体温はDigital Crownで直感的に入力。" },
  { icon: "🌙", title: "ダークモード対応", desc: "夜間の授乳中でもまぶしくない。端末の設定に合わせて自動切り替え。" },
  { icon: "👶", title: "きょうだい管理", desc: "複数のお子さまの記録を1つのアカウントで管理。切り替えもかんたん。" },
];

const screenshots = [
  { src: "/screenshots/01_home.png", label: "ホーム" },
  { src: "/screenshots/02_timeline.png", label: "タイムライン" },
  { src: "/screenshots/03_breastfeeding.png", label: "授乳タイマー" },
  { src: "/screenshots/05_calendar.png", label: "カレンダー" },
  { src: "/screenshots/06_summary.png", label: "まとめ" },
  { src: "/screenshots/04_diary.png", label: "日記" },
  { src: "/screenshots/07_pdf.png", label: "PDF出力" },
  { src: "/screenshots/08_darkmode.png", label: "ダークモード" },
];

export default function HomePage() {
  return (
    <>
      <AuthRedirect />
      <style>{`
        .header { background: #fff; padding: 16px 0; position: fixed; top: 0; left: 0; right: 0; z-index: 100; border-bottom: 1px solid rgba(0,0,0,0.05); }
        .container { max-width: 1100px; margin: 0 auto; padding: 0 24px; }
        .header-inner { display: flex; justify-content: space-between; align-items: center; }
        .logo { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 700; color: #D97757; }
        .logo-icon { width: 40px; height: 40px; border-radius: 12px; overflow: hidden; flex-shrink: 0; }
        nav { display: flex; gap: 32px; }
        nav a { color: #636E72; font-weight: 500; font-size: 0.95rem; transition: color 0.2s; }
        nav a:hover { color: #D97757; }
        .header-cta { background: #D97757; color: #fff; padding: 10px 24px; border-radius: 12px; font-weight: 600; font-size: 0.9rem; transition: transform 0.2s, box-shadow 0.2s; display: inline-block; }
        .header-cta:hover { transform: translateY(-2px); box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
        .hero { background: linear-gradient(180deg, #FFF9F7 0%, #fff 100%); padding: 160px 0 100px; position: relative; overflow: hidden; }
        .hero-content { display: flex; align-items: center; gap: 60px; position: relative; z-index: 1; }
        .hero-text { flex: 1; }
        .hero-badge { display: inline-flex; align-items: center; gap: 8px; background: #fff; border: 2px solid #D97757; color: #D97757; padding: 8px 16px; border-radius: 50px; font-size: 0.85rem; font-weight: 600; margin-bottom: 24px; }
        .hero h1 { font-size: 3.2rem; font-weight: 700; line-height: 1.3; margin-bottom: 24px; }
        .hero h1 .hl { color: #D97757; }
        .hero-desc { font-size: 1.2rem; color: #636E72; margin-bottom: 40px; max-width: 480px; }
        .btn-primary { display: inline-flex; align-items: center; gap: 8px; background: #D97757; color: #fff; padding: 16px 32px; border-radius: 16px; font-weight: 600; font-size: 1.1rem; transition: transform 0.2s, box-shadow 0.2s; box-shadow: 0 4px 0 #C4684A; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 6px 0 #C4684A; }
        .hero-phone { flex: 0 0 320px; }
        .phone-mockup { position: relative; }
        .phone-mockup img { width: 100%; border-radius: 40px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); }
        .phone-mockup::before { content: ''; position: absolute; top: -20px; left: -20px; right: -20px; bottom: -20px; background: linear-gradient(135deg, #D97757 0%, #FFB088 100%); border-radius: 50px; z-index: -1; opacity: 0.2; }
        .features { padding: 120px 0; background: #fff; }
        .section-header { text-align: center; margin-bottom: 80px; }
        .section-label { display: inline-block; background: #FFF9F7; color: #D97757; padding: 8px 20px; border-radius: 50px; font-size: 0.9rem; font-weight: 600; margin-bottom: 16px; }
        .section-header h2 { font-size: 2.5rem; font-weight: 700; margin-bottom: 16px; }
        .section-header p { color: #636E72; font-size: 1.1rem; }
        .feature-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 40px; }
        .feature-card { display: flex; gap: 24px; padding: 32px; background: #FFF9F7; border-radius: 24px; transition: transform 0.3s, box-shadow 0.3s; }
        .feature-card:hover { transform: translateY(-4px); box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); }
        .feature-icon { flex: 0 0 64px; height: 64px; background: #fff; border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 2rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
        .feature-content h3 { font-size: 1.3rem; font-weight: 600; margin-bottom: 8px; }
        .feature-content p { color: #636E72; font-size: 0.95rem; }
        .screenshots { padding: 120px 0; background: linear-gradient(180deg, #FFF9F7 0%, #fff 100%); }
        .screenshot-carousel { display: flex; gap: 24px; overflow-x: auto; padding: 40px 0; scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch; scrollbar-width: none; }
        .screenshot-item { flex: 0 0 280px; scroll-snap-align: center; }
        .screenshot-item img { width: 100%; border-radius: 32px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); transition: transform 0.3s; }
        .screenshot-item:hover img { transform: scale(1.02); }
        .screenshot-item p { text-align: center; margin-top: 16px; font-weight: 500; color: #636E72; }
        .cta { padding: 100px 0; background: linear-gradient(135deg, #D97757 0%, #E8967E 100%); text-align: center; color: #fff; }
        .cta h2 { font-size: 2.5rem; font-weight: 700; margin-bottom: 16px; }
        .cta p { font-size: 1.2rem; opacity: 0.9; margin-bottom: 40px; }
        .cta .btn-primary { background: #fff; color: #D97757; box-shadow: 0 4px 0 rgba(0,0,0,0.1); }
        .support { padding: 100px 0; background: #fff; }
        .support-card { max-width: 600px; margin: 0 auto; text-align: center; background: #FFF9F7; padding: 60px 40px; border-radius: 32px; }
        .support-icon { width: 80px; height: 80px; background: #fff; border-radius: 20px; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; margin: 0 auto 24px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
        .support-card h2 { font-size: 2rem; font-weight: 700; margin-bottom: 16px; }
        .support-card p { color: #636E72; margin-bottom: 32px; }
        .support-email { display: inline-flex; align-items: center; gap: 8px; background: #D97757; color: #fff; padding: 16px 32px; border-radius: 16px; font-weight: 600; transition: transform 0.2s; box-shadow: 0 4px 0 #C4684A; }
        .support-email:hover { transform: translateY(-2px); }
        footer { background: #2D3436; color: rgba(255,255,255,0.7); padding: 60px 0 40px; }
        .footer-content { display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px; }
        .footer-logo { display: flex; align-items: center; gap: 12px; font-size: 1.2rem; font-weight: 700; color: #fff; }
        .footer-links { display: flex; gap: 32px; }
        .footer-links a { color: rgba(255,255,255,0.7); font-size: 0.9rem; transition: color 0.2s; }
        .footer-links a:hover { color: #fff; }
        .footer-bottom { text-align: center; padding-top: 40px; border-top: 1px solid rgba(255,255,255,0.1); font-size: 0.9rem; }
        @media (max-width: 900px) {
          .hero-content { flex-direction: column-reverse; text-align: center; }
          .hero h1 { font-size: 2.4rem; }
          .hero-desc { margin-left: auto; margin-right: auto; }
          .hero-phone { flex: 0 0 260px; }
          .feature-grid { grid-template-columns: 1fr; }
          nav, .header-cta { display: none; }
          .footer-content { flex-direction: column; gap: 24px; }
          .sp-hide { display: none; }
        }
        @media (max-width: 600px) {
          .hero h1 { font-size: 2rem; }
          .hero-desc { font-size: 1.05rem; }
          .section-header h2 { font-size: 1.8rem; }
          .feature-card { flex-direction: column; text-align: center; }
          .feature-icon { margin: 0 auto; background: transparent; box-shadow: none; }
          .cta h2 { font-size: 1.8rem; }
          .support-card { padding: 40px 24px; }
          .support-card h2 { font-size: 1.6rem; }
        }
      `}</style>

      {/* Header */}
      <header className="header">
        <div className="container header-inner">
          <Link href="/" className="logo">
            <div className="logo-icon"><Image src="/app-icon.png" alt="子育て日記" width={40} height={40} /></div>
            子育て日記
          </Link>
          <nav>
            <a href="#features">機能</a>
            <a href="#screenshots">スクショ</a>
            <a href="#support">サポート</a>
          </nav>
          <a href={APP_STORE_URL} className="header-cta">ダウンロード</a>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <div className="hero-badge">⌚ Apple Watch対応！</div>
            <h1>毎日の<span className="hl">成長</span>を<br className="sp-hide" />かんたん記録</h1>
            <p className="hero-desc">授乳・おむつ・睡眠をワンタップで記録。忙しい育児中でもサッと使えます。</p>
            <a href={APP_STORE_URL} className="btn-primary">📱 App Store でダウンロード</a>
          </div>
          <div className="hero-phone">
            <div className="phone-mockup">
              <Image src="/screenshots/01_home.png" alt="子育て日記 ホーム画面" width={320} height={693} priority />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features" id="features">
        <div className="container">
          <div className="section-header">
            <span className="section-label">🌟 機能紹介</span>
            <h2>育児がもっとラクになる</h2>
            <p>シンプルで使いやすい機能を揃えました</p>
          </div>
          <div className="feature-grid">
            {features.map((f) => (
              <div key={f.title} className="feature-card">
                <div className="feature-icon">{f.icon}</div>
                <div className="feature-content">
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="screenshots" id="screenshots">
        <div className="container">
          <div className="section-header">
            <span className="section-label">📱 スクリーンショット</span>
            <h2>アプリの画面をチェック</h2>
          </div>
        </div>
        <div className="screenshot-carousel">
          <div style={{ flex: '0 0 40px' }} />
          {screenshots.map((s) => (
            <div key={s.label} className="screenshot-item">
              <Image src={s.src} alt={s.label} width={280} height={607} />
              <p>{s.label}</p>
            </div>
          ))}
          <div style={{ flex: '0 0 40px' }} />
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <h2>今すぐはじめよう</h2>
          <p>無料でダウンロード</p>
          <a href={APP_STORE_URL} className="btn-primary">📱 App Store でダウンロード</a>
        </div>
      </section>

      {/* Support */}
      <section className="support" id="support">
        <div className="container">
          <div className="support-card">
            <div className="support-icon">💬</div>
            <h2>サポート</h2>
            <p>アプリに関するご質問、ご要望、不具合のご報告など、お気軽にお問い合わせください。</p>
            <a href="mailto:icehamburgs@gmail.com" className="support-email">📧 メールで問い合わせ</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <Link href="/" className="footer-logo">
              <div className="logo-icon"><Image src="/app-icon.png" alt="子育て日記" width={40} height={40} /></div>
              子育て日記
            </Link>
            <div className="footer-links">
              <a href="#features">機能</a>
              <a href="#support">サポート</a>
              <Link href="/privacy">プライバシーポリシー</Link>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 Takuya Hiraoji. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
