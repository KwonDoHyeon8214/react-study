# Pinterest 클론코딩 프로젝트 분석

## 1. 프로젝트 개요

Pinterest 클론코딩 프로젝트는 `@pengoose/pinterest` 라이브러리를 활용하여 Pinterest 보드 데이터를 가져와 화면에 렌더링하는 React 애플리케이션입니다. 이 문서에서는 해당 프로젝트의 코드를 분석하고 주요 개념과 구현 방식을 정리합니다.

---

## 2. 주요 구현 순서

### 2-1. 모듈 설치 및 Import

- **모듈 설치**  
  터미널에서 다음 명령어를 실행하여 필요한 모듈을 설치합니다.

  npm install @pengoose/pinterest

- **모듈 Import**  
  @pengoose/pinterest에서 Pinterest 클래스를 가져옵니다.
  Named export 방식이므로 **중괄호 {}**를 사용하며, 이름이 반드시 일치해야 합니다.

  import { Pinterest } from "@pengoose/pinterest";

### 2-2. Pinterest 객체 생성 및 데이터 가져오기

Pinterest 객체를 생성하고, 메서드를 호출하여 데이터를 가져옵니다.
데이터 요청은 비동기 작업이므로 React의 useEffect hook을 사용하여 처리합니다.

- **사용 이유**
  useEffect는 컴포넌트가 렌더링된 후 부수 효과(예: 데이터 요청, DOM 조작)를 처리하기 위해 사용됩니다.

- **비동기 작업**
  async/await를 사용하여 데이터를 가져옵니다.

- **종속성 배열**
  []를 전달하여 초기 렌더링 시에만 실행되도록 설정.

### 2-3. Card 컴포넌트 기능 구현

요청한 데이터를 Props로 카드 컴포넌트에 전달하고 detail(이미지 데이터 등) loaded(로딩상태에 따른 애니메이션 처리)를 사용하였습니다.

- **props 사용**
  부모 컴포넌트 App에서 전달받은 detail(이미지 데이터)과 loaded(로딩 상태)를 사용합니다.

- **클래스 동적 추가**
  로딩 상태에 따라 animation 클래스를 동적으로 추가합니다.
- **이미지 속성**
  데이터에서 전달받은 이미지 URL 및 크기를 설정합니다.
  속성명: images["236x"]는 JSON 데이터 구조에 따라 동적으로 접근.

  ### 2-4. Fallback 컴포넌트 구현

  데이터가 없는 경우(로딩 중 또는 오류) 사용자에게 대체 UI를 제공합니다.
