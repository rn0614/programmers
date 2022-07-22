var a = function (){
    console.log('A');
}



function slowfunc(callback){
    //시간이 오래걸리는 구간
    console.log('B');
    callback();
}

slowfunc(a);
