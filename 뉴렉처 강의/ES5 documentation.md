``` js
//ES5 documentation

// str에서 i번재 요소 알아내기
str.charAt[i]==char[i]

// object 객체 만들기 {property name : value}
var obj = {name:"John", new:"yes"}

// str.trim() 으로 앞뒤 공백 제거
str.trim()

// arr.isArray() 로 arr가 Array 객체인지 확인하기
arr.isArray()

// arr.forEach(fn) 로 array의 요소 하나씩 순차적으로 꺼내 쓰기
var result=0;
arr.forEach(fn1);
function fn1(value){
  result+=value
};

// arr.map(fn) 으로 각 요소 개별적으로 쓰기
var newarr = arr.map(fn2);
function fn2(value){
  return value+3;
}

// arr.filter(fn) 으로 array 내에서 특정조건에 만족하는 애들만 꺼내기
var newarr = arr.filter(fn3);
function fn3(value){
  return value>18;  // return 값에 boolean 값이 들어감
}

// arr.reduce(fn,초기값) 으로
var sum = arr.reduce(fn4,first);
function fn4(total, value, index, array){
  return total+value;  // 이 값이 다시 total로 들어감
}

// arr.reduceRight는 배열의 뒤부터 시작함. arr.reverse가 된 느낌


// arr.every(fn) 은 배열의 모든 요소로 조건을 충족할 때 true
var check = arr.every(fn5);
function fn5(value){
  return value>10;
}

// arr.some(fn) 은 배열 중 하나라도 조건을 충족할 때 true
var check2 = arr.som((value)=>{
  return value>10;
});

// arr.indexOf("값") 은 arr에서 해당 값을 가진 index를 반환
var a = arr.indexOf(10);

// arr.lastIndexOf("값") 은 indexOf인데 뒤에서 부터 찾음

//JSON.parse("json문자열") 은 문자열 -> 객체
var obj = JSON.parse('{"name":"John", "age": 10}');

//JSON.stringfy(객체) 는 객체 -> 문자열
var str = JSON.stringfy(obj);

//Date.now() // 현재시간 반환  '1656944151403' 형식
var nowTime = Date.now();

// Date.now().toISOString() 현재시간 반환 '2022-07-04T14:17:45.471Z'  형식
var nowTime = Date.now().toISOString();

// getter, setter
var person ={
  firstName:"John",
  lastName :"Doe",
  get fullName(){
    return this.firstName + " "+ this.lastName;
  },
  set lang(value){
    this.language = value;	
  }
};
// method 형식이 아닌 일반 속성같이 사용한다.
person.lang ="en";
person.fullName   


// Object.defineProperty()
var person ={
  firstname :"John",
  lastname : "Doe",
  language :"No"
};

Object.defineProperty(person, "language",{  //laguage property의 속성을 바꿈
  value :"EN",
  writable :true,
  enumerable :true,
  configurable :true
});

Object.defineProperty(person, "language", {
  get : function() { return language },
  set : function(value) { language = value.toUpperCase()}
});


// bind 상속
const person ={
  fistName:"John",
  lastname: "Doe",
  fullName: function(){
    return this.firstname +" " + this.lastName;
  }
}

const member ={
  firstName:"Hege",
  lastName:"Nilsen"
}
let fullName = person.fullName.bind(member);
```

