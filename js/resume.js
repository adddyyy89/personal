$(document).ready(function() {

    var calculateTotalExpYrRound = function() {
        var now = new Date();
        var past = new Date("2013-02-26");
        var nowYear = now.getFullYear();
        var pastYear = past.getFullYear();
        var age = nowYear - pastYear;
    
        return age;
    };

    $("#totalExpYrRound").text(calculateTotalExpYrRound());

    

    $("#calculateInfosysTotalExpMonths").text("1 year 4");
});