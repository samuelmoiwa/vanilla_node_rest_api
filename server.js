const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('content-type', 'text/html')
    res.write('<h1> hello moiwa </h1>');
    res.end;
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, ()=> console.log(`server is running on port ${PORT}`))
