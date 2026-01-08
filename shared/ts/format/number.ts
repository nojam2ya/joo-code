/**
 * @packageDocumentation
 * 숫자와 관련된 데이터를 적합한 형식의 문자열로 변환하는 유틸리티 모음입니다.
 */

/**
 * 숫자에 3자리 단위로 콤마(,)를 추가하여 포맷팅합니다.
 * * 한국(ko-KR) 로케일 기준으로 포맷팅을 수행합니다.
 * * 숫자로 변환할 수 없는 값이 들어오면 원본 값을 문자열로 반환합니다.
 * @param value - 포맷팅할 숫자 또는 숫자 형태의 문자열
 * @returns 콤마가 포함된 문자열 (변환 실패 시 원본 문자열)
 * @example
 * ```ts
 * formatCommaNumber(1234567); // "1,234,567"
 * formatCommaNumber("1000");  // "1,000"
 * formatCommaNumber("abc");   // "abc" (숫자가 아니므로 그대로 반환)
 * ```
 */
export function formatCommaNumber(value: number | string): string {
  const num = Number(value);

  if (isNaN(num)) return String(value);
  return num.toLocaleString("ko-KR");
}

/**
 * 천 단위 금액을 억 단위로 변환하여 포맷팅합니다.
 * * 주로 '천원' 단위로 들어오는 회계/금융 데이터를 '억' 단위로 표시할 때 사용합니다.
 * * 100,000천원(1억 원)을 기준으로 계산하며, 지정된 소수점 자릿수까지 표시합니다.
 * * @param value - 변환할 값 (숫자 또는 콤마가 포함된 문자형 숫자)
 * @param digits - 표시할 소수점 자릿수 (기본값: 2)
 * @returns 억 단위로 변환된 ko-KR 포맷 문자열
 * * @example
 * ```ts
 * formatThousandToEok(100000);      // "1.00" (1억)
 * formatThousandToEok("2550600", 1); // "25.5" (25.5억)
 * formatThousandToEok("invalid");    // "0"
 * ```
 */
export function formatThousandToEok(
  value: number | string,
  digits = 2
): string {
  let num = Number(String(value).replace(/,/g, ""));
  if (isNaN(num)) return "0";

  const eok = num / 100000; // 100,000천원 = 1억
  const formattedNum = Number(eok.toFixed(digits));

  return formattedNum.toLocaleString("ko-KR", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
}

/**
 * 로마 숫자(유니코드 포함)를 아라비아 숫자로 변환합니다.
 * * 단일 유니코드 문자(Ⅰ, Ⅱ 등)와 일반 알파벳 조합 로마 숫자를 모두 지원합니다.
 * * 로마 숫자의 감산 표기법(IV = 4, IX = 9 등)을 처리하기 위해 역방향 탐색 알고리즘을 사용합니다.
 * * @param roman - 변환할 로마 숫자 문자열
 * @returns 변환된 아라비아 숫자 (매칭되는 값이 없으면 0 반환)
 * * @example
 * ```ts
 * romanToNumber("Ⅵ");   // 6 (유니코드 전각)
 * romanToNumber("XII");  // 12 (일반 알파벳)
 * romanToNumber("IV");   // 4
 * ```
 */
export function romanToNumber(roman: string): number {
  const map: Record<string, number> = {
    Ⅰ: 1,
    Ⅱ: 2,
    Ⅲ: 3,
    Ⅳ: 4,
    Ⅴ: 5,
    Ⅵ: 6,
    Ⅶ: 7,
    Ⅷ: 8,
    Ⅸ: 9,
    Ⅹ: 10,
    Ⅺ: 11,
    Ⅻ: 12,
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000, // 일반 알파벳 대응 추가 권장
  };

  const normalized = roman
    .replace(/[ⅰⅱⅲⅳⅴⅵⅶⅷⅸⅹ]/g, (c) =>
      String.fromCharCode(c.charCodeAt(0) - 0x2170 + 73)
    )
    .toUpperCase();

  let result = 0;
  let prev = 0;

  for (let i = normalized.length - 1; i >= 0; i--) {
    const value = map[normalized[i]] ?? 0;
    // 이전 값(오른쪽 값)보다 작으면 뺌 (예: IV -> 5 - 1 = 4)
    if (value < prev) {
      result -= value;
    } else {
      result += value;
    }
    prev = value;
  }
  return result;
}
