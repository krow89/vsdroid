const vsc= require('vscode')

const packageExpr= /^\w+(\.\w+)+$/


exports.command= {
	id: 'vsdroid.testRun',
	executor: function(){
		//vsc.window.showInformationMessage(res)
		let folder= vsc.workspace.workspaceFolders[0]
		let task= new vsc.Task({type:'gradle'}, folder, 'gradle', 'VSDroid', new vsc.ShellExecution('gradle'))
		vsc.tasks.executeTask(task)
		let a= 0;
		/*vsc.window.showInputBox({
			prompt:"Insert package path",
			validateInput: function(inp){
				if(!packageExpr.test(inp))
					return 'invalid package format (example com.example.com)'
				return null
			}
		}).then(function(res){
			
		}, function(err){
			console.log(err)
		})*/
	}
}