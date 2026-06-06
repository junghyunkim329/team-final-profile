'use client'

import { useState, useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'
import {
  Github,
  Star,
  GitFork,
  ExternalLink,
  Sparkles,
  Search,
  Filter,
} from 'lucide-react'
import { Input } from '@/components/ui/input'

const projects = [
  {
    id: 0,
    title: '차고연구실',
    description:
      '본 연구에서는 차량 내 전자제어 유닛 환경을 모의로 구현하고, 해당 환경에서 악성 메시지 공격을 탐지하는 연구 진행',
    tags: [
      '차량 보안',
      'Raspberry Pi 4B',
      '2-CH CAN HAT',
      'Python',
      'Gateway ECU',
      'IDS',
    ],
    status: 'shipped',
    year: '25.12.29 ~ 26.04.26',
    stars: 0,
    forks: 0,
    url: 'https://github.com/junghyunkim329/garage-lab',
    featured: true,
    highlight: true,
  },
  {
    id: 1,
    title: '선박 빅데이터 공모전 우수상',
    description:
      '실제 선박의 실시간 연동형 시뮬레이션을 사용하여, 대상 선박과 시뮬레이션 모델을 양방향으로 연결하여 공격 시나리오 실험에 대한 분석을 수행하기 위한 아이디어로 해상 빅데이터 기반 선박 사이버 리스크 실험 디지털 트윈 프레임워크 제안',
    tags: ['선박'],
    status: 'shipped',
    year: '25.11.25 ~ 25.12.04',
    stars: 0,
    forks: 0,
    url: 'https://kim-s-flame.vercel.app/src/project/etc/ship-big-data.html',
    homepage:
      'https://kim-s-flame.vercel.app/src/project/etc/ship-big-data.html',
    featured: false,
  },
  {
    id: 2,
    title: '멋쟁이 사자처럼 13기 중앙 해커톤',
    description:
      '혼자 놀러 다니는 사람을 위한 여행 서비스로 타 여행 일정 서비스와의 차별성를 위해 해당 장소를 이용한 사용자의 데이터를 모아 ‘혼O 지수’ 제작',
    tags: ['React', 'FastAPI', 'MySQL', 'Tailwind', 'GCP'],
    status: 'shipped',
    year: '25.06.24 ~ 25.08.25',
    stars: 0,
    forks: 0,
    url: 'https://github.com/junghyunkim329/mh_back',
    homepage:
      'https://kim-s-flame.vercel.app/src/project/likelion/hackathon.html',
    featured: true,
  },
  {
    id: 3,
    title: 'DBDB Book',
    description:
      '가정집에서도 도서관처럼 책 관리할 수 있게 ISBN 코드를 이용하여 청구기호 자동 부여',
    tags: ['React', 'TypeScript', 'Node.js', 'MySQL', 'Tailwind', 'GCP'],
    status: 'archived',
    year: '25.04.07 ~ 25.12.30',
    stars: 0,
    forks: 0,
    url: 'https://github.com/junghyunkim329/DBDB',
    homepage:
      'https://kim-s-flame.vercel.app/src/project/likelion/dbdbbook.html',
    featured: true,
  },
  {
    id: 4,
    title: 'HACK_IN',
    description:
      '시스템 해킹 하~중 단계의 Wargame 제작하여 시스템 해킹 입문자에게 공격 기법별 기초 문제 제공',
    tags: ['C'],
    status: 'shipped',
    year: '25.06.30 ~ 25.08.18',
    stars: 0,
    forks: 0,
    url: 'https://kim-s-flame.vercel.app/src/project/scurity-check-point/hack-in.html',
    homepage:
      'https://kim-s-flame.vercel.app/src/project/scurity-check-point/hack-in.html',
    featured: false,
  },
  {
    id: 5,
    title: 'STUDEO',
    description: '보안을 공부하고 하는 사람을 위한 학습 서비스 개발',
    tags: ['웹프로그래밍', '팀 프로젝트', 'Javascript'],
    status: 'in-progress',
    year: '26.04 ~ 26.06',
    stars: 0,
    forks: 0,
    url: 'https://github.com/junghyunkim329/2026-1-web-final-exam',
    homepage: 'https://final-studeo.vercel.app/',
    featured: true,
  },
  {
    id: 6,
    title: 'KIM’s',
    description: '개인 포트폴리오 v0.1',
    tags: ['웹프로그래밍', 'Javascript'],
    status: 'in-progress',
    year: '2026.04',
    stars: 0,
    forks: 0,
    url: 'https://github.com/junghyunkim329/team-portfolio',
    homepage: 'https://kim-s-flame.vercel.app/',
    featured: true,
  },
  {
    id: 7,
    title: '잔다르크 게임 제작',
    description: '백 년 전쟁에서 활약한 프랑스의 수호성인의 이야기를 다룸',
    tags: ['Game', 'RPG Paper Maker'],
    status: 'shipped',
    year: '23.07.07 ~ 23.07.17',
    stars: 0,
    forks: 0,
    url: 'https://kim-s-flame.vercel.app/src/project/Jeanne-dArc.html',
    homepage: 'https://kim-s-flame.vercel.app/src/project/Jeanne-dArc.html',
    featured: false,
  },
]

const filters = ['all', 'shipped', 'in-progress', 'archived']
const allTags = [...new Set(projects.flatMap((p) => p.tags))]

export function ProjectsPageContent() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const filteredProjects = projects.filter((p) => {
    const matchesFilter = activeFilter === 'all' || p.status === activeFilter
    const matchesSearch =
      searchQuery === '' ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.some((tag) => p.tags.includes(tag))
    return matchesFilter && matchesSearch && matchesTags
  })

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    )
  }

  return (
    <section ref={sectionRef} className="px-4 sm:px-6 py-12 sm:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Hero */}
        <div
          className={cn(
            'mb-12 sm:mb-16 space-y-4 opacity-0',
            isVisible && 'animate-fade-in-up',
          )}
        >
          <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">
            Artifacts
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Projects
          </h1>
          <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            다양한 분야에 도전하며 지식을 넓혀갑니다.
          </p>
        </div>

        {/* Search and Filters */}
        <div
          className={cn(
            'mb-10 space-y-6 opacity-0',
            isVisible && 'animate-fade-in-up stagger-2',
          )}
        >
          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-card/40 border-border/60 focus:border-primary/50"
            />
          </div>

          {/* Status Filters */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  'rounded-lg border px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-300 active:scale-[0.98]',
                  activeFilter === filter
                    ? 'border-primary bg-primary/15 text-primary shadow-sm shadow-primary/20'
                    : 'border-border text-muted-foreground hover:border-foreground/50 hover:text-foreground hover:bg-secondary/50',
                )}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Tag Filters */}
          <div className="flex flex-wrap gap-2">
            <Filter className="h-4 w-4 text-muted-foreground mr-2 self-center" />
            {allTags.slice(0, 10).map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={cn(
                  'rounded-md border px-2.5 py-1 font-mono text-xs transition-all duration-200',
                  selectedTags.includes(tag)
                    ? 'border-primary/50 bg-primary/10 text-primary'
                    : 'border-border/60 bg-secondary/40 text-muted-foreground hover:border-primary/30 hover:text-foreground',
                )}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className={cn(
                'group relative overflow-hidden rounded-xl border bg-card/40 p-6 sm:p-7 glass transition-all duration-400 active:scale-[0.99] hover-lift opacity-0',
                isVisible && 'animate-fade-in-up',
                hoveredProject === project.id && 'border-primary/40 bg-card/70',
                'highlight' in project && project.highlight
                  ? 'sm:col-span-2 lg:col-span-2 border-primary/30 bg-gradient-to-br from-primary/8 via-card/50 to-primary/8'
                  : 'border-border/60',
                project.featured &&
                  !('highlight' in project && project.highlight) &&
                  'sm:col-span-2 lg:col-span-1',
              )}
              style={{ animationDelay: `${(index % 6) * 80 + 200}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {'highlight' in project && project.highlight && (
                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-3.5 py-1.5 animate-pulse-glow">
                  <Sparkles className="h-3.5 w-3.5 text-primary" />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-primary font-medium">
                    Featured
                  </span>
                </div>
              )}

              <div
                className={cn(
                  'absolute right-5 top-5 flex items-center gap-2.5',
                  'highlight' in project && project.highlight && 'top-5',
                )}
              >
                <span
                  className={cn(
                    'h-2.5 w-2.5 rounded-full transition-shadow duration-300',
                    project.status === 'shipped' &&
                      'bg-primary shadow-sm shadow-primary/50',
                    project.status === 'in-progress' &&
                      'bg-yellow-500 animate-pulse shadow-sm shadow-yellow-500/50',
                    project.status === 'archived' && 'bg-muted-foreground',
                  )}
                />
                <span className="font-mono text-xs text-muted-foreground">
                  {project.status}
                </span>
              </div>

              <div
                className={cn(
                  'mb-5 font-mono text-xs text-muted-foreground',
                  'highlight' in project && project.highlight && 'mt-10',
                )}
              >
                {project.year}
              </div>

              <h3
                className={cn(
                  'mb-3 font-bold tracking-tight transition-all duration-300 group-hover:text-gradient',
                  'highlight' in project && project.highlight
                    ? 'text-xl sm:text-2xl'
                    : 'text-lg sm:text-xl',
                )}
              >
                {project.title}
              </h3>

              <p
                className={cn(
                  'mb-5 text-sm leading-relaxed text-muted-foreground',
                  'highlight' in project && project.highlight
                    ? 'line-clamp-3'
                    : 'line-clamp-2',
                )}
              >
                {project.description}
              </p>

              <div className="mb-5 flex items-center gap-5 font-mono text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5 transition-colors group-hover:text-yellow-500">
                  <Star className="h-3.5 w-3.5" />
                  {project.stars}
                </span>
                <span className="flex items-center gap-1.5 transition-colors group-hover:text-foreground">
                  <GitFork className="h-3.5 w-3.5" />
                  {project.forks}
                </span>
              </div>

              <div className="mb-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border/80 bg-secondary/60 px-2.5 py-1 font-mono text-xs text-secondary-foreground transition-colors hover:border-primary/50 hover:bg-primary/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-primary transition-all duration-300 group/link"
                >
                  <Github className="h-4 w-4 transition-transform group-hover/link:scale-110" />
                  <span className="underline-animate">source</span>
                </a>
                {project.homepage && (
                  <a
                    href={project.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-mono text-xs text-primary hover:text-foreground transition-all duration-300 group/link"
                  >
                    <ExternalLink className="h-4 w-4 transition-transform group-hover/link:scale-110 group-hover/link:rotate-12" />
                    <span className="underline-animate">live</span>
                  </a>
                )}
              </div>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary via-primary/80 to-transparent transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="font-mono text-sm text-muted-foreground">
              No projects found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
