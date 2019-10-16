designBidsApp.controller('homeController', ['$rootScope', '$scope', 'homeService', '$location', function($rootScope, $scope, homeService, $location){
	
	if(!$rootScope.isLoggedIn){
		$location.path('/login');
	}

	$scope.allUserSpecificNotes = homeService.getNotes($rootScope.username);
	if ($scope.allUserSpecificNotes != undefined && $scope.allUserSpecificNotes.length<=4) {
		$('.load-more-btn').hide();
	}
	if ($scope.allUserSpecificNotes!=undefined)
	$scope.userNotes = $scope.allUserSpecificNotes.slice(0,4);

	$scope.new =[];

	$scope.addNoteToDB = function(){
		var id = undefined;
		if($scope.new.id !=undefined){
			id = $scope.new.id;
			deleteNotebyId(id);
		} else {
			id = getNextNoteId()+'';
		}

		var newnote = {'id': id+'' ,'note':$scope.new.note==undefined? '':$scope.new.note, 'priority':$scope.new.priority==undefined? $scope.new.priority='3': $scope.new.priority+''};

		$scope.userNotes.push(newnote);
		homeService.updateNotes($rootScope.username, $scope.userNotes);
		$scope.new = [];
	}
	$scope.addNote = function(){
		$scope.new = [];
		$('.add-note-modal').modal('show');
	}

	$scope.deleteNote = function(){
		var element = event.target;
		var noteid = $(element).closest('[data-noteid]').attr('data-noteid');

		deleteNotebyId(noteid);
		homeService.updateNotes($rootScope.username, $scope.userNotes);
	}

	$scope.editNote = function(){
		var element = event.target;
		var noteid = $(element).closest('[data-noteid]').attr('data-noteid');
		for(var i=0; i<$scope.userNotes.length; i++){
			if($scope.userNotes[i].id == noteid){
				$scope.new = $scope.userNotes[i];
				break;
			}
		}
		$('.add-note-modal').modal('show');
	}

	$scope.$watch('new.note', function(newValue, oldValue, scope) {
		if(newValue !=undefined){
			var res = newValue.split(" ");
			if(res.length>50){
				$scope.new.note = oldValue;
				$('.exceed-alert').show();
				$(".exceed-alert").fadeTo(2000, 500).slideUp(500, function(){
			   		$(".exceed-alert").alert('close');
				});
	
			}
		}
	}, true);

	$scope.loadMore = function(){
		for(var i = 1; i <= 4; i++) {
			 if($scope.userNotes.length<$scope.allUserSpecificNotes.length){
			 	$scope.userNotes.push($scope.allUserSpecificNotes[$scope.userNotes.length]);
			 }
	    }
	    if($scope.userNotes.length>=$scope.allUserSpecificNotes.length){
	    	$('.load-more-btn').hide();
	    }    
	}

	function getNextNoteId(){
		var maxId = 0;
		for(var i=0; i<$scope.userNotes.length;i++){
			var id = parseInt($scope.userNotes[i].id)
			if( id > maxId)
				maxId = id;
		}
		return ++maxId;
	}

	function deleteNotebyId(id){
		for(var i=0; i<$scope.userNotes.length; i++){
			if($scope.userNotes[i].id == id){
				$scope.userNotes.splice(i,1);
			}
		}
	}

	$('.dropdown-menu li').click(function(){
		var element = event.target;
		var priority = $(element).text();
		$(this).closest('ul').siblings('button').first('span').text(priority);
	});
}])