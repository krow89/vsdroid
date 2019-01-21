let _ctx= null


function getExtensionContext(throwErrorOnInvalid=true){
	if(throwErrorOnInvalid && !_ctx)
		throw new InvalidExtensionContext()
	return _ctx
}


function init(ctx){
	if(_ctx) throw new YetInitedExtensionContext()
	_ctx= ctx
}


class InvalidExtensionContext extends Error{
	constructor(msg){
		super(msg || "Invalid global extension context")
	}
}


class YetInitedExtensionContext extends InvalidExtensionContext{
	constructor(){
		super("Invalid re-init global extension context")
	}
}



/*
	Exports
*/
exports.getExtensionContext= getExtensionContext
exports.init= init
exports.InvalidExtensionContext= InvalidExtensionContext
exports.YetInitedExtensionContext= YetInitedExtensionContext