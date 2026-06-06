// 팀 소개 페이지 - 팀 멤버 정보를 카드 형식으로 표시
import { TeamGrid } from "@/components/public/team/team-grid"

// 페이지 메타데이터 설정
export const metadata = {
  title: "팀 - EinCode Digital Lab",
  description: "EinCode Digital Lab의 재능 있는 팀 멤버들을 소개합니다",
}

// 팀 소개 페이지 컴포넌트
// 주의: Header와 Footer는 레이아웃 파일에서 자동으로 렌더링됨
export default function TeamPage() {
  return (
    <>
      {/* 팀 소개 섹션 */}
      <TeamGrid />
    </>
  )
}
