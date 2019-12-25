$(document).ready(function(){
	var steps = 0;
	var timer = null;
	var Left = $('#left').css('left');
	Left = parseInt(Left);
    $("#btn").click(function(){

    	
    	if(Left>=0){

    		hide(timer,steps);

    	}

    	else{
    		show(timer,steps);
    	} 		
  	 });



    function hide(time,step){
    	clearInterval(time);
    	time = setInterval(function(){
  			if(step>=-240){
  				$("#left").css('left',step+'px');
  				step = step-10;
  			}
  			else{
  				clearInterval(time);
  			}
  		
  	    },30);
    }


    function show(time,step){
    	clearInterval(time);
    	time = setInterval(function(){
  			if(parseInt($('#left').css('left'))<0){
  				$("#left").css('left',step+'px');
  				step = step-10;
  			}
  			else{
  				clearInterval(time);
  			}
  		
  	    },30);
    }
  	
});

 window.onload = function(){
// 	// var Left = document.getElementById('left');
// 	// Left.style.opacity = 1; 
// 	// Left.onmouseover = function(){
// 	// 	this.style.opacity = 1;
// 	// };
// 	// Left.onmouseout = function(){
// 	// 	this.style.opacity = 0;
// 	// };
     


     var imgs = [
     'images/2.jpg',
     'images/6.jpeg',
     'images/星合之空.png'

     ]
     var i = 0;
     var head = document.getElementById('right');
     head.style.background = 'url(images/2.jpg)';
     function time(){
     	i++;
     	i = i%3;
     	head.style.background = 'url('+imgs[i]+')';
     }
     setInterval(time,9000);
};



	

