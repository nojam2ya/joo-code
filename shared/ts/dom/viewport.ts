/**
 * 브라우저의 실제 뷰포트 높이(vh)를 계산하여 CSS 변수(--vh)로 설정합니다.
 * 모바일 브라우저에서 주소창에 의해 화면이 가려지는 문제를 해결할 때 사용합니다.
 * @example
 * ```ts
 * // 앱 진입점(App.tsx 또는 index.ts)에서 호출
 * initViewportHeight();
 * ```
 * ```css
 * /* 사용 *\/
 * .container {
 * height: 100vh;
 * height: calc(var(--vh, 1vh) * 100);
 * ```
 */
export const initViewportHeight = (): (() => void) => {
  if (typeof window === "undefined") return () => {};

  const setVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  setVh();
  window.addEventListener("resize", setVh);

  // 이벤트 제거 함수 반환 (Cleanup용)
  return () => window.removeEventListener("resize", setVh);
};
