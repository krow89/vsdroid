const ncp= require('ncp')
const path= require('path')
const extContext= require('../context')

const TEMPLATE_DIR= 'resources/templates'

class AssetsCopier{
	static copyTemplates(templateName, where, clbk){
		const ctx= extContext.getExtensionContext()
		if(templateName instanceof Array){
			for(let c of templateName)
				ncp.ncp( ctx.asAbsolutePath(path.join(TEMPLATE_DIR, c)), where, function(err){
					clbk(err)
				})
		}else{
			ncp.ncp( ctx.asAbsolutePath(path.join(TEMPLATE_DIR, templateName)), where, function(err){
				clbk(err)
			})
		}
		
	}
}

exports.AssetsCopier= AssetsCopier