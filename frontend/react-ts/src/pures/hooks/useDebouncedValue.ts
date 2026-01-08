/**
 * @packageDocumentation
 * 성능 최적화를 위한 디바운싱(Debouncing) 관련 훅을 제공합니다.
 */

import { useEffect, useRef, useState } from "react";

/**
 * 연속적으로 변경되는 값을 지연 시킨 후, 마지막 값만 반환하는 훅입니다.
 * * 주로 검색어 입력(Search Input)이나 윈도우 리사이즈 이벤트 등
 * 잦은 상태 업데이트로 인한 리렌더링 및 API 호출 최적화에 사용됩니다.
 * * @template T - 지연 처리할 값의 타입
 * @param value - 디바운싱을 적용할 원본 값
 * @param delay - 지연 시간 (밀리초 단위, 기본값: 250ms)
 * @returns 지연 시간이 경과한 후 업데이트된 값
 * * @example
 * ```tsx
 * const [searchTerm, setSearchTerm] = useState("");
 * const debouncedSearch = useDebouncedValue(searchTerm, 500);
 * * useEffect(() => {
 * // debouncedSearch가 바뀔 때만 API를 호출합니다.
 * fetchData(debouncedSearch);
 * }, [debouncedSearch]);
 * ```
 */
export function useDebouncedValue<T>(value: T, delay = 250) {
  const [debounced, setDebounced] = useState(value);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    if (timer.current) window.clearTimeout(timer.current);

    timer.current = window.setTimeout(() => {
      setDebounced(value);
    }, delay);

    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [value, delay]);

  return debounced;
}
