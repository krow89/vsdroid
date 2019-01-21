const utilsCmd= require('./utils/commands-manager')


let commandsModule= [
	'say-hello', 
	'print-path', 
	'init-project-files',
	'test-run'
]


function registerExtensionCommands(cmds){
	for(let cmd of cmds){
		let currModCmd= require('./commands/'+cmd).command
		utilsCmd.extensionCommandManger.addCommand( currModCmd.id, currModCmd.executor )
	}
}


function activate(context) {

	// set global extension context
	require('./utils/vscode').initExtensionContext(context)

	registerExtensionCommands( commandsModule )
    
}


function deactivate() {
}


exports.activate = activate;
exports.deactivate = deactivate;