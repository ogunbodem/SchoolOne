$(document).ready(function() {
    //var url = "http://www.alicesons.org/demos/phonegap/view.php";
    var url = "http://www.alicesons.org/demos/phonegap/schoolone/getStudentNos.php";
    $.getJSON(url, function(result) {
        console.log(result);
        $.each(result, function(i, field) {
           	var student_nos = field.student_nos;
            $("#no_of_student").append('<span class="w3-right" style="font-weight:bolder;">'+ student_nos +'</span>');
        });
    });

    //var url = "http://www.alicesons.org/demos/phonegap/view.php";
    var url = "http://www.alicesons.org/demos/phonegap/schoolone/getTeacherNos.php";
    $.getJSON(url, function(result) {
        console.log(result);
        $.each(result, function(i, field) {
            var teacher_nos = field.teacher_nos;
            $("#no_of_teacher").append('<span class="w3-right" style="font-weight:bolder;">'+ teacher_nos +'</span>');
        });
    });

    //var url = "http://www.alicesons.org/demos/phonegap/view.php";
    var url = "http://www.alicesons.org/demos/phonegap/schoolone/getParentNos.php";
    $.getJSON(url, function(result) {
        console.log(result);
        $.each(result, function(i, field) {
            var parent_nos = field.parent_nos;
            $("#no_of_parent").append('<span class="w3-right" style="font-weight:bolder;">'+ parent_nos +'</span>');
        });
    });

     //var url = "http://www.alicesons.org/demos/phonegap/view.php";
    var url = "http://www.alicesons.org/demos/phonegap/schoolone/getInstitutionNos.php";
    $.getJSON(url, function(result) {
        console.log(result);
        $.each(result, function(i, field) {
            var ins_nos = field.ins_nos;
            $("#no_of_institution").append('<span class="w3-right" style="font-weight:bolder;">'+ ins_nos +'</span>');
        });
    });

    //var url = "http://www.alicesons.org/demos/phonegap/view.php";
    var url = "http://www.alicesons.org/demos/phonegap/schoolone/getUserNos.php";
    $.getJSON(url, function(result) {
        console.log(result);
        $.each(result, function(i, field) {
            var user_nos = field.user_nos;
            $("#no_of_user").append('<span class="w3-right" style="font-weight:bolder;">'+ user_nos +'</span>');
        });
    });

    //var url = "http://www.alicesons.org/demos/phonegap/view.php";
    var url = "http://www.alicesons.org/demos/phonegap/schoolone/getDepartmentNos.php";
    $.getJSON(url, function(result) {
        console.log(result);
        $.each(result, function(i, field) {
            var department_nos = field.department_nos;
            $("#no_of_department").append('<span class="w3-right" style="font-weight:bolder;">'+ department_nos +'</span>');
        });
    });

    //var url = "http://www.alicesons.org/demos/phonegap/view.php";
    var url = "http://www.alicesons.org/demos/phonegap/schoolone/getClassNos.php";
    $.getJSON(url, function(result) {
        console.log(result);
        $.each(result, function(i, field) {
            var class_nos = field.class_nos;
            $("#no_of_class").append('<span class="w3-right" style="font-weight:bolder;">'+ class_nos +'</span>');
        });
    });

    //var url = "http://www.alicesons.org/demos/phonegap/view.php";
    var url = "http://www.alicesons.org/demos/phonegap/schoolone/getPositionNos.php";
    $.getJSON(url, function(result) {
        console.log(result);
        $.each(result, function(i, field) {
            var position_nos = field.position_nos;
            $("#no_of_position").append('<span class="w3-right" style="font-weight:bolder;">'+ position_nos +'</span>');
        });
    });

    //var url = "http://www.alicesons.org/demos/phonegap/view.php";
    var url = "http://www.alicesons.org/demos/phonegap/schoolone/getSubjectNos.php";
    $.getJSON(url, function(result) {
        console.log(result);
        $.each(result, function(i, field) {
            var subject_nos = field.subject_nos;
            $("#no_of_subject").append('<span class="w3-right" style="font-weight:bolder;">'+ subject_nos +'</span>');
        });
    });

     //var url = "http://www.alicesons.org/demos/phonegap/view.php";
    var url = "http://www.alicesons.org/demos/phonegap/schoolone/getNotificationNos.php";
    $.getJSON(url, function(result) {
        console.log(result);
        $.each(result, function(i, field) {
            var notification_nos = field.notification_nos;
            $("#no_of_notification").append('<span class="w3-right" style="font-weight:bolder;">'+ notification_nos +'</span>');
        });
    });
     //var url = "http://www.alicesons.org/demos/phonegap/view.php";
    var url = "http://www.alicesons.org/demos/phonegap/schoolone/getEmployeeNos.php";
    $.getJSON(url, function(result) {
        console.log(result);
        $.each(result, function(i, field) {
            var employee_nos = field.employee_nos;
            $("#no_of_employee").append('<span class="w3-right" style="font-weight:bolder;">'+ employee_nos +'</span>');
        });
    });
});

