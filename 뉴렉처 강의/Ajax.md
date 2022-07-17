# Ajax

> 페이지 리로딩 방식

- 리로딩 시에 변화하는 일부 내용만 전송받는 것을 목표로 한다.
- Single page app

```jsp

```

> 일반 html에서는 태그로 하나의 페이지에 정적으로 박혀있음
>
> 바꿔야 하는 부분을 임의적으로 태그 설정

```jsp
// 트리거
<a href="/" onClick="
    document.querySelector('article').innerHTML='<h1>새로운 내용</h1>'    //tofhdns 
    ">HTML</a>

//내용이 계속 변하는 부분
<article></article>

// 별도의 새로운 내용의 파일
```

```html
// 트리거
<input type="button" value="fetch" onclick="
   fetch('css').then(function(response){
      if(response.status =='404'){
        alert('파일이 없습니다');                                    
      }
      response.text().then(function(text){
        document.querySelector('article').innerHTML= text;
      })
   }))">
// 내용변경 부분
<article></article>

// 별도의 새로운 내용의 파일 (css파일 확장자 없음)
text내용
```

- fetch('파일명') : 파일을 서버에 요청하는 명령어 / 반환 값  (response 객체)
- then(callback) : 비동기 실행. 응답이 끝나면 callback 함수 실행
- response 객체 (type, url, text 등등의 속성을 가짐)
- 파일객체.text() 



> 재활용을 위해 function 따로 설정

```html
<article></article>					//출력단
<a onClick="fn1('목록1')">목록1</a>		//클릭단

<script>
  function fn1(name){
    fetch(name).then(function(response){
      if(response.status =='404'){
        alert('파일이 없습니다');                                    
      }
      response.text().then(function(text){
        document.querySelector('article').innerHTML= text;
      })
  }
</script>
```



> 초기 페이지 로드법 hash

```javascript
if(window.location.hash){
  //Fragment.exist
}else{
  
}
```



Pjax





글 목록 

``` html
//변경전
<ol id="nav">
  <li><a href="#!namw1" onClick="fn1"></a></li>
  <li><a href="#!namw2" onClick="fn1"></a></li>
  <li><a href="#!namw3" onClick="fn1"></a></li>
</ol>

//변경후
<ol id="nav">
</ol>

<script>
  fetch('list').tehn(function(response){
    response.text().then(function(text){
      document.querySelector('#nav').innerHTML=text;
    })
  })
</script>

//list 파일 내부(변경후)
<li><a href="#!name1" onClick="fn1"></a></li>
<li><a href="#!name2" onClick="fn1"></a></li>
<li><a href="#!name3" onClick="fn1"></a></li>
```



> list 내부에 중복항목 삭제하기

```html
//list 파일 내부
name1,name2,name3

<script>
  fetch('list').tehn(function(response){
    response.text().then(function(text){
      var items=text.split(',');
      var tags='';
      var item='';
      for(item of items){
        item=item.trim();
        //<li><a href="#!name1" onClick="fn1"></a></li>
        var tag ='<li><a href="#!'+item+'" onclick="fn1(\''+item+'\')">'+item+'</a></li>';
        tags=tags+tag;
      }
      document.querySelector('#nav').innerHTML=tags;
    })
  })
</script>
```

