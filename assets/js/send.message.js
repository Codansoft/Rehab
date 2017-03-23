/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * 
 * 
    $(this).hide() - hides the current element.
    $("p").hide() - hides all <p> elements.
    $(".test").hide() - hides all elements with class="test".
 */

$(document).ready(function(){
    //$("#sendmessage").click(sendMessage);
    sendMessageForm
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
    window.alert("CODAN " + myJSON);
    
    
    var posting  = $.post("./assets/php/sendEmail.php", emailMessage, messageSuccess);
    
    // Put the results in a div
    posting.done(function( data ) {
        //var content = $( data ).find( "#content" );
        alert( "PHP sendEmail Done" );
    });
  
    posting.fail(messageFail);
}

// Callback
var messageSuccess = function (){
    alert( "PHP sendEmail Success" );
}

var messageFail = function (){
    alert( "PHP sendEmail Fail" );
}
