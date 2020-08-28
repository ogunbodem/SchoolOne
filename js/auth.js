$(document).ready(function(){
	//var url="http://localhost/phonegap/login/auth.php?callback=?";

	//Registration function
    $("#register").click(function(){
        var card_number = $("#card_number").val();
        var email = $("#email").val();
            var category = $("#category").val();
            var school = $("#school").val();
            var classes = $("#class").val();
            var fname = $("#fname").val();
            var lname = $("#lname").val();
            var phone_number = $("#phone").val();
            var username = $("#username").val();
            var password = $("#password").val();

            var dataString = "phone_number=" + phone_number + "&card_number=" + card_number + "&email=" + email + "&category=" + category + "&school=" + school + "&classes=" + classes + "&fname=" + fname + "&lname=" + lname + "&username=" + username + "&password=" + password + "&register=";
            if ($.trim(phone_number).length > 0 & $.trim(card_number).length > 0 & $.trim(email).length > 0 & $.trim(category).length > 0 & $.trim(fname).length > 0 & $.trim(lname).length > 0 & $.trim(username).length > 0 & $.trim(password).length > 0) {
              $.ajax({
              type: "POST",
              //url: "http://www.alicesons.org/demos/phonegap/schoolone/register.php",
              url: "http://www.alicesons.org/demos/phonegap/schoolone/register.php",
              data: dataString,
              crossDomain: true,
              cache: false,
              beforeSend: function(){ 
                $("#register").html('<img src="img/loader.gif" />');
              },
              success: function(data){
                if (data == "success") {
                  if(!alert("You have successfully registered with us!.")){
                    window.location.reload();
                    
                  }
                } else if (data == "pending") {
                  if(!alert("Sorry your scratch card is not authorized.")){
                    window.location.reload();
                   
                  }
                } else if (data == "exist") {
                  if(!alert("Account is already existing.")){
                    window.location.reload();
                    
                  }
                }else if (data == "unverified") {
                  if(!alert("You are not verified, please contact your school admin.")){
                    window.location.reload();
                    
                  }
                } else if (data == "error") {
                  if(!alert("Their is an error with your registration.")){
                    window.location.reload();
                   
                  }
                }
              },
            });
          }
        return false;
      });

    //Forget Password
    $("#forget_password").click(function(){
      var card_number = $("#card_number").val();
      var email = $("#email").val();
      var dataString="card_number=" + card_number + "email="+email+ "&forget_password=";
      if($.trim(card_number).length>0 & $.trim(email).length>0){
      $.ajax({
        type: "POST",
        url: "http://www.alicesons.org/demos/phonegap/schoolone/forget_password.php",
        data: dataString,
        crossDomain: true,
        cache: false,
        beforeSend: function(){ 
          $("#forget_password").html('<img src="img/loader.gif" />');
        },
        success: function(data){
          if(data=="invalid"){
            alert("Your have not registered with us, please contact administrator");
          }else if(data="success"){
            alert("Please, check your mail an email has been sent to your email address, thanks");
          }else if(data="failed"){
            alert("Email not sent, please contact administrator");
          }
        }
      });
    }return false;
    });
});