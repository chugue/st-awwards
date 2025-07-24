# 🎮 Zentry - 어워드 수상급 게이밍 메타버스 랜딩 페이지

> React, TypeScript, GSAP 애니메이션으로 구축된 최첨단 인터랙티브 게이밍 플랫폼 랜딩 페이지. 현대적인 웹 개발 역량과 창의적인 프론트엔드 엔지니어링을 보여주도록 설계되었습니다.

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![GSAP](https://img.shields.io/badge/GSAP-3.13.0-88CE02?style=for-the-badge&logo=greensock)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-06B6D4?style=for-the-badge&logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-5.4.10-646CFF?style=for-the-badge&logo=vite)

## 🚀 프로젝트 개요

Zentry는 정교한 애니메이션, 3D 인터랙션, 현대적인 웹 기술을 통해 고급 프론트엔드 개발 스킬을 보여주는 고성능 몰입형 랜딩 페이지입니다. 이 프로젝트는 웹 디자인과 개발의 경계를 넓히는 어워드급 웹 경험을 만들 수 있는 능력을 보여줍니다.

### ✨ 주요 성과

- **🏆 Awwwards급 디자인**: 수상 경력이 있는 웹사이트에 견줄만한 전문가 수준의 애니메이션과 인터랙션
- **⚡ 초고속 성능**: Vite를 사용하여 최적의 로딩 속도와 개발 경험 제공
- **🎨 고급 애니메이션**: 스크롤 트리거 효과와 3D 변환을 갖춘 복잡한 GSAP 애니메이션
- **📱 완벽한 반응형**: 모바일 우선 접근 방식으로 모든 디바이스에서 원활한 경험 제공
- **🔧 현대적 기술 스택**: 최신 웹 개발 방식을 보여주는 React 18과 TypeScript

## 🛠️ 기술 스택

### 핵심 기술

- **React 18.3.1** - 컴포넌트 기반 UI 아키텍처
- **TypeScript** - 중요 컴포넌트를 위한 타입 안전 개발
- **Vite 5.4.10** - 차세대 프론트엔드 도구
- **Tailwind CSS 3.4.17** - 커스텀 디자인 시스템을 갖춘 유틸리티 우선 스타일링

### 애니메이션 & 인터랙션

- **GSAP 3.13.0** - 업계 표준 애니메이션 라이브러리
- **ScrollTrigger** - 스크롤 기반 애니메이션 시퀀스
- **커스텀 3D 효과** - 마우스 추적 원근 변환

### 개발 도구

- **ESLint** - 코드 품질 관리
- **Prettier** - 일관된 코드 포맷팅
- **PostCSS** - 고급 CSS 처리
- **Path Aliasing** - @/ 문법을 사용한 깔끔한 import 구문

## 🎯 기능 및 기술적 하이라이트

### 🎬 고급 애니메이션 시스템

```javascript
// 예시: 클립 패스 모핑을 사용한 복잡한 스크롤 트리거 애니메이션
gsap.timeline({
  scrollTrigger: {
    trigger: element,
    start: "top center",
    scrub: true,
    pin: true
  }
})
.to(element, {
  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  scale: 1.2,
  duration: 3
})
```

### 🎮 인터랙티브 3D 컴포넌트

- **마우스 추적 카드**: 커서 위치를 따라가는 실시간 3D 회전
- **원근 변환**: 부드러운 GSAP 기반 3D 효과
- **성능 최적화**: 60fps 인터랙션을 위한 메모이제이션 계산

### 🎨 커스텀 디자인 시스템

- **타이포그래피**: 스타일 대체 문자를 갖춘 5개의 커스텀 웹 폰트
- **컬러 팔레트**: 세심하게 제작된 게이밍 테마 색상
- **클립 패스 마스킹**: 창의적인 도형 모핑 애니메이션
- **글래스모피즘**: 백드롭 필터를 사용한 현대적 UI 효과

### 📱 반응형 아키텍처

- 모바일 우선 개발 접근법
- 모든 화면 크기에 대한 적응형 레이아웃
- 터치 최적화 인터랙션
- 모바일 기기를 위한 성능 최적화

## 🚀 시작하기

### 사전 요구사항

```bash
node >= 18.0.0
npm >= 9.0.0
```

### 설치 방법

```bash
# 저장소 클론
git clone https://github.com/yourusername/st-awwards.git

# 프로젝트 디렉토리로 이동
cd st-awwards

# 의존성 설치
npm install

# 개발 서버 시작
npm run dev
```

### 사용 가능한 스크립트

```bash
npm run dev      # 개발 서버 시작
npm run build    # 프로덕션 빌드
npm run preview  # 프로덕션 빌드 미리보기
npm run lint     # ESLint 실행
```

## 📂 프로젝트 구조

```
st-awwards/
├── src/
│   ├── components/      # React 컴포넌트 (JSX/TSX 혼용)
│   │   ├── Hero.jsx     # 동적 전환이 있는 비디오 쇼케이스
│   │   ├── Features.tsx # 3D 효과가 있는 TypeScript 벤토 그리드
│   │   ├── Story.tsx    # 인터랙티브 3D 카드 컴포넌트
│   │   └── ...
│   ├── App.jsx          # 메인 애플리케이션 컴포넌트
│   └── index.css        # 전역 스타일 및 Tailwind imports
├── public/
│   ├── fonts/           # 커스텀 WOFF2 웹 폰트
│   ├── videos/          # 최적화된 비디오 에셋
│   └── img/             # WebP 최적화 이미지
└── 설정 파일들           # Vite, Tailwind, ESLint 등
```

## 💡 기술적 결정사항 및 모범 사례

### 성능 최적화

- **지연 로딩**: 로딩 상태와 함께 필요시 비디오 로드
- **WebP 이미지**: 빠른 로딩을 위한 차세대 이미지 형식
- **WOFF2 폰트**: 최적화된 웹 폰트 전달
- **코드 분할**: Vite가 자동으로 최적 로딩을 위한 코드 분할

### 개발 방식

- **컴포넌트 아키텍처**: 모듈화되고 재사용 가능한 컴포넌트
- **TypeScript 마이그레이션**: 타입 안전성을 위한 점진적 도입
- **GSAP 컨텍스트**: 애니메이션을 위한 적절한 정리
- **커스텀 훅**: 재사용성을 위한 추상화된 로직

### SEO 및 접근성

- **시맨틱 HTML**: 적절한 제목 계층 구조
- **ARIA 라벨**: 인터랙티브 요소의 접근성
- **메타 태그**: SEO 최적화된 메타데이터
- **성능 지표**: Core Web Vitals에 최적화

## 🎨 디자인 철학

이 프로젝트는 고품질 디자인을 픽셀 퍼펙트하고 성능이 뛰어난 웹 경험으로 변환하는 능력을 보여줍니다. 애니메이션 품질, 인터랙션 디자인, 기술적 실행에 대한 집중은 다음 직무에 가치 있는 스킬을 보여줍니다:

- **프론트엔드 엔지니어링**: 고급 React 패턴과 성능 최적화
- **크리에이티브 개발**: GSAP 전문성과 혁신적인 인터랙션
- **풀스택 포지션**: 현대적인 웹 아키텍처 이해
- **UI/UX 엔지니어링**: 디자인과 개발의 가교 역할

## 🤝 보유 스킬 증명

- **현대적 React 개발**: Hooks, context, 성능 최적화
- **TypeScript 통합**: 점진적 도입과 타입 안전성
- **애니메이션 엔지니어링**: 복잡한 GSAP 타임라인과 ScrollTrigger
- **반응형 디자인**: Tailwind CSS를 활용한 모바일 우선 접근법
- **빌드 도구 설정**: Vite 설정 및 최적화
- **코드 품질**: ESLint, Prettier, 클린 아키텍처

## 📞 연락처

어워드급 웹 경험을 만들 수 있는 프론트엔드 개발자를 찾고 계신가요? 연락주세요!

- **포트폴리오**: [포트폴리오 URL]
- **LinkedIn**: [LinkedIn 프로필]
- **이메일**: [이메일 주소]

---

<div align="center">
  <p>React, TypeScript, GSAP로 ❤️를 담아 제작</p>
  <p>© 2024 - 탁월함을 위한 디자인</p>
</div>
