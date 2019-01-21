class BaseAction{
	execute(){}
}


class ShowWarningOn extends BaseAction{
	execute(condition){
		if(condtion.test())
			console.log("WARN")
		return this
	}
}