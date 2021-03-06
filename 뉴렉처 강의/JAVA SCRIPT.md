# JAVA SCRIPT

> 탄생배경은 동적인 프로그램 표현 / 하지만 기존에는 html 전체를 다시 렌더링하는 수준, Ajax가 나오면서 부분적으로 렌더링이 가능하게 됐음.

>jQuery의 등장으로 다소 번거로웠던 DOM을 쉽게 제어 가능

> 빠른 자바스크립트를 위해 Crome의 V8 엔진을 만들었고 이를 이용하여 Node.js가 탄생함

> javaScript의 언어 탄생은 form 객체로부터 나온다. 기존의 post 방식에서 유효성 검사를 하기 위해 form 객체가 나왔고 이를 활용할 수 있는 언어가 javaScript

 

- javaScript는 <script> 태그 사이에 위치한다.

  ​

- 변수선언은 var로 한다./ 참조변수가 됨. (autoboxing)
  - wrapper 클래스로 형식 지정 (Boolean, Number, String)

    - var numb = new Number(3); / var numb = 3;    (json 에 의해 자동으로 왼쪽으로 변화)
    - 형식을 정해주지 않으면 undefined라는 값으로 정의됨. var x;

    ​

- 배열 객체 Array(); / stack 구조
  - push 를 통해 넣을 수 있음.
  - pop을 통해 꺼낼 수 있음.
  - 배열변수[인덱스]= 값;
    - 초기 인덱스를 큰 수를 넣으면 그 아래 값들은 empty로 들어감 ex) num[4]=32
  - 배열 객체를 선언 할 때 값이 1개면 배열의 길이 여러개면 초기 셋팅
    - var nums= new Array(5);  : 길이5
    - var nums = new Array(3,4,5,hello);  : 배열 [3,4,5,hello]
  - splice() 메소드로 배열 관리 가능
    - nums.splice(1) : 인덱스 1 부터 이후 값 삭제

    - nums.splice(1,2) : 인덱스 1부터 2개의 값 삭제

    - nums.splice(1,2,"삽입") : 인덱스 1부터 2개 값 삭제하고 3번째 넣기

    - nums.splice(1,0,"추가") : 1위치에 "추가"

      ​

- 오브젝트 객체는 1대1 대응 객체임 키 값과 밸류값 존재 (Mash? Hash와 비슷)




- 자바스크립트는 객체를 먼저 만들고 class와 prototype을 부여하는 순서로 진행
  - 정의도 안하고  var exam= new Object(); 후 갑자기 exam.kor=30; 으로 부여 가능
  - 단, 오타에 주의해야함. 오타날 시에도 그냥 생성됨.
  - exam[kor]=30; 가능
    - key 값을 이용한 저장으로 map 형으로 볼 수 있다.

  ​

- var 변수 = new Number(3); 담기가 힘듬
  - var 변수 =3;
  - var object = { };
    - var kor ={"eng":30, "kor":20, "math":10};  : 초기에 파라미터 설정가능
  - var array = [ ];

  ​

- json 객체
  - var json = [{"가":1, "나":2}, {"다":3,"라":4}, {"마":5,"바":6}];

  ​

- eval() 함수 외부에서 추출해 온 자료형은 보통 string 형태로 들어가 있음. 이를 형식으로 다시 바꿔주는 함수

  - eval("var ar= " +추출변수명 +";");

- JSON.parse()  

  - 문자열 -> json 형태 단 키값이 문자열로 돼있어야함
  - ''{"키값": "밸류값"}'' 형태의 json을  {키값:"밸류값"} 으로 변경 / 보통 키값에는 문자열이 안들어감

  ​


- JSON.stringify(json데이터타입)

  - json -> 문자열 변환{"키값": "밸류값"}

  ​

- 출력도구

  - console.log(); 개발자도구에 출력
  - alert();             콘솔창
  - document.write(); 작업물  

- ===

  - js는 따로 정의해도 x와 y가 같다고 인식

  - ```javascript
    var x=3;
    var y=3;
    document.write(x===y);   // true 출력 다른 객체를 인식하려면 var y= new Number(3); 호출
    ```

- 반복문

  - ```javascript
    for(var i=0; i<arr.length; i++){
      content
    }

    for(i in arr)      // (i in arr) == (var i=0; i<arr.length; i++)
      alert(arr[i]);   // i 는 arr의 길이에 해당하는 length바를 배출

    ```

- 함수 만들기(세가지 방식으로 생성)

  - var add = new Function("x, y", "retrun x+y");

  - var add = function(x,y){ return x+y};

  - function add(x,y){return x+y};

  - 다른 언어와 달리 함수를 객체로 만들기 때문에 객체로 호출가능

    - alert(add(3,4));

  - 자바스크립트는 추가 인자가 주어졌을 때 ex) add(x,y,z) 일 때 뒤에 z는 무시됨 

    - 내부에서 arguments 요소가 일단 주어진 인자를 배열형태로 받음

    - ```javascript
      function add(x,y,z){
        alert(arguments.length)    // 3개로 나옴
        alert(arguments[2])        // z로 나옴 주어진 요소를 따로 받을 수 있음.
        var temp=0;
        for add(i in arguments){
          if(typeof arguments[i] == "number"){
            temp+=arguments[i]
          }
        }
        return temp            	// 숫자 타입으로 받은 것을 다 더하는 함수
      }
      ```

- 참조변수 시기와 사용

  - ```javascript
    // 정적인 방식으로 생성됨.
    alert(a)   	// undefined
    var a = 1
    alert(a)   	// 1

    // 에러남
    alert(b)   	//
    b=1			// 전역객체

    // 이름이 같을경우 우선순위는 지역변수가 우선임
    // javaScript의 지역변수 가시영역은 함수로만 묶임. 일반 블록의 경우 블록 외부에서도 동일하게 변수 사용가능
    function f1(){
      var c=1
    }
    alert(c) // 값 없음
    {
      var d=1
    }
    alert(d) // 값 있음
    ```

- 클로저

  - 함수를 객체로 만들기 때문에 함수의 지역변수가 반환되지 않고 계속 남아있는 현상

  - 생명주기가 계속 남아있음

  - ```javascript
    function f1(){
      var a=1;
      
      return function f2(){     // function f2는 closure
        return a;
      }
    }

    var f = f1();   // a를 리턴받음. f1()을 종료해야하는데 a를 써야하니 못닫음
    var a = f();  	// 
    ```

- 브라우저 객체

  - window			윈도우 창

  - window.location   윈도우 주소

  - window.history     윈도우 뒤로가기/앞으로 가기

  - window.document 윈도우 폼 이용

    - ``` javascript
      //window 내장 함수
      alert();
      var x=prompt("출력문구",초기입력값); // 반환값은 String
      x = parseInt(x);
      var answer= confirm("메세지");             //  확인 취소 선택가능
      if (answer){
        alert("확인클릭")
      }else{
        alert("취소클릭")
      }
      ```

- tag 안의 onclick, onmouseover 안의 내용도 javascript임.

  - <input type="button" onclick="alert('안내 메시지');"/>

  - 위 태그는 input이지만 아무 태그나 가능하다.

  - ```jsp
    <script>
      function printAlert(){
        var x="알람";
        alert(x);
      }
    </script>

    // 긴 함수형태를 상단에 선언하고 사용시에 호출하는 방식
    <input type="button" value="알람" onclick="printAlert();">
    ```

- 문서의 엘리먼트 객체

  - 엘리먼트 = 태그들과 비슷한 개념

  - ```jsp
    // 엘리먼트 객체가 만들어짐 따라서 javaScript에서 객체다루듯이 사용가능
    // 이때 객체는 id와 같음.
    <script>
      function printResult(){
        var x, y;
        x=1
        y=1
        id1.value=x+y
        span1.innerText=x+y;
      }
    </script>

    // 버튼 클릭시 버튼 value가 값1-> 2로 변경되는 것을 볼 수 있음.
    <input type ="button" id="id1" value="값1" onclick="printResult();">

    // 안쪽의 text 변경시 innerText사용
    <span id="span1" onclick="printResult();">innerText</span>
    ```

  - 스크립트 몰아서 작성하기

  - ```jsp
    <script>
      function printResult(){
      };
      
      function init(){
        id1.onclick=printResult;
      };
      // 윈도우가 로드될 때 init() 함수 실행하는 부분
      window.onload =init;
    </script>

    <input type ="button" id="id1" value="값1"/>
    ```

  - 명명규칙에 위배되지 않는 법

  - ```jsp
    <script>
      function printResult(){
        var btnPrint= document.getElementById("btn-print");
      };
      
      function init(){
        var btnPrint= document.getElementById("btn-print");
        btnPrint.onclick=printResult;
      };
      
      window.onload =init;
    </script>

    <input type ="button" id="btn-print" value="값1"/>
    ```

  - 함수를 init에 익명함수로 넣기 / 전역변수 대신 init에서 함수를 정의

  - ```javascript
    window.onload= function(){
      var btnPrint= document.getElementById("btn-print");
      
      btnPrint.onclick = function(){
        var x= prompt("출력", 초기값);
        var y= prompt("출력", 초기값);
        
        x=parseInt(x);
        y=parseInt(y);
        btnPrint.value = x+y;
      };
    }
    ```

- 코드분리와 이벤트 바인딩 방법

  - ```jsp
    <script src="source.js"></script>
    ```

  - 다수의 js 를 넣을 때는 onload가 아닌 addEventListener를 사용한다

  - ```javascript
    window.addEventListener("load", function(){
      var btnPrint= document.getElementById("btn-print");
    });
    ```

- id 말고 하위 엘리먼트들 선택하기

  - getElementsByTagName()[0]   / getElementsByClassName()[0]

  - ```jsp
    <section id="sec1">
      <ul>
        <li>번호1</li>
        <li>번호2</li>
        <li>번호3</li>
      </ul>
    </section>

    <script>
      var lis = sec1.getElementsByTagName("li");
      lis[0].textContent ="Hello";
    </script>
    ```

- Selectors API

  - querySelector
    - document.querySelector("태그");
    - document.querySelector(".클래스");
    - document.querySelector("#id");
  - querySelectorAll
    - 배열방식으로 출력됨

- form 태그를 사용할 때는 name태그 필요

  - 키 : 밸류 값으로 키 값에 name 값이 들어감
  - querySelectorAll("input[name='x']");  input태그를 가지며 name이 x인 쿼리 

- 자식노드를 찾는 방법(children)

  - var 자식 = 부모노드.children[1];  : 시작번호 1부터

- 문서를 구성하는 Node 종류

  - DocumentType                    : <!DOCTYPE ~
  - Element                                 : <태그> <textarea> <p>
    - Attr                                  : 태그 안에 rows, cols, type 등등 속성
    - Entity                              : `&lt;`,` &gt;`, `&nbsp;` 등 특수기호
    - EntityReference            : Entity를 감싸는 &와 ;
    - Text                                 : 태그로 감싸지는 텍스트
  - Comment                              : <-- 주석-->
  - CDATASection                      : <![CDATA[특수기호를 포함한 내용]> : 대량의 특수기호 사용시
  - Notation                               : 컬러색 픽셀 등 #0000ff , 10px등

- 노드 생성 -> 삽입과정을 거침

  - 생성 : createElement(태그명), createTextNode(데이터)

  - 삽입 : insertBefor, appendChild, removeChild

  - ```javascript
    var 삽입내용 = 삽입할 내용 (docmument.querySelector('input').value;)
    var 삽입노드 = document.createateElemnt("a"); // a태그 생성
    삽입노드.appendChild(삽입내용);
    존재노드.appendChild(삽입노드);
    ```

- innerHTML 을 사용해서 html 구문을 그냥 때려넣기 가능

  - ```javascript
    var content = contentInput.value;
    menuList.innerHTML +=  '<a href="">HTML내용 : '+content+'<a>';
    // 내용이 큰 잦은 교체는 문제가 발생. 아예 객체를 처음부터 다시 만드는 느낌
    ```

  - ```javascript
    var title titleInput.value;

    var html ='<a href="">' + title +'</a>';
    var li = document.createElement("li");
    li.innerHTML = html;
    menuListUl.append(li);
    ```

  - ```js
    // 제일 위에거 삭제하는 버튼
    delButton.onclick = function(){
      var liNode = menuListUl.children[0];
      liNode.remove();
    };
    ```

  - ​










----------------------------------------------------------




``` html
<script>
  alert("Hello javascript!!");
  var x = new Number(3);
  var y = 4;
  var z;   # 형식이 정해지지 않은 변수는 undefined 형식
  z=3;
  alert(typeof z);
  alert(x==undefined);

  var nums = new Array();

  nums.push(1);
  nums.push(2);
  nums[0]=5;
  nums[1]=6;

  p1=nums.pop();
  console.log(nums);

  var nums = new Array(2,3,"hello",7);
  nums.splice(위치, 지울 개수, 대신 투입할 요소); # 배열에서 해당 위치에서 몇개 지울것
  nums.splice(위치, 0, 삽입할 요소);
  
  
  var nums = new Array(5); #5공간 배열
  var nums = new Array(5,2); # {5,2} 배열

</script>
```





# Object 객체

> Boolean , Number, String, Array, Object

``` html
<script>
  var exam = new Object();
  # 기본
  exam.kor=30;
  exam.eng=20;
  exam.math=50;
  
  console.log(exam.kor+exam.eng+exam.math);
  # 인덱스가 변수일 때
  exam["kor"]=30;
  exam["eng"]=40;
  exam["math"]=80;
  
  var key ="kor"
  
  exam[key] #==exam["kor"]
  
  
  
</script>
```





```html
<script>
  var exam={"kor":30, "eng":70 , "math": 80};
  var ar =[3,4,5,6,exam, [7,8,9]]
  
  var notice ={"id":1, "title":"hello"}
  console.log(exam.kor+exam.eng);
  
  
  var data ='string 으로 쓰여진 json [{"":값1, "": 값2},{},{}]';
  
  eval("var ar ="+data+";");
  console.log(ar[행].컬럼);
  
  # JSON의 parse 사용하는 법(parse 사용시 json규칙에 까다로움으로
  # 키 값으로 스트링 사용시 쌍따옴 사용)
  var date = JSON.parse('{"id" : 1, "title" : "aaa"}');
  consol.log(date.title);
  
  var date2 ={id:2 , title:"bbb"};
  
  # json을 문자열로 변환하기
  var json = JSON.stringify(data2);
  alert(json);
  
</script>
```





# document(출력)

```html
<script>
	document.write(2+4);
</script>
```





# 연산자

```javascript
var x=3;
var y=3;
document.write(x===y); #True, 같은 객체

var y=new Number(3);
document.write(x===y); #false, 다른 객체

document.write(3+"2"); # 32
document.write(3-"2"); # 1
```



# for

```html
<script>
  	var ar=["hello","hi","greeting"]
	for(var i=0; i<ar.length;i++)
      	document.write(ar[i]+"<br/>");
  
  	# for in 사용시 가져오는건 리스트 객체가 아닌 인덱스만 가져옴
  	for(var d in ar)
      	document.write(ar[i]+"<br/>")
  
  
</script>
```



# 자바스크립트 사이트

developer.mozilla.org



# 함수 만들기

```html
<script>
  # 방법1
	var add = new Function("x,y","return x+y;");
  	alert(add(3,4));
  	
  # 방법2(가장 빈도수 높음)
  	var add = function(x,y)}{return x+y;};
    
  # 방법3
  function add(x,y){
    return x+y;  
  }
  
</script>
```



# 주어진 매개변수보다 많이 투입했을 때

```javascript
function add(x,y){
  alert(arguments[5]);
  return x+y
}

document.write(add(16,4,2,5,6,"hello"));  # 실행이 됨. 인자에 대한 개수가 불분명
```





# 변수의 가시영역과 global 객체, 전역변수

> 1. var을 안쓰면 전역변수 쓰면 지역변수
> 2. 순서가 있음.

``` html
<script>
  	var a=1;
	alert(a);
  	
    alert(b);  # undefined
	var b=1;
  
  	c=1;       # window.c=1; 과 같은 의미
  	alert(c);  # c는 전역객체
    
    var c=5;   # 지역변수가 선언 되면 지역변수가 우선 처리됨.
    
   	alert(a);  # 에러
  	a=1;
</script>
```



```html
<script>
  function f1(){
	var a=1 ;    # 유일하게 인정해주는 지역변수는 함수 안에 있는 변수    
  }
  f1();
  
  alert(a); # 에러
	
</script>
```





# closure

```javascript
function f1(){
  var a =1;
  
  return function f2(){   # closure 밑에서 쓰느라고 f1 리소스가 계속 사용되는 형태
    return a;
  }
}
var f = f1();
var a = f();
alert(a);
```







# window 플랫폼 이용

window : 윈도우의 크기, 닫기, 열기 등을 관리

window.loacation : 윈도우 주소창을 관리

window.history : 뒤로가기, 재실행하기

window.document : 문서



윈도우 기본 메서드

- alert()       : 경고창
- confirm("출력문구")   : 확인/취소창
- prompt("출력문구",0)   : 입력창
- setTimeout()
- clearTimeout()
- setInterval()
- clearInterval()



mozila 에서 함수 찾기

- parseInt()   : 문자열 -> 정수   / 에러시 NaN 반환 / "12ab" -> 12 반환





# 스크립트 코드 작성

``` html
<script>
  function printResult(){
    var x=1;
    var y=2;
    alter(x+y);
  }
</script>

<input onclick="printResult();" />
<input onmouseover" "/>
```

> script 태그에 함수를 설정하고 onclick시 함수명을 호출하도록 함



# 화면 변환

```html
<script>
  function printResult(){
    var x,y;
    x = prompt("x값 입력");
    y = prompt("y값 입력");
    btnPrint.value=x+y;
    span1.innerText=x+y; # 태그 사이의 문자를 바꿀 때는 innerText
    btnPrint.type="text";  #type도 바꿀 수 있음.
  }
</script>
</head>

<body>
  <input type="button" value="클릭" onclick="printResult();" id="btnPrint"/>
  <span id="span1" onclick="printResult()"
</body>
```

> 클릭을 통해 btnPrint.value 가 클릭-> x+y로 바뀜 



# onclick을 따로 빼기

```html
<script>
  window.onload= function(){
    var btnPrint = document.getElementById("btn-print");
    
    var add(x,y){
      return x+y;
    };
    
    
    btnPrint.onclick = function(){
      var x = prompt("x값 입력");
      var y = prompt("y값 입력");
      x=parseInt(x);
      y=parseInt(y);
      btnPrint.value=x+y;
  	};
  }
</script>
</head>

<body>
  <input type="button" value="클릭" id="btn-print"/>
</body>
```





# js 파일로 분리하기

```javascript
# index.js파일
window.addEventListener("load",function(){             # 복수의 js 파일을 사용할 때는 꼭 addEventListener를 사용할 것!!!
  var btnPrint = document.getElementById("btn-print");

  var add(x,y){
    return x+y;
  };


  btnPrint.onclick = function(){
    var x = prompt("x값 입력");
    var y = prompt("y값 입력");
    x=parseInt(x);
    y=parseInt(y);
    btnPrint.value=x+y;
  };
});

#test.js파일
window.addEventListener("load",function(){
  alert("안녕하세요");
});
```



```html
<head>
  
  <script src="index.js"></script> # 단일태그로 쓸 수 없는 script
  <script src="test.js"></script>
</head>
```







# getElementsByTagName()

```html
<script>
  var lis= sec1.getElementsByTagName("li");
</script>

<body>
  <section id="sec1">
  <h1></h1>
    <ul>
      <li></li> 
      <li></li> 
      <li></li> 
    </ul>
  </section>
  
</body>
```





# querySelector

html

``` html
<section id="section3">
  <h1>Ex3 : Selectors API level1</h1>
  <div>
    <input name ="txt-x" type="text" value="0" dir="rtl"/>
    +
    <input class ="txt-y" type="text" value="0" dir="rtl"/>
    <input class ="btn-add" type="button" value="="/>
    <input class ="txt-sum" type="text" value="0" readonly dir="rtl"/>
  </div>
</section>
```

javaScript

```javascript
//Ex3 : Selectors API level1
window.addEventListener("load", function(){
    var section3 =document.getElementById("section3");
    var txtX = section3.querySelector("input[name='txt-x']"); //name 속성 주입하고 query
    var txtY = section3.querySelector(".txt-y");
    var btnAdd = section3.querySelector(".btn-add");
    var txtSum = section3.querySelector(".txt-sum");
    
    //var txtX = section3.querySelectorAll("input");   배열로 input 태그 다 가져오기
    btnAdd.onclick =function(){
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x+y;
    };
});
```







# children

> 자식노드를 찾는 방식
>
> querySelector로 자식을 찾고 그 자식의 노드를 찾는 방식

```javascript
//Ex4 : childNodes를 이용한 선택
window.addEventListener("load", function(){
    var section4 =document.querySelector("#section4");
    var box =section4.querySelector(".box");
    var input1 = box.children[0];   // 자식 노드를 찾는 방식
    var input2 = box.children[1];

    input1.value="hello";
    input2.value="okay";

});
```





# 타겟 위치 기준으로 삽입

``` html
<script>
	targetElement.insetAdhacentElement(position, element);
</script>

position="beforebegin"
<p>
  position= "afterbegin"
  
  
  position= "beforeend"
</p>
position= "afterend"
```





# Event

- addEventListener()
- removeEventListener()
- dispatchEvent()
- stopPropagation()
- stopimmediatePropagation()
- preventDefault()
- target()
- currentTarget()