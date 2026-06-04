"use client"

import { useEffect, useState, useCallback } from "react"

// 마우스 커서를 따라가는 발광 효과 컴포넌트
export function CursorGlow() {
  // 마우스 위치 상태
  const [position, setPosition] = useState({ x: 0, y: 0 })
  // 글로우 효과의 가시성 상태
  const [isVisible, setIsVisible] = useState(false)
  // 인터랙티브 요소(버튼, 링크 등) 위에 있는지 여부
  const [isHovering, setIsHovering] = useState(false)

  // 마우스 이동 이벤트 핸들러 - 부드러운 애니메이션을 위해 requestAnimationFrame 사용
  const handleMouseMove = useCallback((e: MouseEvent) => {
    // 다음 프레임에서 위치 업데이트
    requestAnimationFrame(() => {
      setPosition({ x: e.clientX, y: e.clientY })
    })
    // 마우스 움직임 감지되면 글로우 표시
    setIsVisible(true)
  }, [])

  // 마우스 이벤트 리스너 설정 및 정리
  useEffect(() => {
    // 마우스가 브라우저를 떠났을 때 글로우 숨김
    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    // 마우스가 인터랙티브 요소 위에 있는지 감지
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      // 버튼, 링크, 입력 필드 등의 인터랙티브 요소인지 확인
      const isInteractive = target.closest('a, button, [role="button"], input, textarea, select')
      // 인터랙티브 요소 위에 있으면 글로우 크기 증가
      setIsHovering(!!isInteractive)
    }

    // 이벤트 리스너 추가
    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    document.body.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseover", handleMouseOver, { passive: true })

    // 컴포넌트 언마운트 시 리스너 제거
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseover", handleMouseOver)
    }
  }, [handleMouseMove])

  return (
    <>
      {/* 큰 배경 글로우 효과 - 인터랙티브 요소에 호버 시 확대 */}
      <div
        className="cursor-glow hidden lg:block pointer-events-none"
        style={{
          // 커서 위치에 맞춤
          left: position.x,
          top: position.y,
          // 마우스 움직임에 따라 보이거나 숨김
          opacity: isVisible ? 1 : 0,
          // 호버 상태에 따라 크기 변함
          width: isHovering ? "500px" : "400px",
          height: isHovering ? "500px" : "400px",
          // 부드러운 애니메이션 전환
          transition: "opacity 0.4s ease, width 0.3s ease, height 0.3s ease",
        }}
      />
      
      {/* 작은 원형 글로우 - 커서 위치 따라다님 */}
      <div
        className="hidden lg:block pointer-events-none fixed w-8 h-8 rounded-full mix-blend-screen"
        style={{
          // 커서 위치 동기화
          left: position.x,
          top: position.y,
          // 요소 중심을 커서에 맞춤
          transform: "translate(-50%, -50%)",
          // 프라이머리 색상의 방사형 그래디언트
          background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
          // 가시성 제어
          opacity: isVisible ? 0.15 : 0,
          // 사라질 때 부드러운 효과
          transition: "opacity 0.2s ease",
          // 블러 필터로 소프트 엣지 생성
          filter: "blur(4px)",
        }}
      />
    </>
  )
}
