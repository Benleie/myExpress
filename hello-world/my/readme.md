这是阮一峰的express操作

###静态网页-->app.js
三个页面写的很开心，about实现了侧边栏的固定，article则是引用了marked.js的库，同时加入了导航栏的功能。

### 将article的css改为本地的链接，却无法被浏览器访问。
`GET http://localhost:1337/article.css net::ERR_ABORTED`，看来是路径名设置有问题。
我的html文件是通过sendFile传到浏览器的，css并没有传过去。当我试图去在同一个get里面使用两个sendFile，时，
```
RangeNotSatisfiableError: Range Not Satisfiable
    at SendStream.error (D:\learnByDo\hello-world\my\node_modules\send\index.js:245:31)
    at SendStream.send (D:\learnByDo\hello-world\my\node_modules\send\index.js:564:19)
    at onstat (D:\learnByDo\hello-world\my\node_modules\send\index.js:624:10)
    at FSReqWrap.oncomplete (fs.js:123:15)
```
到这里就应该崩了，sendFile()只是一种不伦不类的发送回应方式，这里根本就没有用到文件生成。


哈哈，其实只需要添加
`app.use(express.static('public'));`即可。






