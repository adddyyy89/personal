$(document).ready(function() {

    var showResume = false;

    $("#resumeLink").click(function(){
        if(showResume == false) {
            $("#resumeIframe").css("display", "block");
            showResume = true;
        } else {
            $("#resumeIframe").css("display", "none");
            showResume = false;
        }
    });


});