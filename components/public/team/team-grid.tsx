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
    name: '김정현',
    role: 'PM',
    description: '차량 보안 제품 개발에 관심을 두고 있습니다',
    portfolio: 'https://shshjang14.vercel.app/',
    github: 'https://github.com/junghyunkim329',
    blog: 'https://shshjang14.tistory.com/',
    skills: ['Pwn', 'C', 'Python', 'Node.js', 'Javascript'],
    image: '/team/kim.png',
  },
  {
    id: 2,
    name: '유청림',
    role: 'PA',
    description: '다양한 분야를 접하며 성장의 발판을 다지고 있습니다',
    portfolio: 'https://portfolio-chi-mauve-64.vercel.app/',
    github: 'https://github.com/Rocheong',
    blog: 'https://blog.naver.com/rocheong1714',
    skills: ['Pwn', 'C', 'Javascript', 'Python'],
    image: '/team/yu.png',
  },
  {
    id: 3,
    name: '임성준',
    role: 'PA',
    description: '개인 AI 비서 개발에 관심을 두고 있습니다',
    portfolio: 'https://absoul.vercel.app/',
    github: 'https://github.com/lsjking',
    blog: 'https://lsjking911.tistory.com/',
    skills: ['AI', 'Web', 'Javascript'],
    image: '/team/lim.png',
  },
  {
    id: 4,
    name: '정현진',
    role: 'PA',
    description: 'AI 보안과 취약점 분석에 관심을 두고 있습니다',
    portfolio: 'https://web-final-exam-qc6r.vercel.app/',
    github: 'https://github.com/zkrxnp',
    blog: 'https://hjstu.tistory.com/',
    skills: ['AI', 'Rev', 'AWS', 'Javascript'],
    image: '/team/jung.png',
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
            introdution
          </p>
          {/* 메인 제목 */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
            김정현진과 유청림성준
          </h1>
          {/* 설명 텍스트 */}
          <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            보안을 공부하고 하는 사람을 위한 학습 서비스를 개발하였습니다.
            사용자는 다양한 퀴즈와 문제를 통해 핵심 개념을 확인할 수 있으며
            실습과 복습을 쉽게 할 수 있습니다.
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
      </div>
    </section>
  )
}
