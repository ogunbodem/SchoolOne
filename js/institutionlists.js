$(document).ready(function() {
    //var url = "http://www.alicesons.org/demos/phonegap/view.php";
    var url = "http://www.alicesons.org/demos/phonegap/schoolone/getInstitution.php";
    $.getJSON(url, function(result) {
        console.log(result);
        $.each(result, function(i, field) {
           	var ins_id = field.institution_id;
           	var ins_code = field.institution_code;
           	var ins_email = field.institution_email;
           	var ins_category = field.institution_category;
            var ins_name = field.institution_name;
            var ins_contact_name = field.institution_contact_name;
            var ins_contact_phone = field.institution_contact_phone;
            var ins_address = field.institution_address;
            var ins_student_no = field.institution_student_nos;
            var ins_teacher_no = field.institution_teacher_nos;
            var ins_logo = field.institution_picture;
            $("#listView").append('<li class="w3-bar"><a href="displayInstitutionInfo.html?ins_id=' + ins_id + '&ins_code=' + ins_code + '&ins_email=' + ins_email + '&ins_category=' + ins_category + '&ins_name=' + ins_name + '&ins_contact_name=' + ins_contact_name + '&ins_contact_phone=' + ins_contact_phone + '&ins_address=' + ins_address + '&ins_student_no=' + ins_student_no + '&ins_teacher_no=' + ins_teacher_no + '&ins_logo=' + ins_logo + '"><img src="http://www.alicesons.org/demos/phonegap/schoolone/upload/' + ins_logo + '" class="w3-left w3-round" style="width:85px;"><div class="w3-bar-item" style="padding:20px;"><span class="w3-small" style="font-weight:bolder;">'+ ins_name +'</span><br><span class="w3-small">'+ ins_address +'</span></div></a></li>');
        });
    });
});