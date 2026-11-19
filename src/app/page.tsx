import Image from "next/image";
import Link from "next/link";
import AuthRedirect from "./auth-redirect";
import Gallery from "./gallery";
import LpMotion from "./lp-motion";
import { RecordIcon, RECORD_ACCENT } from "./icons/RecordIcon";
import { UiIcon } from "./icons/UiIcon";
import { BookIcon, CalendarIcon, GraphIcon, PrinterIcon } from "./icons/TabIcons";

// LP→App Storeのリンク。ASCの「キャンペーン」で ct=lp として数える（割り当て表: docs/growth-2026-11.md）。
// pt（プロバイダトークン）はASC（App Analytics → キャンペーンリンクの作成）でしか発行できない。
// 入手したら ASC_PROVIDER_TOKEN を埋めるだけで計測が有効になる（空の間は ct だけ付いたURL。リンクとしては普通に開ける）。
const ASC_PROVIDER_TOKEN = "";
const APP_STORE_URL = `https://apps.apple.com/jp/app/id6758967429?${ASC_PROVIDER_TOKEN ? `pt=${ASC_PROVIDER_TOKEN}&` : ""}ct=lp&mt=8`;

// 話すだけ記録・家族共有・Watch単体記録に続く「そのほかの機能」。
// 最初の6つはそのまま見せ、残りは「ほかの機能を見る」で開く（モバイルでの長さ対策）。
// icon はアプリでその機能に使っているもの（励ましカードだけは専用が無いので、コラム画面で使っている star）
const ICON_INK = "#2B2724";
const compactFeatures = [
  { icon: <RecordIcon name="diary" size={24} color={ICON_INK} />, title: "音声で日記", desc: "話しかけると、AIがフィラーを取り除いて、やさしい日記に整えます。" },
  { icon: <UiIcon name="cloud" size={24} color={ICON_INK} />, title: "今日のひとこと", desc: "生後0日から3歳まで、その日の月齢に合わせた観察コメントをお届けします。" },
  { icon: <UiIcon name="book" size={24} color={ICON_INK} />, title: "思い出カード", desc: "1年前・半年前・3ヶ月前の今日の日記が、ホームにそっと現れます。" },
  { icon: <UiIcon name="image" size={24} color={ICON_INK} />, title: "月齢記念カード", desc: "生後◯ヶ月の記念日に、写真と月齢を入れたカードを作って共有できます。" },
  { icon: <UiIcon name="star" size={24} color={ICON_INK} />, title: "励ましカード", desc: "実在の出典つきの60枚。短い言葉に、そっと背中を押してもらえる日があります。" },
  { icon: <BookIcon size={24} color={ICON_INK} />, title: "コラム", desc: "専門家の出典つき。北欧など海外の子育て観にも触れられます。" },
  { icon: <CalendarIcon size={24} color={ICON_INK} />, title: "カレンダー・タイムライン", desc: "記録と日記をまとめて、1日・1週間の流れで振り返れます。" },
  { icon: <GraphIcon size={24} color={ICON_INK} />, title: "まとめグラフ", desc: "授乳の回数や睡眠時間の推移が、ひと目でわかります。" },
  { icon: <PrinterIcon size={24} color={ICON_INK} />, title: "PDF書き出し", desc: "記録と日記を、そのまま思い出のアルバムに残せます。" },
  { icon: <UiIcon name="bell" size={24} color={ICON_INK} />, title: "夜の日記リマインド", desc: "その日の日記を書いた夜には届かない、控えめなお知らせです。" },
  { icon: <UiIcon name="moon" size={24} color={ICON_INK} />, title: "ダークモード", desc: "夜中の授乳でも、画面がまぶしくありません。" },
  { icon: <UiIcon name="baby" size={24} color={ICON_INK} />, title: "きょうだい管理", desc: "複数のお子さまの記録も、ひとつのアカウントで見られます。" },
];
const FEATURES_VISIBLE = 6;

// 話すだけ記録の画面（09_voice）に出ている「などの記録に」と同じ4つ
const voiceExamples = [
  { name: "milk", label: "ミルク" },
  { name: "sleep", label: "睡眠" },
  { name: "poop", label: "うんち" },
  { name: "temperature", label: "体温" },
] as const;

// alt はASO語彙(育児記録・授乳)と接続するため、ラベルより説明的に書く
const galleryShots = [
  { src: "/screenshots/01_home.png", label: "ホーム", alt: "育児記録アプリ「子育て日記」のホーム画面" },
  { src: "/screenshots/02_timeline.png", label: "タイムライン", alt: "育児記録を時系列で振り返るタイムライン画面" },
  { src: "/screenshots/03_breastfeeding.png", label: "授乳タイマー", alt: "授乳を左右べつべつに計測できる授乳タイマー画面" },
  { src: "/screenshots/04_diary.png", label: "日記", alt: "音声から作った育児日記の画面" },
  { src: "/screenshots/05_calendar.png", label: "カレンダー", alt: "育児記録をカレンダーで見わたす画面" },
  { src: "/screenshots/06_summary.png", label: "まとめ", alt: "授乳回数や睡眠時間のまとめグラフ画面" },
  { src: "/screenshots/07_pdf.png", label: "PDF出力", alt: "育児記録と日記をPDFに書き出す画面" },
  { src: "/screenshots/08_darkmode.png", label: "ダークモード", alt: "夜間の授乳向けダークモード画面" },
];

const reassurance = [
  { title: "保存前に確認できます", desc: "話すだけ記録も、音声日記も、AIが作った内容をそのまま保存することはありません。確認してから保存できます。", img: "/illustrations/anshin-check.png", alt: "AIが作った育児記録を、スマホで確認してチェックを入れるイラスト" },
  { title: "データはご本人と家族のもの", desc: "記録や日記を見られるのは、ご本人と、招待コードで共有した家族だけです。", img: "/illustrations/anshin-family.png", alt: "家のかたちの中で寄り添う夫婦と赤ちゃんのイラスト" },
  { title: "広告はありません", desc: "アプリの中に広告を表示することはありません。", img: "/illustrations/anshin-noad.png", alt: "月あかりの下でしずかに眠る赤ちゃんのイラスト" },
];

export default function HomePage() {
  return (
    <>
      <AuthRedirect />
      <LpMotion />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MobileApplication",
            name: "子育て日記",
            description:
              "話すだけで育児記録がつくれるアプリ。授乳・ミルク・睡眠の記録、音声日記、夫婦での共有、Apple Watch単体での記録に対応。",
            operatingSystem: "iOS",
            applicationCategory: "LifestyleApplication",
            offers: { "@type": "Offer", price: "0", priceCurrency: "JPY" },
            installUrl: APP_STORE_URL,
          }),
        }}
      />
      <style>{`
        /*
          トンマナ: 白地・墨と灰の2段の文字・強い色は主ボタンの1色だけ・1列・区切りは余白
          （_cos-briefs/refs/editorial-mono-tone）。あたたかさはイラストとアプリ画面の色で残す。
          コントラストは全てWCAG AA（4.5:1）以上: ink 14:1 / grey 7.1:1 / 白文字on accent 4.98:1
        */
        :root {
          --ink: #2B2724;
          --grey: #5C5752;
          --line: #E7E2DC;
          --ground: #FFFFFF;
          --soft: #F4F1ED;
          --app-bg: #F5F0EA;
          --accent: #B4532F;
          --accent-press: #97452A;
          --night: #1F1B18;
          --night-text: #F3EEE8;
          --night-grey: #B5ADA6;
          --ease: cubic-bezier(.2,.7,.2,1);
        }
        body { color: var(--ink); background: var(--ground); }
        @media (prefers-reduced-motion: no-preference) { html { scroll-behavior: smooth; } }
        section[id] { scroll-margin-top: 72px; }

        .wrap { max-width: 600px; margin: 0 auto; padding: 0 20px; }
        .wide { max-width: 880px; margin: 0 auto; padding: 0 20px; }
        .kw { word-break: keep-all; overflow-wrap: anywhere; text-wrap: balance; }
        p { line-break: strict; }

        /* ボタン: ピル形2種（主=差し色、副=薄い灰）。押した感触は縮みで返す */
        .btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: 52px; padding: 0 28px; border-radius: 999px; font-weight: 700; font-size: 1.0625rem; letter-spacing: .02em; transition: transform .18s var(--ease), background-color .18s; -webkit-tap-highlight-color: transparent; }
        .btn:hover { transform: translateY(-1px); }
        .btn:active { transform: scale(.97); }
        .btn-primary { background: var(--accent); color: #fff; }
        .btn-primary:hover { background: var(--accent-press); }
        .btn-sub { background: var(--soft); color: var(--ink); }
        .btn-sub:hover { background: #ECE7E1; }
        a:focus-visible, button:focus-visible, summary:focus-visible, [tabindex]:focus-visible { outline: 3px solid var(--accent); outline-offset: 3px; border-radius: 8px; }

        /* ヘッダー: 全幅でダウンロードを出す。スクロールで小さく・すりガラスに */
        .header { position: fixed; inset: 0 0 auto 0; z-index: 100; background: rgba(255,255,255,.96); transition: background-color .25s, box-shadow .25s; }
        .header-inner { max-width: 1040px; margin: 0 auto; padding: 0 20px; height: 68px; display: flex; align-items: center; justify-content: space-between; gap: 16px; transition: height .25s var(--ease); }
        .header[data-scrolled] { background: rgba(255,255,255,.82); -webkit-backdrop-filter: saturate(1.4) blur(12px); backdrop-filter: saturate(1.4) blur(12px); box-shadow: 0 1px 0 var(--line); }
        .header[data-scrolled] .header-inner { height: 56px; }
        .logo { display: flex; align-items: center; gap: 10px; font-size: 1.125rem; font-weight: 700; color: var(--ink); }
        .logo-icon { width: 36px; height: 36px; border-radius: 10px; overflow: hidden; flex-shrink: 0; transition: transform .25s var(--ease); }
        .header[data-scrolled] .logo-icon { transform: scale(.89); }
        .header nav { display: flex; gap: 28px; margin-left: auto; margin-right: 12px; }
        .header nav a { color: var(--grey); font-weight: 500; font-size: .9375rem; transition: color .2s; }
        .header nav a:hover { color: var(--ink); }
        .header .btn { min-height: 40px; padding: 0 18px; font-size: .875rem; }

        /* ヒーロー: 文章が先、実演が後（モバイルの最初の画面に見出しとボタンを入れる） */
        .hero { padding: 104px 0 0; text-align: center; }
        .eyebrow { color: var(--grey); font-size: .9375rem; font-weight: 500; letter-spacing: .04em; margin-bottom: 14px; }
        .hero h1 { font-size: 2.25rem; line-height: 1.3; font-weight: 700; letter-spacing: -.01em; margin-bottom: 18px; }
        .lead { font-size: 1.0625rem; line-height: 1.85; font-weight: 500; color: var(--ink); margin: 0 auto 28px; max-width: 34em; }
        .hero-note { margin-top: 14px; color: var(--grey); font-size: .875rem; }

        /* 話す→記録になる、の実演（実際の画面 10_voice_confirm と同じ内容）。文字なのでどの幅でもくっきり */
        .demo { margin: 48px auto 0; max-width: 400px; background: var(--app-bg); border-radius: 28px; padding: 22px 18px 18px; text-align: left; }
        .demo-voice { display: flex; align-items: center; gap: 12px; font-size: 1.0625rem; font-weight: 500; }
        .rec-dot { flex: 0 0 auto; width: 40px; height: 40px; border-radius: 50%; background: var(--accent); display: inline-flex; align-items: center; justify-content: center; }
        .demo-arrow { color: var(--grey); font-size: .8125rem; margin: 14px 0 10px 52px; }
        .demo-records { list-style: none; display: grid; gap: 8px; }
        .demo-records li { display: grid; grid-template-columns: auto auto 1fr auto; align-items: center; gap: 10px; background: #fff; border-radius: 14px; padding: 14px 16px; }
        .rec-name { font-weight: 700; }
        .rec-val { font-weight: 500; }
        .rec-time { color: var(--grey); font-size: .875rem; font-variant-numeric: tabular-nums; }
        .vex { list-style: none; display: flex; flex-wrap: wrap; align-items: center; gap: 10px 18px; margin: 20px 0 16px; }
        .vex li { display: inline-flex; align-items: center; gap: 6px; font-size: .9375rem; font-weight: 500; }
        .vex .vex-more { color: var(--grey); font-weight: 400; }
        .demo-foot { margin-top: 12px; color: var(--grey); font-size: .8125rem; text-align: center; }

        @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(180,83,47,.35); } 100% { box-shadow: 0 0 0 14px rgba(180,83,47,0); } }
        @keyframes rise { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }
        @media (prefers-reduced-motion: no-preference) {
          .hero-in > * { animation: rise .6s var(--ease) both; }
          .hero-in > :nth-child(2) { animation-delay: .06s; }
          .hero-in > :nth-child(3) { animation-delay: .12s; }
          .hero-in > :nth-child(4) { animation-delay: .18s; }
          .hero-in > :nth-child(5) { animation-delay: .22s; }
          .rec-dot { animation: pulse 1.2s ease-out .5s 2; }
          .demo-voice { animation: rise .5s var(--ease) .35s both; }
          .demo-arrow { animation: rise .5s var(--ease) 1.1s both; }
          .demo-records li { animation: rise .55s var(--ease) both; }
          .demo-records li:nth-child(1) { animation-delay: 1.45s; }
          .demo-records li:nth-child(2) { animation-delay: 1.7s; }
          .demo-foot { animation: rise .5s var(--ease) 2s both; }
        }

        /* 入場（スクロールで1回だけ） */
        .motion-ready [data-reveal] { transition: opacity .7s var(--ease), transform .7s var(--ease); }
        .motion-ready [data-reveal][data-hidden] { opacity: 0; transform: translateY(16px); }

        /* セクション共通: 区切りは余白だけ。見出しの前は段落間の約6倍 */
        .sec { padding: 96px 0 0; }
        .label { color: var(--grey); font-size: .875rem; font-weight: 700; letter-spacing: .06em; margin-bottom: 12px; }
        .sec h2 { font-size: 1.625rem; line-height: 1.45; font-weight: 700; letter-spacing: -.005em; margin-bottom: 16px; }
        .sec p { font-size: 1rem; line-height: 1.9; }
        .sec p + p { margin-top: 12px; }
        .meta { color: var(--grey); font-size: .9375rem; }

        .steps { list-style: none; margin-top: 24px; display: grid; gap: 12px; counter-reset: s; }
        .steps li { display: flex; align-items: center; gap: 14px; font-size: 1rem; font-weight: 500; counter-increment: s; }
        .steps li::before { content: counter(s); flex: 0 0 auto; display: inline-flex; align-items: center; justify-content: center; width: 30px; height: 30px; border-radius: 50%; border: 1.5px solid var(--ink); font-size: .875rem; font-weight: 700; }

        /* ポイントのイラスト（Codex 作・既存イラストと同じ家族と画風） */
        .illust { display: block; height: auto; margin: 32px auto 0; }
        .illust-sq { width: min(280px, 72%); }
        .illust-wide { width: min(440px, 100%); }
        .illust + .crop { margin-top: 24px; }
        /* スクショは読める部分だけを大きく切り出す（下は切れてよい） */
        .crop { margin: 36px auto 0; max-width: 380px; border-radius: 24px; overflow: hidden; background: var(--app-bg); }
        .crop img { display: block; width: 100%; height: auto; }
        .crop-family { aspect-ratio: 860 / 1010; }
        .crop-watch { max-width: 300px; aspect-ratio: 520 / 362; background: #000; border-radius: 36px; padding: 10px; }
        .crop-watch img { border-radius: 24px; }

        /* 安心: イラスト左・文右の横並び。番号札はやめる */
        .anshin { list-style: none; margin-top: 32px; display: grid; gap: 28px; }
        .anshin li { display: grid; grid-template-columns: 88px 1fr; gap: 18px; align-items: start; }
        .anshin img { width: 88px; height: 88px; }
        .anshin h3 { font-size: 1.0625rem; font-weight: 700; margin: 4px 0 4px; }
        .anshin p { color: var(--grey); font-size: .9375rem; line-height: 1.8; }

        /* そのほかの機能: 枠なしの一覧。見出し＋灰の1〜2行 */
        .flist { list-style: none; margin-top: 28px; display: grid; gap: 20px; }
        .flist li { display: grid; grid-template-columns: 24px 1fr; column-gap: 14px; }
        .ficon { grid-row: span 2; padding-top: 1px; line-height: 0; }
        .flist h3 { font-size: 1rem; font-weight: 700; margin-bottom: 2px; }
        .flist p { color: var(--grey); font-size: .9375rem; line-height: 1.75; }
        .more { margin-top: 20px; }
        .more summary { list-style: none; cursor: pointer; }
        .more summary::-webkit-details-marker { display: none; }
        .more[open] summary { display: none; }
        .more[open] .flist { margin-top: 0; }
        @media (prefers-reduced-motion: no-preference) {
          .more[open] .flist li { animation: rise .45s var(--ease) both; }
          .more[open] .flist li:nth-child(2) { animation-delay: .04s; }
          .more[open] .flist li:nth-child(3) { animation-delay: .08s; }
          .more[open] .flist li:nth-child(4) { animation-delay: .12s; }
          .more[open] .flist li:nth-child(5) { animation-delay: .16s; }
          .more[open] .flist li:nth-child(6) { animation-delay: .2s; }
        }

        /* ギャラリー: 次の1枚が覗く幅＋送るボタン＋進み具合のバー */
        .gallery { margin-top: 40px; }
        .gallery-track { display: flex; gap: 16px; overflow-x: auto; scroll-snap-type: x mandatory; scroll-padding: 0 20px; padding: 4px 20px 8px; scrollbar-width: none; -webkit-overflow-scrolling: touch; }
        .gallery-track::-webkit-scrollbar { display: none; }
        .shot { flex: 0 0 64vw; max-width: 250px; scroll-snap-align: start; }
        .shot img { display: block; width: 100%; height: auto; border-radius: 22px; background: var(--app-bg); }
        .shot figcaption { margin-top: 10px; text-align: center; font-size: .875rem; font-weight: 500; color: var(--grey); }
        .gallery-bar { display: flex; align-items: center; gap: 16px; padding: 12px 20px 0; }
        .gallery-progress { flex: 1; height: 3px; background: var(--line); border-radius: 3px; overflow: hidden; }
        .gallery-progress span { display: block; height: 100%; background: var(--ink); transform-origin: left; transition: transform .15s linear; }
        .gallery-btns { display: flex; gap: 8px; }
        .btn-round { width: 44px; height: 44px; border-radius: 50%; border: 0; background: var(--soft); color: var(--ink); font-size: 1.125rem; cursor: pointer; transition: transform .18s var(--ease), opacity .2s, background-color .18s; }
        .btn-round:hover:not(:disabled) { background: #ECE7E1; }
        .btn-round:active:not(:disabled) { transform: scale(.92); }
        .btn-round:disabled { opacity: .35; cursor: default; }

        /* 締めの呼びかけ: 地のまま */
        .cta { padding: 120px 0 0; text-align: center; }
        .cta-illust { display: block; width: min(320px, 80%); height: auto; margin: 0 auto 20px; }
        .cta h2 { font-size: 1.75rem; line-height: 1.45; font-weight: 700; margin-bottom: 12px; }
        .cta p { color: var(--grey); margin-bottom: 28px; }

        .support { padding: 112px 0 96px; text-align: center; }
        .support h2 { font-size: 1.25rem; font-weight: 700; margin-bottom: 8px; }
        .support p { color: var(--grey); font-size: .9375rem; margin-bottom: 20px; }

        /* フッター: 反転。リンクは押しやすい高さに */
        footer { background: var(--night); color: var(--night-grey); padding: 56px 0 36px; }
        .footer-logo { display: inline-flex; align-items: center; gap: 10px; font-size: 1.0625rem; font-weight: 700; color: var(--night-text); }
        .footer-links { list-style: none; display: flex; flex-wrap: wrap; gap: 0 8px; margin: 24px 0 28px -10px; }
        .footer-links a { display: inline-flex; align-items: center; min-height: 44px; padding: 0 10px; color: var(--night-text); font-size: .9375rem; border-radius: 8px; transition: background-color .2s; }
        .footer-links a:hover { background: rgba(255,255,255,.08); }
        .footer-bottom { padding-top: 20px; border-top: 1px solid rgba(243,238,232,.14); font-size: .8125rem; }

        @media (min-width: 720px) {
          /* PCもスマホと同じ「アイコン｜名前の下に説明」。横3列にすると名前と説明が折り返して1文字だけの行が出る */
          .shot { flex-basis: 230px; }
        }
        @media (min-width: 900px) {
          .hero { padding-top: 160px; }
          .hero h1 { font-size: 3.5rem; margin-bottom: 24px; }
          .lead { font-size: 1.1875rem; }
          .demo { margin-top: 64px; }
          .sec { padding-top: 144px; }
          .sec h2 { font-size: 2.125rem; }
          .sec p { font-size: 1.0625rem; }
          .crop { max-width: 400px; }
          .cta { padding-top: 168px; }
          .cta h2 { font-size: 2.25rem; }
          .wide .gallery-track { padding-left: 0; padding-right: 0; scroll-padding: 0; }
          .wide .gallery-bar { padding-left: 0; padding-right: 0; }
        }
        @media (max-width: 899px) {
          .header nav { display: none; }
          .wide .gallery-track, .wide .gallery-bar { margin: 0 -20px; }
        }
        @media (max-width: 380px) {
          .hero h1 { font-size: 2rem; }
          .header .logo span { display: none; }
        }
      `}</style>

      {/* Header */}
      <header className="header" data-header>
        <div className="header-inner">
          <Link href="/" className="logo">
            <div className="logo-icon"><Image src="/app-icon.png" alt="" width={36} height={36} priority /></div>
            <span>子育て日記</span>
          </Link>
          <nav aria-label="ページ内">
            <a href="#voice">話すだけ記録</a>
            <a href="#family">家族で共有</a>
            <a href="#features">機能</a>
            <a href="#support">サポート</a>
          </nav>
          <a href={APP_STORE_URL} className="btn btn-primary">ダウンロード</a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="hero">
          <div className="wrap hero-in">
            <p className="eyebrow">話すだけの育児記録アプリ</p>
            <h1 className="kw">話すだけで、<wbr />記録になる。</h1>
            <p className="lead">「ミルク140飲んで、さっき寝たよ」と話しかけるだけで、AIが授乳・ミルク・睡眠の育児記録を自動でつくります。内容はその場で確かめてから保存できます。</p>
            <div><a href={APP_STORE_URL} className="btn btn-primary">App Store でダウンロード</a></div>
            <p className="hero-note kw">無料ではじめられます。<wbr />Apple ID があれば、<wbr />メール入力なしで<wbr />すぐにはじめられます。</p>
          </div>
          <div className="wrap">
            <div className="demo" role="img" aria-label="話すだけ記録の例：「ミルク140飲んで、さっき寝たよ」と話すと、ミルク140mlと睡眠ねんね開始の2つの記録ができる">
              <p className="demo-voice"><span className="rec-dot" aria-hidden="true"><UiIcon name="mic" size={22} color="#fff" /></span><span className="kw">「ミルク140飲んで、<wbr />さっき寝たよ」</span></p>
              <p className="demo-arrow" aria-hidden="true">↓ AIが記録の形にします</p>
              <ul className="demo-records" aria-hidden="true">
                <li><RecordIcon name="milk" size={24} color={RECORD_ACCENT.milk} /><span className="rec-name">ミルク</span><span className="rec-val">140ml</span><span className="rec-time">9:56</span></li>
                <li><RecordIcon name="sleep" size={24} color={RECORD_ACCENT.sleep} /><span className="rec-name">睡眠</span><span className="rec-val">ねんね開始</span><span className="rec-time">9:41</span></li>
              </ul>
              <p className="demo-foot" aria-hidden="true">確かめてから「この内容で記録する」</p>
            </div>
          </div>
        </section>

        {/* 話すだけ記録 */}
        <section className="sec" id="voice">
          <div className="wrap" data-reveal>
            <p className="label">話すだけ記録</p>
            <h2 className="kw">話しかけるだけで、<wbr />育児記録が<wbr />できあがります</h2>
            <p>ミルクの量や眠った時間を、いちいち画面をタップして選ばなくても大丈夫です。話した内容からAIが授乳・ミルク・睡眠などの記録項目を読み取り、記録の形にしてくれます。</p>
            <Image src="/illustrations/voice-handsfree.png" alt="ソファで赤ちゃんにミルクをあげながら、そばのスマホに話しかけて育児記録をつける親のイラスト" width={1254} height={1254} sizes="(max-width: 600px) 72vw, 280px" className="illust illust-sq" />
            <ul className="vex" aria-label="話して記録できる項目の例">
              {voiceExamples.map((v) => (
                <li key={v.name}><RecordIcon name={v.name} size={28} color={RECORD_ACCENT[v.name]} />{v.label}</li>
              ))}
              <li className="vex-more">などの記録に</li>
            </ul>
            <p className="meta kw">月20回まで無料で使えます。<wbr />内容は保存前に確認できます。</p>
          </div>
        </section>

        {/* 夫婦・家族共有 */}
        <section className="sec" id="family">
          <div className="wrap" data-reveal>
            <p className="label">夫婦・家族共有</p>
            <h2 className="kw">6桁のコードで、<wbr />夫婦の育児記録が<wbr />ひとつになります</h2>
            <p>6桁の招待コードを、LINEなどで1タップ送るだけ。同じ記録と日記を、ふたりで一緒につけられるようになります。パートナーのApple Watchからも記録できるので、どちらかの手が離せないときも困りません。</p>
            <ol className="steps">
              <li>パートナーがアプリを入れる</li>
              <li>登録する</li>
              <li>招待コードを入力する</li>
            </ol>
            <p className="meta kw" style={{ marginTop: 16 }}>パートナー側の準備は、<wbr />この3ステップだけです。</p>
          </div>
          <div className="wrap" data-reveal>
            <Image src="/illustrations/family-share.png" alt="離れた場所にいる夫婦のスマホが、ひとつの育児記録につながっているイラスト" width={1448} height={1086} sizes="(max-width: 600px) 92vw, 440px" className="illust illust-wide" />
            <div className="crop crop-family">
              <Image src="/screenshots/11_family.png" alt="夫婦・家族共有 — 6桁の招待コードでパートナーと育児記録を共有する画面" width={860} height={1868} sizes="(max-width: 600px) 92vw, 400px" />
            </div>
          </div>
        </section>

        {/* Apple Watch単体記録 */}
        <section className="sec" id="watch">
          <div className="wrap" data-reveal>
            <p className="label">Apple Watch単体記録</p>
            <h2 className="kw">iPhoneを開かなくても、<wbr />手首だけで<wbr />記録が終わります</h2>
            <p>Apple Watchだけで記録が完結します。電波が届かない場所でも記録は端末にそっと残り、つながったときに自動で送信されます。</p>
          </div>
          <div className="wrap" data-reveal>
            <Image src="/illustrations/watch-wrist.png" alt="赤ちゃんを抱いたまま、手首のApple Watchをタップして育児記録をつける親のイラスト" width={1254} height={1254} sizes="(max-width: 600px) 72vw, 280px" className="illust illust-sq" />
            <div className="crop crop-watch">
              <Image src="/screenshots/12_watch.png" alt="Apple Watch単体記録 — Watchだけで育児記録を入力している画面" width={520} height={482} sizes="300px" />
            </div>
          </div>
        </section>

        {/*
          成長グラフ(v2.4.0の身長・体重記録) — App Storeで v2.4.0 の公開を確認してから有効化する。
          2026-08-25時点の公開版は v2.3.0(審査中のため掲載不可)。有効化はこのコメントを外すだけ。
          イラストは public/illustrations/growth.png に配置済み。2026-11 の1列レイアウトに合わせてある。

        <section className="sec" id="growth">
          <div className="wrap" data-reveal>
            <p className="label">身長・体重の成長グラフ</p>
            <h2 className="kw">この子のペースの、<wbr />成長カーブだけ。</h2>
            <p>身長と体重を記録すると、成長グラフになります。ほかの子と比べるための目盛りは、あえて置いていません。少しずつ伸びていく、この子だけのカーブを眺められます。</p>
            <Image src="/illustrations/growth.png" alt="身長・体重の育児記録からできる、この子だけの成長カーブをのぼる赤ちゃんのイラスト" width={320} height={320} style={{ display: 'block', margin: '32px auto 0', width: 260, height: 'auto' }} />
          </div>
        </section>
        */}

        {/* 安心 */}
        <section className="sec" id="anshin">
          <div className="wrap" data-reveal>
            <p className="label">安心して使えること</p>
            <h2 className="kw">そっと、<wbr />確かめながら<wbr />使えるように</h2>
            <ul className="anshin">
              {reassurance.map((r) => (
                <li key={r.title}>
                  <Image src={r.img} alt={r.alt} width={88} height={88} sizes="88px" />
                  <div>
                    <h3>{r.title}</h3>
                    <p>{r.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* そのほかの機能 */}
        <section className="sec" id="features">
          <div className="wrap" data-reveal>
            <p className="label">そのほかの機能</p>
            <h2 className="kw">育児の毎日に<wbr />そっと寄り添う機能</h2>
            <p className="meta kw">話すだけ記録や夫婦での共有のほかにも、<wbr />こんな機能があります。</p>
            <ul className="flist">
              {compactFeatures.slice(0, FEATURES_VISIBLE).map((f) => (
                <li key={f.title}><span className="ficon">{f.icon}</span><h3>{f.title}</h3><p>{f.desc}</p></li>
              ))}
            </ul>
            <details className="more">
              <summary className="btn btn-sub">ほかの{compactFeatures.length - FEATURES_VISIBLE}つの機能を見る</summary>
              <ul className="flist">
                {compactFeatures.slice(FEATURES_VISIBLE).map((f) => (
                  <li key={f.title}><span className="ficon">{f.icon}</span><h3>{f.title}</h3><p>{f.desc}</p></li>
                ))}
              </ul>
            </details>
          </div>
          <div className="wide" data-reveal>
            <Gallery shots={galleryShots} />
          </div>
        </section>

        {/* CTA */}
        <section className="cta">
          <div className="wrap" data-reveal>
            <Image src="/illustrations/cta-night.png" alt="夜、赤ちゃんを抱きながら話しかけて育児記録をつける親のイラスト" width={360} height={240} sizes="320px" className="cta-illust" />
            <h2 className="kw">今日から、<wbr />話すだけで<wbr />記録してみませんか。</h2>
            <p>無料ではじめられます。</p>
            <a href={APP_STORE_URL} className="btn btn-primary">App Store でダウンロード</a>
          </div>
        </section>

        {/* Support */}
        <section className="support" id="support">
          <div className="wrap" data-reveal>
            <h2>サポート</h2>
            <p className="kw">アプリに関するご質問、ご要望、<wbr />不具合のご報告など、<wbr />お気軽にお問い合わせください。</p>
            <a href="mailto:icehamburgs@gmail.com" className="btn btn-sub">メールで問い合わせ</a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="wrap">
          <Link href="/" className="footer-logo">
            <div className="logo-icon"><Image src="/app-icon.png" alt="" width={36} height={36} /></div>
            子育て日記
          </Link>
          <ul className="footer-links">
            <li><a href="#voice">話すだけ記録</a></li>
            <li><a href="#family">家族で共有</a></li>
            <li><a href="#features">機能</a></li>
            <li><a href="#support">サポート</a></li>
            <li><a href={APP_STORE_URL}>App Store</a></li>
            <li><Link href="/privacy">プライバシーポリシー</Link></li>
          </ul>
          <div className="footer-bottom">
            <p>© 2025–2026 ICE HAMBURG K.K. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
