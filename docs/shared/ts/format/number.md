[**Joo Code Library API**](../../../README.md)

***

[Joo Code Library API](../../../modules.md) / shared/ts/format/number

# shared/ts/format/number

숫자와 관련된 데이터를 적합한 형식의 문자열로 변환하는 유틸리티 모음입니다.

## Functions

### formatCommaNumber()

> **formatCommaNumber**(`value`): `string`

Defined in: [shared/ts/format/number.ts:19](https://github.com/nojam2ya/joo-code/blob/53d303a916e2b300766d61a3f0c57bd7a3e3c5b9/shared/ts/format/number.ts#L19)

숫자에 3자리 단위로 콤마(,)를 추가하여 포맷팅합니다.
* 한국(ko-KR) 로케일 기준으로 포맷팅을 수행합니다.
* 숫자로 변환할 수 없는 값이 들어오면 원본 값을 문자열로 반환합니다.

#### Parameters

##### value

포맷팅할 숫자 또는 숫자 형태의 문자열

`string` | `number`

#### Returns

`string`

콤마가 포함된 문자열 (변환 실패 시 원본 문자열)

#### Example

```ts
formatCommaNumber(1234567); // "1,234,567"
formatCommaNumber("1000");  // "1,000"
formatCommaNumber("abc");   // "abc" (숫자가 아니므로 그대로 반환)
```

***

### formatThousandToEok()

> **formatThousandToEok**(`value`, `digits`): `string`

Defined in: [shared/ts/format/number.ts:40](https://github.com/nojam2ya/joo-code/blob/53d303a916e2b300766d61a3f0c57bd7a3e3c5b9/shared/ts/format/number.ts#L40)

천 단위 금액을 억 단위로 변환하여 포맷팅합니다.
* 주로 '천원' 단위로 들어오는 회계/금융 데이터를 '억' 단위로 표시할 때 사용합니다.
* 100,000천원(1억 원)을 기준으로 계산하며, 지정된 소수점 자릿수까지 표시합니다.
*

#### Parameters

##### value

변환할 값 (숫자 또는 콤마가 포함된 문자형 숫자)

`string` | `number`

##### digits

`number` = `2`

표시할 소수점 자릿수 (기본값: 2)

#### Returns

`string`

억 단위로 변환된 ko-KR 포맷 문자열
*

#### Example

```ts
formatThousandToEok(100000);      // "1.00" (1억)
formatThousandToEok("2550600", 1); // "25.5" (25.5억)
formatThousandToEok("invalid");    // "0"
```

***

### romanToNumber()

> **romanToNumber**(`roman`): `number`

Defined in: [shared/ts/format/number.ts:69](https://github.com/nojam2ya/joo-code/blob/53d303a916e2b300766d61a3f0c57bd7a3e3c5b9/shared/ts/format/number.ts#L69)

로마 숫자(유니코드 포함)를 아라비아 숫자로 변환합니다.
* 단일 유니코드 문자(Ⅰ, Ⅱ 등)와 일반 알파벳 조합 로마 숫자를 모두 지원합니다.
* 로마 숫자의 감산 표기법(IV = 4, IX = 9 등)을 처리하기 위해 역방향 탐색 알고리즘을 사용합니다.
*

#### Parameters

##### roman

`string`

변환할 로마 숫자 문자열

#### Returns

`number`

변환된 아라비아 숫자 (매칭되는 값이 없으면 0 반환)
*

#### Example

```ts
romanToNumber("Ⅵ");   // 6 (유니코드 전각)
romanToNumber("XII");  // 12 (일반 알파벳)
romanToNumber("IV");   // 4
```
