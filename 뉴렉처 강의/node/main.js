var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url; // queryString이 들어가는 부분
    var queryData = url.parse(_url, true).query;
    var pathname =url.parse(_url, true).pathname;
    var title = queryData.id;
    var content ='';

    console.log(url.parse(_url, true).pathname);
    if(pathname==='/'){
        if(queryData.id===undefined){
            console.log('체크포인트1');
            fs.readdir('./data', function(err, filelist){

                title='Welcome';
                content='Hello javaScript';
                var list='<ul>';
                var i=0;
                while(i<filelist.length){
                    list = list+`<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`
                    i+=1
                }
                list=list+'</ul>';

                response.writeHead(200);
                var template=`
                <!doctype html>
                <html>
                <head>
                <title>WEB1 - ${title}</title>
                <meta charset="utf-8">
                </head>
                <body>
                <h1><a href="/">WEB</a></h1>
                ${list}
                <h2>${title}</h2>
                <p style="margin-top:45px;">${content}
                </p>
                </body>
                </html>
                `;
                response.writeHead(200);
                response.end(template);
            })
        }else{
            fs.readdir('./data', function(err, filelist){
                var list='<ul>';
                var i=0;
                while(i<filelist.length){
                    list = list+`<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`
                    i+=1
                }
                list=list+'</ul>';
                fs.readFile(`data/${title}`, 'utf8', function(err, data){
                    content=data;
                    console.log(data);
                    response.writeHead(200);
                    var list='<ul>';
                    var i=0;
                    while(i<filelist.length){
                        list = list+`<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`
                        i+=1
                    }
                    list=list+'</ul>';
                    var template=`
                    <!doctype html>
                    <html>
                    <head>
                    <title>WEB1 - ${title}</title>
                    <meta charset="utf-8">
                    </head>
                    <body>
                    <h1><a href="/">WEB</a></h1>
                    ${list}
                    <h2>${title}</h2>
                    <p style="margin-top:45px;">${content}
                    </p>
                    </body>
                    </html>
                    `;
                    response.writeHead(200);
                    response.end(template);
                })
            });
        }
    }else{
        response.writeHead(404);
        response.end('Not Found');
    }
});
app.listen(3000);