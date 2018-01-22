---
title: gitbash
tags:
  - git
  - instruction
banner: http://www.ruanyifeng.com/blogimg/asset/2015/bg2015120901.png
---
### git clone指定分支
git clone -b refactor https://github.com/maroslaw/rainyday.js.git stop

### 创建一个新库，很简单。
在官网new repo,然后github在你没有readme的时候会有提示页面，照做就行。
git init一下，在github网上 new repo，然后
```
echo "# awecg.github.io" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/awecg/awecg.github.io.git
git push -u origin master
```
另:git pull --rebase origin master(如果创建库时生成了README.md，即README.md不在本地文件目录)



## 使用多个git账号
+ 创建公钥和密钥`ssh-keygen -t rsa -f test -C "test key"`创建公钥和密钥
+ $ ssh-agent bash
	$  ssh-add ~/.ssh/test
	Identity added: /c/Users/我/.ssh/test (/c/Users/我/.ssh/test)
+ 配置ssh的config文件
```
$ ssh -T git@github.com
Hi Benleie! You've successfully authenticated, but GitHub does not provide shell access.
```
+ git remote set-url origin
+ git push -u origin master

查看gitconfig   git config --list
查看远程仓库信息  git remote show origin
查看远程仓库 git remote -v

## AUTOCRLF
+ warning: LF will be replaced by CRLF in XXXXX.
The file will have its original line endings in your working directory.

+ 关于autocrlf。windows系统下，如果git add提交到stage的文件时unix格式，就有上面的提示。
意思是core.autocrlf默认为true，提交到index后会自动转为lf endings，方便项目跨平台使用。
+ 权宜之计：为了git bash不被这种提示刷屏，可以将true改为false，反正只是在windows下自己玩。


commit阅读利器gitk
