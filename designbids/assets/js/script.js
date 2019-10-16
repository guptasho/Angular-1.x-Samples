$(function(){
	users = ['alice','bob','charlie']
	
	userNotes = {'alice': [],
	'bob': [],
	'charlie': []
	}

	var randomText = [];

	randomText.push("Brother set had private his letters observe outward resolve. Shutters ye marriage to throwing we as. "+
					"Effect in if agreed he wished wanted admire expect. Or shortly visitor is comfort placing to cheered do."+
					" Few hills tears are weeks saw. Partiality insensible celebrated is in. Am offended as wandered thoughts greatest"+
					" an friendly. Evening covered in he exposed fertile to. Horses seeing at played plenty nature to expect we. Young "+
					"say led stood hills own thing get.");

	randomText.push("Of recommend residence education be on difficult repulsive offending. Judge views had mirth table seems great him for"+
					" her. Alone all happy asked begin fully stand own get. Excuse ye seeing result of we. See scale dried songs old may not."+
					" Promotion did disposing you household any instantly. Hills we do under times at first short an.");

	randomText.push("His exquisite sincerity education shameless ten earnestly breakfast add. So we me unknown as improve hastily sitting"+
					" forming. Especially favourable compliment but thoroughly unreserved saw she themselves. Sufficient impossible him may"+
					" ten insensible put continuing. Oppose exeter income simple few joy cousin but twenty. Scale began quiet up short wrong"+
					" in in. Sportsmen shy forfeited engrossed may can.");

	Array.prototype.shuffle = function() {
	    var i = this.length;
	    if (i == 0) return this;
	    while (--i) {
	        var j = Math.floor(Math.random() * (i + 1 ));
	        var a = this[i];
	        var b = this[j];
	        this[i] = b;
	        this[j] = a;
	    }
	    return this;
	};

	for(var i=0; i<31;i++){
		var randomNoteAlice = randomText[i%3].split(' ').shuffle().slice(0, 50).join(' ');
		var randomNoteBob = randomText[(i+7)%3].split(' ').shuffle().slice(0, 50).join(' ');
		var randomNoteCharlie = randomText[(i+13)%3].split(' ').shuffle().slice(0, 50).join(' ');

		randomNoteObjectAlice = {'id':i, 'note':randomNoteAlice, 'priority': (((i+5)%3)+1)};
		randomNoteObjectBob = {'id':i, 'note':randomNoteBob, 'priority': (((i+17)%3)+1)};
		randomNoteObjectCharlie = {'id':i, 'note':randomNoteCharlie, 'priority': (((i+19)%3)+1)};

		userNotes.alice.push(randomNoteObjectAlice);
		userNotes.bob.push(randomNoteObjectBob);
		userNotes.charlie.push(randomNoteObjectCharlie);
	}

	if(!localStorage.getItem('users') || !localStorage.getItem('userNotes'))
	{
		localStorage.setItem('users', JSON.stringify(users));
		localStorage.setItem('userNotes', JSON.stringify(userNotes));
	}
	
});

function resetAppData(){
		localStorage.setItem('users', JSON.stringify(users));
		localStorage.setItem('userNotes', JSON.stringify(userNotes));
		window.location.href = 'http://localhost:8080/designbids/index.html';
	}




