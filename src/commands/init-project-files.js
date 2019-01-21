const vscode= require('vscode')
const extContext= require('../context')
const AssetsCopier= require('../utils/extension').AssetsCopier
const env= require('../utils/environment')


exports.command= {
	id: 'vsdroid.initProjectFiles',

	executor: function(){
		let workspace= vscode.workspace
		let folders= workspace.workspaceFolders
		vscode.window.showErrorMessage( env.getEnvironmentVariable('GRADLE_HOME') )
		if(!folders){
			vscode.window.showErrorMessage("Its possible init project files only when a workspace is loaded")
		}else{
			if(folders.length > 1){
				vscode.window.showInformationMessage(`Project files will be writed only to workspace "${folders[0].name}"`)
			}
			let ctx= extContext.getExtensionContext()
			let targetPath= folders[0].uri.fsPath
			AssetsCopier.copyTemplates(['androidApp','androidGradleBuild'], targetPath, function(err){
				if(err){
					vscode.window.showErrorMessage("Something gone wrong with copying files :(")
				}else{
					vscode.window.showInformationMessage(`Project files init for workspace "${folders[0].name}" finished :)`)
				}
			})
		}
	}
}