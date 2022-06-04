# jQuery

> 반응형 웹 사이트에서 css 셀렉터를 이용하여 쉽게 일 시킬 수 있음.

### jquery 가져오기

```html
<script src ="jquery-3.6.0.min.js"></script>   // min은 압축으로 용량이 적음
```



### h1 태그의 속성을 바꾸기

```javascript
$('h1').css({'color':'red','font-size':'10px'});

$('선택자').css('속성','값');

$(html요소).메서드('매개변수1','매개변수2');
만약 메서드가 같다면 {}로 합치기 가능
$(html요소).메서드({'매개변수1':'매개변수2', '매개변수3':'매개변수4'});
```

> css 에서 -로 연결된 것을 Camel 표기법으로 바꾸면 '' 안써도 됨
>
> 'text-decoration'  -> textDecoration





- 색 : color : red
- 글자 꾸미기 : text-decoration : underline
- 아래쪽 실선(5px,red) : border-bottom : 5px solid red
- 투명도 : opacity : 0.5(숫자앞에는 '' 안써도 됨. % 할 땐 써야함)





### 다 로드 한 뒤에 실행하는 법(feat.addEverntListener)

> script를 위에 두기 위해서 필요

```javascript
$(document).ready(function(){
  내용
});
// document.ready 생략 가능
$(function(){
  내용
});
```





### 자주 사용하는 트리거

```javascript
$('지정자').on('이벤트 트리거', function(){
  내용
});
```

- 마우스 올려놓기
- 마우스 벗어나기
- 클릭
- 마우스 움직이기
- 창크기 변경
- 스크롤



### 마우스 올려놓기

``` javascript
//마우스가 들어오면
$('#typo').on('mouseover', function(){
  $('#typo').css('background-color','green')
});

//마우스가 나가면
$('#typo').on('mouseout', function(){
  $('#typo').css('background-color','red')
});

// 마우스를 클릭하면
$('#typo').on('click', function(){
  $('#typo').css('background-color','red')
});
```



### chianmethod 지정자가 같다면 메서드를 연결해서 사용가능

``` javascript
$('#typo').on('mouseover', function(){
  $('#typo').css('background-color','green')
})
.on('mouseout', function(){
  $('#typo').css('background-color','red')
});


/// on 생략가능
$('#typo'.).mouseover(function(){
  $('#typo').css('background-color','green')
})
.mouseout(function(){
  $('#typo').css('background-color','red')
});
.click(function(){
  $('#typo').css('background-color','black')
});
```



### 두개의 지정자가 변경시에

> 쉼표로 복수의 지정자를 선택 가능

```javascript
$('#typo, h1').mouseover(function(){
  $('#typo, h1').css('background-color','green')
})
.mouseout(function(){
  $('#typo, h1').css('background-color','red')
});
```



### this 요소를 이용하여 해결하기

> 다시 지정자를 찾는 과정도 줄어들어 리소스가 줄어들음

```javascript
$('#typo, h1').mouseover(function(){
  $(this).css('background-color','green')
})
.mouseout(function(){
  $(this).css('background-color','red')
});
```



### 애니메이트 메서드

```javascript
$(function(){
  $('#typo .inner').click(function(){
    // $(선택자).animate({속성:값, 속성:값},시간, 이징, 끝나고할일);
    $(this).animate({opacity:0, fontSize:'0px'},1500);
    
    // 이징은 linear(등속), swing
    $(this).animate({opacity:0, fontSize:'0px'},1500,'linear');
    
    // 다른할일  function(){}
    $(this).animate({opacity:0, fontSize:'0px'},1500,'linear', function(){
      $(this).animate({opecity:1, fontSize:'110px'}, 500);
    });
  });
});
```

> jquery-ui 를 사용하면 다양한 이징을 쓸 수 있음
>
> animate 는 수치바뀌는 것만 가능



### 버튼 클릭시 div가 250px 이동

```javascript
// div가 position: absolute 이므로 left 혹은 margin을 통해서 움직였음
$(function(){
  $('button').click(function(){
  	$('div').animate({
    	left:'250px'
  	});
  });
});
```



