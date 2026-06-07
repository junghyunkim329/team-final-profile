import {
  Code2,
  Layers,
  ShieldCheck,
  FileText,
  Car,
  Zap,
  Bot,
  Globe,
} from 'lucide-react'

export default function IntroductionPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] px-4 sm:px-6 pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2">
              <p className="font-mono text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground">
                Welcome to MYWORLD
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
                반가워요{' '}
                <span className="bg-gradient-to-l from-primary/50 to-accent text-transparent bg-clip-text">
                  김정현
                </span>
                입니다!
              </h1>
            </div>

            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-3xl">
              MYWORLD는 제가 걸어온 길을 정리하고 있습니다. 지금까지 개발부터
              시스템 보안까지 다양한 길을 걸어보며 지금은 차량 보안 제품 개발을
              꿈꾸고 있습니다. PROJECTS를 통해 길을 확인해보세요!
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative px-4 sm:px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="rounded border border-border/50 bg-card/50 p-6 sm:p-10 backdrop-blur-sm space-y-8">
            <div className="space-y-4">
              <p className="font-mono text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary">
                About Me
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                정보보호학전공
              </h2>
            </div>

            <div className="space-y-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
              <p>
                중부대학교 정보보호학전공 2학년에 재학 중이며 보안에 대해
                전문적으로 배우고 있습니다. 현재 웹프로그래밍, 보안자료구조,
                서버구축및운영실습, 객체지향프로그래밍, 네트워크 보안 등을
                이수하였습니다.
              </p>

              <p>
                학기 중과 방학에는 다양한 프로젝트를 시도하며 경험을 쌓고
                있습니다. 웹서비스 개발에서 시작해 Pwnable Wargame 제작
                프로젝트, 취약점 분석, 차량 보안 제품 개발 프로젝트를
                진행하였습니다.
              </p>

              <p>
                유기적으로 연결되는 보안에 대한 이해도를 높이기 위해 여러 경험을
                해보았다면 이젠 전문성을 갖출 단계를 준비하고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative px-4 sm:px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="rounded border border-border/50 bg-card/50 p-6 sm:p-10 backdrop-blur-sm space-y-8">
            <div className="space-y-4">
              <p className="font-mono text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary">
                Web Programming
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                웹에 대한 이해
              </h2>
            </div>

            <div className="space-y-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
              <p>
                웹프로그래밍 수업을 들으며 페이지 레이아웃과 프로젝트 구성부터
                React와 Next.js등 프레임워크까지 웹에 대한 기초를 다졌습니다.
              </p>

              <p>
                웹 페이지 구성 3요소인 HTML, CSS, JS만을 이용하여 제작한
                `STUDEO` 서비스로 시작해 최종적으로 React, Tailwind CSS,
                next.js를 이용하여 지금의 포트폴리오를 제작하였습니다. next.js의
                기본 빌드 과정을 통해 프로젝트 구성을 공부하였으며 v0를 활용하여
                개발 과정의 어려움을 해소하며 진행했습니다.
              </p>

              <p>
                이러한 기술은 본인의 가치, 역량, 강점 등을 상대방에게 효과적으로
                전달할 수 있는 방법이 될 수 있을 뿐더러 웹 보안적 지식까지
                확장한다면 차량용 소프트웨어의 보안 코딩에도 도움이 될 것입니다.
                웹 애플리케이션의 대표적인 취약점 방어 기법(SQL 인젝션, XSS 방지
                등)은 차량 내부 시스템으로 들어오는 외부 데이터 입력을 검증하고
                필터링하는 보안 코딩의 원리와 정확히 일치합니다.
                {/* 차량 소프트웨어 무선 업데이트 보안처럼 웹 기반의 안전한 파일 전송
                프로토콜과 인증 서버를 구축하여 인가된 보안 패치 및 펌웨어가
                변조 없이 차량 내 ECU에 정확히 설치되도록 제어하는 기능을 만들
                수 있을 것 같습니다. */}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative px-4 sm:px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 space-y-4 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary">
              Now
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              대표 활동 이력
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: 'S․C․P',
                description:
                  'Security Check Point의 약자로 보안/해킹 연구를 진행하는 중부대 정보보안 동아리이며 HSpace와 CCA의 파트너십 동아리로 활동하고 있습니다.',
              },
              {
                icon: Code2,
                title: '멋쟁이 사자처럼 13기',
                description:
                  '전국 80여개 대학과 함께 하는 연합 동아리로 창의적인 아이디어를 기획하고 프로토타입으로 실현 가능성을 검증하는 아이디어 합니다.',
              },
              {
                icon: Car,
                title: '차고연구실',
                description:
                  '본 연구에서는 차량 내 전자제어 유닛 환경을 모의로 구현하고, 해당 환경에서 악성 메시지 공격을 탐지하는 연구를 크게 두 가지 방향으로 진행했습니다. ',
              },
              // {
              //   icon: Zap,
              //   title: 'Modern Tech Stack',
              //   description:
              //     'Built with cutting-edge technologies including Next.js, React, TypeScript, and Tailwind CSS for optimal performance.',
              // },
              // {
              //   icon: Bot,
              //   title: 'AI Integration',
              //   description:
              //     'Exploring the intersection of AI and web development with practical implementations and real-world use cases.',
              // },
              // {
              //   icon: Globe,
              //   title: 'Localization',
              //   description:
              //     'Multi-language support with i18n integration, making projects accessible to a global developer community.',
              // },
            ].map((feature, index) => (
              <div
                key={index}
                className="group rounded border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/80"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded border border-primary/30 bg-primary/10 text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-mono text-sm font-semibold uppercase tracking-wider text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
