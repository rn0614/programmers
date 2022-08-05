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





### 스택과 큐

``` javascript
//스택
배열.push('값') // 맨 위에 아이템 삽입
배열.pop()  // 맨 위의 아이템을 제거 및 반환

//큐
배열.push('값') // 큐에 아이템을 추가
배열.shift() // 큐에 아이템 제거 및 반환

//공통
배열.contains('값') // 값이 배열에 있는지 확인
배열.size() //  총 개수 반환


//트리
```







### 프로그래머스 완주하지 못한 선수

> 전략 : 완주자와 비완주자 이름별 숫자를 비교하여 같지 않다(or 1 작을 시 해당 이름을 리턴)

``` javascript
function solution(participant, completion) {
    var mapParticipant = new Map()
    for(var i of participant){
        mapParticipant.set(i , mapParticipant.get(i)+1 || 1)
    }
    
    var mapCompletion = new Map()
    for(var i of completion){
        mapCompletion.set(i , mapCompletion.get(i)+1 || 1)
    }
    
    for(var i of mapParticipant){
        if(mapCompletion.get(i[0])!=i[1]){
            return i[0]
        }
    }
}
```





### 로또의 최고 순위와 최저 순위

> 전략 : 최저순위개수 + 0의개수는  최고순위 개수
>
> ​           순위와 개수는 1대1 대응 관계( 객체로 만들기 가능)

- lottos 안의 숫자가 win_nums에 포함 여부 조사

``` javascript
let minWin=0;
for(var i=0; i<lottos.length; i++){
  let lotto= lottos[i]
  if(win_nums.includes(lotto)){
    minWin=minWin+1
  };    
}
```



- lottos 안에 0 개수 세기

    let zero=(lottos)=>{
      let temp=0;
      for(var i=0; i<lottos.length; i++){
          if(lottos[i]===0) temp=temp+1
      }
      return temp;
    }


- [최대등수, 최소등수] 출력

``` javascript
const rate={6:1,5:2,3:4,4:3,3:4,2:5,1:6,0:6}; 
answer.push(rate[minWin+zero(lottos)],rate[minWin]);
```

