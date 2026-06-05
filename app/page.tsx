// 메인 페이지 컴포넌트들 임포트
import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { ProjectsGrid } from '@/components/projects-grid'
import { LabNotes } from '@/components/lab-notes'
import { Workbench } from '@/components/workbench'
import { Footer } from '@/components/footer'
import { CursorGlow } from '@/components/cursor-glow'

// 메인 홈페이지 컴포넌트
export default function Home() {
  // 사이트 기본 URL (환경변수 또는 기본값 사용)
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://eindev.ir'

  return (
    <>
      {/* 메인 콘텐츠 영역 */}
      <main className="relative min-h-screen overflow-hidden scanlines">
        {/* 마우스 커서 글로우 효과 */}
        <CursorGlow />
        {/* 컨텐츠 레이어 */}
        <div className="relative z-10">
          {/* 네비게이션 헤더 */}
          <Header />
          {/* 히어로 섹션 - 메인 소개 */}
          <HeroSection />
          {/* 프로젝트 포트폴리오 섹션 */}
          <ProjectsGrid />
          {/* 기술 블로그 노트 섹션 */}
          <LabNotes />
          {/* 진행 중인 작업 섹션 */}
          <Workbench />
          {/* 푸터 - 연락처 정보 */}
          <Footer />
        </div>
      </main>
    </>
  )
}
