const HTTP = require('http');

const PORT = process.env.PORT || 5000;

const server = HTTP.createServer((req, res) => {
  res.end('Hello, World!');
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
