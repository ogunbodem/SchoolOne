$(document).ready(function() {
    //var url = "http://www.alicesons.org/demos/phonegap/view.php";
    var url = "http://www.alicesons.org/demos/phonegap/schoolone/getClass.php";
    $.getJSON(url, function(result) {
        console.log(result);
        $.each(result, function(i, field) {
           	var cla_id = field.class_id;
            var cla_name = field.class_name;
            var cla_date = field.class_created_date;
            var cla_ip = field.class_ip_addr;
            $("#listView").append('<li><a style="text-decoration:none;" href="displayClassInfo.html?cla_id=' + cla_id + '&cla_name=' + cla_name + '&cla_date=' + cla_date + '&cla_ip=' + cla_ip + '"><span class="w3-small" style="font-weight:bolder;">'+ cla_name +'</span></a></li>');
        });
    });
});