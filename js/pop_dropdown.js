$(document).ready(function() {
    //var url = "http://www.alicesons.org/demos/phonegap/view.php";
    $.ajax({
      url: 'http://www.alicesons.org/demos/phonegap/schoolone/getDepartmentDrop.php',
      dataType: 'json',
      success:function(response){
        var len = response.length;
        $("#select_option").empty();
        $("#select_option").append("<option value='0' selected>Select option</option>");
        for(var a = 0; a<len; a++){
          var department_name = response[a]['department_name'];
          $("#select_option").append("<option value='"+department_name+"'>"+department_name+"</option>");
        }
      }
    });
    $.ajax({
      url: 'http://www.alicesons.org/demos/phonegap/schoolone/getReportManager.php',
      dataType: 'json',
      success:function(response){
        var len = response.length;
        $("#select_option2").empty();
        $("#select_option2").append("<option value='0' selected>Select option</option>");
        for(var b = 0; b<len; b++){
          var fname = response[b]['emp_fname'];
          var lname = response[b]['emp_lname'];
          var nos = response[b]['emp_no'];
          $("#select_option2").append("<option value='"+nos+"'>"+lname+" "+fname+"</option>");
        }
      }
    });
    $.ajax({
      url: 'http://www.alicesons.org/demos/phonegap/schoolone/getPositionDrop.php',
      dataType: 'json',
      success:function(response){
        var len = response.length;
        $("#select_option3").empty();
        $("#select_option3").append("<option value='0' selected>Select option</option>");
        for(var c = 0; c<len; c++){
          var position_name = response[c]['position_name'];
          $("#select_option3").append("<option value='"+position_name+"'>"+position_name+"</option>");
        }
      }
    });
    $.ajax({
      url: 'http://www.alicesons.org/demos/phonegap/schoolone/getState.php',
      dataType: 'json',
      success:function(response){
        var len = response.length;
        $("#select_option4").empty();
        $("#select_option4").append("<option value='0' selected>Select option</option>");
        for(var d = 0; d<len; d++){
          var state_name = response[d]['state_name'];
          $("#select_option4").append("<option value='"+state_name+"'>"+state_name+"</option>");
        }
      }
    });
    $.ajax({
      url: 'http://www.alicesons.org/demos/phonegap/schoolone/getSchool.php',
      dataType: 'json',
      success:function(response){
        var len = response.length;
        $("#school").empty();
        $("#school").append("<option value='0' selected>Select option</option>");
        for(var e = 0; e<len; e++){
          var school_name = response[e]['school_name'];
          var school_code = response[e]['school_code'];
          $("#school").append("<option value='"+school_code+"'>"+school_name+"</option>");
        }
      }
    });
    $.ajax({
      url: 'http://www.alicesons.org/demos/phonegap/schoolone/getClasses.php',
      dataType: 'json',
      success:function(response){
        var len = response.length;
        $("#class").empty();
        $("#class").append("<option value='0' selected>Select option</option>");
        for(var f = 0; f<len; f++){
          var class_name = response[f]['class_name'];
          $("#class").append("<option value='"+class_name+"'>"+class_name+"</option>");
        }
      }
    });
    $.ajax({
      url: 'http://www.alicesons.org/demos/phonegap/schoolone/getSubjects.php',
      dataType: 'json',
      success:function(response){
        var len = response.length;
        $("#subject_pop").empty();
        $("#subject_pop").append("<option value='0' selected>Select option</option>");
        for(var g = 0; g<len; g++){
          var subject_name = response[g]['subject_name'];
          $("#subject_pop").append("<option value='"+subject_name+"'>"+subject_name+"</option>");
        }
      }
    });
});