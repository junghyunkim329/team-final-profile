"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

// 연구실 노트 데이터 - 기술 글의 스니펫을 포함
const notes = [
  {
    id: 1,
    title: "처음부터 Linux 배포판 만들기",
    excerpt: "커널 컴파일, BusyBox 설정, Syslinux를 사용한 부팅 가능한 ISO 생성의 학습 내용.",
    date: "2025년 11월",
    category: "시스템",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 2,
    title: "LLM 앱의 MCP 프로토콜",
    excerpt:
      "RAG 앱에서 벡터 데이터베이스와 AI 모델의 원활한 상호 작용을 위해 Model Context Protocol 구현하기.",
    date: "2025년 4월",
    category: "AI",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 3,
    title: "Next.js 16 + Tailwind v4",
    excerpt: "Next.js 16의 새로운 기능 탐색 및 Tailwind CSS v4의 새로운 설정 시스템으로 마이그레이션.",
    date: "2024년 12월",
    category: "프론트엔드",
    color: "from-primary/20 to-emerald-500/20",
  },
  {
    id: 4,
    title: "FastAPI로 LLM 자체 호스팅하기",
    excerpt: "Llama2를 로컬에서 실행하고 자연어 작업을 위한 개인용 챗봇 API 구축하기.",
    date: "2023년 10월",
    category: "AI",
    color: "from-orange-500/20 to-amber-500/20",
  },
]

export function LabNotes() {
  const [expandedNote, setExpandedNote] = useState<number | null>(null)

  return (
    <section id="notes" className="px-4 sm:px-6 py-20 sm:py-28 border-t border-border/30">
      <div className="mx-auto max-w-7xl">
        {/* 섹션 제목 및 설명 */}
        <div className="mb-10 sm:mb-14 space-y-3 animate-fade-in-up">
          {/* 섹션 타이틀 */}
          <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">현장 노트</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">연구실 노트</h2>
          {/* 섹션 설명 */}
          <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            작업대에서의 간단한 관찰, 기술 발견, 그리고 생각들.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {notes.map((note, index) => (
            <article
              key={note.id}
              className={cn(
                "group relative cursor-pointer overflow-hidden rounded-xl border border-border bg-card/40 glass p-6 sm:p-7 transition-all duration-400 hover:border-primary/40 hover:bg-card/60 active:scale-[0.99] hover-lift animate-fade-in-up",
                expandedNote === note.id && "border-primary/50 bg-card/70",
              )}
              style={{ animationDelay: `${index * 100 + 200}ms` }}
              onClick={() => setExpandedNote(expandedNote === note.id ? null : note.id)}
            >
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                  note.color,
                )}
              />

              <div className="relative z-10">
                {/* 카테고리 및 날짜 정보 */}
              <div className="mb-4 sm:mb-5 flex items-center justify-between gap-3">
                  {/* 카테고리 배지 */}
                  <span className="rounded-lg border border-border/80 bg-secondary/60 px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors group-hover:border-primary/50 group-hover:text-foreground">
                    {note.category}
                  </span>
                  {/* 발행 날짜 */}
                  <span className="font-mono text-xs text-muted-foreground">{note.date}</span>
                </div>

                <h3 className="mb-3 text-lg sm:text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-gradient">
                  {note.title}
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground">{note.excerpt}</p>

                {/* 더보기 텍스트 - 호버시 나타남 */}
                <div className="mt-5 flex items-center gap-2 font-mono text-xs text-primary transition-all duration-300 sm:opacity-0 sm:translate-x-[-8px] group-hover:opacity-100 group-hover:translate-x-0">
                  <span>더 읽기</span>
                  {/* 우측 화살표 아이콘 */}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-transparent transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
