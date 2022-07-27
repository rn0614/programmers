# JAVASCRIPT 알고리즘용



### 프로그래머스 신고결과받기

> 전략 : 중복을  없애고  Map( 신고받은 사람=> 횟수) 와 Map(신고자 => 당한사람횟수) 로 사용

- 자료구조 Set을 통한 중복제거
- map을 통한 구분자가 있는 String 분할

``` javascript
// 입력배열 = ['aa bbb', 'ccc ddd']
let reports = [... new Set([입력배열])]

// map을 추가하여 입력배열이 ' '로 구분된 String일 경우 나눈는 배열 생성
let reports = [... new Set([입력배열])].map( a=> {return a.split(' ')});

// 결과물=[['aa', 'bb'], ['ccc', 'ddd']]
```



- 자료구조 Map을 통한 key - value 형식 생성 => Map자료형.set( key, value)
- ||을 통해 앞에 내용이 undefined 면 뒤의 1이 입력되도록 생성

``` javascript
// 입력배열 =[['aa', 'bb'], ['ccc', 'ddd']]

let counts = new Map();
for (const bad of reports){
  coounts.set(bad[1], counts.get(bad[1])+1||1) // counts.get(bad[1])+1 혹은 1
}

// 결과물 = Map{ 'bb'=> 1, 'ddd'=>1} 뒤의 1은 횟수 
```



- 동일하게 Map 구조를 이용 k 이상이면 

``` javascript
let good = new Map();
for(const report of reports){
  if(counts.get(report[1])>=k){
    good.set(report[0], good.get(report[0])+1||1)
  }
}
// 결과물 = Map{'aa'=> 1, 'cccc'=> 1}
```



- Map의 배열화

``` javascript
let answer = id_list.map(a=>good.get(a)||0) // 있으면 해당 숫자 없으면 0
```





### 프로그래머스 오픈채팅방

> 전략 : 최종적으로 바뀐 아이디만 저장했다가 순서대로 넣으면 된다.

- 띄어쓰기로 나눠진 배열정보를 2중배열로 변경

``` javascript
// 입력배열 record =['aa bb cc', 'dd ee ff']
var input = [...record].map( a=> a.split(' '));
// 출력배열 input =[['aa','bb','cc'], ['dd', 'ee', 'ff']]
```

- 아이디와 매칭되는 Map 생성 (Leave만 아니면 새로 갱신하기)

```javascript
var customer=new Map();
for(i of input){
  if(i[0]!='Leave'){
    customer.set(i[1], i[2]);
  }
}
// 출력 Map{'bb'=>'cc' , 'ee'=> 'ff'}
```

- 출력되는 메세지만 Map에 따라 순서적으로 출력

```javascript
var answer = [];
for(i of input){
  if(i[0]==='Enter'){
    answer.push(`${customer.get(i[1])}님이 들어왔습니다.`);
  }else if(i[0]==='Leave'){
    answer.push(`${customer.get(i[1])}님이 나갔습니다.`);
  }
}
return answer;
```



