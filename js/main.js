var main = function(){
var clicked = false;
var keys=true;
var counter = 3;
var array = ["#hireMePage", "#work", "#about", "#videoOverlay"];
  /*removing stuff if tablet or phone*/

  var iOS = /iPad|iPhone|iPod/.test(navigator.platform);
if( iOS ) {
    var background_videos = document.querySelectorAll('.video-bg video');
    for( i=0; i<background_videos.length; i++ ) {
        background_videos[i].parentNode.removeChild(background_videos[i]);
    }
}

  //============================== key events  ================================



  /*-----------------------------------------------------------*/


  document.onkeydown = function(e) {
if(keys===true){
    switch (e.keyCode) {


        case 39:
        if(counter === 0){return false;}

        counter--;

        $('#test').text(counter);
        $(array[counter]).fadeIn(200).css({'z-index':'10'});
        $(array[counter+1]).animate({

            right: "300px",
            opacity: '0'
          }, "slow");

            break;

            case 38:
            if(clicked === false){
              $(array[counter]).fadeOut().animate({right: '300px', opacity:'0'}, 500);
              $('#portfolio').fadeIn().animate({top: '0px', opacity: '1'}, 500);

              clicked = true;

          }

          break;

          case 40:
          if(clicked === true) {
            $('#portfolio').fadeOut().animate({top: '300px', opacity: '0'}, 500);
            $(array[counter]).fadeIn().animate({right: '0px', opacity: '1'}, 500);
            clicked = false;

          }

          break;

        case 37:
        if(counter === array.length - 1){return false;}

        counter++;
        $('#test').text(counter);
        $(array[counter-1]).fadeOut(200).css({'z-index':'0'});
         $(array[counter]).animate({

            right: "0px",
            opacity: '1'
          }, "slow");

        $(array[counter-1]).animate({

            right: "0px"
          }, "slow");

            break;

     default: return; // exit this handler for other keys
    }

  }

  };



  $('.box').hover(function(){

    $(this).siblings().animate({
       opacity: 0.7,
       blurRadius: 10
     }, 0);
   });

$('.box').mouseleave(function() {
  $(this).siblings().animate({
     opacity: 1
   }, 0.5);

});



//============================== click events ================================


  $('#hamburger-icon').on('click',function(){

    if(clicked === false){
      $(array[counter]).fadeOut().animate({right: '300px', opacity:'0'}, 500);
      $('#portfolio').fadeIn().animate({top: '0px', opacity: '1'}, 500);

      clicked = true;
      keys= false;
  }

  else if(clicked === true) {
    $('#portfolio').fadeOut().animate({top: '300px', opacity: '0'}, 500);
    $(array[counter]).fadeIn().animate({right: '0px', opacity: '1'}, 500);
    clicked = false;
    keys = true;
  }

  });

  $('#hireMe').on('click', function(){
    $('#portfolio').animate({top: '100vh', opacity: '0'}, 500).css({'visibility':'invisible'});
    $('#hireMePage').fadeIn().animate({right: '0px', opacity:'1'}, 2000);
    counter = 0;
    clicked = false;
    keys= true;
  });


//process

var $head =$('.process h4');
var $explain =$('.process p');
$('.chemistry').click(function () {

  $('.aboutBox img').fadeOut();
  $('.process').fadeIn();
    switch ($(this).attr('id')) {

        case 'collect':
          $head.text('collect');
          $explain.fadeIn(2000).text('The first step of the process is to learn and sort. This is the planning stage, the foundation, on wich the whole project stands. ').fadeIn(1000);
            $(this).css({'fill':'rgba(230, 126, 34,1.0)', 'stroke': 'rgba(230, 126, 34,1.0)'});
            $('.background').css({'background-image':'url("/Users/Malde/Documents/Development/Freelancing Jobs/MA25/logo/TheC-chemistry.svg")'}).fadeIn();
             break;

        case 'design':
        $head.text('Design');
        $explain.text('This is where we come up with a unique visual and audative design that will suit the brand.');
            $(this).css({'fill':'rgba(230, 126, 34,1.0)', 'stroke': 'rgba(230, 126, 34,1.0)'});
            $('.background').css({'background-image':'url("/Users/Malde/Documents/Development/Freelancing Jobs/MA25/logo/TheD-chemistry.svg")'}).fadeIn();
             break;

        case 'program':
        $head.text('Program');
        $explain.text('The design is woken up and is given the ability to respond and interact. This is where everything changes.');
        $(this).css({'fill':'rgba(230, 126, 34,1.0)', 'stroke': 'rgba(230, 126, 34,1.0)'});
        $('.background').css({'background-image':'url("/Users/Malde/Documents/Development/Freelancing Jobs/MA25/logo/TheP-chemistry.svg")'}).fadeIn();
             break;

        case 'testing':
        $head.text('Testing');
        $explain.text('The application/website must be tested on a range of devises and put in the hand of a variety of users to make sure it works as is should.');
        $(this).css({'fill':'rgba(230, 126, 34,1.0)', 'stroke': 'rgba(230, 126, 34,1.0)'});
        $('.background').css({'background-image':'url("/Users/Malde/Documents/Development/Freelancing Jobs/MA25/logo/TheT-chemistry.svg")'}).fadeIn();
             break;

        case 'alive':
        $head.text('Alive');
        $explain.text('The project has reached is completion and has been given a life of is own.');
        $(this).css({'fill':'rgba(230, 126, 34,1.0)', 'stroke': 'rgba(230, 126, 34,1.0)'});
        $('.background').css({'background-image':'url("/Users/Malde/Documents/Development/Freelancing Jobs/MA25/logo/TheA-chemistry.svg")'}).fadeIn();
             break;
    }
});


/*===========================================================*/



}
$(document).ready(main);

(function(){
	var $ = (function(elm){
		return document.querySelector(elm);
	}),
	Stars = function(){
		var num = (Math.min(window.innerWidth, window.innerHeight) / Math.max(window.innerWidth, window.innerHeight)) * 750, //Math.abs(window.innerWidth - window.innerHeight),
			makeStar = function(){
				return {
					radius: Math.random() * (3 - .5) + .5,
					pos: {
						x: Math.random() * c.width,
						y: Math.random() * c.height
					},
					moveTo: {
						x: Math.random() * c.width,
						y: Math.random() * c.height
					},
					bigger: ~~(Math.random() * 2),
					speed: Math.random() * (c.width / c.height / 40)
				}
			},
			stars = [],
			draw = function(star){
				ctx.fillStyle = "#fff";
				ctx.beginPath();
				ctx.arc(star.pos.x, star.pos.y, star.radius, 0, Math.PI * 2);
				ctx.fill();
				if(star.bigger){
					star.radius += .01;
					if(star.radius >= 3) star.bigger = false;
				}else{
					star.radius -= .01;
					if(star.radius <= .3) star.bigger = true;
				}
				if(
					star.moveTo.x >= star.pos.x - 5 &&
					star.moveTo.x <= star.pos.x + 5
				){
					star.moveTo.x = Math.random() * c.width;
				}
				else if(star.moveTo.x < star.pos.x) star.pos.x -= star.speed;
				else if(star.moveTo.x > star.pos.x) star.pos.x += star.speed;
				if(
					star.moveTo.y >= star.pos.y - 5 &&
					star.moveTo.y <= star.pos.y + 5
				){
					star.moveTo.y = Math.random() * c.height;
				}
				else if(star.moveTo.y < star.pos.y) star.pos.y -= star.speed;
				else if(star.moveTo.y > star.pos.y) star.pos.y += star.speed;

				for(var i = 0; i < stars.length; i++){
					if(
						star != stars[i] &&
						Math.sqrt(
							(star.pos.x - stars[i].pos.x) * (star.pos.x - stars[i].pos.x) +
							(star.pos.y - stars[i].pos.y) * (star.pos.y - stars[i].pos.y)
						) < 50
					){
						ctx.beginPath();
						ctx.moveTo(star.pos.x, star.pos.y);
						ctx.lineTo(stars[i].pos.x, stars[i].pos.y);
						ctx.closePath();
						ctx.strokeStyle = "#fff";
						ctx.lineWidth = .025;
						ctx.stroke();
					}
				}
			}
		return {
			init: function(){
				for(var i = 0; i < num; i++){
					stars.push(new makeStar());
				}
			},
			move: function(){
				setInterval(function(){
					ctx.clearRect(0, 0, c.width, c.height);
					background();
					for(var i = 0; i < stars.length; i++){
						draw(stars[i]);
					}
				}, 1);
			}
		}
	}
	c = $("#sky"),
	background = function(){
		var grdnt = ctx.createLinearGradient(0, 0, 0, c.height);
		grdnt.addColorStop(0, "#000");
		grdnt.addColorStop(.5, "#135288");
		grdnt.addColorStop(1, "#0C5663");
		ctx.fillStyle = grdnt;
		ctx.fillRect(0, 0, c.width, c.height);
	},
	sky = new Stars();

	c.width = window.innerWidth;
	c.height = window.innerHeight;

	var ctx = c.getContext("2d");

	sky.init();
	background();
	sky.move();
	window.addEventListener("resize", function(){
		c.width = window.innerWidth;
		c.height = window.innerHeight;
	}, true);
}());

//======================================================================
