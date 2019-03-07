const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  let url = req.url;
  //set up some routes
  if(url== "/about"){
    res.write(`<h1>Hello NodeJs ${url} page </h1>`);
    res.end();
  }else if(url == "/contact"){
    res.write(`<h1>Hello NodeJs ${url} page </h1>`);
    res.end();
  }else{
    res.write(`<h1>Hello NodeJs ${port}`);
    res.end(); // res.end i slike a php echo statement
  }

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
