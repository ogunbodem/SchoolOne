$(document).ready(function(){

    // take picture from camera
    $('#but_take').click(function(){      
        navigator.camera.getPicture(onSuccess, onFail, { 
            quality: 20, 
            destinationType: Camera.DestinationType.FILE_URL 
        });
    });

    // upload select 
    $("#but_select").click(function(){
        navigator.camera.getPicture(onSuccess, onFail, { 
            quality: 50,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY, 
            allowEdit: true,
            destinationType: Camera.DestinationType.FILE_URI
        });
    });

    // Change image source and upload photo to server
    function onSuccess(imageURI) {

        // Set image source
        var image = document.getElementById('img');
        image.src = imageURI  + '?' + Math.random();
                
        var options = new FileUploadOptions();
        options.fileKey = "file";
        options.fileName = imageURI.substr(imageURI.lastIndexOf('/') + 1);
        options.mimeType = "image/jpeg";
                
        var params = {};
        params.value1 = "test";
        params.value2 = "param";

        options.params = params;
        options.chunkedMode = false;

        var ft = new FileTransfer();
        ft.upload(imageURI, "http://www.alicesons.org/demos/phonegap/schoolone/upload.php", function(result){
            alert('successfully uploaded ' + result.response);
        }, function(error){
            alert('error : ' + JSON.stringify(error));
        }, options);
    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }
});

//url: "http://www.alicesons.org/demos/phonegap/schoolone/t_login.php",
//url: "http://www.alicesons.org/demos/phonegap/schoolone/login.php",
