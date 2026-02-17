import Image from "next/image";
import Link from "next/link";
import AuthRedirect from "./auth-redirect";

const APP_STORE_URL = "https://apps.apple.com/jp/app/%E5%AD%90%E8%82%B2%E3%81%A6%E6%97%A5%E8%A8%98/id6741088430";

const features = [
  {
    icon: "🍼",
    title: "ワンタップ記録",
    description: "授乳、おむつ、睡眠、体温、身長・体重など、よく使う記録をホーム画面からワンタップで入力。",
  },
  {
    icon: "⏱️",
    title: "授乳タイマー",
    description: "母乳は左右別々にストップウォッチで計測。片手でかんたん操作。",
  },
  {
    icon: "📅",
    title: "24時間タイムライン",
    description: "1日の流れがひと目でわかるタイムライン。生活リズムの把握に便利。",
  },
  {
    icon: "📊",
    title: "週間・月間まとめ",
    description: "記録を自動集計してグラフ表示。授乳回数や睡眠時間の推移がわかる。",
  },
  {
    icon: "📝",
    title: "写真付き日記",
    description: "毎日の出来事を写真と一緒に記録。大切な思い出をいつでも振り返れる。",
  },
  {
    icon: "📄",
    title: "PDF出力",
    description: "記録と日記をPDFに出力。印刷して成長記録アルバムに残せる。",
  },
  {
    icon: "🌙",
    title: "ダークモード対応",
    description: "夜間の授乳中でもまぶしくない。端末の設定に合わせて自動切り替え。",
  },
  {
    icon: "👶",
    title: "きょうだい管理",
    description: "複数のお子さまの記録を1つのアカウントで管理。切り替えもかんたん。",
  },
];

const screenshots = [
  { src: "/screenshots/01_home.png", label: "ホーム" },
  { src: "/screenshots/03_timeline.png", label: "タイムライン" },
  { src: "/screenshots/02_calendar.png", label: "カレンダー" },
  { src: "/screenshots/04_summary.png", label: "まとめ" },
  { src: "/screenshots/06_breastfeeding.png", label: "授乳記録" },
  { src: "/screenshots/07_diary.png", label: "日記" },
  { src: "/screenshots/05_pdf.png", label: "PDF出力" },
];

export default function HomePage() {
  return (
    <>
      <AuthRedirect />
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-black/5">
        <div className="max-w-[1100px] mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 text-[#D97757] font-black text-xl no-underline">
            <span className="w-10 h-10 bg-gradient-to-br from-[#D97757] to-[#FFB088] rounded-xl flex items-center justify-center text-lg">📔</span>
            子育て日記
          </Link>
          <nav className="hidden md:flex gap-8">
            <a href="#features" className="text-[#636E72] font-bold text-sm hover:text-[#D97757] transition-colors no-underline">機能</a>
            <a href="#screenshots" className="text-[#636E72] font-bold text-sm hover:text-[#D97757] transition-colors no-underline">スクショ</a>
            <a href="#support" className="text-[#636E72] font-bold text-sm hover:text-[#D97757] transition-colors no-underline">サポート</a>
          </nav>
          <a
            href={APP_STORE_URL}
            className="hidden md:inline-block bg-[#D97757] text-white px-6 py-2.5 rounded-xl font-bold text-sm no-underline hover:-translate-y-0.5 hover:shadow-lg transition-all"
          >
            ダウンロード
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-gradient-to-b from-[#FFF9F7] to-white">
        <div className="max-w-[1100px] mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-16 relative z-10">
          <div className="flex-1 text-center md:text-left">
            <span className="inline-flex items-center gap-2 bg-white border-2 border-[#D97757] text-[#D97757] px-4 py-2 rounded-full text-sm font-bold mb-6">
              ✨ 無料で使える
            </span>
            <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">
              毎日の<span className="text-[#D97757]">成長</span>を<br />かんたん記録
            </h1>
            <p className="text-lg text-[#636E72] mb-10 max-w-[480px] mx-auto md:mx-0">
              授乳・おむつ・睡眠をワンタップで記録。<br />忙しい育児中でもサッと使えます。
            </p>
            <a
              href={APP_STORE_URL}
              className="inline-flex items-center gap-2 bg-[#D97757] text-white px-8 py-4 rounded-2xl font-bold text-lg no-underline shadow-[0_4px_0_#C4684A] hover:-translate-y-0.5 hover:shadow-[0_6px_0_#C4684A] active:translate-y-0.5 active:shadow-[0_2px_0_#C4684A] transition-all"
            >
              📱 App Store でダウンロード
            </a>
          </div>
          <div className="w-[260px] md:w-[320px] flex-shrink-0">
            <div className="relative">
              <div className="absolute -inset-5 bg-gradient-to-br from-[#D97757] to-[#FFB088] rounded-[50px] opacity-20 -z-10" />
              <Image
                src="/screenshots/01_home.png"
                alt="子育て日記 ホーム画面"
                width={320}
                height={693}
                className="w-full rounded-[40px] shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 md:py-32 bg-white">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="text-center mb-20">
            <span className="inline-block bg-[#FFF9F7] text-[#D97757] px-5 py-2 rounded-full text-sm font-bold mb-4">🌟 機能紹介</span>
            <h2 className="text-3xl md:text-4xl font-black mb-4">育児がもっとラクになる</h2>
            <p className="text-[#636E72] text-lg">シンプルで使いやすい機能を揃えました</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex gap-6 p-8 bg-[#FFF9F7] rounded-3xl hover:-translate-y-1 hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-md flex-shrink-0">
                  {f.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                  <p className="text-[#636E72]">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section id="screenshots" className="py-24 md:py-32 bg-gradient-to-b from-[#FFF9F7] to-white">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-white text-[#D97757] px-5 py-2 rounded-full text-sm font-bold mb-4">📱 スクリーンショット</span>
            <h2 className="text-3xl md:text-4xl font-black">アプリの画面をチェック</h2>
          </div>
        </div>
        <div className="flex gap-6 overflow-x-auto px-10 pb-4 snap-x snap-mandatory scrollbar-hide">
          {screenshots.map((s) => (
            <div key={s.label} className="flex-shrink-0 w-[260px] snap-center">
              <Image
                src={s.src}
                alt={s.label}
                width={260}
                height={563}
                className="w-full rounded-[32px] shadow-xl hover:scale-[1.02] transition-transform"
              />
              <p className="text-center mt-4 font-bold text-[#636E72]">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center text-white bg-gradient-to-br from-[#D97757] to-[#E8967E]">
        <div className="max-w-[1100px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black mb-4">今すぐはじめよう</h2>
          <p className="text-lg opacity-90 mb-10">無料でダウンロード</p>
          <a
            href={APP_STORE_URL}
            className="inline-flex items-center gap-2 bg-white text-[#D97757] px-8 py-4 rounded-2xl font-bold text-lg no-underline shadow-[0_4px_0_rgba(0,0,0,0.1)] hover:-translate-y-0.5 transition-all"
          >
            📱 App Store でダウンロード
          </a>
        </div>
      </section>

      {/* Support */}
      <section id="support" className="py-24 bg-white">
        <div className="max-w-[600px] mx-auto px-6">
          <div className="bg-[#FFF9F7] rounded-[32px] p-12 md:p-16 text-center">
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-4xl shadow-md mx-auto mb-6">💬</div>
            <h2 className="text-2xl md:text-3xl font-black mb-4">サポート</h2>
            <p className="text-[#636E72] mb-8">
              アプリに関するご質問、ご要望、不具合のご報告など、<br className="hidden md:inline" />お気軽にお問い合わせください。
            </p>
            <a
              href="mailto:icehamburgs@gmail.com"
              className="inline-flex items-center gap-2 bg-[#D97757] text-white px-8 py-4 rounded-2xl font-bold no-underline shadow-[0_4px_0_#C4684A] hover:-translate-y-0.5 transition-all"
            >
              📧 メールで問い合わせ
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D3436] text-white/70 pt-16 pb-10">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
            <Link href="/" className="flex items-center gap-3 text-white font-black text-xl no-underline">
              <span className="w-10 h-10 bg-gradient-to-br from-[#D97757] to-[#FFB088] rounded-xl flex items-center justify-center text-lg">📔</span>
              子育て日記
            </Link>
            <div className="flex gap-8">
              <a href="#features" className="text-white/70 hover:text-white text-sm no-underline transition-colors">機能</a>
              <a href="#support" className="text-white/70 hover:text-white text-sm no-underline transition-colors">サポート</a>
              <Link href="/privacy" className="text-white/70 hover:text-white text-sm no-underline transition-colors">プライバシーポリシー</Link>
            </div>
          </div>
          <div className="text-center pt-10 border-t border-white/10 text-sm">
            © 2025 Takuya Hiraoji. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
