# A.Player
A simple responsive Video.js player with custom minimalist interface.

[Checkout the demo](http://wjpdesigner.com/aplayer/)

[![Image of APlayer](http://wjpdesigner.com/aplayer/screenshot.jpg?1)](http://wjpdesigner.com/aplayer/)

### Feature:
- Fully Responsive
- Support fallback to Flash or other playback technologies
- Minimalist Design
- Easy to use just 3 steps

### Implementation:
#### 1.Getting Started
Include the Video.js and aplayer.css into the `<head>` section.
```html
<!--Video.js-->
<link href="https://vjs.zencdn.net/4.12/video-js.css" rel="stylesheet">
<script src="https://vjs.zencdn.net/4.12/video.js"></script>
<!--APlayer.css-->
<link href="aplayer.css" rel="stylesheet">
```
And also include aplayer.js before the close `</body>` tag.
```html
<!--APlayer.js-->
<script src="aplayer.js"></script>
</body>
```
#### 2.Set up your HTML
To make the video player responsive you will need a class `.video-container` with `width: 100%;` or `max-width: XXXXpx;` any size you want.
However, the `<video>` tag must be 100% width.
Poster image is optional.
And to have more than one video make sure the `<video id="XXXX">` tag `id` are different.
```html
<!--START myVideo"-->
<div class="video-container">
	<video id="myVideo-1" class="video-js vjs-default-skin" controls preload="auto" poster="img/poster.jpg" >
    	<source src="https://cdn.selz.com/plyr/1.0/movie.mp4" type="video/mp4">
        <source src="https://cdn.selz.com/plyr/1.0/movie.webm" type="video/webm">
  	</video>
</div>
<!--END myVideo-->
```
#### 3.Config your video player aspect ratio
In the aplayer.js you can set-up the aspect ratio by putting the original video size `height/width`.
```html
var aspectRatio = 715/1272; //change the aspect ratio as your desire
```
Again if you have more than one video you have to duplicate/copy the whole thing and just change the `id` ex.myVideo-1 and the size `height/width`.
```html
videojs('myVideo-1').ready(function(){	//be careful with the id
	var myPlayer = this, id = myPlayer.id();
	var aspectRatio = 715/1272; //change the aspect ratio as your desire
	function resizeVideoJS(){
		var width = document.getElementById(id).parentElement.offsetWidth;
		myPlayer.width(width).height( width * aspectRatio );
	}
	resizeVideoJS();
	window.onresize = resizeVideoJS; 
});
```
### Copyright and License:
The MIT License (MIT)

Copyright (c) 2015 wjpdesigner.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.