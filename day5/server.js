import http from "http"



const server = http.createServer((req, res) => {
  // Homepage
  if (req.url === '/') {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      welcome Home
      <li><a href='/about'>about</a></li>
      <li><a href='/contact'>contact</a></li>
      
      `);
  }

  // About Page
  else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`This is the About Page.
            <li><a href='/'>Home</a></li>

      `);
  }

  // Contact Page
  else if (req.url === '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`Contact us at contact@example.com
                  <li><a href='/'>Home</a></li>

      `);
  }

  // Any other page
  else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end(`404 - Page Not Found
                  <li><a href='/'>retun home</a></li>

      `);
  }
});
server.listen(3000);
