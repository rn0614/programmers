// 요약 let은 지역변수 선언을 위해서 추가됨
// const는 상수 선언을 위해 사용되고 function이 도중에 바뀌는 것을 방지


// var의 문제점 : 모든 변수가 전역변수로 사용됨
let x=10;
console.log(x);

{
    let x =30;
}
// let은 중괄호 안에는 지역변수로 됨
console.log(x);


function getValue(condition){
    if(condition){
        var value= "ok";
        return value;
    }
    else{
        return value;
    }
};
// var은 객체가 없어야 하는 데 undefined 로 생성됨
console.log(getValue(false));

// 정상적인 언어체계. value가 밖에서 선언돼야함
function getValue(condition){
    let value;
    if(condition){
        value= "ok";
        return value;
    }
    else{
        return value;
    }
};


// const 는 상수형 변수
// 함수를 변수에 담아서 사용하는 자바 스크립트에서 그 함수가 변하지 않도록 함
const print = function(){

};

let template1 ="String \
                내려쓰기";

let template2 =`그냥
                내려쓰기`;

let title="삽입문자열";
let template3 = `이건 중간에 el끼어넣기 가능${title}`;

let template4 = String.raw`이스케이프 문자도 그냥 출력 \n 줄바꿈 안됨`;

let kor=30;
let eng=30;
let math=20;

let newobj = {
    kor:kor,
    eng:eng,
    math:math
};

// 위와 같은 객체가 생성됨 즉 키값이 자동으로 밸류랑 같음
let newobj2 ={
    kor,
    eng,
    math
};

// 위에서의 이점
// 아래와 같이 리턴값을 저렇게 던져도 키 이름값이 그대로 적용
// function을 반환할 때 그냥 함수명(){} 으로 반환 가능
function createnewobj(kor, eng, math){
    return { kor, eng,math, total(){} };
}


// 기존 사용 방식
let style1 ={
    "background-color": "red",
    "width" : "10px"
}

// 키값을 변수로 쓰려면 []로 변수를 감싸면 됨
// 적극적으로 쓰는 것보다는 적당히 필요하면 사용
let cssAttr ="backgroud-";

let style2 ={
    [cssAttr+"color"] : "red",
    width: "100px"
};


let exam ={kor, eng, math};
// destructing 이라고 객체의 속성을 나누어서 변수에 담는 것이 있음.
// 더 바람직, 연산수가 줄어듦
function printExam1(examl){
    let kor = exam.kor;
    let eng = exam.eng;
    let math = exam.math;

    let total = kor+ eng+ math;

    console.log(`kor : ${kor}, eng : ${eng}, math : ${math}`);

}

// 편하게 바꾸기 단 변수명 동일해야함
// 없는 변수명 입력시에 undefined
function printExam2(exam){
    let {kor, eng, math, test=100} = exam; 

    let total = kor+ eng+ math;

    console.log(`kor : ${kor}, eng : ${eng}, math : ${math} , test : ${test}`);

}

// 받는 곳에다가 destructing 해도 작동됨
function printExam2({kor, eng}){
    let total_ke = kor+ eng;

    console.log(`kor : ${kor}, eng : ${eng}`);

}

// 값이 도중에 변할 경우
{
    let exam ={
        kor : 20,
        eng : 30,
        math : 40
    };

    let {kor, eng, math} = exam;


    exam.kor=10;
    exam.math=90;
    // 수정시 ()를 사용해서 한번에 수정
    ({kor, math}= exam);
}


// 7 약어
{
    let exam ={
        kor : 20,
        eng : 30,
        math : 40
    };

    // k로 약어 설정
    let {kor:k, eng, math} = exam;

    console.log(`kor : ${k}`)

}

// 8. 객체안 객체요소 가져오기
{
    let exam ={
        kor : 10,
        eng : 20,
        math : 30,
        student : {
            name : "newlec",
            phone : "010-1111-2222"
        }
    };

    let {kor, eng, student:{name, phone}} =exam;

    console.log(`kor : ${kor}, eng : ${eng}, name : ${name}, phone : ${phone} `);
}


{
    let kors =[10,20,30];
    let [ , kor1, kor2] =kors; // 20,30 담김
    console.log(`kor1 : ${kor1}, kor2 : ${kor2}`);

    [kor1, kor2] = [100,200]; //값 변경

}

{
    let x=1, y=3;
    [x,y] = [y, x] // 순서 간단하게 바꿀 수 있음

}

{
    let exam =[10,20,30, [40,50]];
    let [kor , eng, math, [com, history]] =exam;


}

//------------------컬렉션 추가
// Set , List, Map
// Set은 식별자가 데이터
// List는 인덱스로 호출
// Map은 key 값으로 호출

{
    let set1 = new Set();
    // set.add()의 반환값이 set이므로 연속사용 가능

    set1.add(5).add(2).add(2);
    console.log(set1.size);
    
    // set 값 나열하기
    set1.forEach(function(value,key,ownerSet){
        console.log(key+ ":"+value);
    });

    // for-of를 이용한 값 나열
    let set2 = new Set([2,3,5,4,8,9]);
    for(let v of set2){
        console.log(v);
    }

    //key, value 둘다 출력하려면
    for(let [k,v] of set2.entries()){
        console.log(v+":"+k);
    }

    // 값 여부 확인
    console.log(set2.has(2)); //true
    console.log(set2.has(100)); //false
    // 값 삭제
    set2.delete(2);
    //set2.clear(); 전체 삭제

    // set MDN 문서에서 mozilla 사이트에서 기본 메서드 확인 가능
}

// Map
{
    let exam = new Map();
    exam.set("kor", 10);
    exam.set("eng",10);
    exam.set("math",10);
    // Map([["kor",10],["eng",10],["math",10]]) 으로도 사용가능
    

    // exam이라는 array 에서 [k,v]로  destructing이 적용된 모습
    for(let [k,v] of exam)
        console.log(`${k} : ${v}`);

}


// 자바스크립트는 특이하게 남는 변수가 있는데 이를 Rest Parameters라고 불림
{
    function print2(x,y){
        console.log(x);
        console.log(y);
        console.log(`특이점 : ${arguments[2]}`);
    }
    
    // 특이점
    print(10,20,"hello","RestParam")

    function print3(x,y,...values){
        console.log(x);
        console.log(y);
        //values는 나머지 restParam만 신경 쓰는 요소
        console.log(`특이점 : ${values[0]}`);
    }
}


// destructing을 해주는 ... spread operator
{
    function print2(x,y,z){
        console.log(`x:${x}, y:${y}, z:${z}`);
    }

    let nums =[2,4,6];
    print2(nums); // 안들어감 x=[2,4,6] 으로 들어감

    print2(...nums); // 잘 x=2, y=4, z=6으로 들어감


    //Set으로 해보기
    let set =new Set([6,4,2]);
    //let nums2=[...set];

    print2(...set);

    //Map으로 해보기
    let map = new Map([["id",1],["content",2],["files",3]]);

    print2(...map.keys());

}


// function의 기본값 x||y 는 null,undefined false가 앞에 있으면 뒤의값을 내보냄
{
    function function2(x,y){
        x=x||0;
        y=y||0;
        return x+y;
    }

    // 기본값 사용가능
    function function3(x=0, y=0){
        // 기본값은 arguments에 영향을 주지 않음 1개 전달받았으면 1
        console.log(arguments.length);
        return x+y;

    }

    console.log(function3(null,3));
}


// Arrow function
// function 은 객체를 만들 때 혹은 일반적인 함수 생성 두가지 케이스에서 생성됨
{
    // arrow를 쓰면 완벽하게 함수가 됨. 객체의 내용이 빠져서 함수안에서 this 호출 불가
    window.addEventListener("load", ()=> {
        console.log("로드 완료");
    });

    // 보통 소문자 시작이 일반적인 함수, 여기서 this를 쓰면 window가 this임
    function function5(){
        console.log("print~");
    }

    // 대문자 시작은 객체 생성
    function Exam(){
        this.kor =0;
        this.emg =0;
        this.math =0;
    }

    // 일반적인 함수 사용방식
    function5();
    // 객체 사용방식
    let exam2 = new Exam();
    console.log(exam2.kor);


    // arrow를 통해 정의-> 사용을 
    // 함수를 즉석에서 정의해서 넘기는 경우

    let nums = [13,4,6,1,3,26];
    console.log(nums);

    // 기존에는 해당 부분을 정의해서 sort 매개변수로 넣었는데
    // compare(x,y){return x-y} 식으로 이를 간편하게 바꿈
    nums.sort((x,y)=> x-y);
    console.log(nums);
}

// class 이용한 객체지향
// prototype을 통해 객체 속성을 주입받음
// 한계는 여전히 Exam 의 타입은 function임
// 장점 : class 내부 strict , 블록안 모든 메소드는 열거 불가, class생성자는 new를 통해 호출


{
    class Exam{
        constructor(kor=0, eng=0, math=0){
            this.kor = kor;
            this.eng = eng;
            this.math =math;
        }

        // this는 생략 불가로 무조건 사용해야함
        total(){
            return this.kor +this.eng+ this.math;
        }
        avg(){
            return this.total()/3.0;
        }
    }

    let exam3 = new Exam(10,20,30);
    console.log(exam3.avg());


}


// 은닉화
// #을 통해서 은닉화 가능 변수와 함수 모두 동일
//static member(멤버전역변수) 정의 #info;
{
    
    class Exam{
        #kor;
        #eng;
        #math;
        static #info = "Exam 클래스의 info는 모두 동일값을 갖습니다.";
        constructor(kor=0, eng=0, math=0){
            this.#kor = kor;
            this.#eng = eng;
            this.#math =math;
        }

        // this는 생략 불가로 무조건 사용해야함
        #total(){
            return this.#kor +this.#eng+ this.#math;
        }
        avg(){
            return this.#total()/3.0;
        }
        static info(){
            return Exam.#info;
        }
    }

    let exam3 = new Exam(10,20,30);
    console.log(exam3.avg());
    //console.log(exam3.info());
    console.log(Exam.info());
    //console.log(exam3.#kor); // undefined 나옴

}


// getter setter 만들기
{
    class Exam{
        #kor;
        #eng;
        #math;
        constructor(kor=0, eng=0, math=0){
            this.#kor = kor;
            this.#eng = eng;
            this.#math =math;
        }

        set kor(value){
            this.#kor = value;
        }

        get kor(){
            return this.#kor;
        }
    }

    let exam4 = new Exam(10,30,40);
    exam4.kor=100;
    console.log(exam4.kor);

}

// 함수 선언문은 어디서든 사용 가능(호이스팅)
// 함수 표현식은 인터프리터 식으로 순서대로 해야함

// const 는 해당 것을 바꾸지 못하지만 내부 요소 변경 가능
{
    let testman ={
        test: "30"
    }
    testman.test ="100";
    console.log(testman.test);

    testman.say="yo";
    console.log(testman.say);
    
    // const 는 아래와 같이 변경 불가 위에 것들은 가능
    testman = "w";
}


{
    const Mike ={
        name : "Mike",
        age: 30

    }

    class student{
        constructor(kor=0, eng=0, math=0){
            this.kor = kor;
            this.eng = eng;
            this.math =math;
        }

        // this는 생략 불가로 무조건 사용해야함
        total(){
            return this.kor +this.eng+ this.math;
        }
        avg(){
            return (this.total()/3.0).toFixed(2);
        }
    }

    const laychel = new student(15,30,50);

    console.log(laychel.avg());

    console.log(Object.keys(laychel));
    console.log(Object.values(laychel));
    console.log(Object.entries(laychel));

}


// 추가 사항

{
    // 객체를 복제함
    const user={name: "tomas", geneder:"남" };

    //const newUser = user.assign({gender:"여"},user);

}

// 유일한 property를 사용할 때 Symbol 사용
{
    //다른 사람이 객체를 만들어 놓음
    const user ={
        name:"Mike",
        age:30
    };

    // 내가 작업
    const showName = Symbol("show name");
    user[showName] = function(){
        console.log(this.name);
    };


    user[showName]();
}

{
    let arr1=[1,2,3,5,6,8];
    let str1="I am an human";

    // indexOf
    arr1.indexOf(6);   // 4출력
    arr1.indexOf(100);   // -1출력 따라서 arr1.indexOf(value)>-1 조건으로 검색 가능 arr1.includes(value)와 동일
    
    str1.indexOf('an');   // 6출력


    // slice(시작점, 끝점)
    str1.slice(2);  // [am an human] 반환
    
    // substring(번째1, 번째2) // slice와 다르게 번째1>번째2 인 경우도 동작

    // substr(시작점, 갯수)

    // trim() 앞뒤 공백 제거

    // repeat(n) 문자열을 n번 반복



    //배열 메소드
    let arr2=[1,2,3,5,6,8];

    // push() 뒤에 삽입
    // pop() 뒤에 삭제
    // unshift() 앞에 삽입
    // shift() 앞에 삭제

    //splice(시작, 개수); 반환값이 자른 부분
    arr2.splice(1,2); // [2,3] 반환

    arr2=[1,2,3,5,6,8];
    arr2.splice(1,2, 100,200); // arr는 [1,100,200,5,6,8]
    
    arr2=[1,2,3,5,6,8];
    arr2.splice(1,0, "단순","추가"); // arr는 [1,"단순","추가",2,3,5,6,8]


    // slice(시작, 끝)
    arr2=[1,2,3,5,6,8];
    let result= arr2.slice(1,4); // 반환값 [2,3,5] ,arr2는 변화없음
    console.log(result);
    console.log(arr2);

    // 배열을 합쳐서 반환
    let arr3=[1,2];
    result=arr3.concat([3,4]);  //result에 반환값 [1,2,3,4]
    console.log(arr3);
    console.log(result);


    // forEach
    let arr4=["kim","koo","hwang"]
    arr4.forEach((name,index)=> {
        console.log(`index: ${index}, name: ${name}`);
    });


    // lastIndexOf(3); 끝에서 부터 탐색 가능
    arr2.lastIndexOf(8);


    // find(), findIndex() // ()내부에 function 사용 가능 첫번째 값만 반환, 없으면 undefined
    let userList = [
        {name :"Mike",age : 30},
        {name :"Jane",age : 24},
        {name :"Tom",age : 10}
    ];

    const result2 = userList.find((user)=>{
        if (user.age <28){
            return true;
        }
        return false;
    });
    console.log(result2);  // find를 findIndex 반환시 해당 객체의 index가 반환



    // filter 조건에 만족하는 모든 요소를 찾고 싶으면 
    const result3 = userList.filter((user)=>{
        if (user.age <28){
            return true;
        }
        return false;
    });
    console.log(result2); 


    // arr.reverse() 역순으로 정렬
    
    // arr.map(function) ; 
    let newUserList = userList.map((user,index)=>{
        return Object.assign({}, user, {
            isAdult : user.age>19
        });
    });

    console.log(newUserList); // userList객체에 새로운 요소 isAdult가 추가됨


    // 배열 합치기join, 분해하기 split
    let arr5 =["1번말", "2번말", "3번말"];

    let result4 = arr5.join(",");
    console.log(result4);

    let str2 = "구분자가,포함된,문자열";
    let result5 = str2.split(",");

    console.log(result5);


    // Array.isArray(arr5) 배열인지 확인하는 함수 객체와 배열은 object로 타입이 같으므로 typeof로는 구분불가
}


// 2022-07-03
{
    // sort
    let arr6 =[1,6,3,4,5];

    arr6.sort((a,b)=> {
        console.log(a,b);
        return a-b;
    });

    console.log(arr6);

    // Lodash를 이용 sortBy(arr); lodash.com

    // reduce
    let arr7=[1,2,3,4,5];

    //배열모두 합치기
    let result =0;
    arr7.forEach(num => {
        result+=num;
    });
    console.log(result);
    
    // prev는 누적값 cur은 현재값
    let result1 =arr7.reduce((prev,cur)=>{
        return prev+cur;
    },0); // 여기 0은 초기값

    console.log(result1);


    // 배열을 쓴 reduce

    let userList =[
        {name: "Mike", age :30},
        {name: "Tom", age :10},
        {name: "jane", age :26},
        {name: "Sue", age :28},
        {name: "Marry", age :60},
        {name: "Harry", age :40},
        {name: "Steve", age :50},
    ];

    let result2 = userList.reduce((prev,cur)=>{
        if (cur.age>30)
            prev.push(cur);
        return prev;
    },[])

    console.log(result2);
 

    // destructing 하는데 원래 객체의 이름 바꾸기

    let user= {name: "Mike", age :30};

    let {name:userName, age: userAge} = user;

    console.log(userName);
    console.log(userAge);

    let {name,age, gender=10}=user;


    // 배열의 경우 공백으로 일부 무시 가능
    let [user1, , user2]=["koo","kim","hwang"];

}

{
    // 전개구문
    let arr1 = [1,2,3];
    let arr2 = [4,5,6];

    arr2.reverse().forEach(num=> {
        arr1.unshift(num);
    });

    arr1= [...arr2, ...arr1];

    console.log(arr1);

}

{
    // setTimeout
    setTimeout(()=>{
        console.log(2)
    },0);

    console.log(1);


    // 특정 시간마다 반복하는 메서드 
    let num=0;
    //
    //const tId=setInterval(()=>{
    //    console.log(`안녕하세요 ${num++} 초가 지났습니다.`)
    //    if (num>5){
    //      clearInterval(tId);   //5초지나면 반복종료
    //    }
    //},1000);

    

}

{
    // call, apply, bind
    // 함수호출방식과 관계없이 this 지정 가능
    const mike ={
        name:"Mike"
    };
    const  tom ={
        name:"Tom"
    };

    function showThisName(){
        console.log(this.name);
    }

    //즉 call을 통해 해당 함수를 객체의 메서드 같이 사용 가능
    showThisName();             // this가 window가 돼 빈문자열 반환
    showThisName.call(mike); //call을 통해 객체를 넘길 수 있음

    function update(birthYear, occupation){
        this.birthYear = birthYear;
        this.occupation = occupation;
    }

    update.call(mike, 1999, "singer");
    console.log(mike);


    // apply 매개변수를 배열로 받는 call 본래 mike가 변경됨 반환값이 없음
    update.apply(mike,[1999,"singer"]);


    // apply사용방식
    const nums =[3,10,1,6,4];
    // 배열을 spread 해서 넣어야함.
    const minNum1 = Math.min(...nums);

    // apply 쓰면 자동으로 spread함
    const minNum2 = Math.min.apply(null, nums);
    const minNum3 = Math.min.call(null, ...nums); // 동일



    //bind 사용시 객체를 영구적으로 변형

    const updateMike = update.bind(mike); // bind는 반환값이 있음 
    updateMike(1999,"police");
    console.log(mike);
}


{
    const user ={
        name:"Mike"
    };
    //hasOwnProperty('key값') property가 있는지 확인

    console.log(user.hasOwnProperty('name'));
    console.log(user.hasOwnProperty('age'));

    // 객체에서 property를 찾다 없으면 __proto__에서 찾음
    // 즉 모든 객체는 __proto__에서 상속받음

}

{
    //상속
    const car ={
        wheels:4,
        drive(){
            console.log("drive..");
        }
    };

    const bmw = {
        color:"red",
        navigation :1
    };

    const benz = {
        color:"black"
    };
    
    const audi ={
        color: "blue"
    };

    bmw.__proto__ =car;
    benz.__proto__ =car;
    audi.__proto__ =car;

    // 전체 property 확인
    for(p in audi){
        console.log(p); // 부모 property도 나옴
    }

    audi; // 본인 property만 나옴
    audi.hasOwnProperty('color'); // 본인 소유 property만 나옴 



    // 생성자
    const Bmw = function(color){
        this.color = color;
    };

    // Bmw로 생성하는 객체에 다음 속성들을 부여
    //x5.__proto__ = car;
    //z4.__proto__ = car; 을 대신함   instanceof로 자식여부 확인
    Bmw.prototype.wheels =4;
    Bmw.prototype.drive = function(){
        console.log("drive..");
    };
    Bmw.prototype.navigation =1;
    Bmw.prototype.stop= function(){
        console.log("stop..");
    };

    
    const x5 = new Bmw("red");
    const z4 = new Bmw("blue");

    z4 instanceof Bmw;
    z4.constructor ===Bmw; // true
}
{
    const User = function (name, age){
        this.name = name;
        this.age = age;
        this.showName =function(){
            console.log(this.name);
        };
    };

    const mike = new User("Mike", 14);

    class User2{
        constructor(name, age){
            this.name = name;
            this.age= age;
        }
        showName(){
            console.log(this.name);
        }
    }

    const tom = new User2("Tom", 19);
}

// 상속
{
    class Car {
        constructor(color){
            this.color = color;
            this.wheels =4;
        }
        drive(){
            console.log("drive..");
        }
        stop(){
            console.log("stop!");
        }
    }

    class Bmw extends Car{
        constructor(color){
            super(color);
            this.navigation =1;
        }
        park(){
            console.log("Park");
        }
        stop(){
            super.stop();        // stop! 이 출력됨
            console.log("OFF");
        }
    }

    const z4 = new Bmw("blue");

}


// promise
{



}








{
    console.log('------------------------')
    // 
    function printMessage(text){
        const message = text ?? 'nothing';
        console.log(message);
    }

    printMessage('Hello');
    printMessage(undefined);
    printMessage(null);
    printMessage('');

    console.log('---------------------------------')
    function printMessage1(text='nothing'){
        console.log(text);
    }
    printMessage1('Hello');
    printMessage1(undefined);
    printMessage1(null);
    printMessage1('');
}


{
    // callback
    function f1(cb){
        setTimeout(function(){
            console.log('A');
            cb()
        }, Math.random() * 1000);
    }

    function f2(){
        setTimeout(function(){
            console.log('B');
        }, Math.random() * 1000);
    }

    f1(function(){
        f2()
    });

}