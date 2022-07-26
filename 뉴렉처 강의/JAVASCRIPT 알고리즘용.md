# JAVASCRIPT 알고리즘용

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

