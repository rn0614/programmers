# Javascript 정리

```jsx
//dom요소 만들기
const $elems = document.querySelector('.className');

//forEach 쓰기
$elems.forEach(function(item){
	//use item, item은 dom 요소로 items에 있는 요소임
})

//addEventListener event.target을 통해 클릭된 요소를 지정
const $parentElem = document.querySelector('#ParentClass')
$parentElem.addEventListener('click', function(event){
	const $childElem = event.target;

	event.stopPropagation(); // 버블링 중단
	event.preventDefault(); // 기본요소 실행 중단

	$childElem.classList.toggle('open'); // toggle, add, remove 등으로 클래스명 추가 삭제
																			 // contains 로 클래스명에 있는지 여부 확인 가능
})

```

```jsx

Array.from(HTMLCollection) //요소 객체를 리스트에 넣음 

const Items = Array.from({length:n}, (value,index)=> index) // list 선언

Items[1].
```

```jsx
요소.scrollIntoView({
	block:"start",
  behavior:"smooth",
})
```

- axios로 API 데이터 긁어오기

```jsx
axios.get(API)
	.then(res=>{
		const {data} = res;
		data.forEach(item =>{
			const li =  `
										<li>
												<h2>${item.title}</h2>
												<p>${item.content}</p>
										</li>
									`
				ul.insertAdjacentHtml("beforeend",li);
		})
	})
  .catche(e=> console.error(e));

// 통신부분과 출력 부분 분할
const printData = res =>{
	const {data} = res;
			data.forEach(item =>{
				const li =  `
											<li>
													<h2>${item.title}</h2>
													<p>${item.content}</p>
											</li>
										`
					ul.insertAdjacentHtml("beforeend",li);
			})
}

const fetchPost = url =>{
	return axios.get(url);
}

fetchPost(API)
	.then(printData)
	.catch(e => console.log(e));
```

- IIFE

```jsx
// (function(){})() 식으로 사용되는 함수

//1. 코드 충돌 방지
(function(){let open=...})();
(function(){let open=...})(); // 충동하지 않음

//2. 즉시 리턴값 반환
const fun1 = (function(){ return value;})();
console.log(fun1)  //리턴값이 반환됨

//2-2. 만약 리턴값이 함수라면 다음과 같이 사용가능

const fun2 = (function(){return ()=> ...}())();
console.log(fun2());
```

- 함수형 component

```jsx
const obj1 ={
	arg1 : value1,
	arg2 : value2,

	function1 : function(){
		this.arg1 = value1
	},
	function2 : function(){
	
	}
}

function componet명( Element ){

  this.Element = Element;
  this.ClassName = "class명";
  this.items = this.Element.querySelectorAll('.class명');
  
  this.totalItems = this.items.length;
  this.current = 0;
  this.isMoving = false; 

}
```

- date 함수

```jsx
const now = new Date();
const seconds = now.getSeconds();
const.minutes = now.getMinutes();
const.hours = now.getHours();
```