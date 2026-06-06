// 팀 소개 페이지 - 팀 멤버 정보를 카드 형식으로 표시
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { TeamGrid } from '@/components/public/team/team-grid'

// 페이지 메타데이터 설정
export const metadata = {
  title: 'Team - EinCode Digital Lab',
  description: 'Meet the talented team members of EinCode Digital Lab',
}

// 팀 소개 페이지 컴포넌트
export default function TeamPage() {
  return (
    <>
      <main className="relative min-h-screen overflow-hidden">
        {/* 페이지 헤더 네비게이션 */}
        <Header />

        {/* 팀 소개 섹션 */}
        <TeamGrid />

        {/* 페이지 푸터 */}
        <Footer />
      </main>
    </>
  )
}
