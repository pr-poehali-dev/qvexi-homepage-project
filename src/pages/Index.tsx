import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { label: "Главная", href: "#home" },
  { label: "О сервисе", href: "#about" },
  { label: "Возможности", href: "#features" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакты", href: "#contact" },
];

const FEATURES = [
  {
    icon: "Video",
    title: "Голосовые и видеозвонки HD",
    description: "Кристально чистый звук и видео в реальном времени. Звонки без задержек даже при слабом интернете — благодаря нашей адаптивной технологии.",
    color: "electric",
    glow: "rgba(0,212,255,0.25)",
  },
  {
    icon: "Users",
    title: "Групповые чаты и каналы",
    description: "Создавайте группы до 100 000 участников, запускайте каналы для аудитории, организуйте сообщества с гибкими правами доступа.",
    color: "violet",
    glow: "rgba(123,47,255,0.25)",
  },
  {
    icon: "Shield",
    title: "Сквозное шифрование",
    description: "Ваши сообщения и звонки защищены end-to-end шифрованием. Даже мы не можем прочитать вашу переписку — только вы и ваш собеседник.",
    color: "pink",
    glow: "rgba(255,45,120,0.25)",
  },
];

const FAQ_ITEMS = [
  {
    q: "Qvexi полностью бесплатный?",
    a: "Да, базовый функционал — звонки, чаты и каналы — полностью бесплатны. Мы предлагаем Premium-план для бизнеса с расширенными возможностями.",
  },
  {
    q: "Мои данные в безопасности?",
    a: "Абсолютно. Мы используем сквозное шифрование E2EE для всех переписок. Данные не хранятся на наших серверах в открытом виде.",
  },
  {
    q: "На каких устройствах работает Qvexi?",
    a: "iOS, Android, Windows, macOS, Linux и веб-версия. Все сообщения синхронизируются мгновенно между устройствами.",
  },
  {
    q: "Сколько человек могут участвовать в видеозвонке?",
    a: "До 50 участников в групповом видеозвонке — с демонстрацией экрана, реакциями и функцией записи.",
  },
  {
    q: "Есть ли API для разработчиков?",
    a: "Да, мы предоставляем открытый API и Bot API, позволяющий создавать ботов и интегрировать Qvexi в ваши сервисы.",
  },
];

const STATS = [
  { value: "5M+", label: "Пользователей" },
  { value: "99.9%", label: "Uptime" },
  { value: "128-бит", label: "Шифрование" },
  { value: "50+", label: "Стран" },
];

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="min-h-screen bg-[#080B14] text-white overflow-x-hidden">
      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
        style={{ background: "rgba(8,11,20,0.85)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #7B2FFF 0%, #00D4FF 100%)" }}>
            <Icon name="Zap" size={16} className="text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
            <span className="gradient-text">Qvexi</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}
              className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-200">
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contact"
          className="btn-primary px-5 py-2.5 rounded-xl text-sm hidden md:block">
          Попробовать
        </a>
      </header>

      {/* Hero */}
      <section id="home" className="hero-bg relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 overflow-hidden">
        {/* Decorative orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20 pointer-events-none animate-glow-pulse"
          style={{ background: "radial-gradient(circle, #7B2FFF, transparent)" }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-[120px] opacity-15 pointer-events-none animate-glow-pulse"
          style={{ background: "radial-gradient(circle, #00D4FF, transparent)", animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full blur-[100px] opacity-10 pointer-events-none animate-glow-pulse"
          style={{ background: "radial-gradient(circle, #FF2D78, transparent)", animationDelay: "3s" }} />

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 animate-fade-in"
          style={{ background: "rgba(123,47,255,0.15)", border: "1px solid rgba(123,47,255,0.3)" }}>
          <div className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse" />
          <span className="text-sm font-medium text-[#00D4FF]">Новое поколение мессенджеров</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] mb-6 animate-fade-in"
          style={{ fontFamily: "'Syne', sans-serif", animationDelay: "0.1s" }}>
          Общайся без<br />
          <span className="gradient-text">границ и страхов</span>
        </h1>

        <p className="text-lg md:text-xl text-white/50 max-w-xl mx-auto mb-10 leading-relaxed animate-fade-in"
          style={{ animationDelay: "0.2s" }}>
          Мессенджер с HD-звонками, групповыми чатами и сквозным шифрованием. Ваша приватность — наш приоритет.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <a href="#contact" className="btn-primary px-8 py-4 rounded-2xl text-base flex items-center gap-2">
            <Icon name="Download" size={18} />
            Скачать бесплатно
          </a>
          <a href="#features" className="btn-secondary px-8 py-4 rounded-2xl text-base flex items-center gap-2">
            <Icon name="Play" size={18} />
            Смотреть демо
          </a>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-8 mt-20 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-black gradient-text-blue-violet" style={{ fontFamily: "'Syne', sans-serif" }}>{s.value}</div>
              <div className="text-sm text-white/40 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
          <span className="text-xs text-white/30">Прокрути вниз</span>
          <Icon name="ChevronDown" size={20} className="text-white/30" />
        </div>
      </section>

      {/* About */}
      <section id="about" className="mesh-bg py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Visual */}
            <div className="relative flex justify-center animate-fade-in-left">
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                {/* Rotating ring */}
                <div className="absolute inset-0 rounded-full animate-spin-slow"
                  style={{ background: "conic-gradient(from 0deg, #7B2FFF, #00D4FF, #FF2D78, #7B2FFF)", padding: "2px" }}>
                  <div className="w-full h-full rounded-full bg-[#080B14]" />
                </div>
                {/* Center */}
                <div className="absolute inset-6 rounded-full flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, rgba(123,47,255,0.2), rgba(0,212,255,0.2))", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div className="text-center">
                    <Icon name="MessageCircle" size={56} className="mx-auto mb-3 text-[#7B2FFF]" />
                    <span className="text-lg font-bold gradient-text">Qvexi</span>
                  </div>
                </div>
                {/* Floating icons */}
                <div className="absolute -top-4 -right-4 w-14 h-14 rounded-2xl flex items-center justify-center animate-float card-glass"
                  style={{ animationDelay: "0s", border: "1px solid rgba(0,212,255,0.3)" }}>
                  <Icon name="Lock" size={22} className="text-[#00D4FF]" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-14 h-14 rounded-2xl flex items-center justify-center animate-float card-glass"
                  style={{ animationDelay: "1s", border: "1px solid rgba(255,45,120,0.3)" }}>
                  <Icon name="Zap" size={22} className="text-[#FF2D78]" />
                </div>
                <div className="absolute top-1/2 -left-8 w-12 h-12 rounded-2xl flex items-center justify-center animate-float card-glass"
                  style={{ animationDelay: "2s", border: "1px solid rgba(123,47,255,0.3)" }}>
                  <Icon name="Globe" size={18} className="text-[#7B2FFF]" />
                </div>
              </div>
            </div>

            {/* Text */}
            <div>
              <div className="inline-block text-xs font-semibold uppercase tracking-widest text-[#00D4FF] mb-4 px-3 py-1 rounded-full"
                style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.2)" }}>
                О сервисе
              </div>
              <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>
                Мессенджер,<br />которому <span className="gradient-text">доверяют</span>
              </h2>
              <p className="text-white/50 text-lg leading-relaxed mb-6">
                Qvexi — это современная платформа для общения, созданная с нуля с учётом приватности и скорости. Мы не продаём ваши данные и не показываем рекламу.
              </p>
              <p className="text-white/50 text-lg leading-relaxed mb-8">
                Наша команда верит, что цифровое общение должно быть безопасным, быстрым и доступным каждому — независимо от устройства и страны.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Без рекламы", "Открытый API", "Мультиплатформенность", "Российские серверы"].map((tag) => (
                  <span key={tag} className="px-4 py-2 rounded-xl text-sm font-medium text-white/70"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-28 px-6 relative">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(123,47,255,0.08) 0%, transparent 70%)" }} />
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-block text-xs font-semibold uppercase tracking-widest text-[#FF2D78] mb-4 px-3 py-1 rounded-full"
              style={{ background: "rgba(255,45,120,0.1)", border: "1px solid rgba(255,45,120,0.2)" }}>
              Возможности
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
              Всё что нужно<br /><span className="gradient-text">для общения</span>
            </h2>
            <p className="text-white/40 text-lg max-w-lg mx-auto">
              Три ключевых столпа, на которых построен Qvexi
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {FEATURES.map((f, i) => (
              <div key={i} className="gradient-border rounded-2xl p-7 card-glass group hover:scale-[1.02] transition-transform duration-300"
                style={{ boxShadow: `0 0 60px 0 ${f.glow}` }}>
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    background: f.color === "electric"
                      ? "linear-gradient(135deg, rgba(0,212,255,0.2), rgba(0,212,255,0.05))"
                      : f.color === "violet"
                      ? "linear-gradient(135deg, rgba(123,47,255,0.2), rgba(123,47,255,0.05))"
                      : "linear-gradient(135deg, rgba(255,45,120,0.2), rgba(255,45,120,0.05))",
                    border: `1px solid ${f.color === "electric" ? "rgba(0,212,255,0.3)" : f.color === "violet" ? "rgba(123,47,255,0.3)" : "rgba(255,45,120,0.3)"}`
                  }}>
                  <Icon name={f.icon} size={26}
                    className={f.color === "electric" ? "text-[#00D4FF]" : f.color === "violet" ? "text-[#7B2FFF]" : "text-[#FF2D78]"} />
                </div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-white/50 leading-relaxed text-sm">{f.description}</p>

                {/* Learn more */}
                <div className="flex items-center gap-1 mt-6 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: f.color === "electric" ? "#00D4FF" : f.color === "violet" ? "#7B2FFF" : "#FF2D78" }}>
                  <span>Подробнее</span>
                  <Icon name="ArrowRight" size={14} />
                </div>
              </div>
            ))}
          </div>

          {/* Extra feature row */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="rounded-2xl p-7 card-glass gradient-border flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.2)" }}>
                <Icon name="Cloud" size={22} className="text-[#00D4FF]" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Облачное хранилище</h3>
                <p className="text-white/50 text-sm leading-relaxed">Все файлы, фото и документы синхронизируются в облаке. Доступ с любого устройства в любой момент.</p>
              </div>
            </div>
            <div className="rounded-2xl p-7 card-glass gradient-border flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "rgba(255,45,120,0.1)", border: "1px solid rgba(255,45,120,0.2)" }}>
                <Icon name="Bot" size={22} className="text-[#FF2D78]" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Боты и автоматизация</h3>
                <p className="text-white/50 text-sm leading-relaxed">Создавайте ботов через Bot API, автоматизируйте уведомления и интегрируйте с вашими сервисами.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto rounded-3xl p-1"
          style={{ background: "linear-gradient(135deg, #7B2FFF, #00D4FF, #FF2D78)" }}>
          <div className="rounded-[calc(1.5rem-4px)] px-8 md:px-16 py-14 text-center"
            style={{ background: "rgba(8,11,20,0.95)" }}>
            <Icon name="Sparkles" size={36} className="mx-auto mb-4 text-[#7B2FFF]" />
            <h2 className="text-3xl md:text-5xl font-black mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
              Начни общаться<br /><span className="gradient-text">прямо сейчас</span>
            </h2>
            <p className="text-white/50 text-lg mb-8 max-w-md mx-auto">
              Присоединяйся к 5 миллионам пользователей, которые уже выбрали Qvexi
            </p>
            <a href="#contact" className="btn-primary inline-flex items-center gap-2 px-10 py-4 rounded-2xl text-base">
              <Icon name="Rocket" size={18} />
              Создать аккаунт бесплатно
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-28 px-6 mesh-bg">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-block text-xs font-semibold uppercase tracking-widest text-[#7B2FFF] mb-4 px-3 py-1 rounded-full"
              style={{ background: "rgba(123,47,255,0.1)", border: "1px solid rgba(123,47,255,0.2)" }}>
              FAQ
            </div>
            <h2 className="text-4xl md:text-5xl font-black" style={{ fontFamily: "'Syne', sans-serif" }}>
              Частые <span className="gradient-text">вопросы</span>
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className="rounded-2xl overflow-hidden card-glass gradient-border">
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/[0.02] transition-colors duration-200"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="font-semibold text-white pr-4">{item.q}</span>
                  <div className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${openFaq === i ? "rotate-45" : ""}`}
                    style={{ background: openFaq === i ? "rgba(123,47,255,0.2)" : "rgba(255,255,255,0.05)" }}>
                    <Icon name="Plus" size={16} className={openFaq === i ? "text-[#7B2FFF]" : "text-white/50"} />
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-40" : "max-h-0"}`}>
                  <p className="px-6 pb-6 text-white/50 leading-relaxed">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <div className="inline-block text-xs font-semibold uppercase tracking-widest text-[#00D4FF] mb-4 px-3 py-1 rounded-full"
              style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.2)" }}>
              Контакты
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>
              Свяжись<br /><span className="gradient-text">с нами</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-10">
              Есть вопросы или хочешь узнать больше о Qvexi? Напиши нам — ответим в течение нескольких часов.
            </p>
            <div className="flex flex-col gap-5">
              {[
                { icon: "Mail", label: "hello@qvexi.app", color: "#00D4FF" },
                { icon: "MessageCircle", label: "@qvexi_support", color: "#7B2FFF" },
                { icon: "MapPin", label: "Москва, Россия", color: "#FF2D78" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: `rgba(${c.color === "#00D4FF" ? "0,212,255" : c.color === "#7B2FFF" ? "123,47,255" : "255,45,120"},0.1)`, border: `1px solid ${c.color}33` }}>
                    <Icon name={c.icon} size={18} style={{ color: c.color }} />
                  </div>
                  <span className="text-white/70 font-medium">{c.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl p-8 card-glass gradient-border">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ background: "rgba(123,47,255,0.2)", border: "1px solid rgba(123,47,255,0.4)" }}>
                  <Icon name="CheckCircle" size={32} className="text-[#7B2FFF]" />
                </div>
                <h3 className="text-2xl font-bold mb-2 gradient-text">Сообщение отправлено!</h3>
                <p className="text-white/50">Мы ответим в ближайшее время</p>
              </div>
            ) : (
              <form onSubmit={handleSend} className="flex flex-col gap-5">
                <h3 className="text-xl font-bold mb-2">Написать сообщение</h3>
                <div>
                  <label className="text-sm text-white/50 mb-2 block">Имя</label>
                  <input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Как тебя зовут?"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#7B2FFF] transition-colors duration-200 text-sm"
                  />
                </div>
                <div>
                  <label className="text-sm text-white/50 mb-2 block">Email</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#7B2FFF] transition-colors duration-200 text-sm"
                  />
                </div>
                <div>
                  <label className="text-sm text-white/50 mb-2 block">Сообщение</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Расскажи, как можем помочь..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#7B2FFF] transition-colors duration-200 text-sm resize-none"
                  />
                </div>
                <button type="submit"
                  className="btn-primary py-4 rounded-xl font-semibold flex items-center justify-center gap-2">
                  <Icon name="Send" size={16} />
                  Отправить сообщение
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #7B2FFF, #00D4FF)" }}>
              <Icon name="Zap" size={14} className="text-white" />
            </div>
            <span className="font-bold gradient-text" style={{ fontFamily: "'Syne', sans-serif" }}>Qvexi</span>
          </div>
          <p className="text-white/30 text-sm">© 2026 Qvexi. Все права защищены.</p>
          <div className="flex items-center gap-6">
            {["Условия", "Приватность", "Поддержка"].map((l) => (
              <a key={l} href="#" className="text-sm text-white/40 hover:text-white/70 transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
