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

    //Administrator Login Function
    $("#a_login").click(function(){
    	var a_username = $("#a_username").val();
        var a_password = $("#a_password").val();
        var aloginString = "a_username="+a_username+"&a_password="+a_password+"&a_login=";
    	if($.trim(a_username).length>0 & $.trim(a_password).length>0){
			$.ajax({
				type: "POST",
				//url: "http://www.alicesons.org/demos/phonegap/schoolone/t_login.php",
				url: "http://www.alicesons.org/demos/phonegap/schoolone/login.php",
				data: aloginString,
				crossDomain: true,
				cache: false,
				dataType: "json",
				beforeSend: function(){ 
					$("#a_login").html('<img src="img/loader.gif" />');
				},
				success: function(data){
					if(data){
						//var cardNumber;
						var adminName = data[0]['adminName'];
                		var adminSpecialNumber = data[0]['adminSpecialNumber'];
                		var adminType = data[0]['adminType'];

						localStorage.a_login = "true";
						localStorage.adminName = adminName;
						localStorage.adminSpecialNumber = adminSpecialNumber;
						localStorage.adminType = adminType;
						localStorage.a_username = a_username;
						window.location.href = "dashboard.html";
					}else if(data=="failed"){
						if(!alert("Login Failed..!")){
                    		window.location.reload();
                    		$("#a_username").val("");
        					$("#a_password").val("");
                  		}
					}
				}
			});
		}return false;
    });

    //Users Login Function
    $("#u_login").click(function(){
    	var u_username = $("#a_username").val();
        var u_password = $("#u_password").val();
        var uloginString = "u_username="+u_username+"&u_password="+u_password+"&u_login=";
    	if($.trim(u_username).length>0 & $.trim(u_password).length>0){
			$.ajax({
				type: "POST",
				//url: "http://www.alicesons.org/demos/phonegap/schoolone/t_login.php",
				url: "http://www.alicesons.org/demos/phonegap/schoolone/login.php",
				data: uloginString,
				crossDomain: true,
				cache: false,
				dataType: "json",
				beforeSend: function(){ 
					$("#u_login").html('<img src="img/loader.gif" />');
				},
				success: function(data){
					if(data){
						//var cardNumber;
						var userName = data[0]['userName'];
                		var userSpecialNumber = data[0]['userSpecialNumber'];
                		var userType = data[0]['userType'];

						localStorage.u_login = "true";
						localStorage.userName = userName;
						localStorage.userSpecialNumber = userSpecialNumber;
						localStorage.userType = userType;
						localStorage.u_username = u_username;
						window.location.href = "u_dashboard.html";
					}else if(data=="failed"){
						if(!alert("Login Failed..!")){
                    		window.location.reload();
                    		$("#u_username").val("");
        					$("#u_password").val("");
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

						localStorage.s_login = "true";
						localStorage.studentName = studentName;
						localStorage.studentCardNumber = studentCardNumber;
						localStorage.studentCategory = studentCategory;
						localStorage.studentToken = studentToken;
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

     //Parent Login Function
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
                		var parentCardNumber = data[0]['parentCardNumber'];
                		var parentCategory = data[0]['parentCategory'];
                		var parentToken = data[0]['parentToken'];

						localStorage.p_login = "true";
						localStorage.parentName = parentName;
						localStorage.parentCardNumber = parentCardNumber;
						localStorage.parentCategory = parentCategory;
						localStorage.parentToken = parentToken;
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

   

    //User Registration function
    $("#save_user").click(function(){
    	var user = $("#user").val();
        var pass = $("#pass").val();
        var type = $("#type").val();
        var role = $("#role").val();       
        var fname = $("#fname").val();
        var lname = $("#lname").val();
        var email = $("#email").val();
        
    	var dataString = "type=" + type + "&email=" + email + "&role=" + role + "&fname=" + fname + "&lname=" + lname + "&user=" + user + "&pass=" + pass + "&new_user=";
        if ($.trim(type).length > 0 & $.trim(email).length > 0 & $.trim(role).length > 0 & $.trim(fname).length > 0 & $.trim(lname).length > 0 & $.trim(user).length > 0 & $.trim(pass).length > 0) {
			$.ajax({
				type: "POST",
				//url: "http://www.alicesons.org/demos/phonegap/schoolone/register.php",
				url: "http://www.alicesons.org/demos/phonegap/schoolone/save_user.php",
				data: dataString,
				crossDomain: true,
				cache: false,
				beforeSend: function(){ 
					$("#save_user").html('<img src="img/loader.gif" />');
				},
				success: function(data){
					if (data == "success") {
                  		if(!alert("New user have just been created successfully!.")){
                    		window.location.reload();
                    		$("#user").val("");
					        $("#pass").val("");
					        $("#type").val("");
					        $("#role").val("");       
					        $("#fname").val("");
					        $("#lname").val("");
					        $("#email").val("");
                  		}
                	} else if (data == "exist") {
                  		if(!alert("User already existing.")){
                    		window.location.reload();
                    		$("#user").val("");
					        $("#pass").val("");
					        $("#type").val("");
					        $("#role").val("");       
					        $("#fname").val("");
					        $("#lname").val("");
					        $("#email").val("");
                  		}
                	} else if (data == "error") {
                  		if(!alert("User cannot be setup.")){
                    		window.location.reload();
                    		$("#user").val("");
					        $("#pass").val("");
					        $("#type").val("");
					        $("#role").val("");       
					        $("#fname").val("");
					        $("#lname").val("");
					        $("#email").val("");
                  		}
                	}
				}
			});
		}return false;

    });

    //Institution Registration function
    $("#save_institution").click(function(){
    	var ins_category = $("#institution_category").val();
        var ins_name = $("#institution_name").val();
        var ins_contact_name = $("#institution_contact_name").val();
        var ins_contact_phone = $("#institution_contact_phone").val();       
        var ins_email = $("#institution_email").val();
        var ins_address = $("#institution_address").val();
       
    	var dataString = "ins_category=" + ins_category + "&ins_name=" + ins_name + "&ins_contact_name=" + ins_contact_name + "&ins_contact_phone=" + ins_contact_phone + "&ins_email=" + ins_email + "&ins_address=" + ins_address + "&new_institution=";
        if ($.trim(ins_category).length > 0 & $.trim(ins_name).length > 0 & $.trim(ins_contact_name).length > 0 & $.trim(ins_contact_phone).length > 0 & $.trim(ins_email).length > 0 & $.trim(ins_address).length > 0) {
			$.ajax({
				type: "POST",
				//url: "http://www.alicesons.org/demos/phonegap/schoolone/register.php",
				url: "http://www.alicesons.org/demos/phonegap/schoolone/save_institution.php",
				data: dataString,
				crossDomain: true,
				cache: false,
				beforeSend: function(){ 
					$("#save_institution").html('<img src="img/loader.gif" />');
				},
				success: function(data){
					if (data == "success") {
                  		if(!alert("New institution have just been created successfully!.")){
                    		window.location.reload();
                    		$("#institution_category").val("");
					        $("#institution_name").val("");
					        $("#institution_contact_name").val("");
					        $("#institution_contact_phone").val("");       
					        $("#institution_email").val("");
					        $("#institution_address").val("");
                  		}
                	} else if (data == "exist") {
                  		if(!alert("Institution already existing.")){
                    		window.location.reload();
                    		$("#institution_category").val("");
					        $("#institution_name").val("");
					        $("#institution_contact_name").val("");
					        $("#institution_contact_phone").val("");       
					        $("#institution_email").val("");
					        $("#institution_address").val("");
                  		}
                	} else if (data == "error") {
                  		if(!alert("Institution cannot be setup.")){
                    		window.location.reload();
                    		$("#institution_category").val("");
					        $("#institution_name").val("");
					        $("#institution_contact_name").val("");
					        $("#institution_contact_phone").val("");       
					        $("#institution_email").val("");
					        $("#institution_address").val("");
                  		}
                	}
				}
			});
		}return false;

    });

   	//Department Registration function
    $("#save_department").click(function(){
        var dep_name = $("#department_name").val();
              
    	var dataString ="&dep_name=" + dep_name + "&new_department=";
        if ($.trim(dep_name).length > 0) {
			$.ajax({
				type: "POST",
				//url: "http://www.alicesons.org/demos/phonegap/schoolone/register.php",
				url: "http://www.alicesons.org/demos/phonegap/schoolone/save_department.php",
				data: dataString,
				crossDomain: true,
				cache: false,
				beforeSend: function(){ 
					$("#save_department").html('<img src="img/loader.gif" />');
				},
				success: function(data){
					if (data == "success") {
                  		if(!alert("New department have just been created successfully!.")){
                    		window.location.reload();
                    		$("#department_name").val("");
                  		}
                	} else if (data == "exist") {
                  		if(!alert("Department already existing.")){
                    		window.location.reload();
                    		$("#department_name").val("");
                  		}
                	} else if (data == "error") {
                  		if(!alert("Department cannot be setup.")){
                    		window.location.reload();
                    		$("#department_name").val("");
                  		}
                	}
				}
			});
		}return false;
    });

    //Employee Registration function
    $("#save_employee").click(function(){
    	var emp_special_id = $("#sa_special_number").val();
        var emp_type = $("#employee_type").val();
        var emp_fname = $("#employee_fname").val();
        var emp_lname = $("#employee_lname").val();
        var emp_gender = $("#employee_gender").val();
        var emp_dob = $("#employee_dob").val();
        var emp_employment_date = $("#employee_employment_date").val();
        var emp_department = $("#select_option").val();
        var emp_reporting_manager = $("#select_option2").val();
        var emp_position = $("#select_option3").val();
        var emp_pob = $("#employee_pob").val();
        var emp_marital_status = $("#employee_marital_status").val();
        var emp_religion = $("#employee_religion").val();
        var emp_address = $("#employee_address").val();
        var emp_country = $("#employee_country").val();
        var emp_state = $("#select_option4").val();
        var emp_email = $("#employee_email").val();
        var emp_mobile1 = $("#employee_mobile1").val();
        var emp_mobile2 = $("#employee_mobile2").val();
              
    	var dataString = "&special_id=" + emp_special_id + "&type=" + emp_type + "&fname=" + emp_fname + "&lname=" + emp_lname + "&gender=" + emp_gender + "&dob=" + emp_dob + "&employment_date=" + emp_employment_date + "&department=" + emp_department + "&reporting_manager=" + emp_reporting_manager + "&position=" + emp_position + "&pob=" + emp_pob + "&marital_status=" + emp_marital_status + "&religion=" + emp_religion + "&address=" + emp_address + "&country=" + emp_country + "&states=" + emp_state + "&email=" + emp_email + "&mobile1=" + emp_mobile1 + "&mobile2=" + emp_mobile2 + "&new_employee=";
        if ($.trim(emp_special_id).length > 0 & $.trim(emp_type).length > 0 & $.trim(emp_fname).length > 0 & $.trim(emp_lname).length > 0 & $.trim(emp_gender).length > 0 & $.trim(emp_dob).length > 0 & $.trim(emp_employment_date).length > 0 & $.trim(emp_department).length > 0 & $.trim(emp_position).length > 0 & $.trim(emp_pob).length > 0 & $.trim(emp_marital_status).length > 0 & $.trim(emp_religion).length > 0 & $.trim(emp_address).length > 0 & $.trim(emp_country).length > 0 & $.trim(emp_state).length > 0 & $.trim(emp_email).length > 0 & $.trim(emp_mobile1).length > 0 & $.trim(emp_mobile2).length > 0) {
			$.ajax({
				type: "POST",
				//url: "http://www.alicesons.org/demos/phonegap/schoolone/register.php",
				url: "http://www.alicesons.org/demos/phonegap/schoolone/save_employee.php",
				data: dataString,
				crossDomain: true,
				cache: false,
				beforeSend: function(){ 
					$("#save_employee").html('<img src="img/loader.gif" />');
				},
				success: function(data){
					if (data == "success") {
                  		if(!alert("New employee have just been created successfully!.")){
                    		window.location.reload();
                    		$("#employee_type").val("");
							$("#employee_fname").val("");
							$("#employee_lname").val("");
							$("#employee_gender").val("");
							$("#employee_dob").val("");
							$("#employee_employment_date").val("");
							$("#select_option").val("");
							$("#select_option2").val("");
							$("#select_option3").val("");
							$("#employee_pob").val("");
							$("#employee_marital_status").val("");
							$("#employee_religion").val("");
							$("#employee_address").val("");
							$("#employee_country").val("");
							$("#select_option4").val("");
							$("#employee_email").val("");
							$("#employee_mobile1").val("");
							$("#employee_mobile2").val("");
                  		}
                	} else if (data == "exist") {
                  		if(!alert("Employee already existing.")){
                    		window.location.reload();
                    		$("#employee_type").val("");
							$("#employee_fname").val("");
							$("#employee_lname").val("");
							$("#employee_gender").val("");
							$("#employee_dob").val("");
							$("#employee_employment_date").val("");
							$("#select_option").val("");
							$("#select_option2").val("");
							$("#select_option3").val("");
							$("#employee_pob").val("");
							$("#employee_marital_status").val("");
							$("#employee_religion").val("");
							$("#employee_address").val("");
							$("#employee_country").val("");
							$("#select_option4").val("");
							$("#employee_email").val("");
							$("#employee_mobile1").val("");
							$("#employee_mobile2").val("");
                  		}
                	} else if (data == "error") {
                  		if(!alert("Employee cannot be setup, because their is an error in your query.")){
                    		window.location.reload();
                    		$("#employee_type").val("");
							$("#employee_fname").val("");
							$("#employee_lname").val("");
							$("#employee_gender").val("");
							$("#employee_dob").val("");
							$("#employee_employment_date").val("");
							$("#select_option").val("");
							$("#select_option2").val("");
							$("#select_option3").val("");
							$("#employee_pob").val("");
							$("#employee_marital_status").val("");
							$("#employee_religion").val("");
							$("#employee_address").val("");
							$("#employee_country").val("");
							$("#select_option4").val("");
							$("#employee_email").val("");
							$("#employee_mobile1").val("");
							$("#employee_mobile2").val("");
                  		}
                	}
				}
			});
		}return false;
    });

    //Class Registration function
    $("#save_class").click(function(){
        var cla_name = $("#class_name").val();
              
    	var dataString ="&cla_name=" + cla_name + "&new_class=";
        if ($.trim(cla_name).length > 0) {
			$.ajax({
				type: "POST",
				//url: "http://www.alicesons.org/demos/phonegap/schoolone/register.php",
				url: "http://www.alicesons.org/demos/phonegap/schoolone/save_class.php",
				data: dataString,
				crossDomain: true,
				cache: false,
				beforeSend: function(){ 
					$("#save_class").html('<img src="img/loader.gif" />');
				},
				success: function(data){
					if (data == "success") {
                  		if(!alert("New class have just been created successfully!.")){
                    		window.location.reload();
                    		$("#class_name").val("");
                  		}
                	} else if (data == "exist") {
                  		if(!alert("Class already existing.")){
                    		window.location.reload();
                    		$("#class_name").val("");
                  		}
                	} else if (data == "error") {
                  		if(!alert("Class cannot be setup.")){
                    		window.location.reload();
                    		$("#class_name").val("");
                  		}
                	}
				}
			});
		}return false;
    });

    //Position Registration function
    $("#save_position").click(function(){
        var posi_name = $("#posi_name").val();
              
    	var dataString ="&posi_name=" + posi_name + "&new_position=";
        if ($.trim(posi_name).length > 0) {
			$.ajax({
				type: "POST",
				//url: "http://www.alicesons.org/demos/phonegap/schoolone/register.php",
				url: "http://www.alicesons.org/demos/phonegap/schoolone/save_position.php",
				data: dataString,
				crossDomain: true,
				cache: false,
				beforeSend: function(){ 
					$("#save_position").html('<img src="img/loader.gif" />');
				},
				success: function(data){
					if (data == "success") {
                  		if(!alert("New position have just been created successfully!.")){
                    		window.location.reload();
                    		$("#posi_name").val("");
                  		}
                	} else if (data == "exist") {
                  		if(!alert("Position already existing.")){
                    		window.location.reload();
                    		$("#posi_name").val("");
                  		}
                	} else if (data == "error") {
                  		if(!alert("Position cannot be setup.")){
                    		window.location.reload();
                    		$("#posi_name").val("");
                  		}
                	}
				}
			});
		}return false;
    });

    //Subject Registration function
    $("#save_subject").click(function(){
        var sub_name = $("#sub_name").val();
        var sub_type = $("#sub_type").val();
        var sub_category = $("#sub_category").val();
              
    	var dataString ="&sub_name=" + sub_name + "&sub_type=" + sub_type + "&sub_category=" + sub_category + "&new_subject=";
        if ($.trim(sub_name).length > 0 & $.trim(sub_type).length > 0 & $.trim(sub_category).length > 0) {
			$.ajax({
				type: "POST",
				//url: "http://www.alicesons.org/demos/phonegap/schoolone/register.php",
				url: "http://www.alicesons.org/demos/phonegap/schoolone/save_subject.php",
				data: dataString,
				crossDomain: true,
				cache: false,
				beforeSend: function(){ 
					$("#save_subject").html('<img src="img/loader.gif" />');
				},
				success: function(data){
					if (data == "success") {
                  		if(!alert("New subject have just been created successfully!.")){
                    		window.location.reload();
                    		$("#sub_name").val("");
                    		$("#sub_type").val("");
                    		$("#sub_category").val("");
                  		}
                	} else if (data == "exist") {
                  		if(!alert("Subject already existing.")){
                    		window.location.reload();
                    		$("#sub_name").val("");
                    		$("#sub_type").val("");
                    		$("#sub_category").val("");
                  		}
                	} else if (data == "error") {
                  		if(!alert("Subject cannot be setup.")){
                    		window.location.reload();
                    		$("#sub_name").val("");
                    		$("#sub_type").val("");
                    		$("#sub_category").val("");
                  		}
                	}
				}
			});
		}return false;
    });

    //Notification Registration function
    $("#save_notification").click(function(){
        var noti_head = $("#noti_head").val();
        var noti_body = $("#noti_body").val();
              
    	var dataString ="&noti_head=" + noti_head + "&noti_body=" + noti_body + "&new_notification=";
        if ($.trim(noti_head).length > 0 & $.trim(noti_body).length > 0) {
			$.ajax({
				type: "POST",
				//url: "http://www.alicesons.org/demos/phonegap/schoolone/register.php",
				url: "http://www.alicesons.org/demos/phonegap/schoolone/save_notification.php",
				data: dataString,
				crossDomain: true,
				cache: false,
				beforeSend: function(){ 
					$("#save_notification").html('<img src="img/loader.gif" />');
				},
				success: function(data){
					if (data == "success") {
                  		if(!alert("New notification have just been created successfully!.")){
                    		window.location.reload();
                    		$("#noti_head").val("");
                    		$("#noti_body").val("");
                  		}
                	} else if (data == "exist") {
                  		if(!alert("Notification already existing.")){
                    		window.location.reload();
                    		$("#noti_head").val("");
                    		$("#noti_body").val("");
                  		}
                	} else if (data == "error") {
                  		if(!alert("Notification cannot be setup.")){
                    		window.location.reload();
                    		$("#noti_head").val("");
                    		$("#noti_body").val("");
                  		}
                	}
				}
			});
		}return false;
    });
    
    //SA Change Password
    $("#sa_change_password").click(function(){
    	var sa_specialnumber = $("#sa_special_number").val();
    	var new_password = $("#new_pass").val();
    	var confirm_password = $("#confirm_pass").val();
    	var dataString="new_password=" +new_password + "&confirm_password=" + confirm_password + "&sa_specialnumber=" + sa_specialnumber + "&sa_change_password=";
    	if($.trim(new_password).length>0 & $.trim(confirm_password).length>0){
			$.ajax({
				type: "POST",
				//url: "http://www.alicesons.org/demos/phonegap/schoolone/register.php",
				url: "http://www.alicesons.org/demos/phonegap/schoolone/change_password.php",
				data: dataString,
				crossDomain: true,
				cache: false,
				beforeSend: function(){ 
					$("#sa_change_password").html('<img src="img/loader.gif" />');
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
                    		localStorage.a_login="false";
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
    

    //$.noConflict();
    //logout function
    $("#s_logout").click(function(){
    	localStorage.s_login="false";
    	window.location.href = "login.html";
    });
    $("#p_logout").click(function(){
    	localStorage.p_login="false";
    	window.location.href = "login.html";
    });
    $("#a_logout").click(function(){
      localStorage.a_login="false";
      window.location.href = "login.html";
      localStorage.clear();
    });
    $("#u_logout").click(function(){
    	localStorage.u_login="false";
    	window.location.href = "login.html";
    });

    

    //Displaying administrator details on admin dashboard page
    $("#aName").html(localStorage.adminName);
    $("#aSpecialNumber").html(localStorage.adminSpecialNumber);
    $("#aType").html(localStorage.adminType); 

    //Displaying users details on admin dashboard page
    $("#uName").html(localStorage.userName);
    $("#uSpecialNumber").html(localStorage.userSpecialNumber);
    $("#uType").html(localStorage.userType);     

     //Displaying user email on home page
    $("#username_s").html(localStorage.s_username);
    $("#sCardNumber").html(localStorage.studentCardNumber);
    $("#sName").html(localStorage.studentName);
    $("#sCategory").html(localStorage.studentCategory);
    $("#sToken").html(localStorage.studentToken);
    //var imageHash_s="http://www.gravatar.com/avatar/"+md5(localStorage.s_username);
    //$("#profilepic_s").attr('src',imageHash_s);

     //Displaying user email on home page
    $("#username_p").html(localStorage.p_username);
    $("#pCardNumber").html(localStorage.parentCardNumber);
    $("#pName").html(localStorage.parentName);
    $("#pCategory").html(localStorage.parentCategory);
    $("#pToken").html(localStorage.parentToken);
    //var imageHash_p="http://www.gravatar.com/avatar/"+md5(localStorage.p_username);
    //$("#profilepic_p").attr('src',imageHash_p);
});


function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("main").style.marginLeft = "180px";
}

function w3_close() {
   	document.getElementById("mySidebar").style.display = "none";
    document.getElementById("main").style.marginLeft = "0";
}