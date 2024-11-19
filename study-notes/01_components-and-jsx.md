# React 컴포넌트와 JSX 정리

## 1. 컴포넌트(Component)란 무엇인가?

### 개념

- **컴포넌트(Component)**는 React 애플리케이션을 구성하는 기본 단위입니다.

- UI를 재사용 가능한 **독립적이고 분리된 단위**로 나눌 수 있게 해줍니다.

- 하나의 컴포넌트는 **HTML, CSS, JavaScript**를 결합하여 화면의 일부를 표현합니다.

### 특징

1. **재사용 가능**  
   동일한 UI 요소를 여러 곳에서 반복적으로 사용할 수 있습니다.

2. **계층 구조**  
   컴포넌트는 부모-자식 관계로 계층적으로 구성될 수 있습니다.

3. **동작과 표현의 결합**  
   상태와 이벤트 핸들링을 포함하여 동적인 동작을 구현할 수 있습니다.

### 분류

- **클래스형 컴포넌트**

  - ES6 클래스 문법을 사용하여 정의
  - `React.Component`를 상속받아 작성
  - 현재는 거의 사용되지 않음 (Hook 등장 이후)

- **함수형 컴포넌트**
  - 함수 문법을 사용하여 정의
  - 상태와 생명주기 기능은 **Hook**으로 관리

## 2. JSX란 무엇인가?

### 개념

- **JSX**(JavaScript XML)는 React에서 HTML과 유사한 문법을 사용하여 UI를 정의할 수 있는 JavaScript 확장 문법입니다.
- **JavaScript 코드를 HTML 코드처럼 작성**할 수 있게 해줍니다.
- JSX는 브라우저에서 실행되기 전에 **React.createElement()** 함수로 변환됩니다.

### 특징

1. **가독성**  
   코드가 간결하며, UI 구조를 직관적으로 이해할 수 있습니다.

2. **표현식 사용**  
   JSX 내부에 JavaScript 표현식(`{}`)을 삽입할 수 있습니다.

3. **React 요소 반환**  
   JSX 코드는 React 요소로 변환됩니다.

### JSX 문법의 주요 규칙

- **하나의 부모 요소로 감싸야 합니다.**
  JSX는 항상 하나의 부모 요소로 감싸야 합니다.

```jsx
function HiEveryone() {
  return (
    <div>
      <h1>리액트 스터디</h1>
      <p>JSX 사용방법</p>
    </div>
  );
}

export default HiEveryone;
```

- **JavaScript 표현식 사용**
  중괄호 {}를 사용하여 JavaScript 표현식을 삽입할 수 있습니다.

```jsx
function HiEveryone() {
  const name = "React";
  return (
    <div>
      <h1>{name} 스터디</h1>
      <p>JSX 사용방법</p>
    </div>
  );
}
export default HiEveryone;
```

- **클래스 대신 className 사용**
  HTML의 class 속성 대신 React에서는 className을 사용합니다.

```jsx
return <div className="container">내용</div>;
```

- **self-closing 태그**
  내용이 없는 태그는 닫는 태그 없이 작성해야 합니다.

```jsx
return <img src="image.jpg" alt="이미지" />;
```
