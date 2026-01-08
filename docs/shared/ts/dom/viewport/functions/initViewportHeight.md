[**Joo Code Library API**](../../../../../README.md)

***

[Joo Code Library API](../../../../../modules.md) / [shared/ts/dom/viewport](../README.md) / initViewportHeight

# Function: initViewportHeight()

> **initViewportHeight**(): () => `void`

Defined in: shared/ts/dom/viewport.ts:16

브라우저의 실제 뷰포트 높이(vh)를 계산하여 CSS 변수(--vh)로 설정합니다.
모바일 브라우저에서 주소창에 의해 화면이 가려지는 문제를 해결할 때 사용합니다.

## Returns

> (): `void`

### Returns

`void`

## Example

```ts
// 앱 진입점(App.tsx 또는 index.ts)에서 호출
initViewportHeight();
```
```css
/* 사용 */
.container {
height: 100vh;
height: calc(var(--vh, 1vh) * 100);
```
