import {
  Github,
  Twitter,
  Mail,
  ExternalLink,
  Heart,
  Rss,
  Facebook,
  Globe,
} from 'lucide-react'

// 소셜 미디어 링크 정의 - 각 플랫폼의 아이콘과 함께 저장됨
const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/junghyunkim329',
    handle: '@junghyunkim329',
    icon: Github,
  },
  {
    label: 'Blog',
    href: 'https://shshjang14.tistory.com/',
    handle: '@shshjang14',
    icon: Rss,
  },
  {
    label: 'Mail',
    href: 'mailto:example@email.com',
    handle: 'example@email.com',
    icon: Mail,
  },
  {
    label: 'STUDEO',
    href: 'https://final-studeo.vercel.app/',
    handle: 'final-studeo.vercel.app',
    icon: Globe,
  },
]

export function Footer() {
  return (
    <footer
      id="connect"
      className="border-t border-border/30 px-4 sm:px-6 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 sm:gap-16 lg:grid-cols-2">
          {/* 왼쪽 컬럼 - 연락처 정보 */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
            <div className="space-y-3">
              {/* 섹션 타이틀 */}
              <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">
                CONTECT
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
                {'항상 '}
                <span className="bg-gradient-to-l from-primary/50 to-accent text-transparent bg-clip-text ">
                  도전
                </span>
                {'을 이어 나갑니다'}
              </h2>
            </div>
            {/* 설명 텍스트 */}
            <p className="max-w-md text-base sm:text-lg text-muted-foreground leading-relaxed">
              저와 연락하고 싶으신가요?
            </p>

            <div className="pt-2">
              {/* 이메일 연락 CTA 버튼 */}
              <a
                href="mailto:hello@ehsanghaffar.dev"
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-xl border border-primary bg-primary/10 px-8 py-4 sm:py-4 font-mono text-sm text-primary transition-all duration-500 hover:text-primary-foreground active:scale-[0.98] w-full sm:w-auto"
              >
                <span className="relative z-10">send a signal</span>
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
                {/* 호버 효과 배경 애니메이션 */}
                <span className="absolute inset-0 -translate-x-full bg-primary transition-transform duration-500 group-hover:translate-x-0" />
              </a>
            </div>
          </div>

          {/* 오른쪽 컬럼 - 소셜 미디어 링크 */}
          <div className="space-y-6 lg:text-right animate-fade-in-up stagger-2">
            {/* 링크 섹션 헤더 */}
            <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-muted-foreground">
              Find me elsewhere
            </p>
            <div className="space-y-2">
              {socialLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label !== 'Email' ? '_blank' : undefined}
                  rel={
                    link.label !== 'Email' ? 'noopener noreferrer' : undefined
                  }
                  className="group flex items-center justify-between gap-4 rounded-xl border border-transparent p-4 transition-all duration-300 lg:flex-row-reverse active:bg-secondary/30 hover:border-border/50 hover:bg-card/50 glass animate-fade-in"
                  style={{ animationDelay: `${index * 100 + 400}ms` }}
                >
                  <div className="flex items-center gap-3 lg:flex-row-reverse">
                    <link.icon className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:scale-110" />
                    <span className="font-mono text-sm font-medium transition-colors group-hover:text-gradient">
                      {link.label}
                    </span>
                    {/* 외부 링크 아이콘 (이메일 제외) */}
                    {link.label !== 'Mail' && (
                      <ExternalLink className="h-3 w-3 text-muted-foreground/50 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" />
                    )}
                  </div>
                  <span className="font-mono text-xs text-muted-foreground truncate">
                    {link.handle}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* 푸터 하단 - 저작권 및 소셜 링크 */}
        <div className="mt-16 sm:mt-20 flex flex-col items-center justify-between gap-6 border-t border-border/30 pt-8 sm:pt-10 sm:flex-row animate-fade-in stagger-4">
          {/* 제작 정보 텍스트 */}
          <div className="flex items-center gap-2.5 font-mono text-xs text-muted-foreground">
            {/* 활성 상태 표시 원형 아이콘 */}
            <span className="relative flex h-2 w-2">
              {/* 애니메이션 배경 핑 효과 */}
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              {/* 정적 표시 점 */}
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span>shshjang14</span>
            {/* 하트 아이콘 - 애니메이션 적용 */}
            <Heart className="h-3.5 w-3.5 text-destructive animate-pulse" />
            <span>MYWORLD</span>
          </div>

          {/* 소셜 미디어 아이콘 모음 */}
          <div className="flex items-center gap-4">
            {socialLinks.slice(0, 3).map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-muted-foreground/50 transition-all duration-300 hover:text-primary hover:scale-110"
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* 저작권 텍스트 */}
          <p className="font-mono text-xs text-muted-foreground text-center sm:text-right">
            © {new Date().getFullYear()} shshjang14. All Rights Reserved.
            Powered by EINCODE.
          </p>
        </div>
      </div>
    </footer>
  )
}
