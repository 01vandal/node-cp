const http = require("http")

http.createServer( (req, res) => {
    res.writeHead(201, {'Content-Type': 'text/html'});
    res.end('<h1>Hello Node!!!!</h1>\n');
}).listen(3000, ()=>{
    console.log(`server is running at http://localhost:${3000}`);  
})