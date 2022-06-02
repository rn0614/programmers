//EX10 : 클릭한 컬럼을 기준으로 레코드 정렬
window.addEventListener("load",function(){
    var notices=[
        {"id":1, "title":"자바스크립트6","regDate":"2019-02-05","writerId":"newlec","hit":5},
        {"id":2, "title":"자바스크립트5","regDate":"2019-02-25","writerId":"newlec","hit":3},
        {"id":3, "title":"자바스크립트3","regDate":"2019-02-15","writerId":"newlec","hit":2},
        {"id":4, "title":"자바스크립트4","regDate":"2019-03-05","writerId":"newlec","hit":5}
    ];

    var section =document.querySelector("#section10");

    var noticeList =section.querySelector(".notice-list");
    var titleTd =section.querySelector(".title");
    var tbodyNode = noticeList.querySelector("tbody");


    var bindData = function(){
        var template= section.querySelector("template");

        for(var i=0; i<notices.length; i++){
            var cloneNode = document.importNode(template.content, true);
            var tds =cloneNode.querySelectorAll("td");
            tds[0].textContent = notices[i].id;
            tds[1].innerHTML ='<a href="'+notices[i].id+'">'+notices[i].title+'</a>';
            tds[2].textContent = notices[i].regDate;
            tds[3].textContent = notices[i].writerId;
            tds[4].textContent = notices[i].hit;
            tbodyNode.appendChild(cloneNode);
        }
    };

    bindData();

    var titleSorted =false;

    titleTd.onclick=function(){

        tbodyNode.innerHTML ="";
        //배열정리
        if(titleSorted){
            notices.sort(function(a,b){
                if(a.title >b.title){
                    return 1;
                }
                if(a.title <b.title){
                    return -1;
                }
                return 0;
            });
            titleSorted =true;
        }
        else{
            notices.reverse();
            titleSorted=false;
        }
        
        
        bindData();

        

    };

});



//Ex9 : 다중 노드 선택방법 및 일괄 삭제
window.addEventListener("load", function(){
    var section = document.querySelector("#section9");
    var delButton = section.querySelector(".del-button");
    var swapButton = section.querySelector(".swap-button");
    var noticeList = section.querySelector(".notice-list");
    var tbody = noticeList.querySelector("tbody");
    var allCheckbox = section.querySelector(".overall-checkbox")

    allCheckbox.onchange =function(){
        var inputs= tbody.querySelectorAll("input");
        for(var i=0 ; i<inputs.length; i++)
            inputs[i].checked=allCheckbox.checked;
    };

    delButton.onclick=function(){
        var inputs = tbody.querySelectorAll("input[type='checkbox']:checked");
        
        for(var i=0 ; i<inputs.length; i++){
            inputs[i].parentElement.parentElement.remove();
        };
    };
    
    swapButton.onclick =function(){
        var inputs = tbody.querySelectorAll("input[type='checkbox']:checked");

        if(inputs.length!=2){
            alert("2개를 선택해야합니다.");
            return;
        }
        
        var trs = [];
        for(var i=0; i<inputs.length; i++)
            trs.push(inputs[i].parentElement.parentElement);
        
        var cloneNode = trs[0].cloneNode(true);
        trs[1].replaceWith(cloneNode);
        trs[0].replaceWith(trs[1]);
    };
});


//Ex8 : 노드 삽입과 바꾸기
window.addEventListener("load", function(){
    var section = document.querySelector("#section8");
    var upButton = section.querySelector(".up-button");
    var downButton = section.querySelector(".down-button");

    var noticeList = section.querySelector(".notice-list");
    var tbodyNode = noticeList.querySelector("tbody");


    var currentNode = tbodyNode.firstElementChild;

    downButton.onclick=function(){
        var nextNode= currentNode.nextElementSibling;
        if(nextNode==null){
            alert("더 이상 이동할 수 없습니다.")
            return;
        }

        tbodyNode.insertBefore(nextNode,currentNode);

    };
    
    upButton.onclick =function(){
        var prevNode = currentNode.previousElementSibling;
        if(prevNode==null){
            alert("더 이상 이동할 수 없습니다.")
            return;
        }
        tbodyNode.insertBefore(currentNode,prevNode);
    };
});



//Ex7 : 노드 조작 : 메뉴추가(createTextNode, Element)
window.addEventListener("load", function(){
    var notices =[
        {id:5, title : "제목1", regDate:"2019-01-01",writerId:"newlec", hit:1 },
        {id:6, title : "제목2", regDate:"2019-01-01",writerId:"newlec", hit:2 }
    ];
    var section = document.querySelector("#section7");

    var noticesList= section.querySelector(".notice-list");
    var tbodyNode = noticesList.querySelector("tbody");
    var cloneButton = section.querySelector(".clone-button");
    var templateButton = section.querySelector(".template-button");

    cloneButton.onclick= function(){ 
        for(var i=0; i<notices.length; i++){
            var cloneNode = noticesList.querySelector("tbody tr").cloneNode(true);
            var tds =cloneNode.querySelectorAll("td");
            tds[0].textContent = notices[i].id;
            tds[1].innerHTML ='<a href="'+notices.id+'">'+notices[i].title+'</a>';
    
            //var aNode = tds[1].children[0];
            //aNode.href =notices[i].id;
            //aNode.textContent = notices.title;
    
    
            tds[2].textContent = notices[i].regDate;
            tds[3].textContent = notices[i].writerId;
            tds[4].textContent = notices[i].hit;
    
            tbodyNode.appendChild(cloneNode);
        }
    };

    templateButton.onclick = function(){
        var template= section.querySelector("template");
        for(var i=0; i<notices.length; i++){
            var cloneNode = document.importNode(template.content, true);
            
            var tds =cloneNode.querySelectorAll("td");
            tds[0].textContent = notices[i].id;
            tds[1].innerHTML ='<a href="'+notices.id+'">'+notices[0].title+'</a>';
            tds[2].textContent = notices[i].regDate;
            tds[3].textContent = notices[i].writerId;
            tds[4].textContent = notices[i].hit;

            tbodyNode.appendChild(cloneNode);
        }
        
    };

});


//Ex6 : 노드 조작 : 메뉴추가(createTextNode, Element)
window.addEventListener("load", function(){
    var section =document.querySelector("#section6");
    var titleInput = section.querySelector(".title-input");
    var menuListUl = section.querySelector(".menu-list")
    var addButton = section.querySelector(".add-button");
    var delButton = section.querySelector(".del-button");

    addButton.onclick = function(){
        var title = titleInput.value;

        var html = '<a href="">'+ title +'</a>';
        var li = document.createElement("li");
        li.innerHTML=html;

        menuListUl.appendChild(li);

        // 복잡합
        // var title = titleInput.value;
        // var txtNode = document.createTextNode(title);
        // var aNode = document.createElement("a");
        // aNode.href="";
        // aNode.appendChild(txtNode);

        // var liNode = document.createElement("li");
        // liNode.append(aNode);

        // menuListUl.appendChild(liNode);


        // 단순텍스트
        // var title = titleInput.value;
        // var txtNode = document.createTextNode(title);
        // menuListDiv.appendChild(txtNode);
    };

    delButton.onclick = function(){
        var liNode = menuListUl.children[0];
        liNode.remove();
        
        //var liNode = menuListUl.children[0];
        //menuListUl.removeChild(liNode);
        
        
        //var txtNode = menuListDiv.childNodes[0];
        //menuListDiv.removeChild(textNode);
     };

});

//Ex5 : 엘레먼트 노드 속성 변경 & CSS 속성 변경
window.addEventListener("load", function(){
    var section =document.querySelector("#section5");
    var srcInput = section.querySelector(".src-input");
    var imgSelect = section.querySelector(".img-select");
    var changeButton = section.querySelector(".change-button");
    var img = section.querySelector(".img");
    var colorInput =section.querySelector(".color-input");

    changeButton.onclick = function(){
        //img.src="imgs/"+srcInput.value;
        img.src="imgs/"+imgSelect.value;

        //img.style["border-color"]=colorInput.value;
        img.style.borderColor=colorInput.value;
        console.log(img.className)

    };

});

//Ex4 : childNodes를 이용한 선택
window.addEventListener("load", function(){
    var section4 =document.querySelector("#section4");
    var box =section4.querySelector(".box");
    var input1 = box.children[0];   // 자식 노드를 찾는 방식
    var input2 = box.children[1];

    input1.value="hello";
    input2.value="okay";

});


//Ex3 : Selectors API level1
window.addEventListener("load", function(){
    var section3 =document.getElementById("section3");
    var txtX = section3.querySelector("input[name='txt-x']"); //name 속성 주입하고 query
    var txtY = section3.querySelector(".txt-y");
    var btnAdd = section3.querySelector(".btn-add");
    var txtSum = section3.querySelector(".txt-sum");
    
    //var txtX = section3.querySelectorAll("input");   배열로 input 태그 다 가져오기
    btnAdd.onclick =function(){
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x+y;
    };
});





//EX2 : 엘리먼트 선택방법
window.addEventListener("load", function(){
    var section2 =document.getElementById("section2");
    var txtX = section2.getElementsByClassName("txt-x")[0];
    var txtY = section2.getElementsByClassName("txt-y")[0];
    var btnAdd = section2.getElementsByClassName("btn-add")[0];
    var txtSum = section2.getElementsByClassName("txt-sum")[0];
    
    // var inputs =section2.getElementsByTagName("input")
    // var txtX = inputs[0];
    // var txtY = inputs[1];
    // var btnAdd = inputs[2];
    // var txtSum =inputs[3];
    
    btnAdd.onclick =function(){
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x+y;
    };
});

//EX1 : 계산기
window.addEventListener("load", function(){
    var txtX =document.getElementById("txt-x");
    var txtY =document.getElementById("txt-y");
    var btnAdd =document.getElementById("btn-add");
    var txtSum =document.getElementById("txt-sum");
    btnAdd.onclick =function(){
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x+y;
    };
});

