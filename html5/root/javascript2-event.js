// Ex 9 -마우스 이벤트 객체 : 박스의 옵셋 영역 좌표 이용하기
window.addEventListener("load", function(){
    var section =document.querySelector("#section9");
    var container = section.querySelector(".container");
    var status = section.querySelector(".status");
    var dragging = false;
    var offset = {x:0, y:0};
    var current = null;

    //container 위치
    var left = container.offsetLeft;
    var top = container.offsetTop;

    console.log(left, top);


    document.onmousedown = function(e){
        if(e.target.classList.contains("box"))
            dragging = true;
            current = e.target;
            offset.x =e.offsetX;
            offset.y =e.offsetY;
    };

    document.onmousemove = function(e){
        if(!dragging) return;

        //e.x, e.y e.offsetX, e.offsetY
        var x = e.pageX - offset.x -left;
        var y = e.pageY - offset.y-top;

        current.style.left = x +"px";
        current.style.top = y +"px";

        status.innerText ="(x,y):("+x+","+y+")";
    };

    document.onmouseup = function(e){
        dragging = false;
    };

});

// Ex 8 -마우스 이벤트 객체 : 여러개 박스 드래그 방식으로 옮기기
window.addEventListener("load", function(){
    var section =document.querySelector("#section8");
    var container = section.querySelector(".container");
    var box = section.querySelector(".box");
    var dragging = false;
    var offset = {x:0, y:0};
    var current = null;


    container.onmousedown = function(e){
        if(e.target.classList.contains("box"))
            dragging = true;
            current = e.target;
            offset.x =e.offsetX;
            offset.y =e.offsetY;
    };

    container.onmousemove = function(e){
        if(!dragging) return;
        //e.x, e.y e.offsetX, e.offsetY
        current.style.left = e.pageX -offset.x +"px";
        current.style.top = e.pageY -offset.y +"px";
    };

    container.onmouseup = function(e){
        dragging = false;
    };

});


// EX7 마우스 이벤트 객체 : 드래그 방식으로 박스 옮기기
window.addEventListener("load", function(){
    var section =document.querySelector("#section7");
    var container = section.querySelector(".container");
    var box = section.querySelector(".box");
    var dragging = false;
    var offset = {x:0, y:0};

    container.onmousedown = function(e){
        if(e.target == box)
            dragging =true;
    };

    container.onmousemove = function(e){
        if(!dragging) return;
        //e.x, e.y e.offsetX, e.offsetY
        box.style.left = e.pageX -offset.x +"px";
        box.style.top = e.pageY -offset.y +"px";
    };

    container.onmouseup = function(e){
        dragging = false;
    };

    box.onmousedown =function(e){
        offset.x =e.offsetX;
        offset.y =e.offsetY;
    }
});


// EX6 마우스 이벤트 포지션
window.addEventListener("load", function(){
    var section =document.querySelector("#section6");
    var container = section.querySelector(".container");
    var box = section.querySelector(".box");


    container.onclick = function(e){
        //e.x, e.y e.offsetX, e.offsetY
        console.log("(x,y):"+e.x+","+e.y);
        console.log("client (x,y):"+e.clientX+","+e.clientY);
        console.log("page (x,y):"+e.pageX+","+e.pageY);
        console.log("offset (x,y):"+e.offsetX+","+e.offsetY);
        box.style.position = "absolute";
        box.style.left = e.pageX+"px";
        box.style.top = e.pageY + "px";
    };
});



//EX 5- 트리거
window.addEventListener("load",function(){
    var section =document.querySelector("#section5-1");
    var fileButton = section.querySelector(".file-button");
    var fileTriggerButton = section.querySelector(".file-trigger-button");
    
    fileTriggerButton.onclick =function(){
        var event = new MouseEvent("click",{
            'vielw':window,
            'bubbles': true,
            'cancelable': true
        });
        var file =document.querySelector("gallery-file");
        fileButton.dispatchEvent(event);
    };

});

//Ex 4-서로 다른 기능의 여러버튼을 가진 화면에서 이벤트 처리
window.addEventListener("load", function(){
    var section =document.querySelector("#section5");

    var tbody = section.querySelector(".notice-list tbody");

    tbody.onclick = function(e){
        e.preventDefault(); //기본 기능 막기 a 태그를 타면 새로고침하는 걸 막음.

        var target =e.target;

        if(target.nodeName!="A") return;

        if(target.classList.contains("sel-button")){
            var tr=target.parentElement;
            for(; tr.nodeName!="TR"; tr=tr.parentElement); // 특이한 for 문
            
            tr.style.background="yellow"

        }else if(target.classList.contains("sel-button")){

        }else if(target.classList.contains("sel-button")){

        }

    };

});

//Ex 3-이벤트 버블링 멈추기
window.addEventListener("load", function(){
    var section =document.querySelector("#section3");
    var addButton =section.querySelector(".add-button");
    var imgList =section.querySelector(".img-list");
    var currentImg =section.querySelector(".current-img");

    //여기서 e는 가장 말단에 있는 클릭된 객체 imgList > img
    imgList.onclick = function(e){
        if(e.target.nodeName!="IMG") return;

        currentImg.src =e.target.src;
    };

    addButton.onclick= function(e){
        e.stopPropagation(); //버블링 제거 부모이벤트는 실행 안됨.

        var img = document.createElement("img");
        img.src ="imgs/img1.jpg";
        currentImg.insertAdjacentElement("afterend",img);
    }
});


//Ex 2-버블링을 이용한 사용자 이벤트 처리하기
window.addEventListener("load", function(){
    var section =document.querySelector("#section2");
    var imgList =section.querySelector(".img-list");
    var currentImg =section.querySelector(".current-img");

    //여기서 e는 가장 말단에 있는 클릭된 객체 imgList > img
    imgList.onclick = function(e){
        if(e.target.nodeName!="IMG") return;

        currentImg.src =e.target.src;
    };
    
});


//연습문제 1-선택된 레코드 삭제하기
window.addEventListener("load", function(){
    var section =document.querySelector("#section1-1");
    var delButtons =section.querySelectorAll("input[value='삭제']");

    for(var i=0 ; i<delButtons.length; i++){
        delButtons[i].onclick=function(e){
            e.target.parentElement.parentElement.remove();
        };
    }
});


// Ex 1-선택된 이미지 보여주기:event target
window.addEventListener("load", function(){
    var section =document.querySelector("#section1");
    var imgs =section.querySelectorAll(".img");
    var currentImg =section.querySelector(".current-img");

    //효율적인 방법 아님
    for (var i; i<imgs.length; i++){
        imgs[0].onclick=function(e){
            currentImg.src=e.target.src;
        };
    }
});