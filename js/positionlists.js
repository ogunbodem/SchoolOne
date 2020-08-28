$(document).ready(function() {
    //var url = "http://www.alicesons.org/demos/phonegap/view.php";
    var url = "http://www.alicesons.org/demos/phonegap/schoolone/getPosition.php";
    $.getJSON(url, function(result) {
        console.log(result);
        $.each(result, function(i, field) {
           	var posi_id = field.position_id;
            var posi_name = field.position_name;
            var posi_date = field.position_created_date;
            var posi_ip = field.position_ip_addr;
            $("#listView").append('<li><a style="text-decoration:none;" href="displayPositionInfo.html?posi_id=' + posi_id + '&posi_name=' + posi_name + '&posi_date=' + posi_date + '&posi_ip=' + posi_ip + '"><span class="w3-small" style="font-weight:bolder;">'+ posi_name +'</span></a></li>');
        });
    });
});