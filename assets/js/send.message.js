/* 
 * Codansoft
 * 
 * 
 */

$(document).ready(function(){    
    $("#sendMessageForm").submit(sendMessage);
});

var sendMessage = function (event){
    
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
    
    //var emailJSON = JSON.stringify(emailMessage);
    
    var posting  = $.post("./assets/php/sendEmail.php", emailMessage);
    
    posting.done(requestDone);
    posting.fail(requestFail);
}

// Callbacks
var requestDone = function (data){
    if(data.valueOf() === "success"){
        alertSuccess("Wiadomość została wysłana");
    }else{
        alertFail(data.valueOf());
    }
}

var requestFail = function (data){
    alertFail(data.valueOf());
}

function alertSuccess(text){
    $("#messageNotify").addClass("alert alert-success");
    $("#messageNotify").html("<strong>Success!</strong> "  );
    $("#messageNotify").append(text);
}

function alertFail(text){
    $("#messageNotify").addClass("alert alert-danger");
    $("#messageNotify").html("<strong>Error!</strong> "  );
    $("#messageNotify").append(text);
}