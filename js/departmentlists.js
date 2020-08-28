$(document).ready(function() {
    //var url = "http://www.alicesons.org/demos/phonegap/view.php";
    var url = "http://www.alicesons.org/demos/phonegap/schoolone/getDepartment.php";
    $.getJSON(url, function(result) {
        console.log(result);
        $.each(result, function(i, field) {
           	var dep_id = field.department_id;
            var dep_name = field.department_name;
            var dep_date = field.department_created_date;
            var dep_ip = field.department_ip_addr;
            $("#listView").append('<li><a style="text-decoration:none;" href="displayDepartmentInfo.html?dep_id=' + dep_id + '&dep_name=' + dep_name + '&dep_date=' + dep_date + '&dep_ip=' + dep_ip + '"><span class="w3-small" style="font-weight:bolder;">'+ dep_name +'</span></a></li>');
        });
    });
});