/**
 * Created by hongbojing on 12/14/15.
 */
angular
    .module('myApp')
    .controller('myController', myController);

function myController() {
    var vm = this;
    vm.testInit = 'Hello world';
}