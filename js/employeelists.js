$(document).ready(function() {
    //var url = "http://www.alicesons.org/demos/phonegap/view.php";
    var url = "http://www.alicesons.org/demos/phonegap/schoolone/getEmployee.php";
    $.getJSON(url, function(result) {
        console.log(result);
        $.each(result, function(i, field) {
            var employee_id = field.employee_id;
            var employee_type = field.employee_type;
            var employee_no = field.employee_no;
            var employee_fname = field.employee_fname;
            var employee_lname = field.employee_lname;
            var employee_gender = field.employee_gender;
            var employee_dob = field.employee_dob;
            var employee_join_date = field.employee_join_date;
            var employee_department = field.employee_department;
            var employee_reporting_manager = field.employee_reporting_manager;
            var employee_position = field.employee_position;
            var employee_birth_place = field.employee_birth_place;
            var employee_marital_status = field.employee_marital_status;
            var employee_nationality = field.employee_nationality;
            var employee_religion = field.employee_religion;
            var employee_address = field.employee_address;
            var employee_state = field.employee_state;
            var employee_mobile_number_1 = field.employee_mobile_number_1;
            var employee_mobile_number_2 = field.employee_mobile_number_2;
            var employee_email = field.employee_email;
            var employee_photo_file_name = field.employee_photo_file_name;
            $("#listView").append('<li class="w3-bar"><a style="text-decoration:none;" href="displayEmployeeInfo.html?employee_id=' + employee_id + '&employee_type=' + employee_type + '&employee_fname=' + employee_fname + '&employee_lname=' + employee_lname + '&employee_no=' + employee_no + '&employee_gender=' + employee_gender + '&employee_dob=' + employee_dob + '&employee_join_date=' + employee_join_date + '&employee_department=' + employee_department + '&employee_reporting_manager=' + employee_reporting_manager + '&employee_position=' + employee_position + '&employee_birth_place=' + employee_birth_place + '&employee_marital_status=' + employee_marital_status + '&employee_nationality=' + employee_nationality + '&employee_religion=' + employee_religion + '&employee_address=' + employee_address + '&employee_state=' + employee_state + '&employee_mobile_number_1=' + employee_mobile_number_1 + '&employee_mobile_number_2=' + employee_mobile_number_2 + '&employee_email=' + employee_email + '&employee_photo_file_name=' + employee_photo_file_name + '"><img src="http://www.alicesons.org/demos/phonegap/schoolone/upload/' + employee_photo_file_name + '" class="w3-left w3-round" style="width:85px;"><div class="w3-bar-item" style="padding:10px;"><span class="w3-small" style="font-weight:bolder;">'+ employee_lname +' '+ employee_fname +'</span><br><span class="w3-small">'+ employee_type +'</span><br><span class="w3-small">'+ employee_no +'</span></div></a></li>'); 
        });
    });
});