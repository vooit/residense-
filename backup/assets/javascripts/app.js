requirejs.config({
    baseUrl: 'assets/javascripts',
    paths: {
        "jquery": "jquery",
        "jquery-ui": "jquery-ui",
        "swiper": "swiper",
        "parallax": "parallax",
        "jquery-touch-punch": "jquery-touch-punch"
    },
    shim: {
        "parallax": {
            deps: ["jquery"]
        },
        "jquery-touch-punch": {
            deps: ["jquery"]
        }
    }
});








requirejs(['jquery', 'jquery-ui', "jquery-touch-punch", "parallax", 'swiper','list'],
    function   ($) {
        init();
    });


    var getDevicePixelRatio = function () {
    var ratio ;
    // To account for zoom, change to use deviceXDPI instead of systemXDPI

      ratio = $(window).width()/$(window).height();
    };



function init(){
    var swiperInst;
    scrollEvent();
    if(isMobile.any()) {
        swiper('mobile');
        parallaxIn('mobile');
		if($(window).width()/$(window).height()<1.5){
          $('#swiper_1 .swiper-container').height($('#swiper_1 .swiper-slide').height());
        }
        else {
         $('#swiper_1 .swiper-container').height($('#swiper_1 .swiper-slide').height());
        }
    }
    else {
        swiper('desktop');
        parallaxIn('desktop');
		 if($(window).width()/$(window).height()<1.5){
          $('#swiper_1 .swiper-container').height($('#swiper_1 .swiper-slide').height());
        }
        else {
          $('#swiper_1 .swiper-container').height($('#swiper_1 .swiper-slide').height());
        }
    }
	
	
	$('#swiper_1 .swiper-slide').onresize = function(event) {
      if(isMobile.any()) {
          swiper('mobile');
          parallaxIn('mobile');
          if($(window).width()/$(window).height()<1.5){
            $('#swiper_1 .swiper-container').height($('#swiper_1 .swiper-slide').height());
          }
          else {
            $('#swiper_1 .swiper-container').height($('#swiper_1 .swiper-slide').height());
          }
      }
      else {
          swiper('desktop');
          parallaxIn('desktop');
          if($(window).width()/$(window).height()<1.5){
           $('#swiper_1 .swiper-container').height($('#swiper_1 .swiper-slide').height());
          }
          else {
           $('#swiper_1 .swiper-container').height($('#swiper_1 .swiper-slide').height());
          }
      }
    };
	
	
    var swiper3,swiper2

	/*
    $('.content_floor .level .apartment-link').on('click',function(e){
        e.preventDefault();
        localChange($(this).data('id'))
    })
*/

    $('.content_floor .flr').on('click',function(e){
        e.preventDefault();
        $('.opis_lok').hide();
		$('.penthouse').hide();
        var _goTo = $('.select_apart');
        _goTo = _goTo.offset();

        $("html, body").animate({ scrollTop: _goTo.top - 80 }, "slow");
    });







    $('.rezydencja a').on('click',function(e){
        e.preventDefault();
        var _this = $(this);
        $('.content_apart').hide();
        $('.opis_lok').show();
		
		if(_this.attr("data-id") == "6")
		{
			var _goTo = $('#penthouse-section');
			$('.penthouse').hide();
			$('.content_floor').hide();
		}
		else
		{
        	var _goTo = $('#wrapper_select_count');
			$('.penthouse').show();
			$('.content_floor').show();
			
		}
        _goTo = _goTo.offset();


		
		



        $("html, body").animate({ scrollTop: _goTo.top - 80 }, "slow");
        $('.content_floor .level').each(function(i,c){
            if($(c).data('id')==_this.data('id')){
                $('.content_floor .level').addClass('hide');
                $('.penthouse').show();
                $(c).removeClass('hide');
				
				var id = $(c).data('id');
				var level = "PIĘTRO "+id;
				if(id == 0)
					level = "PARTER";

					
				
				
					
					// zmian tlo na biale
					$(".penthouse").addClass("white");
					
					
					
					var _template = '<h4 style="color:#222222; margin:0px; padding:0px;">'+ level +'</h4><p class="level-name" style="color:#222222; margin-bottom:100px;">(WYBIERZ APARTAMENT)</p>';
					var _apartments = '<div class="row"><div class="seven columns"><p align="center"><strong>APARTAMENT</strong></p></div><div class="five columns"><p align="center"><strong>POW. UŻYTK.</strong></p></div></div><div style="height:5px; background:#c49867;"></div><br>';
					
						$.each(json,function(i,c){
							
							
							if(c._floor==id) {
								name = c.name;
								_id = c.id;
								surface_floor = c.surface_floor;
								_apartments = _apartments + '<a data-id="'+_id+'" href="#" style="color:#222222; text-decoration:none;" class="hover-map"><div class="row" style="padding:5px; margin-bottom:2px;"><div class="seven columns"><p align="center">'+name+'</p></div><div class="five columns"><p align="center">'+surface_floor+' m<sup>2</sup></p></div></div>';
							}
						})
				
				
				
				
				
					
				_apartments = _apartments + '</a><div style="height:6px; background:#c49867; margin:2px 0px;"></div><br><br>';
				
				
				
				
				$(c).find(".level-content").html(_template+_apartments);
				$('.responsive-map').rwdImageMaps();
				hoverMap();
				
				$(c).find(".level-content a").click(function(e) {
					e.preventDefault();
					var id = $(this).attr("data-id");
					localChange(id)
				});
				
				



                if(_this.data('name')=='penthouse'){
                    $('.content_apartament').hide()
                    $('.content_penthouse').show()
                }
                else {
                    $('.content_penthouse').hide()
                    $('.content_apartament').show()
                }
            }
        })
    })
    scrollTo();
	
	
	
	$(".level-content2 a").click(function(e) {
					e.preventDefault();
					var id = $(this).attr("data-id");
					localChange(id)
				});
	
	
}









function swiper(device){
    if(device=='mobile'){
        swiperEach('mobile');
        $( ".slider_move").each(function(i,c){
            $(c).slider({
                value:50,
                step:1,
                min:0,
                max:100,
                orientation: "horizontal",
                create:function( event, ui ) {
                    $(this).parent().find('.slide_mouse_over').width('50%');
                },
                slide: function( event, ui ) {
                    $(this).parent().find('.slide_mouse_over').width(ui.value+'%');
                }
            });
            $(c).unbind('touch');
        });
    }
    else {
        swiperEach();
        $( ".slider_move").each(function(i,c){
            $(c).slider({
                value:50,
                step:1,
                min:0,
                max:100,
                create:function( event, ui ) {
                    $(this).parent().find('.slide_mouse_over').width('50%');
                },
                slide: function( event, ui ) {
                    $(this).parent().find('.slide_mouse_over').width(ui.value+'%');
                }
            });
        });
    }

}

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

function swiperEach(device){

    if(device=='mobile'){
        $(".swiper-container").each(function(index, element){
            var $this = $(this);
            var _autoplay;
            $this.addClass("instance-" + index);
            $this.find(".swiper-button-prev").addClass("btn-prev-" + index);
            $this.find(".swiper-button-next").addClass("btn-next-" + index);
            $this.parent().find(".swiper-pagination").addClass("pagination" + index);
            if(index==0){
                params = {
                    direction: 'vertical',
                    loop: true,
                    pagination: true,
                    keyboardControl:true,
                    autoplay : 5000,
                    speed: 900,
                    pagination: '.pagination' + index,
                    paginationClickable: true,
					calculateHeight: true,
					setWrapperSize:true,
					autoHeight:true,
                    nextButton: ".btn-next-" + index,
                    prevButton: ".btn-prev-" + index
                }

            }
            else {
				
				if(index==2)
				{
					params = {
						direction: 'vertical',
						loop: true,
						pagination: true,
						keyboardControl:true,
						speed: 900,
						pagination: '.pagination' + index,
						paginationClickable: true,
						calculateHeight: true,
						setWrapperSize:true,
						autoHeight:true,
						nextButton: ".btn-next-" + index,
						prevButton: ".btn-prev-" + index
					}
				}
				else
				{
					params = {
						direction: 'vertical',
						loop: true,
						pagination: true,
						nested:true,
						autoplay : false,
						pagination: '.pagination' + index,
						paginationClickable: true,
						calculateHeight: true,
						nextButton: ".btn-next-" + index,
						prevButton: ".btn-prev-" + index
					}
				}
            }

            var swiper = swiper+index;
            var swiper = new Swiper(".instance-" + index, params);
			
			
			
            if(index==0){
                $('.nav-toggle').on('click',function(){

                    if($('#header').hasClass('open')){
                        swiper.startAutoplay();
                    }
                    else {
                        swiper.stopAutoplay();
                    }
                    $('#header').toggleClass('open')

                })
            }

            $('.btn-next-' + index).on('click',function(){
                swiper.swipeNext();
            })
            $('.btn-prev-' + index).on('click',function(){
                swiper.swipePrev();
            })

        });
    }
    else {
        $(".swiper-container").each(function(index, element){
            var $this = $(this);
            var _autoplay;
            $this.addClass("instance-" + index);
            $this.find(".swiper-button-prev").addClass("btn-prev-" + index);
            $this.find(".swiper-button-next").addClass("btn-next-" + index);
            $this.parent().find(".swiper-pagination").addClass("pagination" + index);
            if(index==0){
                params = {
                    direction: 'vertical',
                    loop: true,
                    pagination: true,
                    keyboardControl:true,
                    autoplay : 5000,
                    speed: 900,
                    pagination: '.pagination' + index,
                    paginationClickable: true,
                    touchMoveStopPropagation:false,
                    calculateHeight: true,
					setWrapperSize:true,
					autoHeight:true,
                    nested:true,
                    touchEventsTarget: 'slide_mouse',
                    onlyExternal:true,
                    nextButton: ".btn-next-" + index,
                    prevButton: ".btn-prev-" + index
                }
            }
            else {
                
				if(index==2)
				{
					params = {
						direction: 'vertical',
						loop: true,
						pagination: true,
						keyboardControl:true,
                    	speed: 900,
						pagination: '.pagination' + index,
						paginationClickable: true,
						touchMoveStopPropagation:false,
						calculateHeight: true,
						nested:true,
						touchEventsTarget: 'slide_mouse',
						onlyExternal:true,
						nextButton: ".btn-next-" + index,
						prevButton: ".btn-prev-" + index
					}
				}
				else
				{
					params = {
						direction: 'vertical',
						loop: true,
						pagination: true,
						pagination: '.pagination' + index,
						paginationClickable: true,
						touchMoveStopPropagation:false,
						calculateHeight: true,
						nested:true,
						touchEventsTarget: 'slide_mouse',
						onlyExternal:true,
						nextButton: ".btn-next-" + index,
						prevButton: ".btn-prev-" + index
					}
				}
            }

            var swiper = 'swiper'+index;
            swiper = new Swiper(".instance-" + index, params);
           
		    if(index==0){
                $('.nav-toggle').on('click',function(){

                    if($('#header').hasClass('open')){
                        swiper.startAutoplay();
                    }
                    else {
                        swiper.stopAutoplay();
                    }
                    $('#header').toggleClass('open')

                })
            }
            $('.btn-next-' + index).on('click',function(){
                swiper.swipeNext();
                swiper.stopAutoplay();
            })
            $('.btn-prev-' + index).on('click',function(){
                swiper.swipePrev();
                swiper.stopAutoplay();
            })


        });
    }




}




function parallaxIn(){
    $('.parallax-window').parallax({
        speed : 0.35
    });
}

function scrollEvent(){
    $(document).on('mousewheel DOMMouseScroll', function(e){
        scrollEventIF(e)
    });
}

function scrollEventIF(event){
    if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
        if (event.originalEvent.detail > 0) {
            $('#nav-global').addClass('min_navigation');
        } else {
            $('#nav-global').removeClass('min_navigation');
        }
    } else {
        if (event.originalEvent.wheelDelta < 0) {
            $('#nav-global').addClass('min_navigation');
        } else {
            $('#nav-global').removeClass('min_navigation');
        }
    }
}




function localChange(id){
    var _image_url,name,name_floor,_floor,surface_floor,surface_terrace,avaible,pdf,_tpl, floor_icon, rooms, balcony;
    
	if(id ==1 || id == 2 || id ==3)
	{
		$('.content_floor2').hide();
		$('.content_apart2').show();
	}
	else
	{
		$('.content_floor').hide();
		$('.content_apart').show();
	}

    $.each(json,function(i,c){
        if(c.id==id) {
            _image_url = c.screen;
            name = c.name;
            name_floor = c.name_floor;
            _floor = c._floor;
            surface_floor = c.surface_floor;
            surface_terrace = c.surface_terrace;
            avaible = c.avaible;
            pdf = c.pdf;
			floor_icon = c.floor_icon
			rooms = c.rooms;
			balcony = c.balcony;
						
			
			
			
			
			
			
			
			
			if(name_floor == "PENTHOUSE")
			{
				_tpl = '<div class="section-container desktop"><div class="single-apartment"><div class="row"><div class="four columns"><img src="'+floor_icon+'" style="height:180px!important; width:auto!important;"  /><h4 style="color:white; margin:0px 0px 100px 0px; padding:0px; font-weight:300;">'+name_floor+'<br>'+name+'</h4><div style="height:5px; background:#222222;"></div>';
			}
			else
			{
				_tpl = '<div class="section-container desktop"><div class="single-apartment"><div class="row"><div class="four columns"><img src="'+floor_icon+'" style="height:180px!important; width:auto!important;"  /><h4 style="color:#000000; margin:10px 0px 10px 0px; padding:0px; font-weight:300;">'+name+'</h4><div style="height:5px; background:#222222;"></div>';
			}
			
			
			
			
			_tpl = _tpl + '<br><div class="row" style="margin-bottom:5px;"><div class="six columns"><strong>PIĘTRO '+_floor+'</strong></div><div class="six columns" style="text-align:center;">&nbsp;</div></div>';
			_tpl = _tpl + '<div class="row" style="margin-bottom:5px;"><div class="six columns"><strong>POW. UŻYTKOWA</strong></div><div class="six columns" style="text-align:center;"><strong>'+surface_floor+' m<sup>2</sup></strong></div></div>';
			
			
			for(var n=0; n<balcony.length; n++)
			{
				_tpl = _tpl + '<div class="row" style="margin-bottom:5px;"><div class="six columns"><strong style="text-transform:uppercase;">POW. '+balcony[n]["name"]+'U</strong></div><div class="six columns" style="text-align:center;"><strong>'+balcony[n]["surface"]+' m<sup>2</sup></strong></div></div>';
			}
			
			
			//_tpl = _tpl + '<div class="row" style="margin-bottom:5px;"><div class="six columns"><strong>DOSTĘPNOŚĆ</strong></div><div class="six columns" style="text-align:center;"><strong>'+avaible+'</strong></div></div>';
			
			
			_tpl = _tpl + '<br><div class="row"><div class="six columns">Pomieszczenie:</div><div class="six columns" style="text-align:center;">Pow. użytkowa:</div></div><div style="height:2px; background:#222222;"></div>';
			
			for(var i=0; i<rooms.length; i++)
			{
				_tpl = _tpl + '<div class="row" style="padding:5px; margin-bottom:2px;"><div class="six columns">'+(i+1)+". "+rooms[i]["name"]+'</div><div class="six columns" style="text-align:center;">'+rooms[i]["surface"]+' m<sup>2</sup></div></div>';
			}
			
			
			if(name_floor == "PENTHOUSE")
				_tpl = _tpl + '<div style="height:2px; background:#222222;"></div>';
			else
				_tpl = _tpl + '<div style="height:2px; background:#222222;"></div>';
			
			
			for(var j=0; j<balcony.length; j++)
			{
				_tpl = _tpl + '<div class="row" style="padding:5px; margin-bottom:2px;"><div class="six columns">'+(i+1+j)+". "+balcony[j]["name"]+'</div><div class="six columns" style="text-align:center;">'+balcony[j]["surface"]+' m<sup>2</sup></div></div>';
			}
			
			
			
			
			
			_tpl = _tpl + '</div><div class="eight columns" position:relative;><a href="javascript:void();" class="flr" style="text-transform:uppercase; color:black; text-decoration:none;font-size:12px; float:right!important;">powrót &lt;&lt;</a><br style="clear:both;"><a href="javascript:void();" class="close" style="text-transform:uppercase; color:black; text-decoration:none;font-size:12px; float:right!important;">zamknij x</a><br style="clear:both;"><a href="'+pdf+'" class="get-pdf" target="_blank" style="float:right:important">&nbsp;</a><br style="clear:both;"><br><p align="center"><img src="'+_image_url+'" style="width:auto; height:auto; max-width:100%;" /></p></div></div></div></div>';
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			if(name_floor == "PENTHOUSE")
			{
				_tpl =_tpl+ '<div class="section-container mobile"><div class="single-apartment"><div class="row" styl="position:relative"><a href="javascript:void();" class="flr" style="text-transform:uppercase; color:black; text-decoration:none;font-size:12px; float:right!important;">powrót &lt;&lt;</a><br style="clear:both;"><a href="javascript:void();" class="close" style="text-transform:uppercase; color:black; text-decoration:none;font-size:12px; float:right!important;">zamknij x</a><br style="clear:both;"><a href="'+pdf+'" class="get-pdf" target="_blank" style="float:right!important;">&nbsp</a><br style="clear:both;"><div class="eight columns" style="width:100%;"><h4 style="color:white; text-align:center; padding:0px; font-weight:300; display:block;">'+name_floor+' '+name+'</h4><br><br><p align="center"><img src="'+_image_url+'" style="width:auto; height:auto; max-width:100%;" /></p></div><div class="four columns" style="padding-right:50px!important;padding-left:25px!important;"><img src="'+floor_icon+'" style="height:100px!important; width:auto!important;float:right; margin-right:25px!important; margin-top:-10px;"  /><h4 style="color:white; margin:0px 0px 10px 0px; padding:0px; font-weight:300;">'+name_floor+'<br>'+name+'</h4><br><br><br><div style="height:5px; background:#222222;clear:both;"></div>';
			}
			else
			{
				_tpl = _tpl+'<div class="section-container mobile"><div class="single-apartment"><a href="javascript:void();" class="flr" style="text-transform:uppercase; color:black; text-decoration:none;font-size:12px; float:right!important;">powrót &lt;&lt;</a><br style="clear:both;"><a href="javascript:void();" class="close" style="text-transform:uppercase; color:black; text-decoration:none;font-size:12px; float:right!important;">zamknij x</a><br style="clear:both;"><a href="'+pdf+'" class="get-pdf" target="_blank" style="float:right:important;">&nbsp;</a><br style="clear:both;"><div class="row"><div class="eight columns" style="width:100%;"><h4 style="color:#c49867;text-align:center; display:block;padding:0px; font-weight:300;">'+name+'</h4><br><br><p align="center"><img src="'+_image_url+'" style="width:auto; height:auto; max-width:100%;" /></p></div><div class="four columns" style="padding-right:50px!important;padding-left:25px!important;"><img src="'+floor_icon+'" style="height:100px!important; width:auto!important;float:right; margin-right:25px!important; margin-top:-10px;"  /><h4 style="color:#c49867; margin:10px 15px 10px 15px; padding:0px; font-weight:300;">'+name+'</h4><br><br><br><br><div style="height:5px; background:#222222;clear:both;"></div>';
			}
			
			
			
			
			_tpl = _tpl + '<br><div class="row" style="margin-bottom:5px;"><div class="six columns"><strong>PIĘTRO '+_floor+'</strong></div><div class="six columns" style="text-align:center;">&nbsp;</div></div>';
			_tpl = _tpl + '<div class="row" style="margin-bottom:5px;"><div class="six columns"><strong>POW. UŻYTKOWA</strong></div><div class="six columns" style="text-align:center;"><strong>'+surface_floor+' m<sup>2</sup></strong></div></div>';
			
			
			for(var n=0; n<balcony.length; n++)
			{
				_tpl = _tpl + '<div class="row" style="margin-bottom:5px;"><div class="six columns"><strong style="text-transform:uppercase;">POW. '+balcony[n]["name"]+'U</strong></div><div class="six columns" style="text-align:center;"><strong>'+balcony[n]["surface"]+' m<sup>2</sup></strong></div></div>';
			}
			
			
			//_tpl = _tpl + '<div class="row" style="margin-bottom:5px;"><div class="six columns"><strong>DOSTĘPNOŚĆ</strong></div><div class="six columns" style="text-align:center;"><strong>'+avaible+'</strong></div></div>';
			
			
			_tpl = _tpl + '<br><div class="row"><div class="six columns">Pomieszczenie:</div><div class="six columns" style="text-align:center;">Pow. użytkowa:</div></div><div style="height:2px; background:#222222;"></div>';
			
			for(var i=0; i<rooms.length; i++)
			{
				_tpl = _tpl + '<div class="row" style="padding:5px; margin-bottom:2px;"><div class="six columns">'+(i+1)+". "+rooms[i]["name"]+'</div><div class="six columns" style="text-align:center;">'+rooms[i]["surface"]+' m<sup>2</sup></div></div>';
			}
			
			
			if(name_floor == "PENTHOUSE")
				_tpl = _tpl + '<div style="height:2px; background:#c49867;"></div>';
			else
				_tpl = _tpl + '<div style="height:2px; background:#222222;"></div>';
			
			
			
			for(var j=0; j<balcony.length; j++)
			{
				_tpl = _tpl + '<div class="row" style="padding:5px; margin-bottom:2px;"><div class="six columns">'+(i+1+j)+". "+balcony[j]["name"]+'</div><div class="six columns" style="text-align:center;">'+balcony[j]["surface"]+' m<sup>2</sup></div></div>';
			}
			
			
			
			
			
			_tpl = _tpl + '</div></div></div></div>';
			
			
			
			
			
			
			
			
			if(name_floor == "PENTHOUSE")
			{
				$('.content_apart2').html(_tpl);
				
				$('.flr').on('click',function(e){
					e.preventDefault();
					$('.content_apart2').hide();
					$('.content_floor2').show();
				})
			}
			else
			{
				$('.content_apart').html(_tpl);
				
				$('.flr').on('click',function(e){
					e.preventDefault();
					$('.content_apart').hide();
					$('.content_floor').show();
				})
			}
			
			
			
			$('.close').on('click',function(e){
					e.preventDefault();
					$('.content_apart').hide();
					$('.content_floor').hide();
					$('.content_apart2').hide();
					$('.content_floor2').hide();
					
					
					var _goTo = $(".rezydencja");
					_goTo = _goTo.offset();
					if(isMobile.any()){
						$("html, body").animate({ scrollTop: _goTo.top - 80 }, "slow");
					}
					else {
						$("html, body").animate({ scrollTop: _goTo.top - 120 }, "slow");
					}
					
				})
			
			
			
			
           
        }
    })
}

function scrollTo(){
    $('#nav-global li a').on('click',function(e){
        e.preventDefault();
        var _id = $(this).data('href');
		
	
		

		
        var _goTo = $('body').find("[data-link='" + _id + "']");
        _goTo = _goTo.offset();
        $('.nav-toggle').click();
        if(isMobile.any()){
            $("html, body").animate({ scrollTop: _goTo.top - 80 }, "slow");
        }
        else {
            $("html, body").animate({ scrollTop: _goTo.top - 120 }, "slow");
        }

    });
    $('#nav-global h1 img').on('click',function(e){
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });
	
	
	 $('#swiper_1 a').on('click',function(e){
        e.preventDefault();
        var _id = $(this).data('href');
        var _goTo = $('body').find("[data-link='" + _id + "']");
        _goTo = _goTo.offset();
		
		
		
		
        if(isMobile.any()){
            $("html, body").animate({ scrollTop: _goTo.top - 80 }, "slow");
        }
        else {
            $("html, body").animate({ scrollTop: _goTo.top - 120 }, "slow");
        }

    });
}




