const vscode= require('vscode')


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


/*
	Exports
*/
exports.registerCommand= registerCommand
exports.registerCommands= registerCommands
