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