/* Controllers */

appControllers.controller('mainCtrl', ['$rootScope',
function ($rootScope) {
    
        //properties

        $rootScope.data = tanah;
        $rootScope.dataParashot = parashot;
  
        $rootScope.fromSearch = false;
      
        $(document).ready(function () {
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1; //January is 0!
            var yyyy = today.getFullYear();
            if (dd < 10) { dd = '0' + dd }
            if (mm < 10) { mm = '0' + mm }
            today = mm + '/' + dd + '/' + yyyy;

            if (dateCheck("04/21/2016", "04/30/2016", today)) {
                document.getElementById('mainPic').innerHTML = '<img src="img/matzot.png">' +
                '<div style="position: fixed; top: 92px; left: 25%; font-size: xx-large; font-weight: bold; font-family: stam;">חג שמח וכשר!</div>';
            } else {
                document.getElementById('mainPic').innerHTML = '<img src="img/bible.png">';
            }
        });

        $rootScope.currentPerek = "א";



        $rootScope.searchText = function () {
            $rootScope.text = $('#searchText').val();
            for (var i = 0; i < $rootScope.data["books"].length; i++) {                
                for (var key in $rootScope.data["books"][i]) {
                    if ($rootScope.data["books"][i].hasOwnProperty(key)) {
                        for (var key2 in $rootScope.data["books"][i][key]) {
                            if ($rootScope.data["books"][i][key].hasOwnProperty(key2)) {
                                for (var j = 0; j < $rootScope.data["books"][i][key][key2].length; j++) {
                                    var pasok = $rootScope.data["books"][i][key][key2][j].text;
                                    var pasokNaked = pasok.replace(/[\u0591-\u05C7]/g, '');
                                    if (pasokNaked.includes($rootScope.text)) {
                                        $rootScope.searchedPasok = $rootScope.data["books"][i][key][key2][j].text;
                                        $rootScope.currentBook = $rootScope.data["books"][i][key];
                                        $rootScope.currentBookName = key;
                                        $rootScope.currentPerek = key2;
                                        $rootScope.fromSearch = true;
                                        location.href = "#book";
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        function showAdd() {
            // if (admob) admob.requestInterstitialAd({ publisherId: "pub-3635941250247073", interstitialAdId: "ca-app-pub-3635941250247073/1529059860" });
        }

        $( "#parashaSelect" ).change(function() {
            var selectBox = document.getElementById("parashaSelect");
            var parashaName = selectBox.options[selectBox.selectedIndex].value;

            //showAdd();
            $rootScope.currentParashaName = parashaName;
            $rootScope.currentParasha = getValueByKey(parashaName, $rootScope.dataParashot["books"]);
            console.log($rootScope.currentParasha);
            console.log($rootScope.currentParashaName);
            $('#menu').modal('hide');
            location.href = "#book";
        });

        function goToParasha(parasha, fromWeek) {
            console.log(parasha);
            console.log(fromWeek);
            if (fromWeek == 'yes') {
                var parashaName = parasha;
            } else {
                var selectBox = document.getElementById("parashaSelect");
                var parashaName = selectBox.options[selectBox.selectedIndex].value;
            }

            //showAdd();
            $rootScope.currentParashaName = parashaName;
            $rootScope.currentParasha = getValueByKey(parashaName, $rootScope.dataParashot["books"]);
            console.log($rootScope.currentParasha);
            console.log($rootScope.currentParashaName);
            $('#menu').modal('hide');

            location.href = "#book";
        }

        function exitApp() {
            navigator.app.exitApp();
        }
        function dateCheck(from, to, check) {
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1; //January is 0!
            var yyyy = today.getFullYear();
            if (dd < 10) { dd = '0' + dd }
            if (mm < 10) { mm = '0' + mm }
            today = mm + '/' + dd + '/' + yyyy;
            var fDate, lDate, cDate;
            fDate = Date.parse(from);
            lDate = Date.parse(to);
            cDate = Date.parse(check);
            if ((cDate <= lDate && cDate >= fDate)) {
                return true;
            }
            return false;
        }
        $rootScope.getParasha = function () {
            location.href = "#book";

            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1; //January is 0!
            var yyyy = today.getFullYear();
            if (dd < 10) { dd = '0' + dd }
            if (mm < 10) { mm = '0' + mm }
            today = mm + '/' + dd + '/' + yyyy;
            console.log(today);
            if (dateCheck("09/02/2017", "09/08/2017", today)) goToParasha('כי תבוא', 'yes');
            if (dateCheck("09/09/2017", "09/15/2017", today)) goToParasha('ניצבים', 'yes');
            if (dateCheck("09/16/2017", "09/22/2017", today)) goToParasha('וילך', 'yes');
            if (dateCheck("09/23/2017", "09/29/2017", today)) goToParasha('האזינו', 'yes');
            if (dateCheck("09/30/2017", "10/06/2017", today)) goToParasha('וזאת הברכה', 'yes');
            if (dateCheck("10/07/2017", "10/13/2017", today)) goToParasha('בראשית', 'yes');
            if (dateCheck("10/14/2017", "10/20/2017", today)) goToParasha('נח', 'yes');
            if (dateCheck("10/21/2017", "10/27/2017", today)) goToParasha('לך לך', 'yes');
            if (dateCheck("10/28/2017", "11/03/2017", today)) goToParasha('וירא', 'yes');
            if (dateCheck("11/04/2017", "11/10/2017", today)) goToParasha('חיי שרה', 'yes');
            if (dateCheck("11/11/2017", "11/17/2017", today)) goToParasha('תולדות', 'yes');
            if (dateCheck("11/18/2017", "11/24/2017", today)) goToParasha('ויצא', 'yes');
            if (dateCheck("11/25/2017", "12/01/2017", today)) goToParasha('וישלח', 'yes');
            if (dateCheck("12/02/2017", "12/08/2017", today)) goToParasha('וישב', 'yes');
            if (dateCheck("12/09/2017", "12/15/2017", today)) goToParasha('מקץ', 'yes');
            if (dateCheck("12/16/2017", "12/22/2017", today)) goToParasha('ויגש', 'yes');
            if (dateCheck("12/23/2017", "12/29/2017", today)) goToParasha('ויחי', 'yes');
            if (dateCheck("12/30/2017", "01/05/2017", today)) goToParasha('שמות', 'yes');
            if (dateCheck("01/06/2018", "01/12/2018", today)) goToParasha('וארא', 'yes');
            if (dateCheck("01/13/2018", "01/19/2018", today)) goToParasha('בא', 'yes');
            if (dateCheck("01/20/2018", "01/26/2018", today)) goToParasha('בשלח', 'yes');
            if (dateCheck("01/27/2018", "02/02/2018", today)) goToParasha('יתרו', 'yes');
            if (dateCheck("02/03/2018", "02/09/2018", today)) goToParasha('משפטים', 'yes');
            if (dateCheck("02/10/2018", "02/16/2018", today)) goToParasha('תרומה', 'yes');
            if (dateCheck("02/17/2018", "02/23/2018", today)) goToParasha('תצוה', 'yes');
            if (dateCheck("02/24/2018", "03/02/2018", today)) goToParasha('כי תשא', 'yes');
            if (dateCheck("03/03/2018", "03/09/2018", today)) goToParasha('ויקהל', 'yes');
            if (dateCheck("03/10/2018", "03/16/2018", today)) goToParasha('פקודי', 'yes');
            if (dateCheck("03/17/2018", "03/23/2018", today)) goToParasha('ויקרא', 'yes');
            if (dateCheck("03/24/2018", "03/30/2018", today)) goToParasha('צו', 'yes');
            if (dateCheck("03/31/2018", "04/06/2018", today)) goToParasha('שמיני', 'yes');
            if (dateCheck("04/07/2018", "04/13/2018", today)) goToParasha('תזריע', 'yes');
            if (dateCheck("04/14/2018", "04/20/2018", today)) goToParasha('מצורע', 'yes');
            if (dateCheck("04/21/2018", "04/27/2018", today)) goToParasha('פסח', 'yes');
            if (dateCheck("04/28/2018", "05/04/2018", today)) goToParasha('אחרי מות', 'yes');
            if (dateCheck("05/05/2018", "05/11/2018", today)) goToParasha('קדושים', 'yes');
            if (dateCheck("05/12/2018", "05/18/2018", today)) goToParasha('אמור', 'yes');
            if (dateCheck("05/26/2018", "06/01/2018", today)) goToParasha('בהר', 'yes');
            if (dateCheck("06/02/2018", "06/08/2018", today)) goToParasha('בחוקותי', 'yes');
            if (dateCheck("06/09/2018", "06/15/2018", today)) goToParasha('במדבר', 'yes');
            if (dateCheck("06/16/2018", "06/22/2018", today)) goToParasha('נשא', 'yes');
            if (dateCheck("06/23/2018", "06/29/2018", today)) goToParasha('בהעלותך', 'yes');
            if (dateCheck("06/30/2018", "07/06/2018", today)) goToParasha('שלח', 'yes');
        };

        function getValueByKey(key, data) {
            var i, len = data.length;
            for (i = 0; i < len; i++) {
                if (data[i] && data[i].hasOwnProperty(key)) {
                    return data[i][key];
                }
            }
            return -1;
        }

        $rootScope.goToBook = function (bookName) {
            showAdd();
            $rootScope.currentBookName = bookName;
            $rootScope.currentBook = getValueByKey(bookName, $rootScope.data["books"]);
            console.log($rootScope.currentBook);
            console.log($rootScope.currentBookName);
            location.href = "#book";
        }

        //$rootScope.goToMain = function () {
        //    location.href = "#main";
        //}

        $rootScope.exit = function () {
            navigator.app.exitApp();
        }
        
    }]);