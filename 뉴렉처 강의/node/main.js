var http = require('http');
var fs = require('fs');
var url = require('url');
const querystring = require('node:querystring');
var template = require('./lib/template.js');
var path = require('path');
var sanitizeHtml = require('sanitize-html');




var app = http.createServer(function(request,response){
    var _url = request.url; // queryString이 들어가는 부분
    var queryData = url.parse(_url, true).query;
    var pathname =url.parse(_url, true).pathname;
    console.log(pathname);
    if(pathname==='/'){
        if(queryData.id===undefined){
            fs.readdir('./data', function(err, filelist){
                var title='Welcome';
                var content='Hello javaScript';
                var list = template.list(filelist);
                var html= template.html(title, list, `<h2>${title}</h2>${content}`);
                response.writeHead(200);
                response.end(html);
            });
        }else{
            fs.readdir('./data', function(err, filelist){
                var filteredId= path.parse(queryData.id).base;
                fs.readFile(`data/${filteredId}`, 'utf8', function(err, content){
                    var title= queryData.id;
                    var sanitizedTitle = sanitizeHtml(title);
                    var sanitizeContent = sanitizeHtml(content,{
                        allowedTags:['h1']
                    });
                    var list = template.list(filelist);
                    var html= template.html(sanitizedTitle, list, `<h2>${sanitizedTitle}</h2>${sanitizeContent}`);
                    response.writeHead(200);
                    response.end(html);
                })
            });
        }
    }else if(pathname==='/create'){
        fs.readdir('./data', function(err, filelist){
            var title='WEB-create';
            var list = template.list(filelist);
            var html= template.html(title, list, `<form action="http://localhost:3000/create_process"
            method="post">
                <p><input type="text" name="title" placeholder="title"></p>
                <p>
                    <textarea name="content" placeholder="content"></textarea>
                </p>
                <p>
                    <input type="submit">
                </p>
            </form>`);
            response.writeHead(200);
            response.end(html);
        });
    }else if(pathname==='/create_process'){
        var body='';
        request.on('data', function(data){
            body=body+data;
        });
        request.on('end',function(){
            let post =querystring.parse(body);
            var title = post.title;
            var content = post.content;
            console.log(content);
            fs.writeFile(`data/${title}`, content,'utf8', function(err){
                response.writeHead(302,{Location:`/?id=${title}`});
                response.end();
            })
        });
    }else{
        response.writeHead(404);
        response.end('Not Found');
    }
});
app.listen(3000);