import Image from "next/image";
import Link from "next/link";
import {
  Target,
  Flame,
  Users,
  BarChart3,
  Smartphone,
  CalendarDays,
  Sprout,
  TrendingUp,
  Handshake,
  Star,
  Check,
  Download,
  Sun,
  Focus,
  Compass,
} from "lucide-react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-cream/80 border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="Arhbit" width={36} height={36} className="rounded-xl" />
          <span className="text-xl font-bold text-text">Arhbit</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-text-secondary hover:text-lavender transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-sm text-text-secondary hover:text-lavender transition-colors">
            How It Works
          </a>
          <a
            href="#download"
            className="text-sm font-semibold text-white bg-lavender hover:bg-lavender-dark px-5 py-2 rounded-full transition-all hover:shadow-lg hover:shadow-lavender/25"
          >
            Download
          </a>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-[10%] w-72 h-72 bg-lavender-light/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-[5%] w-96 h-96 bg-coral-light/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-light/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-fade-up">
            <span className="inline-block mb-6 px-4 py-1.5 bg-lavender/10 text-lavender text-sm font-medium rounded-full border border-lavender/20">
              Tomorrow is not guaranteed — start today
            </span>
          </div>

          <h1 className="animate-fade-up delay-100 text-5xl md:text-7xl font-bold text-text leading-[1.1] tracking-tight">
            Build habits
            <br />
            <span className="bg-gradient-to-r from-lavender via-coral to-lavender-dark bg-clip-text text-transparent">
              that actually stick
            </span>
          </h1>

          <p className="animate-fade-up delay-200 mt-6 text-lg md:text-xl text-text-secondary max-w-xl mx-auto leading-relaxed">
            A warm, nurturing habit tracker with accountability partners, smart streaks,
            and a companion who grows alongside your journey.
          </p>

          <div className="animate-fade-up delay-300 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#download"
              className="group flex items-center gap-3 bg-text text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all hover:scale-105 hover:shadow-xl hover:shadow-text/15"
            >
              <AppleIcon />
              <div className="text-left">
                <div className="text-xs font-normal opacity-80">Download on the</div>
                <div className="-mt-0.5">App Store</div>
              </div>
            </a>
            <a
              href="#download"
              className="group flex items-center gap-3 bg-text text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all hover:scale-105 hover:shadow-xl hover:shadow-text/15"
            >
              <PlayStoreIcon />
              <div className="text-left">
                <div className="text-xs font-normal opacity-80">Get it on</div>
                <div className="-mt-0.5">Google Play</div>
              </div>
            </a>
          </div>
        </div>

        {/* App preview */}
        <div className="animate-scale-in delay-400 mt-16 md:mt-20 flex justify-center">
          <div className="relative">
            <div className="animate-pulse-glow w-[280px] md:w-[320px] bg-white rounded-[2.5rem] p-3 shadow-2xl shadow-text/10">
              <div className="bg-cream rounded-[2rem] overflow-hidden">
                <div className="p-5 pt-12">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-xs text-text-light">Good morning</div>
                      <div className="text-lg font-bold text-text">Today&apos;s Habits</div>
                    </div>
                    <Flame className="w-6 h-6 text-coral" />
                  </div>

                  {[
                    { name: "Meditate", icon: <Focus className="w-4 h-4 text-lavender" />, streak: 12, done: true },
                    { name: "Read 30 min", icon: <Compass className="w-4 h-4 text-lavender" />, streak: 8, done: true },
                    { name: "Exercise", icon: <TrendingUp className="w-4 h-4 text-coral" />, streak: 5, done: false },
                    { name: "Journal", icon: <Sprout className="w-4 h-4 text-green" />, streak: 21, done: false },
                  ].map((habit) => (
                    <div
                      key={habit.name}
                      className="flex items-center gap-3 bg-white rounded-2xl p-3.5 mb-2.5 shadow-sm"
                    >
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center ${habit.done ? "bg-green-light/40" : "bg-cream-dark"}`}
                      >
                        {habit.done ? <Check className="w-4 h-4 text-green-dark" /> : habit.icon}
                      </div>
                      <div className="flex-1">
                        <div className={`text-sm font-medium ${habit.done ? "line-through text-text-light" : "text-text"}`}>
                          {habit.name}
                        </div>
                        <div className="text-xs text-text-light">{habit.streak} day streak</div>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-coral font-semibold">
                        <Flame className="w-3 h-3" /> {habit.streak}
                      </div>
                    </div>
                  ))}

                  <div className="mt-4 bg-white rounded-2xl p-3.5 shadow-sm">
                    <div className="text-xs font-semibold text-text mb-2">90-Day Activity</div>
                    <div className="flex gap-[3px] flex-wrap">
                      {Array.from({ length: 42 }).map((_, i) => {
                        const colors = [
                          "bg-divider",
                          "bg-coral-light",
                          "bg-coral",
                          "bg-coral-dark",
                          "bg-green",
                        ];
                        const colorIndex =
                          i % 7 === 0
                            ? 0
                            : i % 5 === 0
                              ? 1
                              : i % 3 === 0
                                ? 3
                                : i % 2 === 0
                                  ? 4
                                  : 2;
                        return (
                          <div
                            key={i}
                            className={`w-3 h-3 rounded-[3px] ${colors[colorIndex]}`}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="animate-float absolute -top-4 -right-12 md:-right-20 bg-white rounded-2xl px-4 py-3 shadow-lg shadow-text/8">
              <Flame className="w-7 h-7 text-coral mb-0.5" />
              <div className="text-xs font-bold text-text">21 days</div>
              <div className="text-[10px] text-text-light">Best streak</div>
            </div>

            <div className="animate-float delay-500 absolute -bottom-2 -left-12 md:-left-20 bg-white rounded-2xl px-4 py-3 shadow-lg shadow-text/8">
              <BabyPangolinIcon className="w-7 h-7 text-lavender" />
              <div className="text-xs font-bold text-text">Level 4</div>
              <div className="text-[10px] text-text-light">Companion</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Flexible Tracking",
      description:
        "Daily, weekly, or specific days. Multi-completion habits like \"Drink 8 glasses of water\" with tap counters.",
      color: "bg-lavender/10 border-lavender/20",
      iconColor: "text-lavender",
    },
    {
      icon: <Flame className="w-8 h-8" />,
      title: "Smart Streaks",
      description:
        "Streaks that understand life. Rest mode freezes your progress when you need a break — no guilt, no lost streaks.",
      color: "bg-coral/10 border-coral/20",
      iconColor: "text-coral",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Accountability Partners",
      description:
        "Invite a friend to keep you on track. They get notified when you miss habits and can schedule catch-up meetings.",
      color: "bg-green/10 border-green/20",
      iconColor: "text-green",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Heatmap Insights",
      description:
        "GitHub-style heatmaps show your 90-day activity at a glance. Spot patterns and celebrate consistency.",
      color: "bg-lavender/10 border-lavender/20",
      iconColor: "text-lavender",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Home Screen Widgets",
      description:
        "Beautiful iOS widgets with live streak counters, weekly progress rings, and interactive habit completion.",
      color: "bg-coral/10 border-coral/20",
      iconColor: "text-coral",
    },
    {
      icon: <CalendarDays className="w-8 h-8" />,
      title: "Calendar Integration",
      description:
        "Connect Google or Microsoft Calendar. Arhbit auto-schedules catch-up events when habits go off track.",
      color: "bg-green/10 border-green/20",
      iconColor: "text-green",
    },
  ];

  return (
    <section id="features" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-1.5 bg-coral/10 text-coral-dark text-sm font-medium rounded-full border border-coral/20">
            Everything you need
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-text tracking-tight">
            Habits made <span className="text-lavender">human</span>
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-xl mx-auto">
            Not another cold checklist. Arhbit wraps powerful tracking in warmth, accountability, and care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`animate-fade-up group bg-white rounded-3xl p-7 border ${feature.color} transition-all hover:shadow-lg hover:shadow-text/5 hover:-translate-y-1`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={`mb-4 ${feature.iconColor}`}>{feature.icon}</div>
              <h3 className="text-lg font-bold text-text mb-2">{feature.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Create your habits",
      description:
        "Add the habits you want to build. Set frequency, reminders, and targets. Start small — even one habit counts.",
      icon: <Sprout className="w-8 h-8 text-green/50 group-hover:text-green transition-colors" />,
    },
    {
      number: "02",
      title: "Track daily progress",
      description:
        "Tap to complete. Watch your streaks grow, your heatmap fill up, and your companion thrive alongside you.",
      icon: <TrendingUp className="w-8 h-8 text-coral/50 group-hover:text-coral transition-colors" />,
    },
    {
      number: "03",
      title: "Stay accountable",
      description:
        "Add an accountability partner. They see your progress and nudge you when you slip. Real human connection, not just notifications.",
      icon: <Handshake className="w-8 h-8 text-lavender/50 group-hover:text-lavender transition-colors" />,
    },
    {
      number: "04",
      title: "Build lasting change",
      description:
        "Over weeks and months, watch patterns emerge. Your companion evolves. Your habits become automatic. You become who you want to be.",
      icon: <Star className="w-8 h-8 text-coral/50 group-hover:text-coral transition-colors" />,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-1.5 bg-green/10 text-green-dark text-sm font-medium rounded-full border border-green/20">
            Simple by design
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-text tracking-tight">
            How <span className="text-coral">Arhbit</span> works
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="animate-slide-right group relative bg-cream rounded-3xl p-8 transition-all hover:shadow-lg hover:shadow-text/5"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="flex items-start gap-5">
                <div className="shrink-0 w-14 h-14 bg-gradient-to-br from-lavender to-lavender-dark rounded-2xl flex items-center justify-center text-white text-sm font-bold shadow-md shadow-lavender/20">
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-text mb-2">{step.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {step.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CultureSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-text via-[#3D3147] to-lavender-dark text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-[20%] w-64 h-64 bg-lavender/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-[15%] w-80 h-80 bg-coral/8 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block mb-6 px-4 py-1.5 bg-white/10 text-white/80 text-sm font-medium rounded-full border border-white/15">
            Rooted in wisdom
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Built on a simple truth
          </h2>
          <p className="mt-4 text-xl text-lavender-light italic">
            Today is all you have — make it count
          </p>
          <p className="mt-6 text-lg text-white/70 leading-relaxed">
            Arhbit is a call to act today — not out of fear, but out of love for the person
            you&apos;re becoming. Every habit you build is a promise to yourself that today matters.
          </p>

          <div className="mt-12 grid sm:grid-cols-3 gap-6 text-left">
            {[
              {
                icon: <Sun className="w-5 h-5 text-coral-light" />,
                value: "Daily action",
                caption: "Every day matters. Small steps compound into extraordinary change.",
              },
              {
                icon: <Focus className="w-5 h-5 text-lavender-light" />,
                value: "Present focus",
                caption: "Don\u2019t defer your growth. The best time to start is right now.",
              },
              {
                icon: <Compass className="w-5 h-5 text-green-light" />,
                value: "Intentional living",
                caption: "Make today count. Your habits shape who you become.",
              },
            ].map((item) => (
              <div key={item.value} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="mb-3">{item.icon}</div>
                <div className="text-lg font-bold text-white mb-2">{item.value}</div>
                <div className="text-sm text-white/60 leading-relaxed">{item.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DownloadSection() {
  return (
    <section id="download" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-gradient-to-br from-lavender via-lavender-dark to-[#6B4DB8] rounded-[2rem] p-10 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-coral/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

          <div className="relative">
            <Download className="w-14 h-14 text-white/80 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Start your journey today
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-lg mx-auto">
              Download Arhbit and build the habits that define the person you want to become.
              Your companion is waiting.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="group flex items-center gap-3 bg-white text-text px-8 py-4 rounded-2xl font-semibold text-lg transition-all hover:scale-105 hover:shadow-xl"
              >
                <AppleIcon dark />
                <div className="text-left">
                  <div className="text-xs font-normal text-text-secondary">Download on the</div>
                  <div className="-mt-0.5">App Store</div>
                </div>
              </a>
              <a
                href="#"
                className="group flex items-center gap-3 bg-white text-text px-8 py-4 rounded-2xl font-semibold text-lg transition-all hover:scale-105 hover:shadow-xl"
              >
                <PlayStoreIcon dark />
                <div className="text-left">
                  <div className="text-xs font-normal text-text-secondary">Get it on</div>
                  <div className="-mt-0.5">Google Play</div>
                </div>
              </a>
            </div>

            <p className="mt-6 text-sm text-white/50">
              Free to download. Premium features available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-white border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <Image src="/logo.png" alt="Arhbit" width={28} height={28} className="rounded-lg" />
              <span className="text-lg font-bold text-text">Arhbit</span>
            </div>
            <p className="text-sm text-text-secondary max-w-xs">
              Build lasting habits with warmth, accountability, and a companion who grows with you.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8">
            <div>
              <div className="text-xs font-semibold text-text-light uppercase tracking-wider mb-3">
                Product
              </div>
              <div className="flex flex-col gap-2">
                <a href="#features" className="text-sm text-text-secondary hover:text-lavender transition-colors">
                  Features
                </a>
                <a href="#how-it-works" className="text-sm text-text-secondary hover:text-lavender transition-colors">
                  How It Works
                </a>
                <a href="#download" className="text-sm text-text-secondary hover:text-lavender transition-colors">
                  Download
                </a>
              </div>
            </div>
            <div>
              <div className="text-xs font-semibold text-text-light uppercase tracking-wider mb-3">
                Legal
              </div>
              <div className="flex flex-col gap-2">
                <Link href="/privacy" className="text-sm text-text-secondary hover:text-lavender transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-sm text-text-secondary hover:text-lavender transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
            <div>
              <div className="text-xs font-semibold text-text-light uppercase tracking-wider mb-3">
                Contact
              </div>
              <div className="flex flex-col gap-2">
                <a href="mailto:support@arhbit.com" className="text-sm text-text-secondary hover:text-lavender transition-colors">
                  support@arhbit.com
                </a>
                <a href="mailto:privacy@arhbit.com" className="text-sm text-text-secondary hover:text-lavender transition-colors">
                  privacy@arhbit.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-light">
            &copy; {new Date().getFullYear()} Arhbit. All rights reserved.
          </p>
          <p className="text-xs text-text-light flex items-center gap-1">
            Made with
            <svg className="w-3.5 h-3.5 inline-block" viewBox="0 0 24 24" fill="#9B7ED9" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <span className="mx-0.5">|</span>
            <span className="italic">Inspired by African wisdom</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

function AppleIcon({ dark }: { dark?: boolean }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill={dark ? "#2D2D2D" : "white"}>
      <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 16.97 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
    </svg>
  );
}

function PlayStoreIcon({ dark }: { dark?: boolean }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill={dark ? "#2D2D2D" : "white"}>
      <path d="M3.18 23.69C2.71 23.46 2.37 22.97 2.37 22.31V1.69C2.37 1.03 2.71.54 3.18.31L13.04 12L3.18 23.69ZM16.81 15.77L6.05 22.04L14.36 13.5L16.81 15.77ZM20.16 10.81C20.61 11.09 20.93 11.53 20.93 12C20.93 12.47 20.61 12.91 20.16 13.19L17.89 14.5L15.18 12L17.89 9.5L20.16 10.81ZM6.05 1.96L16.81 8.23L14.36 10.5L6.05 1.96Z" />
    </svg>
  );
}

function BabyPangolinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Rounded body */}
      <ellipse cx="20" cy="22" rx="9" ry="10" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="1.5" />
      {/* Head */}
      <circle cx="20" cy="10.5" r="4.5" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="18.8" cy="10" r="0.9" fill="currentColor" />
      <circle cx="21.2" cy="10" r="0.9" fill="currentColor" />
      {/* Scale arcs */}
      <path d="M14.5 19c3.5-1.5 7.5-1.5 11 0" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" opacity="0.35" />
      <path d="M14 23c4-1.5 8-1.5 12 0" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" opacity="0.3" />
      <path d="M15 27c3-1.5 7-1.5 10 0" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" opacity="0.25" />
      {/* Tail */}
      <path d="M25 30c2 1.5 4 2 5.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <CultureSection />
        <DownloadSection />
      </main>
      <Footer />
    </>
  );
}
