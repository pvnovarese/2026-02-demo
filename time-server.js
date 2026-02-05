const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  const currentTime = new Date().toLocaleString();
  
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Current time: ${currentTime}\n`);
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log('Press Ctrl+C to stop the server');
});
