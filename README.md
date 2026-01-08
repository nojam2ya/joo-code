# joo-code

로직 창고

- `pures`: 순수 로직
- `patterns`: 복합 로직(라이브러리 의존)

```text
.
├── 📂 backend             # 서버 사이드 로직 및 API 서비스
├── 📂 docs                # TypeDoc으로 자동 생성된 API 문서 (Markdown)
│   ├── 📂 frontend        # 프론트엔드 패키지별 API 가이드
│   └── 📂 shared          # 공통 유틸리티 패키지 API 가이드
├── 📂 frontend            # 웹 기반 프론트엔드 프로젝트 모음
│   ├── 📂 nextjs          # SSR 및 SEO 최적화 웹 애플리케이션
│   ├── 📂 react-native    # 크로스 플랫폼 모바일 웹 뷰/인터페이스
│   └── 📂 react-ts        # 공통 리액트 라이브러리 (Hooks, Patterns, Types)
│       └── 📂 src
│           ├── 📂 patterns # 외부 라이브러리(React Router 등) 의존적 설계 패턴
│           ├── 📂 pures    # 외부 의존성 없는 순수 리액트 커스텀 훅
│           └── 📂 types    # 리액트 환경 전용 공통 타입 정의
├── 📂 infra               # Docker, K8s, CI/CD 배포 관련 설정
├── 📂 mobile              # 네이티브 모바일 애플리케이션
│   └── 📂 flutter         # Flutter 기반 크로스 플랫폼 앱
├── 📂 playground          # 로직 테스트 및 프로토타이핑 샌드박스
│   └── 📂 pg-vite-react-ts # Vite + React TS 환경의 실시간 라이브러리 테스트
└── 📂 shared              # 프로젝트 전반에서 공유되는 핵심 로직 (Core)
    ├── 📂 js              # 환경 독립적인 순수 JavaScript 유틸리티 (Legacy/Universal)
    └── 📂 ts              # 타입 안정성이 강화된 핵심 TypeScript 유틸리티
        ├── 📂 dom         # Viewport 계산, 요소 제어 등 브라우저 환경 유틸
        └── 📂 format      # Number, Date, String 등 데이터 포맷팅 순수 함수

```

---

- [전체 문서 보기(Go Docs)](/docs/modules.md)
