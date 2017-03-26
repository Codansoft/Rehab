/* 
 * Codansoft
 * 
 * 
 */

$(document).ready(function(){    
    $("#sendMessageForm").submit(sendMessage);
});

var sendMessage = function (){
    
    // Prevent default posting of form - put here to work in case of errors
    event.preventDefault();
    // Abort any pending request
    //    if (request) {
    //        request.abort();
    //    }
    // setup some local variables
    //    var $form = $(this);
    //    $form.prop("disabled", true);
    
    var sender = $("#messageSender").val();
    var replyTo = $("#messageReplyTo").val();
    var text = $("#message").val();   
    
    var emailMessage = {
        "sender":sender,
        "replyTo":replyTo,
        "message":text
    }
    
    var myJSON = JSON.stringify(emailMessage);
    //window.alert("CODAN " + myJSON);
    
    var posting  = $.post("./assets/php/sendEmail.php", emailMessage, messageSuccess);
    
    posting.fail(messageFail);
    
    // Put the results in a div
    posting.done(function( data ) {
        //var content = $( data ).find( "#content" );
        //alert( "PHP sendEmail Done" );
    });
}

// Callback
var messageSuccess = function (data){
    $("#messageNotify").addClass("alert alert-success");
    $("#messageNotify").html("<strong>Success!</strong> " );
}

var messageFail = function (data){
    $("#messageNotify").addClass("alert alert-danger");
    $("#messageNotify").html("<strong>Error!</strong> " );
}
