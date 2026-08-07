import Image from "next/image";
import Link from "next/link";
import AuthRedirect from "./auth-redirect";

const APP_STORE_URL = "https://apps.apple.com/jp/app/%E5%AD%90%E8%82%B2%E3%81%A6%E8%A8%98%E9%8C%B2%E6%97%A5%E8%A8%98/id6758967429";

// 話すだけ記録・家族共有・Watch単体記録に続く「そのほかの機能」。番号は装飾ではなく整理のためのラベル。
const compactFeatures = [
  { n: "01", title: "音声で日記", desc: "話しかけると、AIがフィラーを取り除いて、やさしい日記に整えます。" },
  { n: "02", title: "今日のひとこと", desc: "生後0日から366日、毎日ちがう観察コメントをお届けします。" },
  { n: "03", title: "コラム", desc: "専門家の出典つき。北欧など海外の子育て観にも触れられます。" },
  { n: "04", title: "励ましカード", desc: "短い言葉に、そっと背中を押してもらえる日があります。" },
  { n: "05", title: "カレンダー・タイムライン", desc: "記録と日記をまとめて、1日・1週間の流れで振り返れます。" },
  { n: "06", title: "まとめグラフ", desc: "授乳の回数や睡眠時間の推移が、ひと目でわかります。" },
  { n: "07", title: "PDF書き出し", desc: "記録と日記を、そのまま思い出のアルバムに残せます。" },
  { n: "08", title: "ダークモード", desc: "夜中の授乳でも、画面がまぶしくありません。" },
  { n: "09", title: "きょうだい管理", desc: "複数のお子さまの記録も、ひとつのアカウントで見られます。" },
];

const galleryShots = [
  { src: "/screenshots/01_home.png", label: "ホーム" },
  { src: "/screenshots/02_timeline.png", label: "タイムライン" },
  { src: "/screenshots/03_breastfeeding.png", label: "授乳タイマー" },
  { src: "/screenshots/04_diary.png", label: "日記" },
  { src: "/screenshots/05_calendar.png", label: "カレンダー" },
  { src: "/screenshots/06_summary.png", label: "まとめ" },
  { src: "/screenshots/07_pdf.png", label: "PDF出力" },
  { src: "/screenshots/08_darkmode.png", label: "ダークモード" },
];

const reassurance = [
  { n: "01", title: "保存前に確認できます", desc: "話すだけ記録も、音声日記も、AIが作った内容をそのまま保存することはありません。確認してから保存できます。" },
  { n: "02", title: "データはご本人と家族のもの", desc: "記録や日記を見られるのは、ご本人と、招待コードで共有した家族だけです。" },
  { n: "03", title: "広告はありません", desc: "アプリの中に広告を表示することはありません。" },
];

export default function HomePage() {
  return (
    <>
      <AuthRedirect />
      <style>{`
        :root {
          --primary: #D97757;
          --primary-hover: #C4684A;
          --bg: #F5F0EA;
          --bg-soft: #FFFCF8;
          --card: #FFFFFF;
          --text: #3C3A37;
          --text-secondary: #6B7280;
          --text-muted: #9C9590;
          --border: #E5E7EB;
          --accent-warm: #EDE0CF;
        }
        .header { background: rgba(255,252,248,0.9); backdrop-filter: blur(8px); padding: 16px 0; position: fixed; top: 0; left: 0; right: 0; z-index: 100; border-bottom: 1px solid var(--border); }
        .container { max-width: 1100px; margin: 0 auto; padding: 0 24px; }
        .header-inner { display: flex; justify-content: space-between; align-items: center; }
        .logo { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 700; color: var(--primary); }
        .logo-icon { width: 40px; height: 40px; border-radius: 12px; overflow: hidden; flex-shrink: 0; }
        nav { display: flex; gap: 32px; }
        nav a { color: var(--text-secondary); font-weight: 500; font-size: 0.95rem; transition: color 0.2s; }
        nav a:hover { color: var(--primary); }
        .header-cta { background: var(--primary); color: #fff; padding: 10px 24px; border-radius: 12px; font-weight: 600; font-size: 0.9rem; transition: transform 0.2s, box-shadow 0.2s; display: inline-block; }
        .header-cta:hover { transform: translateY(-2px); box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }

        .hero { background: linear-gradient(180deg, var(--bg) 0%, #fff 100%); padding: 168px 0 100px; position: relative; overflow: hidden; }
        .hero-content { display: flex; align-items: center; gap: 60px; position: relative; z-index: 1; }
        .hero-text { flex: 1; }
        .hero-badge { display: inline-flex; align-items: center; gap: 8px; background: #fff; border: 2px solid var(--primary); color: var(--primary); padding: 8px 16px; border-radius: 50px; font-size: 0.85rem; font-weight: 600; margin-bottom: 24px; letter-spacing: 0.02em; }
        .hero h1 { font-size: 3.1rem; font-weight: 700; line-height: 1.35; margin-bottom: 24px; }
        .hero h1 .hl { color: var(--primary); }
        .hero-desc { font-size: 1.15rem; color: var(--text-secondary); margin-bottom: 32px; max-width: 480px; line-height: 1.8; }
        .btn-primary { display: inline-flex; align-items: center; gap: 8px; background: var(--primary); color: #fff; padding: 16px 32px; border-radius: 16px; font-weight: 600; font-size: 1.1rem; transition: transform 0.2s, box-shadow 0.2s; box-shadow: 0 4px 0 var(--primary-hover); }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 6px 0 var(--primary-hover); }
        .hero-note { margin-top: 16px; font-size: 0.9rem; color: var(--text-muted); }
        .hero-phone { flex: 0 0 320px; }
        .phone-mockup { position: relative; }
        /* height:auto がないと width/height 属性の高さが効いたままになり、幅を変えた瞬間に縦横比が崩れる */
        .phone-mockup img { display: block; width: 100%; height: auto; border-radius: 40px; border: 1px solid rgba(60,58,55,0.08); box-shadow: 0 20px 25px -5px rgba(0,0,0,0.12); }
        .phone-mockup::before { content: ''; position: absolute; top: -20px; left: -20px; right: -20px; bottom: -20px; background: linear-gradient(135deg, var(--primary) 0%, #FFB088 100%); border-radius: 50px; z-index: -1; opacity: 0.18; }

        .feature-detail { padding: 100px 0; }
        .feature-detail-inner { display: flex; align-items: center; gap: 72px; }
        .feature-detail-inner.reverse { flex-direction: row-reverse; }
        .feature-text { flex: 1; }
        .feature-label { display: inline-block; color: var(--primary); font-size: 0.85rem; font-weight: 700; letter-spacing: 0.08em; margin-bottom: 16px; }
        .feature-text h2 { font-size: 2.1rem; font-weight: 700; line-height: 1.45; margin-bottom: 20px; }
        .feature-text p { color: var(--text-secondary); font-size: 1.05rem; line-height: 1.85; max-width: 460px; }
        .feature-text .feature-meta { margin-top: 24px; font-size: 0.9rem; color: var(--text-muted); }
        .feature-visual { flex: 0 0 auto; display: flex; align-items: flex-start; gap: 24px; }
        .feature-visual .phone-mockup { width: 220px; }
        .feature-visual .phone-mockup img { border-radius: 28px; box-shadow: 0 16px 20px -6px rgba(0,0,0,0.12); }
        /* グローは1枚置きの .single だけ。2枚並びだと重なって塊に見えるため出さない */
        .feature-visual .phone-mockup:not(.single)::before { display: none; }
        .feature-visual .phone-mockup.single { width: 260px; }
        .feature-visual .phone-mockup.single::before { top: -16px; left: -16px; right: -16px; bottom: -16px; border-radius: 40px; }
        .feature-visual .phone-mockup:nth-child(2) { margin-top: 48px; }

        .strip { padding: 40px 0; text-align: center; }
        .strip p { color: var(--text-secondary); font-size: 1rem; }
        .strip strong { color: var(--text); font-weight: 600; }

        .reassure { padding: 100px 0; background: var(--bg); }
        .reassure-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; margin-top: 64px; }
        .reassure-item .num { display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 50%; border: 1.5px solid var(--primary); color: var(--primary); font-size: 0.85rem; font-weight: 700; margin-bottom: 20px; }
        .reassure-item h3 { font-size: 1.15rem; font-weight: 600; margin-bottom: 10px; }
        .reassure-item p { color: var(--text-secondary); font-size: 0.95rem; line-height: 1.8; }

        .compact-section { padding: 120px 0; background: #fff; }
        .section-header { text-align: center; margin-bottom: 72px; }
        .section-label { display: inline-block; background: var(--bg-soft); color: var(--primary); padding: 8px 20px; border-radius: 50px; font-size: 0.9rem; font-weight: 600; margin-bottom: 16px; }
        .section-header h2 { font-size: 2.3rem; font-weight: 700; margin-bottom: 16px; }
        .section-header p { color: var(--text-secondary); font-size: 1.05rem; }
        .compact-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; margin-bottom: 80px; }
        .compact-card { padding: 28px; background: var(--bg-soft); border-radius: 20px; }
        .compact-card .num { display: block; font-size: 0.8rem; font-weight: 700; color: var(--primary); letter-spacing: 0.06em; margin-bottom: 12px; }
        .compact-card h3 { font-size: 1.05rem; font-weight: 600; margin-bottom: 8px; }
        .compact-card p { color: var(--text-secondary); font-size: 0.9rem; line-height: 1.75; }

        .screenshot-carousel { display: flex; gap: 24px; overflow-x: auto; padding: 8px 0 24px; scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch; scrollbar-width: none; }
        .screenshot-item { flex: 0 0 220px; scroll-snap-align: center; }
        .screenshot-item img { display: block; width: 100%; height: auto; border-radius: 28px; box-shadow: 0 16px 20px -6px rgba(0,0,0,0.1); transition: transform 0.3s; }
        .screenshot-item:hover img { transform: scale(1.02); }
        .screenshot-item p { text-align: center; margin-top: 14px; font-weight: 500; color: var(--text-secondary); font-size: 0.9rem; }

        .cta { padding: 100px 0; background: linear-gradient(135deg, var(--primary) 0%, #E8967E 100%); text-align: center; color: #fff; }
        .cta h2 { font-size: 2.4rem; font-weight: 700; margin-bottom: 16px; line-height: 1.4; }
        .cta p { font-size: 1.1rem; opacity: 0.92; margin-bottom: 40px; }
        .cta .btn-primary { background: #fff; color: var(--primary); box-shadow: 0 4px 0 rgba(0,0,0,0.1); }

        .support { padding: 100px 0; background: #fff; }
        .support-card { max-width: 600px; margin: 0 auto; text-align: center; background: var(--bg-soft); padding: 60px 40px; border-radius: 32px; }
        .support-card h2 { font-size: 1.8rem; font-weight: 700; margin-bottom: 16px; }
        .support-card p { color: var(--text-secondary); margin-bottom: 32px; }
        .support-email { display: inline-flex; align-items: center; gap: 8px; background: var(--primary); color: #fff; padding: 16px 32px; border-radius: 16px; font-weight: 600; transition: transform 0.2s; box-shadow: 0 4px 0 var(--primary-hover); }
        .support-email:hover { transform: translateY(-2px); }

        footer { background: #1A1614; color: rgba(232,224,216,0.7); padding: 60px 0 40px; }
        .footer-content { display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px; }
        .footer-logo { display: flex; align-items: center; gap: 12px; font-size: 1.2rem; font-weight: 700; color: #E8E0D8; }
        .footer-links { display: flex; gap: 32px; flex-wrap: wrap; }
        .footer-links a { color: rgba(232,224,216,0.7); font-size: 0.9rem; transition: color 0.2s; }
        .footer-links a:hover { color: #E8E0D8; }
        .footer-bottom { text-align: center; padding-top: 40px; border-top: 1px solid rgba(232,224,216,0.1); font-size: 0.9rem; }

        @media (max-width: 900px) {
          .hero-content { flex-direction: column-reverse; text-align: center; }
          .hero h1 { font-size: 2.3rem; }
          .hero-desc { margin-left: auto; margin-right: auto; }
          .hero-phone { flex: 0 0 260px; }
          nav, .header-cta { display: none; }
          .feature-detail-inner, .feature-detail-inner.reverse { flex-direction: column; text-align: center; gap: 40px; }
          .feature-text p { margin-left: auto; margin-right: auto; }
          .feature-visual { justify-content: center; }
          .feature-visual .phone-mockup:nth-child(2) { margin-top: 0; }
          .reassure-grid { grid-template-columns: 1fr; gap: 32px; }
          .compact-grid { grid-template-columns: 1fr 1fr; }
          .footer-content { flex-direction: column; gap: 24px; }
          .sp-hide { display: none; }
        }
        @media (max-width: 600px) {
          .hero h1 { font-size: 1.9rem; }
          .hero-desc { font-size: 1.05rem; }
          .section-header h2 { font-size: 1.7rem; }
          .feature-text h2 { font-size: 1.6rem; }
          /* 2枚は「話す→確認」の対なので縦に積まず、横並びのまま縮める */
          .feature-visual { gap: 16px; }
          .feature-visual .phone-mockup { width: 150px; }
          .compact-grid { grid-template-columns: 1fr; }
          .cta h2 { font-size: 1.7rem; }
          .support-card { padding: 40px 24px; }
          .support-card h2 { font-size: 1.5rem; }
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
            <a href="#voice">話すだけ記録</a>
            <a href="#family">家族で共有</a>
            <a href="#features">機能</a>
            <a href="#support">サポート</a>
          </nav>
          <a href={APP_STORE_URL} className="header-cta">ダウンロード</a>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <div className="hero-badge">NEW ・ 話すだけ記録</div>
            <h1>話すだけで、<br className="sp-hide" /><span className="hl">記録</span>になる。</h1>
            <p className="hero-desc">「ミルク140飲んで、さっき寝たよ」と話しかけるだけで、AIがミルクや睡眠の記録を自動でつくります。内容はその場で確かめてから保存できます。</p>
            <a href={APP_STORE_URL} className="btn-primary">App Store でダウンロード</a>
            <p className="hero-note">Apple ID があれば、メール入力なしですぐにはじめられます。</p>
          </div>
          <div className="hero-phone">
            <div className="phone-mockup">
              <Image src="/screenshots/09_voice.png" alt="話すだけ記録 — 音声で記録している画面" width={320} height={695} priority />
            </div>
          </div>
        </div>
      </section>

      {/* 話すだけ記録 */}
      <section className="feature-detail" id="voice">
        <div className="container feature-detail-inner">
          <div className="feature-text">
            <span className="feature-label">話すだけ記録</span>
            <h2>話しかけるだけで、<br className="sp-hide" />記録データができあがります</h2>
            <p>ミルクの量や眠った時間を、いちいち画面をタップして選ばなくても大丈夫です。話した内容からAIがミルク・睡眠などの記録項目を読み取り、記録の形にしてくれます。</p>
            <p className="feature-meta">月20回まで無料で使えます。内容は保存前に確認できます。</p>
          </div>
          <div className="feature-visual">
            <div className="phone-mockup">
              <Image src="/screenshots/09_voice.png" alt="話すだけ記録 — 話しかけている最中の画面" width={200} height={434} />
            </div>
            <div className="phone-mockup">
              <Image src="/screenshots/10_voice_confirm.png" alt="話すだけ記録 — AIが作成した記録を確認する画面" width={200} height={434} />
            </div>
          </div>
        </div>
      </section>

      {/* 夫婦・家族共有 */}
      <section className="feature-detail" id="family" style={{ background: 'var(--bg-soft)' }}>
        <div className="container feature-detail-inner reverse">
          <div className="feature-text">
            <span className="feature-label">夫婦・家族共有</span>
            <h2>6桁のコードで、<br className="sp-hide" />パートナーと記録を分け合えます</h2>
            <p>発行した招待コードをパートナーに伝えるだけで、同じ記録や日記を一緒につけられるようになります。パートナーのApple Watchからも記録できるので、どちらかの手が離せないときも困りません。</p>
          </div>
          <div className="feature-visual">
            <div className="phone-mockup single">
              <Image src="/screenshots/11_family.png" alt="夫婦・家族共有 — 招待コードで家族を招待する画面" width={260} height={565} />
            </div>
          </div>
        </div>
      </section>

      {/* Apple Watch単体記録 */}
      <section className="feature-detail" id="watch">
        <div className="container feature-detail-inner">
          <div className="feature-text">
            <span className="feature-label">Apple Watch単体記録</span>
            <h2>iPhoneを開かなくても、<br className="sp-hide" />手首だけで記録が終わります</h2>
            <p>Apple Watchだけで記録が完結します。電波が届かない場所でも記録は端末にそっと残り、つながったときに自動で送信されます。</p>
          </div>
          <div className="feature-visual">
            <div className="phone-mockup single">
              <Image src="/screenshots/12_watch.png" alt="Apple Watch単体記録 — Watchで記録を入力している画面" width={260} height={241} />
            </div>
          </div>
        </div>
      </section>

      {/* 安心 */}
      <section className="reassure" id="anshin">
        <div className="container">
          <div className="section-header">
            <span className="section-label">安心して使えること</span>
            <h2>そっと、確かめながら使えるように</h2>
          </div>
          <div className="reassure-grid">
            {reassurance.map((r) => (
              <div key={r.n} className="reassure-item">
                <span className="num">{r.n}</span>
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 既存機能（コンパクト） */}
      <section className="compact-section" id="features">
        <div className="container">
          <div className="section-header">
            <span className="section-label">そのほかの機能</span>
            <h2>毎日にそっと寄り添う機能</h2>
            <p>話すだけ記録や家族共有のほかにも、こんな機能があります</p>
          </div>
          <div className="compact-grid">
            {compactFeatures.map((f) => (
              <div key={f.n} className="compact-card">
                <span className="num">{f.n}</span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="screenshot-carousel">
            {galleryShots.map((s) => (
              <div key={s.label} className="screenshot-item">
                <Image src={s.src} alt={s.label} width={220} height={478} />
                <p>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <h2>今日から、話すだけで<br className="sp-hide" />記録してみませんか。</h2>
          <p>無料ではじめられます。</p>
          <a href={APP_STORE_URL} className="btn-primary">App Store でダウンロード</a>
        </div>
      </section>

      {/* Support */}
      <section className="support" id="support">
        <div className="container">
          <div className="support-card">
            <h2>サポート</h2>
            <p>アプリに関するご質問、ご要望、不具合のご報告など、お気軽にお問い合わせください。</p>
            <a href="mailto:icehamburgs@gmail.com" className="support-email">メールで問い合わせ</a>
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
              <a href="#voice">話すだけ記録</a>
              <a href="#family">家族で共有</a>
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
