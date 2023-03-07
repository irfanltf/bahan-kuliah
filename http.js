const http = require('http');
const fs = require('fs');
const port = 3030;
const server = http.createServer((req, res) => {
// header digunakan untuk memberikan informasi tambahan respondari server
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    // res.write('Hello response');
    const url = req.url;
    if(url === '/about'){
        fs.readFile('./html/about.html', 'utf-8', (e, data)=>{
            if(e){
                res.writeHead(404);
                res.write("File not found");
            }else{
                res.write(data)
            }
            res.end();
        });
    }else if(url === '/contact'){
        fs.readFile('./html/contact.html', 'utf-8', (e,data)=>{
            if(e){
                res.writeHead(404);
                res.write("FIle not found");
            }else{
                res.write(data)
            }
            res.end();
        });
    }else{
        fs.readFile('./html/default.html', (e,data)=>{
            if(e){
                res.writeHead(404);
                res.write("File not found");
            }else{
                res.write(data)
            }
            res.end();
    });
}

});

server.listen(port, ()=>{
    console.log("Server is listening on port : ", port);
})