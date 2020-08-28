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
				url: "http://www.alicesons.org/demos/phonegap/schoolone/login.php",
				data: tloginString,
				crossDomain: true, 
				cache: false,
				dataType: "json",
				beforeSend: function(){ 
					$("#t_login").html('<img src="img/loader.gif" />');
				},
				success: function(data){
					if(data){
						//var cardNumber;
						var teacherName = data[0]['teacherName'];
                		var teacherSpecialID = data[0]['teacherSpecialID'];
                		var teacherCategory = data[0]['teacherCategory'];
                		var teacherToken = data[0]['teacherToken'];

						localStorage.t_login = "true";
						localStorage.teacherName = teacherName;
						localStorage.teacherSpecialID = teacherSpecialID;
						localStorage.teacherCategory = teacherCategory;
						localStorage.teacherToken = teacherToken;
						localStorage.t_username = t_username;
						window.location.href = "t_dashboard.html";
					}else if(data=="failed"){
						if(!alert("Login Failed..!")){
                    		window.location.reload();
                    		$("#t_username").val("");
        					$("#t_password").val("");
                  		}
					}
				}
			});
		}return false;
    });

    //Displaying teacher details on teacher dashboard page
    $("#username_t").html(localStorage.t_username);
    $("#tCardNumber").html(localStorage.teacherSpecialID);
    $("#tName").html(localStorage.teacherName);
    $("#tCategory").html(localStorage.teacherCategory);
    $("#tToken").html(localStorage.teacherToken);
    //var imageHash_t="http://www.gravatar.com/avatar/"+md5(localStorage.t_username);
    //$("#profilepic_t").attr('src',imageHash_t);

    //logout function
    $("#t_logout").click(function(){
        var teacherNumber = localStorage.teacherSpecialID;
        $.ajax({type:"POST",url:"http://www.alicesons.org/demos/phonegap/schoolone/logout.php",data:{t_logout:1,teacherNumber:teacherNumber}});
        if(confirm("you are about to log out now?")){
            localStorage.t_login="false";
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