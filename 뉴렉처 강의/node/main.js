var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url; // queryString이 들어가는 부분
    var queryData = url.parse(_url, true).query;
    var title = queryData.id;
    var content ='';
    console.log(queryData);
    if(_url == '/'){
      title="welcome";
    }
    if(_url == '/favicon.ico'){
        response.writeHead(404);
        response.end();
        return;
    }
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
        <p><a href="https://www.w3.org/TR/html5/" target="_blank" title="html5 speicification">
        <img src="coding.jpg" width="100%">
        </p><p style="margin-top:45px;">${content}
        </p>
        </body>
        </html>
        `;
        response.end(template);
    });
});
app.listen(3000);