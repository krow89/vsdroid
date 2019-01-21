const process= require('process')


exports.getEnvironmentVariable= (name, value=null)=>{
	const env= process.env
	if(name in env) return env[name]
	return value
}