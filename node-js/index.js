const http = require('http');
const fs = require('fs');

const PORT = 8080;

http.createServer((req, res) => {
    try{
    switch (req.url) {
        case "/": homePage(req, res); break;
        case "/test": testPage(req,res);break;
        default: res.writeHead(404,{ "Content-Type": "text/html" }); res.end("Page not Found");
    }}
    catch(e){
        res.writeHead(500,{ "Content-Type": "text/plain" });
        console.log(e)
        res.end("Error occurd while processing the request");
    }
}).listen(PORT, ()=>{
    console.log(`server started listening on ${PORT}`);
});

const homePage = (_, res) => {
    fs.readFile('../public/index.html', (err, data) => {
        if (err) {
            res.writeHead(500, "", { "Content-Type": "text/plain" });
            res.end("Internal Server Error")
        } else {
            res.writeHead(200, "OK", { "Content-Type": "text/html" });
            res.end(data);
        }
    })
};

const testPage = (req,res)=>{
    switch(req.method){
case 'GET':
res.writeHead(200,{"Content-Type":"text/plain"});
res.write("GET / testPage");
res.end();
break;
case 'POST':

break;
case 'PUT':

break;
case 'DELETE':

break;
default:
    res.statusCode = 404;
    res.end();
    }
}