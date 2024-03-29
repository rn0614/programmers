# CSS 정리

css는 누가 어떤 속성을 가지고 있냐를 정의함.

그러기 위해서 누가⇒ 지정자를 사용( HTML에 있는 객체에 대해)

속성 : attribute 를 사용 ( 요새는 bootstrap등으로 추가적인 속성을 만들 수 있음)

# HTML

- HTML 기본 속성
    - class
    - id
    - href
    - style
    - src
    - background-image:url(”../image/background.png”);

- HTML 태그 종류
    - <hn>  : 제목
    - <p>   : 단락
    - <br>  : 줄바꿈
    - <hr> : 수평줄
    - <div> : 영역묶기
    - <a>
        - href=””
        - target=”_blank”
    - <title>
    - <link>
    - <img>
        - src=”경로”;
        - width=”20px”
        - height=”20px”;
    - <script>
    - <ul><li>
    - <ol><li>
        - type=”a” : 알파벳 순서
    - <span>  : 줄바꿈 없이 영역 묶기
    - <style>
    - <input>
        - type=”submit”
        - value=”전송”
        - title=”전송”
        - name=”이름”
    - <label>
        - for=”id”
    - <form>
        - method=”post”
        - action=”파일”
    - <nav>
    - <button>
    - <section>
    - <table><tr><td>
        - colspan=”3”
    - <caption>
    - <select><option>
        - size=”5”
        - multiple
        - selected
    - <textarea>
        - col=””
        - rows=””
    - <progress>
    - <meter>
    - <audio>
        - src=””
        - controls
        - autoplay
        - loop
    - <video>
    - <track>
    - 

- jQuery로 attribute추가하기

```jsx
$(#img).attr("src","신규이미지주소");

```

# CSS

```jsx
<link rel="stylesheet" href="파일경로">
```

```css
div{
	wdith:70%;
}

table{
	width:70%;
  border: 1px solid #222;
  border-collapse:collapse;
  background : #eee;
}

td{
	border: 1px solid #ccc;
  padding: 5px;
  font-size: 0.8em;
}

li{
	display: inline-block;
}
```

- css 종류

|  |  |  |
| --- | --- | --- |
| font-size | 글자크기 | 5px |
| color | 글자색 | blue |
| width | 너비 | 500px |
| padding | 테두리와 내용사이 여백 | 15px |
| bolder | 테두리 | 5px solid gray |
| line-height | 줄간격 | 2.0 |
| font-family | 글꼴 | 돋음 |
| margin-left | 태그 스타일 | 20px |
| text-align | 문자 가로 정렬 | center |
| text-decoration | 문자 스타일 | underline |
| font-style | 글자 스타일 | italic |
| font | 글자 속성 | style-variant-weight-size-height-family |
| font-weight | 글자 두께 | bold(700), lighter, 100,200 |
| text-transform | 텍스트속성 | uppercase |
| letter-spacing | 자간 | 0.2em |
| text-indent | 들여쓰기 | 15px |
| line-height | 줄 간격 조절 | 30px, 2.0 |
| text-overflow | 줄넘김 설정 | clip |
| white-space | 줄바꿈 설정 | nowrap |
| list-style-type | 목록 스타일 설정 | none |
| list-style-image | 목록 스타일 이미지설정 | url(’주소’) |
| list-style | 목록스타일 통합 | type-position-image |
| background-clip | 백그라운드 적용범위 | border-box, padding-box, content-box |
| background-image | 백그라운드 이미지 | url(’주소’) |
| background-repeat | 백그라운드 반복 | repeat, no-repeat,rpeat-x |
| background-size | 배경 크기 | 100% 100%, contain |
| background-position | 배경 위치 | right cneter; |
| background-attachment | 배경 이미지 고정 | fixed |
| background1 | 배경통합 | image-repeat-attachement-position-clip-origin-size |
| display | 화면 배치방법 | none,contents,block,inline-block,flex,table,table-cell |
| border-style | 테두리 스타일 | dashed, solid |
| border-width | 테두리 굵기 | 10px |
| border | 테두리 | width-style-color |
| border-radius | 테두리 모서리 | 20px |
| box-sizing | 박스 너비기준 | content-box, border-box |
| float | 박스 위치 정하기 | left,right |
| clear | float배치 취소 | both |
| margin | 외부 마진 | 0 auto (중앙배치) |
| position | 위치기준 | relative, absolute, fixed |
| visibility | hidden시 공간 유지(*공간없애려면 display:none) | visible, hidden,collapse |
| border-collapse | 테이블 td 사이를 분리 | separate |
| border-spacing | 인접한 td사이의 거리 | 5px |
| empty-cells | 값이 없는 빈 셀 숨기기 | hide |
| vertical-align | 내용 수직정렬 | middle |
| flex-direction | 플렉스 항목 방향 | row, column |
| justify-content | 배치방법 | center, space-around, space-between |
| align-items | 컬럼방향  | flex-start, center |
|  |  |  |

- margin 중첩현상
    
    margin은 상하로는 가장 큰 값을 갖는다. 좌우로는 마진합의 값으로
    

- lorem ipsum 을 통해 test data 생성가능

- 접두사(브라우저 호환성 바꾸기)

```jsx
<script src="prefixfree.min.js"></script>
```

```css
.box:hover{
	transform:rotate(90deg);
}
```

- 웹폰트 사용하기

```css
@import url('폰트주소');

.classNmae{
	font-family: 'Nanum Gothic' , 돋음 ;	
}
```

- 글자 크기 단위명
    - em : 대문자 M을 너비 기준 비율   (  0.9em  )
    - ex : 소문자 x의 높이 기준 비율 ( 0.9ex )
    - px : 픽셀기준 모니터에 따른 상대크기 (10px)
    - pt : 포인트 기준
    
- 선택자

```css
tag{}

.class{}

#id{}

#id #childId{}

#id > fureChildTag{}

#id ~ brotherTag{}

#id + closeBrotherTag{}

#id[attr]{}

#id[attr="correct값"]{}

#id[attr~="포함된 값중 하나"]

#id[attr!="-으로 연결된 속성값 중 포함된 값중 하나"]

#id[attr^="시작값"]

#id[attr$="끝값"]

#id[attr$=:"포합값"]
```

- 가상 클래스(:)

|  |  |  |
| --- | --- | --- |
| link |  |  |
| visited |  |  |
| hover |  |  |
| active |  |  |
| focus |  |  |
| enable |  |  |
| idsable |  |  |
| checked |  |  |
| root |  |  |
| nth-child |  |  |
| nth-last-child |  |  |
| nth-of-type |  |  |
| nth-of-last-type |  |  |
| first-child, last-child |  |  |
| only-child, only-of-type |  |  |
| target |  |  |
| not |  |  |

- 가상요소 (::)

|  |  |  |
| --- | --- | --- |
| first-line, first-letter |  |  |
| before, after |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |

- 애니메이션 단위 설정하기

```css
#id{
	animation-name : name1;
}

@keyframes name1{
	from{
		background-color: blue;
	}
	
	to{
		background-color:red;
		transfrom: rotate(90deg);
	}

}
```

- 반응형 웹사이트

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

- 반응형 웹사이트에서는 px→em  px→%를 사용하여 기기에 따라 변하는 크기지정 필요

- 미디어 쿼리

```css
@media screen and (min-width:200px) and (max-width:360px){
	...
}
```

|  |  |  |
| --- | --- | --- |
| max-width | 화면 최대 너비 | 1040px |
| max-device-width | 기기최대 너비 | 1040px |
| orientation | 기기 가로 세로 | landscape, portrait |
| device-aspet-ratio | 기기비율 | 16/9 |
|  |  |  |

```css
<link rel="stylesheet" media="screen and (max-width:768px)" href="css/tablet.css">
```