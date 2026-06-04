import { cn } from "@/lib/utils"
import { Github, ExternalLink } from "lucide-react"

// 진행 중인 작업 항목들
const wipItems = [
  {
    id: 1,
    name: "next16-docker-tw4-starter",
    description: "App Router, Tailwind v4, Next-Auth v5, Docker가 포함된 Next.js 16 스타터",
    progress: 85,
    lastUpdated: "2024년 12월",
    url: "https://github.com/ehsanghaffar/next16-docker-tw4-starter",
  },
  {
    id: 2,
    name: "handbuilt-linux",
    description: "BusyBox 및 Syslinux 부트로더를 사용하여 처음부터 만든 최소한의 Linux 배포판",
    progress: 60,
    lastUpdated: "2025년 11월",
    url: "https://github.com/ehsanghaffar/handbuilt-linux",
  },
  {
    id: 3,
    name: "einbiogpt",
    description: "MCP 통합이 있는 AI 기반 소셜 미디어 자기소개 생성기",
    progress: 90,
    lastUpdated: "2025년 4월",
    url: "https://github.com/ehsanghaffar/einbiogpt",
  },
  {
    id: 4,
    name: "llm-practice",
    description: "RAG 및 MCP 프로토콜 지원이 있는 자체 호스팅 챗봇 API",
    progress: 75,
    lastUpdated: "2025년 4월",
    url: "https://github.com/ehsanghaffar/llm-practice",
  },
]

export function Workbench() {
  return (
    <section id="workbench" className="px-4 sm:px-6 py-20 sm:py-28 border-t border-border/30">
      <div className="mx-auto max-w-7xl">
        {/* 섹션 헤더 */}
        <div className="mb-10 sm:mb-14 space-y-3 animate-fade-in-up">
          {/* 섹션 타이틀 */}
          <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">
            진행 중인 작업
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">작업대</h2>
          {/* 섹션 설명 */}
          <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            활발한 실험과 프로토타입들. 구축, 파괴, 재구축되고 있는 것들.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card/40 glass backdrop-blur-sm overflow-hidden hover-lift animate-scale-in stagger-2">
          {/* 터미널 스타일 헤더 */}
          <div className="flex items-center gap-3 border-b border-border/50 bg-secondary/40 px-4 sm:px-5 py-3.5 sm:py-4">
            {/* macOS 스타일 윈도우 컨트롤 버튼들 */}
            <div className="flex items-center gap-2">
              {/* 빨간색 닫기 버튼 */}
              <div className="h-3 w-3 rounded-full bg-destructive/60 transition-colors hover:bg-destructive cursor-pointer" />
              {/* 노란색 최소화 버튼 */}
              <div className="h-3 w-3 rounded-full bg-yellow-500/60 transition-colors hover:bg-yellow-500 cursor-pointer" />
              {/* 초록색 최대화 버튼 */}
              <div className="h-3 w-3 rounded-full bg-primary/60 transition-colors hover:bg-primary cursor-pointer" />
            </div>
            {/* 터미널 경로 */}
            <span className="ml-4 font-mono text-xs text-muted-foreground truncate">~/활성-프로젝트</span>
            {/* 상태 표시기 */}
            <div className="ml-auto hidden sm:flex items-center gap-2 text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-xs">진행 중</span>
            </div>
          </div>

          <div className="divide-y divide-border/30">
            {wipItems.map((item, index) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-4 p-5 sm:p-6 transition-all duration-300 sm:flex-row sm:items-center sm:justify-between hover:bg-secondary/30 animate-fade-in"
                style={{ animationDelay: `${index * 100 + 400}ms` }}
              >
                <div className="flex-1 space-y-2 min-w-0">
                  {/* 프로젝트 이름 및 설명 */}
                  <div className="flex items-center gap-3">
                    {/* 터미널 명령 프롬프트 */}
                    <span className="text-primary font-mono text-sm shrink-0 transition-transform duration-300 group-hover:translate-x-1">
                      $
                    </span>
                    {/* 프로젝트 이름 */}
                    <h4 className="font-mono text-sm font-medium tracking-tight transition-colors group-hover:text-gradient truncate">
                      {item.name}
                    </h4>
                    {/* GitHub 및 외부 링크 아이콘 */}
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Github className="h-3.5 w-3.5 text-muted-foreground" />
                      <ExternalLink className="h-3 w-3 text-muted-foreground" />
                    </div>
                  </div>
                  {/* 프로젝트 설명 */}
                  <p className="pl-6 text-xs text-muted-foreground line-clamp-2 sm:line-clamp-1">{item.description}</p>
                </div>

                {/* 진행 상황 표시기 및 마지막 업데이트 날짜 */}
                <div className="flex items-center justify-between gap-6 pl-6 sm:pl-0 sm:justify-end">
                  {/* 진행 상황 바 */}
                  <div className="flex items-center gap-3 flex-1 sm:flex-none">
                    {/* 진행 상황 진행률 바 */}
                    <div className="h-2 w-full sm:w-28 overflow-hidden rounded-full bg-secondary/80 relative">
                      {/* 색상이 진행률에 따라 변함 (완료도에 따라 빨강->노랑->초록) */}
                      <div
                        className={cn(
                          "h-full rounded-full transition-all duration-700 ease-out",
                          item.progress >= 80 ? "bg-primary" : item.progress >= 50 ? "bg-yellow-500" : "bg-orange-500",
                        )}
                        style={{ width: `${item.progress}%` }}
                      />
                      {/* 반짝임 효과 애니메이션 */}
                      <div className="absolute inset-0 animate-shimmer opacity-30" />
                    </div>
                    {/* 진행률 백분율 텍스트 */}
                    <span
                      className={cn(
                        "font-mono text-xs w-10 shrink-0 transition-colors",
                        item.progress >= 80 ? "text-primary" : "text-muted-foreground",
                      )}
                    >
                      {item.progress}%
                    </span>
                  </div>

                  {/* 마지막 업데이트 날짜 */}
                  <span className="font-mono text-xs text-muted-foreground shrink-0">{item.lastUpdated}</span>
                </div>
              </a>
            ))}
          </div>

          {/* 터미널 입력 라인 - 하단 */}
          <div className="border-t border-border/50 bg-secondary/30 px-4 sm:px-5 py-4">
            <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
              {/* 터미널 프롬프트 기호 */}
              <span className="text-primary">❯</span>
              {/* 입력 명령어 */}
              <span className="typing-cursor truncate">git status --all</span>
              {/* 실행 지시문 */}
              <span className="ml-auto text-primary/50 hidden sm:block">엔터를 눌러 실행</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
