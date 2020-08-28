$(document).ready(function(){
	//var url="http://localhost/phonegap/login/auth.php?callback=?";

    //parent Login Function
    $("#p_login").click(function(){
    	var p_username = $("#p_username").val();
        var p_password = $("#p_password").val();
        var ploginString = "p_username="+p_username+"&p_password="+p_password+"&p_login=";
    	if($.trim(p_username).length>0 & $.trim(p_password).length>0){
			$.ajax({
				type: "POST",
				//url: "http://www.alicesons.org/demos/phonegap/schoolone/t_login.php",
				url: "http://www.alicesons.org/demos/phonegap/schoolone/login.php",
				data: ploginString,
				crossDomain: true,
				cache: false,
				dataType: "json",
				beforeSend: function(){ 
					$("#p_login").html('<img src="img/loader.gif" />');
				},
				success: function(data){
					if(data){
						//var cardNumber;
                       
						var parentName = data[0]['parentName'];
                		var parentCategory = data[0]['parentCategory'];
                		var parentToken = data[0]['parentToken'];
                        var parentSpecialID = data[0]['parentSpecialID'];

						localStorage.p_login = "true";
						localStorage.parentName = parentName;
						localStorage.parentCategory = parentCategory;
						localStorage.parentToken = parentToken;
                        localStorage.parentSpecialID = parentSpecialID;
						localStorage.p_username = p_username;
						window.location.href = "p_dashboard.html";
					}else if(data=="failed"){
						if(!alert("Login Failed..!")){
                    		window.location.reload();
                    		$("#p_username").val("");
        					$("#p_password").val("");
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
    $("#username_p").html(localStorage.p_username);
    $("#pName").html(localStorage.parentName);
    $("#pCategory").html(localStorage.parentCategory);
    $("#pToken").html(localStorage.parentToken);
    $("#pSpecialID").html(localStorage.parentSpecialID);
    //var imageHash_s="http://www.gravatar.com/avatar/"+md5(localStorage.p_username);
    //$("#profilepic_s").attr('src',imageHash_s);

    //logout function
    $("#p_logout").click(function(){
        var parentNumber = localStorage.parentSpecialID;
        $.ajax({type:"POST",url:"http://www.alicesons.org/demos/phonegap/schoolone/logout.php",data:{p_logout:1,parentNumber:parentNumber}});
        if(confirm("You are about to log out now?")){
            localStorage.p_login="false";
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