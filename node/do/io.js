console.log(new Date())

var fs = require("fs"),
	stat = fs.stat;
// var buffer = require("buffer");

var hh = "仅仅是writeFile就可以创建文件夹？Impossible, you have to mkdir."
function mkdir(folderName){
	if(!fs.existsSync(folderName)){
		fs.mkdir(folderName,0777, function (err) {
		  if (err) throw err;
		  console.log("succeed to mkdir:" + folderName);
		});
	}	
}
mkdir("public");
mkdir("git");


console.log(process.cwd())


/*fs.writeFile('git/written.txt', hh, (err) => {
  	if (err) throw err;
  	console.log('It\'s saved!');
});*/
var copy = function(src, dst){
	fs.readdir(src, function(error, paths){
		if(error) throw error;

		paths.forEach(function(path){
			var _src = src + "/" + path,
				_dst = dst + "/" + path,
				readable,
				writable;

			stat(_src, function(err, state){
				if(err) throw err;
				if(state.isFile()){
					readable = fs.createReadStream(_src);
					writable = fs.createWriteStream(_dst);
					readable.pipe(writable);
				} 
				else if(state.isDirectory()){
					existsSync(_src, _dst, copy);
				}
			})
		})
	})
}

var existsSync = function(src, dst, callback){
	if(!fs.existsSync(dst)){
		fs.mkdir(dst,0777, function (err) {
		  if (err) throw err;
		  console.log("succeed to mkdir:" + dst);
		});
	}

	callback(src, dst);	
}
var memo = "D:\\learnByDo\\awecg.github.io\\awecg.io\\source"
existsSync(memo, "gitt", copy);








