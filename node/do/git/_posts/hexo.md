---
title: again
tags:
  - hexo
  - node.js
---






再次配置hexo.
安装hexo-deploy-git后，created a lockfile as package-lock.json. You should commit this file。
这是npm模仿yarn的版本锁定，可以还原开发环境。


+ 当我把config中的url的root设为空时，`Cannot read property 'replace' of null`hexo\lib\hexo\load_config.js:34:30.原来是这玩意儿在解释YHML，加载配置。
+ github显示还是benleie在提交这个项目？？
修改config的用户名解决
+ 如何设置url的root，让它成功到blog目录？？
新建一个库,开启github pages即可。
### 问题很多


+ hexo加载了hexo-renderer-stylus模块来编译CSS，但是yilia使用了SCSS??
