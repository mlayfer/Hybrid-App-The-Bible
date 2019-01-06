'use strict';
/* Controllers */

appControllers.controller('parashotCtrl', ['$rootScope',
    function ($rootScope) {
        //properties

        var fontSize = 1.8;
        $rootScope.zoomIn = function() {
            fontSize += 0.3;
            $("td").css("font-Size", fontSize + "em");
        }

        $rootScope.zoomOut = function () {
            fontSize -= 0.3;
            $("td").css("font-Size", fontSize + "em");
        }

        $rootScope.choosePerek = function (perek) {
            console.log(perek);
            $rootScope.currentPerek = perek;
        }
        
        function scrollosh() {
            $('body').scrollTop(0);
        }

        $(document).ready(function () {
            if ($rootScope.fromSearch == true) {
                console.log($rootScope.text);
                console.log($rootScope.searchedPasok);
            }
            $rootScope.fromSearch = false;
        });





    }]);