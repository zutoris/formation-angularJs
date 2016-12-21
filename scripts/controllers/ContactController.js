app.controller('ContactController', ['$scope', 'contactFormFactory', function($scope, contactFormFactory){
    console.log('ContactController');

    $scope.getFields = [];

    function init() {
        $scope.data = contactFormFactory.getFields();
    }
    init();
    console.log('data in localStorage = '+$scope.data);





   $scope.testSubmit = function(contac) {
        console.log(contac);

      if (contac.name == "empty"){
        contactFormFactory.setFields('');
      } else {
        if (contac.email.match('[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}')){
            console.log('email valide');

        
            /*var dataStored = contactFormFactory.getFields();
            var contacts;
            if (dataStored == undefined || dataStored == ''){
                contacts = [];
            } else {
                contacts = JSON.parse(dataStored);
            }

            contacts[contacts.length] = contac;

            contactFormFactory.setFields(JSON.stringify(contacts));*/
            contactFormFactory.addField(contac);
        } else {
            console.log('email non valide');
        }
      }
    }
}]);

