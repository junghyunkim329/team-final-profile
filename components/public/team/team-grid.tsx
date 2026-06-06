'use client'

import { Github, Rss, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

// 팀 멤버 데이터 타입 정의
interface TeamMember {
  id: number
  name: string
  role: string
  description: string
  portfolio: string
  github: string
  blog: string
  skills: string[]
  image?: string
}

// 팀 멤버 정보 배열 - 4명의 팀원 정보
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: '정현김',
    role: '팀 리더 / 풀스택 개발자',
    description:
      'EinCode 팀을 이끌고 있는 풀스택 개발자. 현대적인 웹 기술과 시스템 아키텍처에 관심이 많습니다.',
    portfolio: 'https://eindev.ir',
    github: 'https://github.com/junghyunkim329',
    blog: 'https://shshjang14.tistory.com/',
    skills: ['Next.js', 'React', 'TypeScript', 'Node.js', 'System Design'],
    image: '/team/member-1.png',
  },
  {
    id: 2,
    name: '김개발자',
    role: '프론트엔드 개발자',
    description:
      '사용자 중심의 UI/UX를 만드는 것을 좋아합니다. 최신 웹 기술 트렌드를 따라가며 학습 중입니다.',
    portfolio: 'https://example-portfolio.com',
    github: 'https://github.com/example-dev',
    blog: 'https://example-blog.com',
    skills: ['React', 'Vue.js', 'Tailwind CSS', 'Design Systems', 'Animation'],
    image: '/team/member-2.png',
  },
  {
    id: 3,
    name: '이백엔드',
    role: '백엔드 개발자',
    description:
      '데이터베이스 설계와 API 개발을 전문으로 합니다. 견고한 서버 아키텍처 구축에 열정이 있습니다.',
    portfolio: 'https://example-portfolio2.com',
    github: 'https://github.com/example-backend',
    blog: 'https://example-blog2.com',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'Docker', 'AWS'],
    image: '/team/member-3.png',
  },
  {
    id: 4,
    name: '박전문가',
    role: 'DevOps / 인프라 엔지니어',
    description:
      '클라우드 인프라와 배포 자동화를 담당합니다. 안정적이고 확장 가능한 시스템 구축을 목표로 합니다.',
    portfolio: 'https://example-portfolio3.com',
    github: 'https://github.com/example-devops',
    blog: 'https://example-blog3.com',
    skills: ['Docker', 'Kubernetes', 'CI/CD', 'AWS', 'Infrastructure as Code'],
    image: '/team/member-4.png',
  },
]

// 팀 그리드 컴포넌트
export function TeamGrid() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        {/* 섹션 헤더 */}
        <div className="mb-16 space-y-4 animate-fade-in-up">
          {/* 섹션 타이틀 */}
          <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">
            팀 소개
          </p>
          {/* 메인 제목 */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
            우리 팀을 만나세요
          </h1>
          {/* 설명 텍스트 */}
          <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            다양한 분야의 전문가들이 모여 함께 성장하고 있는 EinCode 팀입니다.
            각자의 역량을 모아 창의적이고 혁신적인 프로젝트들을 만들어나가고
            있습니다.
          </p>
        </div>

        {/* 팀 멤버 카드 그리드 */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4 animate-fade-in stagger-2">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="group relative rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm p-6 hover:border-primary/50 transition-all duration-300 hover:bg-card/60 hover:shadow-lg hover:shadow-primary/10 overflow-hidden stagger-item"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* 배경 그래디언트 애니메이션 */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* 카드 콘텐츠 */}
              <div className="relative z-10 space-y-4">
                {/* 멤버 이름 */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold tracking-tight text-foreground">
                    {member.name}
                  </h3>
                  {/* 직책 */}
                  <p className="font-mono text-xs uppercase tracking-wider text-primary">
                    {member.role}
                  </p>
                </div>

                {/* 멤버 설명 */}
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {member.description}
                </p>

                {/* 스킬 배지들 */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {member.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border/50 bg-secondary/40 px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                  {/* 더 많은 스킬이 있으면 +N 표시 */}
                  {member.skills.length > 3 && (
                    <span className="rounded-full border border-border/50 bg-secondary/40 px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
                      +{member.skills.length - 3}
                    </span>
                  )}
                </div>

                {/* 링크들 */}
                <div className="flex items-center gap-2 pt-2 border-t border-border/30">
                  {/* 포트폴리오 링크 */}
                  <a
                    href={member.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-mono text-muted-foreground transition-all duration-300 hover:text-primary hover:bg-primary/10"
                    title="포트폴리오"
                  >
                    <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover/link:scale-110" />
                    <span className="hidden sm:inline">포트폴리오</span>
                  </a>

                  {/* GitHub 링크 */}
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-mono text-muted-foreground transition-all duration-300 hover:text-primary hover:bg-primary/10"
                    title="GitHub"
                  >
                    <Github className="h-3.5 w-3.5 transition-transform group-hover/link:scale-110" />
                    <span className="hidden sm:inline">GitHub</span>
                  </a>

                  {/* 블로그 링크 */}
                  <a
                    href={member.blog}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-mono text-muted-foreground transition-all duration-300 hover:text-primary hover:bg-primary/10"
                    title="블로그"
                  >
                    <Rss className="h-3.5 w-3.5 transition-transform group-hover/link:scale-110" />
                    <span className="hidden sm:inline">블로그</span>
                  </a>
                </div>
              </div>

              {/* 호버 효과 보더 애니메이션 */}
              <div
                className={cn(
                  'absolute inset-0 rounded-xl border border-primary/0 transition-all duration-300 group-hover:border-primary/50 pointer-events-none',
                )}
              />
            </div>
          ))}
        </div>

        {/* 팀 정보 섹션 */}
        <div className="mt-20 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm p-8 sm:p-10 animate-fade-in stagger-4">
          <div className="space-y-6">
            {/* 섹션 제목 */}
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tight">
                EinCode 팀에 대해
              </h2>
              <p className="text-sm text-muted-foreground">
                우리의 가치와 철학
              </p>
            </div>

            {/* 팀 정보 그리드 */}
            <div className="grid gap-6 md:grid-cols-3">
              {/* 항목 1: 기술력 */}
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">기술력</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  최신 기술 트렌드를 따라가며 계속 학습하고 성장하는 개발자
                  팀입니다.
                </p>
              </div>

              {/* 항목 2: 협업 */}
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">협업 정신</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  다양한 분야의 전문가들이 함께 소통하며 더 나은 결과를
                  만들어냅니다.
                </p>
              </div>

              {/* 항목 3: 혁신 */}
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">혁신과 창의성</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  새로운 아이디어를 두려워하지 않고 도전하는 문화를 추구합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
