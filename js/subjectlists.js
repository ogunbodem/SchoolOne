$(document).ready(function() {
    //var url = "http://www.alicesons.org/demos/phonegap/view.php";
    var url = "http://www.alicesons.org/demos/phonegap/schoolone/getSubject.php";
    $.getJSON(url, function(result) {
        console.log(result);
        $.each(result, function(i, field) {
           	var sub_id = field.subject_id;
            var sub_name = field.subject_name;
            var sub_type = field.subject_type;
            var sub_category = field.subject_category;
            var sub_date = field.subject_created_date;
            var sub_ip = field.subject_ip_addr;
            $("#listView").append('<li><a style="text-decoration:none;" href="displaySubjectInfo.html?sub_id=' + sub_id + '&sub_name=' + sub_name + '&sub_type=' + sub_type + '&sub_category=' + sub_category + '&sub_date=' + sub_date + '&sub_ip=' + sub_ip + '"><span class="w3-small" style="font-weight:bolder;">'+ sub_name +'</span></a></li>');
        });
    });
});