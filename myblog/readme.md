
首先打开数据库 `mongod --dbpath hhh/data/db`
开启server:`node index.js`
即可在浏览器指定端口进行访问。

注： hhh文件夹中存放了数据data/db,用户密码等。

### 数据
数据库myblog包含四个文档：comments,posts,sessions,users.
其中comments,posts,users由lib/mongo.js调用mongolass定义,；
sessions由index.js调用express-session和connect-mongo定义，由routes目录下的signin,signout和signup写入。

+ 增添posts-content.ejs,由posts.ejs调用，每个post的内容和标题都是链接
+ 为避免混淆，将session.user更名为session.sessionUser，在EJS中也一一更改
+ 路由中添加users.js,在models/users添加getUserById