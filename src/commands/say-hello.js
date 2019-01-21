const vscode= require('vscode')

exports.command= {
	id: 'vsdroid.sayHello',
	
	executor: function(){
		vscode.window.showInformationMessage('Hello World!');
	}
}

