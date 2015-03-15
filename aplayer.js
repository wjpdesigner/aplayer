var player = videojs('myVideo-1', {
	"controls": true,
	"autoplay": false,
	"preload": "auto",
	controlBar: {
		volumeControl: false,
        progressControl: {
            seekBar: {
              seekHandle: false
            }
        }
    }
});

var audio = videojs('myAudio-1', {
	"controls": true,
	"autoplay": false,
	"preload": "auto",
	controlBar: {
		volumeControl: {
			volumeBar: {
				volumeHandle: false
			}
		},
        progressControl: {
            seekBar: {
              seekHandle: false
            }
        }
    }
});
		
videojs.autoSetup();

videojs('myVideo-1').ready(function(){
	
	var myPlayer = this, id = myPlayer.id();
	var aspectRatio = 715/1272; //change the aspect ratio as your desire
    
    function resizeVideoJS(){
		var width = document.getElementById(id).parentElement.offsetWidth;
        myPlayer.width(width).height( width * aspectRatio );
    }
      
    resizeVideoJS();
	window.onresize = resizeVideoJS; 
});
