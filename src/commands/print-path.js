const process= require('process')
const path= require('path')
const fileUtils= require('../utils/file')
const vsc= require('vscode')

exports.command= {
	id: 'vsdroid.printPath',
	
	executor: function(){
		let workspaceDir= vsc.workspace.workspaceFolders[0].uri.fsPath
		let c= new fileUtils.PathsCopier(workspaceDir+'/src', workspaceDir+'/out')
		let pathContents= process.env.path
		if(!pathContents){
			console.warn('No path environment var')
		}else{
			console.log(pathContents.split(path.delimiter))
		}
	}
}
