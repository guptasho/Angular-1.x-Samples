designBidsApp.service('loginService', function(){

	var users = JSON.parse(localStorage.getItem('users'));

	this.authenticateUser = function(loginDetails){
		
		if(users.indexOf(loginDetails.username)>0){
			return true;
		} else
			return false;
	}

})