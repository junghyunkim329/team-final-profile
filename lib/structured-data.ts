import type { BlogPost } from './blog-data'

// 블로그 포스트를 위한 구조화된 데이터 생성 - Google, Bing 등에서 검색 결과에 표시됨
export function generateBlogPostStructuredData(post: BlogPost, url: string) {
  return {
    // Schema.org 구조화된 데이터 컨텍스트
    '@context': 'https://schema.org',
    // 블로그 포스팅 타입
    '@type': 'BlogPosting',
    // 글 제목
    headline: post.title,
    // 글 요약
    description: post.excerpt,
    // 글 커버 이미지
    image: `${url}/og-images/${post.slug}.png`,
    // 발행 날짜
    datePublished: new Date(post.date).toISOString(),
    // 수정 날짜
    dateModified: new Date(post.date).toISOString(),
    // 글 작성자 정보
    author: {
      '@type': 'Person',
      name: post.author.name,
      url: 'https://github.com/ehsanghaffar',
    },
    // 출판자 정보
    publisher: {
      '@type': 'Person',
      name: 'Ehsan Ghaffar',
      url: 'https://eindev.ir',
    },
    // 메인 콘텐츠 페이지 URL
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${url}/blog/${post.slug}`,
    },
    // 글의 카테고리
    articleSection: post.category,
    // 검색 키워드들
    keywords: post.tags.join(', '),
    // 읽기 소요 시간
    timeRequired: post.readTime,
  }
}

// 웹사이트 전체를 위한 구조화된 데이터 생성
export function generateWebsiteStructuredData(url: string) {
  return {
    // Schema.org 컨텍스트
    '@context': 'https://schema.org',
    // 웹사이트 타입
    '@type': 'WebSite',
    // 사이트 이름
    name: 'EINCODE',
    // 사이트 설명
    description: "A digital workshop where code meets curiosity. Experiments, prototypes, and open-source artifacts by Ehsan Ghaffar.",
    // 사이트 URL
    url: url,
    // 저자 정보
    author: {
      '@type': 'Person',
      name: 'Ehsan Ghaffar',
      url: 'https://github.com/ehsanghaffar',
    },
    // 검색 기능 정의 - Google의 사이트 검색 지원
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        // 검색 URL 템플릿
        urlTemplate: `${url}/blog?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

// 개인 프로필을 위한 구조화된 데이터 생성
export function generatePersonStructuredData() {
  return {
    // Schema.org 컨텍스트
    '@context': 'https://schema.org',
    // 사람 타입
    '@type': 'Person',
    // 이름
    name: 'Ehsan Ghaffar',
    // 개인 웹사이트
    url: 'https://eindev.ir',
    // 프로필 이미지
    image: 'https://eindev.ir/developer-portrait.png',
    // 다른 플랫폼의 프로필 링크들
    sameAs: [
      'https://github.com/ehsanghaffar',
      'https://twitter.com/ehsanghaffar',
      'https://linkedin.com/in/ehsanghaffar',
    ],
    // 직책
    jobTitle: 'Software Engineer',
    // 소속 조직
    worksFor: {
      '@type': 'Organization',
      name: 'EINCODE',
    },
  }
}

// 네비게이션 경로(breadcrumb)를 위한 구조화된 데이터 생성
export function generateBreadcrumbStructuredData(items: Array<{ name: string; url: string }>) {
  return {
    // Schema.org 컨텍스트
    '@context': 'https://schema.org',
    // 경로 네비게이션 타입
    '@type': 'BreadcrumbList',
    // 경로의 각 항목들
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      // 경로에서의 위치 (1부터 시작)
      position: index + 1,
      // 항목 이름
      name: item.name,
      // 항목 URL
      item: item.url,
    })),
  }
}
