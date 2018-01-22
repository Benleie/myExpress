---
title:  generate
tags: hexo
---
## hexo generate过程
+ hexo-fs是自己定义的file库
+ hexo-util   CacheStream()

hexo/extend
hexo/plugins
hexo-renderer-ejs   ejs

cwd当前目录

## 构造函数们
#### Console()
+ hexo-cli/lib/extend/console
+ this ---store,alias
+ prototype --- get,list,register
+ hexo.extend.console

#### Box()
+ EventEmitter.call(this);
+ require('util').inherits(Box, EventEmitter);






#### Hexo()
+ hexo.log.debug/info
###### this
+ this.source = new Source(this)    继承BOX
+ this.theme  | this.locals
###### init()
+ require('../plugins/console')(this);这样加载六大插件
+ 调用load_config,load_plugins，update_package，然后execFilter('after_init',...)  this.extend.filter
+ emit("ready")
###### load()
一切plugins和extend都加载好后
+ loadDatabase    hexo.database  .options .load()
+ self.source.process(), self.theme.process()




######  `Hexo.prototype._generate()`
+ emit -- generateBefore | generateAfter
+ return self.execFilter('after_generate', null, {context: self});
