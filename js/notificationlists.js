$(document).ready(function() {
    //var url = "http://www.alicesons.org/demos/phonegap/view.php";
    var url = "http://www.alicesons.org/demos/phonegap/schoolone/getNotification.php";
    $.getJSON(url, function(result) {
        console.log(result);
        $.each(result, function(i, field) {
           	var noti_id = field.notification_id;
            var noti_head = field.notification_head;
            var noti_body = field.notification_body;
            var noti_date = field.notification_date;
            var noti_ip = field.notification_ip_addr;
            $("#listView").append('<li><a style="text-decoration:none;" href="displayNotificationInfo.html?noti_id=' + noti_id + '&noti_head=' + noti_head + '&noti_body=' + noti_body + '&noti_date=' + noti_date + '&noti_ip=' + noti_ip + '"><span class="w3-small" style="font-weight:bolder;">'+ noti_head +'</span></a></li>');
        });
    });
});