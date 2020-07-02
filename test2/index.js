const http = require('http')
const fs = require('fs')
const { join } = require('path')

http.createServer((req, res) => {
  if(req.url === '/index.html') {
    console.log('请求index.html')
    // res.setHeader('Cache-control', 'no-cache')
    // res.setHeader('Cache-control', 'max-age=10')
    res.setHeader('Cache-control', 'no-store')
    fs.readFile(join(__dirname, 'index.html'), (err, data) => {
      res.end(data)
    })
  }
  if(req.url === '/a.js') {
    console.log('请求a.js')
    // res.setHeader('Cache-control', 'no-cache')
    // res.setHeader('Cache-control', 'max-age=10')
    res.setHeader('Cache-control', 'no-store')
    fs.readFile(join(__dirname, '../a.js'), (err, data) => {
      res.end(data)
    })
  }
  if(req.url === '/a.css') {
    console.log('请求a.css')
    // res.setHeader('Cache-control', 'no-cache')
    // res.setHeader('Cache-control', 'max-age=10')
    res.setHeader('Cache-control', 'no-store')
    fs.readFile(join(__dirname, '../a.css'), (err, data) => {
      res.end(data)
    })
  }
  if(req.url === '/a.jpg') {
    console.log('请求a.jpg')
    // res.setHeader('Cache-control', 'no-cache')
    // res.setHeader('Cache-control', 'max-age=10')
    res.setHeader('Cache-control', 'no-store')
    fs.readFile(join(__dirname, '../a.jpg'), (err, data) => {
      res.end(data)
    })
  }
}).listen(5000)