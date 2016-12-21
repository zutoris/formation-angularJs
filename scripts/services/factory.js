app.factory('contactFormFactory', function(){
    /*var data = ['a1'
    ];*/

    var factory = {};

    factory.getFields = function() {
        return window.localStorage.getItem('contactData');
    }


    factory.setFields = function(donnee) {
    	localStorage.setItem('contactData',donnee);
    }


    factory.addField = function(donnee) {

        var dataStored = window.localStorage.getItem('contactData');
        var contacts;
        if (dataStored == undefined || dataStored == ''){
            contacts = [];
        } else {
            contacts = JSON.parse(dataStored);
        }

        contacts[contacts.length] = donnee;

    	window.localStorage.setItem('contactData',JSON.stringify(contacts));
    }


    factory.updateField = function(donnee) {

        var dataStored = window.localStorage.getItem('contactData');
        var contacts;
        if (dataStored == undefined || dataStored == ''){
            console.log('aucune donnée existante dans localStorage ');
        } else {
            contacts = JSON.parse(dataStored);
        }

        for (var i = 0; i < contacts.length; i++) {
        	if (contacts[i].name === donnee.name){
	            console.log('donnée existante ');

		        contacts[i] = donnee;

		    	window.localStorage.setItem('contactData',JSON.stringify(contacts));

        	}
        };
    }


    return factory;
});
