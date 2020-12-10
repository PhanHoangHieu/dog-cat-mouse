function Dog(){
	this.name = name;
	this.stomach = [];	
}

Dog.prototype.eat = function(){
	this.stomach.push(cat);
}

Dog.prototype.sayHi = function(){
	console.log('Hi! I am a dog.My name is' + name);
}

module.exports = Dog;