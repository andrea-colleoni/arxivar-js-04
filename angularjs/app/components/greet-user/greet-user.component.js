angular
    .module('corsoNg')
        .component('greetUser', { 
                templateUrl: 'components/greet-user/greet-user.template.html',
                controller: function GreetUserController() {
                    this.user = 'world';
                }
            }
        );