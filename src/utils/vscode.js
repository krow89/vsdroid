const vscode= require('vscode')


let _ctx= null

function registerCommands(ctx, cmdsMap){
	let dispMap= {}
	for(let k in cmdsMap){
		dispMap[k]= registerCommand(ctx, k, cmdsMap[k])
	}
	return dispMap
}


function registerCommand(ctx, cmd, clbk){
	let disp= vscode.commands.registerCommand(cmd, clbk)
	ctx.subscriptions.push(disp)
	return disp
}

function initExtensionContext(ctx){
	_ctx= ctx
}

function getExtensionContext(){
	return _ctx
}



/*
	Exports
*/
exports.initExtensionContext= initExtensionContext
exports.getExtensionContext= getExtensionContext
exports.registerCommand= registerCommand
exports.registerCommands= registerCommands
