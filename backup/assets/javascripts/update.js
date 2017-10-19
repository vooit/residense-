function validateEmail(email) {	
 	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	return emailReg.test(email);
}


// 1600x903

function resizeBanner()
{
	var imageW = 1600; //200
	var imageH = 903; //100
	var windowW = $(window).width();  //50
	var newHeight = (windowW/imageW)*imageH;
	$("#swiper_1 .swiper-container").width(windowW).height(newHeight);
}


$( document ).ready(function() {
    
	
	$("#opis-lok-show").show();
	
	setTimeout("resizeBanner()", 800);
	
	
	$(window).resize(function(){
		resizeBanner();
		$("#google_map").height($("#mapa-alt").height());
	});
	
	
	//alert($("#mapa-alt").height());
	//alert($("#google_map").height());
	$("#google_map").height($("#mapa-alt").height());
	
	
	
	var isMin = false;
	$("#nav-global").hover(function() {
		if($("#nav-global").hasClass("min_navigation"))
		isMin = true;
		if(isMin)
			$(this).removeClass("min_navigation");
	}, function() {
		if(isMin)
			$(this).addClass("min_navigation");
	});
	
	
	

	
	
	
	$("#submit-contact-form").click(function() {
		
		
		var correct = true;
		
		var name_el = $("#contact-form input[name='name']");
		var name = name_el.val();
		
		
		if(name.length < 3)
		{
			name_el.addClass("error");
			correct = false;
		}
		else
		{
			name_el.removeClass("error");
		}
		
		
		var email_el = $("#contact-form input[name='email']");
		var email = email_el.val();
		
		
		if(email.length > 0 && !validateEmail(email))
		{
			email_el.addClass("error");
			correct = false;
		}
		else
		{
			email_el.removeClass("error");
		}
		
		
		
		var subject_el = $("#contact-form input[name='subject']");
		var subject = subject_el.val();
		
		var message_el = $("#contact-form textarea[name='message']");
		var message = message_el.val();
		
		
		if(correct)
		{
			
		$.ajax({
                type: 'POST',
                url: 'sendemail.php',
                data: { name: name, email: email, message:message, subject:subject },
                success: function (msg) {
					$("#contact-response").html("Wiadomość została wysłana.");
					$("#contact-response").stop().delay(10000).fadeOut(500);
                }
            });
		}
		
		
	});
	
	$('.responsive-map').rwdImageMaps();
	hoverMap();
	
	
	var img;
	var primaryImg;
	
	$("area").hover(function() {
		var _id = $(this).attr("id");
		$(".hover-map[data-id="+_id+"]").addClass("apart-hover");
		
		if(_id >=1 && _id <= 3)
			 img = $(".rzut-penthouse");
		else if(_id >=61 && _id <= 69)
			 img = $(".rzut-pietro_5");
		else if(_id >=51 && _id <= 59)
			 img = $(".rzut-pietro_4");
		else if(_id >=41 && _id <= 49)
			 img = $(".rzut-pietro_3");
		else if(_id >=31 && _id <= 39)
			 img = $(".rzut-pietro_2");
		else if(_id >=21 && _id <= 29)
			 img = $(".rzut-pietro_1");
		else if(_id == 11)
			 img = $(".rzut-parter");
		
		primaryImg = img.attr("src");
		var path = "assets/images/rzuty/overlay/"+_id + ".png";
		img.attr("src", path);
		
	}, function() {
		var id = $(this).attr("id");
		$(".hover-map[data-id="+id+"]").removeClass("apart-hover");
		img.attr("src", primaryImg);
		$(this).removeClass("apart-hover");
	});
	
	
	$("area").click(function() {
		var _id = $(this).attr("id");
		$(".hover-map[data-id="+_id+"]").click();
	});
	
	
	
	
	
});

function hoverMap()
{
	
	var img;
	var primaryImg;
	
	$(".hover-map").hover(function() {
		var _id = $(this).attr("data-id");
		$(this).addClass("apart-hover");
		
		if(_id >=1 && _id <= 3)
			 img = $(".rzut-penthouse");
		else if(_id >=61 && _id <= 69)
			 img = $(".rzut-pietro_5");
		else if(_id >=51 && _id <= 59)
			 img = $(".rzut-pietro_4");
		else if(_id >=41 && _id <= 49)
			 img = $(".rzut-pietro_3");
		else if(_id >=31 && _id <= 39)
			 img = $(".rzut-pietro_2");
		else if(_id >=21 && _id <= 29)
			 img = $(".rzut-pietro_1");
		else if(_id == 11)
			 img = $(".rzut-parter");
		
		
		 primaryImg = img.attr("src");
		var path = "assets/images/rzuty/overlay/"+_id + ".png";
		img.attr("src", path);
		
	}, function() {
		img.attr("src", primaryImg);
		$(this).removeClass("apart-hover");
	});	
	
}

