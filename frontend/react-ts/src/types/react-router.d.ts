/**
 * @packageDocumentation
 * react-router 라이브러리 확장 정의(declare)합니다.
 */
import "react-router";

/**
 * 라우트별 커스텀 메타데이터 인터페이스
 * @category Routing
 */
export interface RouteMeta {
  /** 브라우저 탭에 표시될 페이지 타이틀 */
  title?: string;
  /** 네비게이션 메뉴나 Breadcrumb에 표시될 이름 */
  menuTitle?: string;
  /** 메뉴 목록에서 숨김 처리 여부 (true일 경우 렌더링 제외) */
  hidden?: boolean;
  /** 권한 제어나 메뉴 매핑에 사용되는 고유 ID */
  menuId?: string;
}

declare module "react-router" {
  // 위에서 만든 인터페이스를 참조
  interface Meta extends RouteMeta {}

  interface IndexRouteObject {
    meta?: Meta;
  }
  interface NonIndexRouteObject {
    meta?: Meta;
  }
}
