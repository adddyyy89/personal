$(document).ready(function() {

    var showResume = false;
    var showAbout = true;

    $("#resumeLink").click(function(){
        if(showResume == false) {
            $("#aboutFrame").css("display", "none");
            $("#resumeIframe").css("display", "block");
            showResume = true;
            showAbout = false;
        } else {
            $("#resumeIframe").css("display", "none");
            $("#aboutFrame").css("display", "block");
            showResume = false;
            showAbout = true;
        }
    });

    $("#aboutLink").click(function(){
        if(showAbout == false) {
            $("#aboutFrame").css("display", "block");
            $("#resumeIframe").css("display", "none");
            showResume = false;
            showAbout = true;
        } 
    });


});