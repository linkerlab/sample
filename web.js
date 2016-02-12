const http = require('http');

const port = 1337;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World Simon Su~\n');
}).listen(port, () => {
  console.log(`Server running at http://your-ip-address:${port}/`);
});
