
const ncp= require('ncp')
const path= require('path')

const ON_OVERWRITE_ERROR= 1
const ON_ERROR_STOP= 1<<1
const SILENT= 0


class PathsCopier{
	constructor(srcPath, outPath){
		this._srcPath= path.resolve(srcPath)
		this._outPath= path.resolve(outPath)
		let a= 0;
	}

	execute(){
	}
}


class PathCopierFilter{
	apply(){

	}
}

exports.PathsCopier= PathsCopier
exports.ON_ERROR_STOP= ON_ERROR_STOP
exports.ON_OVERWRITE_ERROR= ON_OVERWRITE_ERROR
exports.SILENT= SILENT