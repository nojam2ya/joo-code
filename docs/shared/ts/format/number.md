[**Joo Code Library API**](../../../README.md)

***

[Joo Code Library API](../../../modules.md) / shared/ts/format/number

# shared/ts/format/number

숫자와 관련된 데이터를 적합한 형식의 문자열로 변환하는 유틸리티 모음입니다.

## Functions

### formatCommaNumber()

> **formatCommaNumber**(`value`): `string`

Defined in: shared/ts/format/number.ts:19

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
