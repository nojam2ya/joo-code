/**
 * @packageDocumentation
 * 현재 브라우저의 위치와 라우트 설정을 비교하여 활성화된 경로 정보를 추출합니다.
 */
import { matchRoutes, RouteObject, useLocation } from "react-router";

/**
 * 현재 브라우저의 위치(location)와 라우트 설정을 비교하여 현재 활성화된 라우트 정보를 반환합니다.
 * 중첩된 라우트의 전체 트리와 가장 하위의 타겟 라우트를 모두 가져올 수 있습니다.
 *
 * @param route - 매칭을 확인할 라우트 객체 또는 라우트 객체 배열
 * @returns 매칭된 라우트 정보 객체
 * - `tree`: 루트부터 현재 페이지까지 매칭된 모든 라우트 객체 배열
 * - `route`: 현재 매칭된 라우트 중 가장 하위(말단)의 라우트 객체
 *
 * @example
 * ```tsx
 * const routes = [{ path: '/user', children: [{ path: ':id' }] }];
 * const { route, tree } = useCurrentRoute(routes);
 * console.log(route?.path); // ":id"
 * console.log(tree?.map(r => r.path)); // ["/user", ":id"]
 * ```
 */
export function useCurrentRoute(route: RouteObject | Array<RouteObject>) {
  const targetRoute = Array.isArray(route) ? route : [route];
  const location = useLocation();
  const matchObjArr = matchRoutes(targetRoute, location);

  return {
    /** 매칭된 전체 라우트 계층 구조 */
    tree: matchObjArr?.map((obj) => obj.route),
    /** 현재 활성화된 가장 구체적인 라우트 */
    route: matchObjArr?.length
      ? matchObjArr[matchObjArr.length - 1].route
      : null,
  };
}
