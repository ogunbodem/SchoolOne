$(document).ready(function(){
	//var url="http://localhost/phonegap/login/auth.php?callback=?";
    
    //Teacher Login Function
    $("#t_login").click(function(){
    	var t_username = $("#t_username").val();
        var t_password = $("#t_password").val();
        var tloginString = "t_username="+t_username+"&t_password="+t_password+"&t_login=";
    	if($.trim(t_username).length>0 & $.trim(t_password).length>0){
			$.ajax({
				type: "POST",
				//url: "http://www.alicesons.org/demos/phonegap/schoolone/t_login.php",
				url: "http://www.alicesons.org/demos/phonegap/schoolone/t_login.php",
				data: tloginString,
				crossDomain: true,
				cache: false,
				dataType: "html",
				beforeSend: function(){ 
					$("#t_login").html('<img src="img/loader.gif" />');
				},
				success: function(data){
					var len = data.length;
					if(data & len > 0){
						//var cardNumber;
						var teacherName = data[0]['teacherName'];
                		var teacherCardNumber = data[0]['teacherCardNumber'];
                		var teacherCategory = data[0]['teacherCategory'];
                		var teacherToken = data[0]['teacherToken'];

						localStorage.t_login = "true";
						localStorage.teacherName = data[0]['teacherName'];
						localStorage.teacherCardNumber = data[0]['teacherCardNumber'];
						localStorage.teacherCategory = data[0]['teacherCategory'];
						localStorage.teacherToken = data[0]['teacherToken'];
						localStorage.t_username = t_username;
						window.location.href = "t_dashboard.html";
					}else if(data=="failed"){
						if(!alert("Login Failed..!")){
                    		window.location.reload();
                  		}
					}
				}
			});
		}return false;
    });

     //Student Login Function
    $("#s_login").click(function(){
    	var s_username = $("#s_username").val();
        var s_password = $("#s_password").val();
        var sloginString = "s_username="+s_username+"&s_password="+s_password+"&s_login=";
    	if($.trim(s_username).length>0 & $.trim(s_password).length>0){
			$.ajax({
				type: "POST",
				url: "http://www.alicesons.org/demos/phonegap/schoolone/s_login.php",
				data: sloginString,
				crossDomain: true,
				cache: false,
				beforeSend: function(){ 
					$("#s_login").html('<img src="img/loader.gif" />');
				},
				success: function(data){
					if(data=="success"){
						localStorage.s_login="true";
						localStorage.s_username=s_username;
						window.location.href = "s_dashboard.html";
					}else if(data="failed"){
						alert("Login Failed..!");
						$("#status").text("Login Failed..!");
					}
				}
			});
		}return false;
    });

     //Parent Login Function
    $("#p_login").click(function(){
    	var p_username = $("#p_username").val();
        var p_password = $("#p_password").val();
        var ploginString = "p_username="+p_username+"&p_password="+p_password+"&p_login=";
    	if($.trim(p_username).length>0 & $.trim(p_password).length>0){
			$.ajax({
				type: "POST",
				url: "http://www.alicesons.org/demos/phonegap/schoolone/p_login.php",
				data: ploginString,
				crossDomain: true,
				cache: false,
				beforeSend: function(){ 
					$("#p_login").html('<img src="img/loader.gif" />');
				},
				success: function(data){
					if(data=="success"){
						localStorage.p_login="true";
						localStorage.p_username=p_username;
						window.location.href = "p_dashboard.html";
					}else if(data="failed"){
						alert("Login Failed..!");
						$("#status").text("Login Failed..!");
					}
				}
			});
		}return false;
    });

    //Registration function
    $("#register").click(function(){
    	var card_number = $("#card_number").val();
        var email = $("#email").val();
        var category = $("#category").val();
        var fname = $("#fname").val();
        var lname = $("#lname").val();
        var username = $("#username").val();
        var password = $("#password").val();

    	var dataString = "card_number=" + card_number + "&email=" + email + "&category=" + category + "&fname=" + fname + "&lname=" + lname + "&username=" + username + "&password=" + password + "&register=";
        if ($.trim(card_number).length > 0 & $.trim(email).length > 0 & $.trim(category).length > 0 & $.trim(fname).length > 0 & $.trim(lname).length > 0 & $.trim(username).length > 0 & $.trim(password).length > 0) {
			$.ajax({
				type: "POST",
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
                	} else if (data == "error") {
                  		if(!alert("Their is an error with your registration.")){
                    		window.location.reload();
                  		}
                	}
				}
			});
		}return false;

    });
    
    //Change Password
    $("#change_password").click(function(){
    	var email=localStorage.email;
    	var old_password=$("#old_password").val();
    	var new_password=$("#new_password").val();
    	var dataString="old_password="+old_password+"&new_password="+new_password+"&email="+email+"&change_password=";
    	if($.trim(old_password).length>0 & $.trim(old_password).length>0)
		{
			$.ajax({
				type: "POST",
				url: url,
				data: dataString,
				crossDomain: true,
				cache: false,
				beforeSend: function(){ $("#change_password").val('Connecting...');},
				success: function(data){
					if(data=="incorrect")
					{
						alert("Your old password is incorrect");
					}
					else if(data="success")
					{
						alert("Password Changed successfully");
					}
					else if(data="failed")
					{
						alert("Something Went wrong");
					}
				}
			});
		}return false;

    });

    


    //logout function
    $("#t_logout").click(function(){
    	localStorage.t_login="false";
    	window.location.href = "login.html";
    });
    $("#s_logout").click(function(){
    	localStorage.s_login="false";
    	window.location.href = "login.html";
    });
    $("#p_logout").click(function(){
    	localStorage.p_login="false";
    	window.location.href = "login.html";
    });

    //Displaying user email on home page
    //var new_teacher_info = localStorage.t_username;
    $("#username_t").html(localStorage.t_username);
    $("#cardNumber").html(localStorage.teacherCardNumber);
    $("#tName").html(localStorage.teacherName);
    $("#tCategory").html(localStorage.teacherCategory);
    $("#tToken").html(localStorage.teacherToken);
    //var imageHash_t="http://www.gravatar.com/avatar/"+md5(localStorage.t_username);
    //$("#profilepic_t").attr('src',imageHash_t);
    


     //Displaying user email on home page
    $("#username_s").html(localStorage.s_username);
    var imageHash_s="http://www.gravatar.com/avatar/"+md5(localStorage.s_username);
    $("#profilepic_s").attr('src',imageHash_s);
     //Displaying user email on home page
    $("#username_p").html(localStorage.p_username);
    var imageHash_p="http://www.gravatar.com/avatar/"+md5(localStorage.p_username);
    $("#profilepic_p").attr('src',imageHash_p);
});