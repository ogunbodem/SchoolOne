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

    //Registration function
    $("#set_question").click(function(){
        var teacherNo = $("#teacher_no").val();
        var classPop = $("#class_pop").val();
        var subjectPop = $("#subject_pop").val();
        var question = $("#question").val();
        var optionA = $("#option_a").val();
        var optionB = $("#option_b").val();
        var optionC = $("#option_c").val();
        var optionD = $("#option_d").val();
        var optionE = $("#option_e").val();
        var times = $("#time").val();
        var markes = $("#mark").val();
        var correctAns = $("#correct_ans").val();

        var dataString = "teacherNo=" + teacherNo + "&classPop=" + classPop + "&subjectPop=" + subjectPop + "&question=" + question + "&optionA=" + optionA + "&optionB=" + optionB + "&optionC=" + optionC + "&optionD=" + optionD + "&optionE=" + optionE + "&times=" + times + "&markes=" + markes + "&correctAns=" + correctAns + "&new_question=";
        if ($.trim(teacherNo).length > 0 & $.trim(classPop).length > 0 & $.trim(subjectPop).length > 0 & $.trim(question).length > 0 & $.trim(optionA).length > 0 & $.trim(optionB).length > 0 & $.trim(optionC).length > 0 & $.trim(optionD).length > 0 & $.trim(optionE).length > 0 & $.trim(times).length > 0 & $.trim(markes).length > 0 & $.trim(correctAns).length > 0) {
            $.ajax({
                type: "POST",
                //url: "http://www.alicesons.org/demos/phonegap/schoolone/register.php",
                url: "http://www.alicesons.org/demos/phonegap/schoolone/save_set_questions.php",
                data: dataString,
                crossDomain: true,
                cache: false,
                beforeSend: function(){ 
                    $("#set_question").html('<img src="img/loader.gif" />');
                },
              success: function(data){
                if (data == "success") {
                    if(!alert("You have successfully setup questions for ["+ classPop +"] class !.")){
                        window.location.reload();
                        $("#teacher_no").val("");
                        $("#class_pop").val("");
                        $("#subject_pop").val("");
                        $("#question").val("");
                        $("#option_a").val("");
                        $("#option_b").val("");
                        $("#option_c").val("");
                        $("#option_d").val("");
                        $("#option_e").val("");
                        $("#time").val("");
                        $("#mark").val("");
                        $("#correct_ans").val("");
                    }
                } else if (data == "exist") {
                    if(!alert("[" + question + "] already existing.")){
                        window.location.reload();
                        $("#teacher_no").val("");
                        $("#class_pop").val("");
                        $("#subject_pop").val("");
                        $("#question").val("");
                        $("#option_a").val("");
                        $("#option_b").val("");
                        $("#option_c").val("");
                        $("#option_d").val("");
                        $("#option_e").val("");
                        $("#time").val("");
                        $("#mark").val("");
                        $("#correct_ans").val("");
                    }
                } else if (data == "error") {
                    if(!alert("Their is an error setting up this "+ question +" for you.")){
                        window.location.reload();
                        $("#teacher_no").val("");
                        $("#class_pop").val("");
                        $("#subject_pop").val("");
                        $("#question").val("");
                        $("#option_a").val("");
                        $("#option_b").val("");
                        $("#option_c").val("");
                        $("#option_d").val("");
                        $("#option_e").val("");
                        $("#time").val("");
                        $("#mark").val("");
                        $("#correct_ans").val("");                   
                    }
                }
              },
            });
          }
        return false;
      });

    //Assignment function
    $("#set_assignment").click(function(){
        var teacherNo = $("#teacher_no").val();
        var school_name = $("#school_name").val();
        var classPop = $("#class_pop").val();
        var subjectPop = $("#subject_pop").val();
        var assignment_topic = $("#assignment_topic").val();
        var assignment_text = $("#assignment_text").val();

        var dataString = "teacherNo=" + teacherNo + "&school_name=" + school_name + "&classPop=" + classPop + "&subjectPop=" + subjectPop + "&assignment_topic=" + assignment_topic + "&assignment_text=" + assignment_text + "&new_assignment=";
        if ($.trim(teacherNo).length > 0 & $.trim(school_name).length > 0 & $.trim(classPop).length > 0 & $.trim(subjectPop).length > 0 & $.trim(assignment_topic).length > 0) {
            $.ajax({
                type: "POST",
                //url: "http://www.alicesons.org/demos/phonegap/schoolone/register.php",
                url: "http://www.alicesons.org/demos/phonegap/schoolone/save_set_assignment.php",
                data: dataString,
                crossDomain: true,
                cache: false,
                beforeSend: function(){ 
                    $("#set_assignment").html('<img src="img/loader.gif" />');
                },
              success: function(data){
                if (data == "success") {
                    if(!alert("You have successfully setup assignment for ["+ classPop +"] class !.")){
                        window.location.reload();
                        $("#teacher_no").val("");
                        $("#class_pop").val("");
                        $("#subject_pop").val("");
                        $("#assignment_topic").val("");
                        $("#assignment_text").val("");
                    }
                } else if (data == "error") {
                    if(!alert("Their is an error setting up this "+ assignment_topic +" for you.")){
                        window.location.reload();
                        $("#teacher_no").val("");
                        $("#class_pop").val("");
                        $("#subject_pop").val("");
                        $("#assignment_topic").val("");
                        $("#assignment_text").val("");                 
                    }
                }
              },
            });
          }
        return false;
      });

    //Notes function 
    $("#set_notes").click(function(){
        var teacherNo = $("#teacher_no").val();
        var school_name = $("#school_name").val();
        var classPop = $("#class_pop").val();
        var subjectPop = $("#subject_pop").val();
        var noteTopic = $("#note_topic").val();
        var notes = $("#notes").val();
       
        var dataString = "teacherNo=" + teacherNo + "&school_name=" + school_name + "&classPop=" + classPop + "&subjectPop=" + subjectPop + "&noteTopic=" + noteTopic + "&notes=" + notes + "&new_notes=";
        if ($.trim(teacherNo).length > 0 & $.trim(school_name).length > 0 & $.trim(classPop).length > 0 & $.trim(subjectPop).length > 0 & $.trim(noteTopic).length > 0) {
            $.ajax({
                type: "POST",
                //url: "http://www.alicesons.org/demos/phonegap/schoolone/register.php",
                url: "http://www.alicesons.org/demos/phonegap/schoolone/save_set_notes.php",
                data: dataString,
                crossDomain: true,
                cache: false,
                beforeSend: function(){ 
                    $("#set_notes").html('<img src="img/loader.gif" />');
                },
              success: function(data){
                if (data == "success") {
                    if(!alert("You have successfully setup note for ["+ classPop +"] class !.")){
                        window.location.reload();
                        $("#teacher_no").val("");
                        $("#class_pop").val("");
                        $("#subject_pop").val("");
                        $("#note_topic").val("");
                        $("#notes").val("");
                    }
                } else if (data == "error") {
                    if(!alert("Their is an error setting up this note for you.")){
                        window.location.reload();
                        $("#teacher_no").val("");
                        $("#class_pop").val("");
                        $("#subject_pop").val("");
                        $("#note_topic").val("");
                        $("#notes").val("");                
                    }
                }
              },
            });
          }
        return false;
      });

    //Set Class function
    $("#set_class").click(function(){
        var t_classes = $("#class").val();
        var teacher_no = $("#teacher_no").val();
        
        var dataString = "teacher_class=" + t_classes + "&teacher_no=" + teacher_no + "&set_classes=";
        if ($.trim(t_classes).length > 0 & $.trim(teacher_no).length > 0 ) {
            $.ajax({
                type: "POST",
                //url: "http://www.alicesons.org/demos/phonegap/schoolone/register.php",
                url: "http://www.alicesons.org/demos/phonegap/schoolone/t_set_class.php",
                data: dataString,
                crossDomain: true,
                cache: false,
                beforeSend: function(){ 
                    $("#set_class").html('<img src="img/loader.gif" />');
                },
                success: function(data){
                    if (data == "success") {
                        if(!alert("You have successfully setup your class!.")){
                            window.location.reload();
                            $("#class").val("");
                            $("#teacher_no").val("");
                        }
                    } else if (data == "error") {
                        if(!alert("Their is an error setting up your class.")){
                            window.location.reload();
                            $("#class").val("");
                            $("#teacher_no").val("");
                        }
                    }
                },
            });
          }
        return false;
      });

    //Set Subject function
    $("#set_subject").click(function(){
        var t_subjects = $("#subject_pop").val();
        var teacher_no = $("#teacher_no").val();
        
        var dataString = "teacher_subjects=" + t_subjects + "&teacher_no=" + teacher_no + "&set_subjects=";
        if ($.trim(t_subjects).length > 0 & $.trim(teacher_no).length > 0 ) {
            $.ajax({
                type: "POST",
                //url: "http://www.alicesons.org/demos/phonegap/schoolone/register.php",
                url: "http://www.alicesons.org/demos/phonegap/schoolone/t_set_subject.php",
                data: dataString,
                crossDomain: true,
                cache: false,
                beforeSend: function(){ 
                    $("#set_subject").html('<img src="img/loader.gif" />');
                },
                success: function(data){
                    if (data == "success") {
                        if(!alert("You have successfully setup your subject!.")){
                            window.location.reload();
                            $("#subject").val("");
                            $("#teacher_no").val("");
                        }
                    } else if (data == "error") {
                        if(!alert("Their is an error setting up your subject.")){
                            window.location.reload();
                            $("#subject").val("");
                            $("#teacher_no").val("");
                        }
                    }
                },
            });
          }
        return false;
      });

     //SA Change Password
    $("#t_change_password").click(function(){
        var t_specialnumber = $("#t_special_number").val();
        var new_password = $("#new_pass").val();
        var confirm_password = $("#confirm_pass").val();
        var dataString="new_password=" +new_password + "&confirm_password=" + confirm_password + "&t_specialnumber=" + t_specialnumber + "&t_change_password=";
        if($.trim(new_password).length>0 & $.trim(confirm_password).length>0){
            $.ajax({
                type: "POST",
                //url: "http://www.alicesons.org/demos/phonegap/schoolone/register.php",
                url: "http://www.alicesons.org/demos/phonegap/schoolone/change_password.php",
                data: dataString,
                crossDomain: true,
                cache: false,
                beforeSend: function(){ 
                    $("#t_change_password").html('<img src="img/loader.gif" />');
                },
                success: function(data){
                    if(data=="incorrect"){
                        if(!alert("there is no account with such credentials!.")){
                            window.location.reload();
                            $("#new_pass").val("");
                            $("#confirm_pass").val("");
                        }
                    }else if(data="success"){
                        if(!alert("Password Changed successfully, You will be logged out to re-sign in with your new password.")){
                            window.location.reload();
                            $("#new_pass").val("");
                            $("#confirm_pass").val("");
                            localStorage.t_login="false";
                            window.location.href = "login.html";
                            localStorage.clear();
                        }
                    }else if(data="error"){
                        if(!alert("Password cannot be change because of error in query")){
                            window.location.reload();
                            $("#new_pass").val("");
                            $("#confirm_pass").val("");
                        }
                    }else if(data="match"){
                        if(!alert("The two passwords do not match")){
                            window.location.reload();
                            $("#new_pass").val("");
                            $("#confirm_pass").val("");
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