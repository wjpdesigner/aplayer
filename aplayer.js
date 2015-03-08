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
