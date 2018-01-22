//http://biyeah.iteye.com/blog/1308954




const util = require('util');
const EventEmitter = require('events');
function Dog(name){
	this.name = name;
	this.sound = " WangWang";
}
function Cat(name){
	this.name = name;
	this.sound = " MiaoMiao "
}
function bark(){
	console.log(this.name + this.sound)
}


+function(){
	console.log(this)
}()