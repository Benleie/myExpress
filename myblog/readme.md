
首先打开数据库 `mongod --dbpath hhh/data/db`
开启server:`node index.js`
即可在浏览器指定端口进行访问。

## 注： hhh文件夹中存放了数据data/db,用户密码等。

数据库myblog包含四个文档：comments,posts,sessions,users.
其中comments,posts,users由lib/mongo.js定义。