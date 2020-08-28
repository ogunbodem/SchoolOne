$(document).ready(function(){
	//var url="http://localhost/phonegap/login/auth.php?callback=?";

    //Student Login Function
    $("#s_login").click(function(){
    	var s_username = $("#s_username").val();
        var s_password = $("#s_password").val();
        var sloginString = "s_username="+s_username+"&s_password="+s_password+"&s_login=";
    	if($.trim(s_username).length>0 & $.trim(s_password).length>0){
			$.ajax({
				type: "POST",
				//url: "http://www.alicesons.org/demos/phonegap/schoolone/t_login.php",
				url: "http://www.alicesons.org/demos/phonegap/schoolone/login.php",
				data: sloginString,
				crossDomain: true,
				cache: false,
				dataType: "json",
				beforeSend: function(){ 
					$("#s_login").html('<img src="img/loader.gif" />');
				},
				success: function(data){
					if(data){
						//var cardNumber;
                       
						var studentName = data[0]['studentName'];
                		var studentCardNumber = data[0]['studentCardNumber'];
                		var studentCategory = data[0]['studentCategory'];
                		var studentToken = data[0]['studentToken'];
                        var studentSpecialID = data[0]['studentSpecialID'];

						localStorage.s_login = "true";
						localStorage.studentName = studentName;
						localStorage.studentCardNumber = studentCardNumber;
						localStorage.studentCategory = studentCategory;
						localStorage.studentToken = studentToken;
                        localStorage.studentSpecialID = studentSpecialID;
						localStorage.s_username = s_username;
						window.location.href = "s_dashboard.html";
					}else if(data=="failed"){
						if(!alert("Login Failed..!")){
                    		window.location.reload();
                    		$("#s_username").val("");
        					$("#s_password").val("");
                  		}
					}
				}
			});
		}return false;
    });   

    //$("#message_id").click(function(){
        //var msg_id = $("#msgid").val();

    //});

     //Displaying user email on home page
    $("#username_s").html(localStorage.s_username);
    $("#sCardNumber").html(localStorage.studentCardNumber);
    $("#sName").html(localStorage.studentName);
    $("#sCategory").html(localStorage.studentCategory);
    $("#sToken").html(localStorage.studentToken);
    $("#sSpecialID").html(localStorage.studentSpecialID);
    //var imageHash_s="http://www.gravatar.com/avatar/"+md5(localStorage.s_username);
    //$("#profilepic_s").attr('src',imageHash_s);

    //logout function
    $("#s_logout").click(function(){
        var studentNumber = localStorage.studentCardNumber;
        $.ajax({type:"POST",url:"http://www.alicesons.org/demos/phonegap/schoolone/logout.php",data:{s_logout:1,studentNumber:studentNumber}});
        if(confirm("You are about to log out now?")){
            localStorage.s_login="false";
            window.location.href = "login.html";
            localStorage.clear();
        }   
    }); 
});


function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("main").style.marginLeft = "180px";
}

function w3_close() {
   	document.getElementById("mySidebar").style.display = "none";
    document.getElementById("main").style.marginLeft = "0"; 
}