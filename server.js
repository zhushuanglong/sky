/*
 * @Author: your name
 * @Date: 2019-11-19 10:37:42
 * @LastEditTime: 2019-11-19 10:38:18
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /Tsign/Users/eddie/workspace/Aliyun/sky/server.js
 */
const http = require('http');
const hostname = '0.0.0.0';
const port = 3000;
const server = http.createServer((req, res) => { 
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
}); 

server.listen(port, hostname, () => { 
    console.log(`Server running at http://${hostname}:${port}/`);
});