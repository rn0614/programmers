# HTML 태그 종류

h<i>n</i> : 제목태그

p : 단락태그 (줄바꿈)

br:  줄바꿈태그

hr : 가로선태그

b : 굵게

i : 이탤릭체

span : 영역묶기 (줄바꿈 없음)



ul _li : 순서 없는 목록

ol_li : 순서 있는 목록

table : 테이블 태그

tr_td_th : 열, 행, 제목   ex)  `<tr><td></td><td></td></tr>`

`<td colspan="합칠 셀의 개수">`

`<td row span="합칠 셀의 개수">`

img src="경로" : 그림

script src="경로" : js 연동

a href="링크주소" target="_blank" : 링크 사이트로 이동



form action="자바단 or jsp" method="post": 

input type="text or submit" : 입력    ( autopocus 사용시 화면 뜨면 커서, required)

- minlength



label for="태그id" :  라벨과 태그 연결

select_option : 선택용 태그 (value로 서버에 넘겨지는 값 지정, selected로 초기값 설정)

textarea cols="가로" rows="세로" : 여러줄 입력창

`<link rel="stylesheet" href="css/style.css">`



# 선택자

태그{}

.클래스{}

#아이디{}



태그.아래태그

태그>내부태그

태그 내부태그

태그[attr=[]]



# CSS

font-size

font-family

color

margin-left

padding





.box:hover{ transform:rotate(15deg) } : 마우스를 박스클래스에 올렸을 때 내부 실행



폰트 구굴에서 가져오기

@import url('wnth');