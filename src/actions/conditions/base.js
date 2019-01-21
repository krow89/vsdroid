const process= require('process')


class BaseCondition{
	test(){ return false }
}


class EnvironmentVarCondition extends BaseCondition{
	constructor(envVarName, envVarValue=null){
		this._envName= envVarName
		this._envValue= envVarValue
	}

	test(){
		const env= process.env
		if(this._envValue===null){
			return this._envName in env
		}else{
			return (this._envName in env) ? this._envValue == env[this._envName] : false
		}
	}
}


// Exports
exports.BaseCondition = BaseCondition
exports.EnvironmentVarCondition= EnvironmentVarCondition