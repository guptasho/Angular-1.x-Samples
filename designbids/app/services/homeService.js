designBidsApp.service('homeService', function(){

	var usersNotes = JSON.parse(localStorage.getItem('userNotes'));

	this.getNotes = function(username){
		
		return usersNotes[username];
	}

	this.updateNotes = function(username, userNotes){

		usersNotes[username] = userNotes;
		localStorage.setItem('userNotes', JSON.stringify(usersNotes));
	}

})