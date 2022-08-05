# React

 ## 디렉토리 구조

> 크게 App.js, index.js, style.css
>
> - App.js 는 실제로 로직을 구현하는 부분
> - index.js 는 전역적인 설정을 하는 부분
> - style.css는 css

- src - index.js

  - react의 제일 첫 페이지
  - react 는 사용할 태그를  `import 태그명 from '주소';`를 통해 선언하고  해당 태그를 통해 페이지를 가져옴
  - index.js 내부는 전역적인 설정들이 들어감
  - 전체적인 부분은 root라는 박스 안에 app 태그가 들어가면서 app.js 가 들어가는 방식

  ```javascript
  import React, { StrictMode } from 'react';
  import { createRoot } from 'react-dom/client';

  import App from './App';                      //

  const rootElement = document.getElementById('root');
  const root = createRoot(rootElement);

  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
  ```

  -  js 주소는 생략이며 .css의 경우 `import './App.css'` 같이 들어감
  -  public- index.html 에서 root 로 처리됨

- 기본적으로 function 함수의 내부에서 자바스크립트로 처리하고 return 이 html으로 이루어져 있음



- component란?


  - 특정 사용자정의태그를 뜻함( class형과 함수형 2가지가 존재)

  ``` react
  // COMPONENT정의 부분
  function 태그명(){
    // 자바스크립트 탄
    return (
    	//태그 안의 내용물(html로 구성됨)
    )
  }

  // 첫 실행시 실행되는 문장
  export default function App() {
    // javascript 단
    return(
    	// HTML단(가장 큰 하나의 태그로 묶여 있어야 함 여러개를 묶을 때는 빈 태그를 사용)
      //여기에 정의한 component를 태그 형식으로 사용
      // 
      <태그명></태그명>
    );
  }
  ```

- 외부에서 값을 받아오는 방법 props


  - 호출된 TAG에서 parameter 값을 지정하면 이를 props.parameter 값으로 호출하여 사용할 수 있음
  - javascript에서는 그냥 사용하면 되고 return 문 안에서는 {props.parameter}로 사용함 

  ``` react
  function 태그명(props){
    return (
    	태그안의 내용물 , {props.파라미터}
    )
  }

  // 첫 실행시 실행되는 문장
  export default function App() {
    // javascript 단
    return(
    	// HTML단 
      //여기에 정의한 component를 태그 형식으로 사용
      <태그명 파라미터="값"></태그명>
    );
  }
  ```






- event에서 선택된 tag의 정보를 가져올 때, onSubmit을 통해 submit 처리

  ``` react
  //태그에 form이 있는 경우
  function 태그명(props){
    return (<article>
    <form onSubmit={(event)=>{
  	const title = event.target.title.value; // title태그의 value값을 가져옴
    }}>
      <p>
        <input type="text" name="이름"/>
      </p>
      <p>
     	  <input type="submit" value="등록"/>
      </p>
    </form>
    </article>
  });

    
  //
  export default function App(){
      
  }
  ```




  

- STATE : 내부 데이터 처리 useState  // 쉽게보면 const 변수와 setter를 useState('값') 을 통해 정의

  - 객체도 state 사용 가능

  ```javascript
    const [변수명, set변수명] = useState('값');
    // 어떤 객체의 값과 setter를 한번에 설정해줌.
    set객체명('새로운 값');
  ```

  ​



- App 단에서 상태 및 함수 정의하여 사용하기

  ```react
  export default function App(){
    const [변수명, set변수] = useState('값'); 		// 상태나 변수들을 정의하고
    let 변수 = null;
    let 태그변수 = null;
    if(조건){										// 이를 이용해 변수와 태그변수를 선언한다
      태그변수 = <태그명 param='객체명'></태그명> ;
    }else if(조건){
     	태그변수 = <태그명 param='객체명'></태그명> ;
    }
    return(
      {태그변수}					// 태그변수를 이용하여 변형된 태그를 반환값에 끼어 넣을 수 있음
    );
  }
  ```




- 화면넘김 방지 및 내가 원하는 함수 적용

  ```react
  function 태그명(props){
    <a href="/" onClick={(event)=>{ // 원래 a 태그 onClick시 실행되는 event가 담김
      event.preventDefault();	    // a태그 event 취소
      props.정의함수명();       // 사용단의 정의함수 실행
    }}></a>
  }

  export default function App() {
    let 입력값;
    return(
      <태그명 정의함수={(입력값)=>{     // 사용단에서 함수 정의
          //함수내용
        }>
      </태그명>
      
    );
  }
  ```



- event.target  // 해당 이벤트를 일으킨 주체 보통 a태그의 id를 가져올 수 있음

  ```react
  <a onClick={(event)=>{
      event.target.id 		// 해당 호출을 통해 클릭된 a의 id를 가져올 수 있음
  }}></a>						// event.target.id는 
  ```

  ​

