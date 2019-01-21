const vsc= require('vscode')
const extContext= require('../context')


class CommandInfo{
	constructor(id, executor, disposable){
		this.id= id
		this.executor= executor
		this.disposable= disposable
	}
}


class CommandsManager{
	constructor(){
		this._cmdsMap= {}
	}

	addCommand(id, executor){
		let ctx= extContext.getExtensionContext()
		id= id.toString()
		if(id in this._cmdsMap){
			console.warn("yetd efined")
			return
		}else if(!executor){
			return
		}
		
		
		let disp= vsc.commands.registerCommand( id, executor )
		this._cmdsMap[id]= new CommandInfo(id, executor, disp)
		ctx.subscriptions.push(disp)
	}

	addCommands(cmdMap){
		for(let id in cmdMap){
			this.addCommand(id, cmdMap[id])
		}
	}

	removeCommand(cmdId){
		if(cmdId.toString() in this._cmdsMap){
			this._cmdsMap[cmdId].disposable.dispose()
			delete this._cmdsMap[cmdId]
		}
	}
}


exports.extensionCommandManger= new CommandsManager()