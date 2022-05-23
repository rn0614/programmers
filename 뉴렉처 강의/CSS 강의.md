 # HTML /CSS 강의







## CSS

단 만들기



### 단 만들기

```css
.class{
  // 단의 너비가 일정 or 단의 개수가 일정
  column-width: 크기; or colum-count: 개수;
  // 단의 구분을 점선으로 , ccc색으로
  colums-rule: 2px dotted #ccc;
}

// 단의 구분(h3태그)이 있는 경우
.class h3{
  break-before:column;
}
```



### 표 css

```css
.table{
  //표 테두리 점선
  border: 1px solid black;
  //하나의 선으로 표기(안하면 td와 2개 선으로 구분됨)
  border-collapse:collapse; 
}

.table td{
  // text-align이 left일 경우 살짝 띄워주는 역할
  padding: 10px;
  // 내부는 실선으로
  border: 1px dashed black;
  // 가운데 정렬(left,right도 가능)
  text-align:center;
  // 수직정렬(top, middle, bottom)
  vertical-align:middle;
}
```



### html 5의 tag

![123124](C:\Users\rn061\OneDrive\바탕 화면\123124.PNG)



<iframe src=""> : 문서안에 문서 넣을 때 사용

<address> : 제작자 및 연락처정보







### HTML과 비디오 코덱

- H.264/AVC 코덱 사용
  - 고화질 영상, mp4파일, mov파일
  - 유료코덱
  - 모든 피로그램에서 제공
- v9
  - 오픈소스 코덱 , webm파일에서 사용
  - 크롬,파이어폭스 오페라 지원