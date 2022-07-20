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
            title='Welcome';
            content='Hello javaScript';
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
            <ol>
                <li><a href="?id=HTML">HTML</a></li>
                <li><a href="?id=CSS">CSS</a></li>
                <li><a href="?id=JavaScript">JavaScript</a></li>
            </ol>
            <h2>${title}</h2>
            <p style="margin-top:45px;">${content}
            </p>
            </body>
            </html>
            `;
            response.writeHead(200);
            response.end(template);
        }else{
            fs.readFile(`data/${title}`, 'utf8', function(err, data){
                content=data;
                console.log(data);
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
                <ol>
                    <li><a href="?id=HTML">HTML</a></li>
                    <li><a href="?id=CSS">CSS</a></li>
                    <li><a href="?id=JavaScript">JavaScript</a></li>
                </ol>
                <h2>${title}</h2>
                <p style="margin-top:45px;">${content}
                </p>
                </body>
                </html>
                `;
                response.writeHead(200);
                response.end(template);
            });
        }
    }else{
        response.writeHead(404);
        response.end('Not Found');
    }
});
app.listen(3000);