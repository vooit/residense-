<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Rezydencja Fryderyk</title>
  <link rel="stylesheet" href="js/superslides/stylesheets/superslides.css">
  <link rel="stylesheet" href="css/style.css">
  <link href='https://fonts.googleapis.com/css?family=Lato:400,700&subset=latin,latin-ext' rel='stylesheet' type='text/css'>
</head>
<body>
  <div id="slides">
    <div class="slides-container">
      <?
      $dir = scandir('img');
      sort($dir);
      foreach($dir AS $file) :?>
      <?
      $file = 'img/'.$file;
      if(is_dir($file))continue;
      list($width, $height) = getimagesize($file);
      ?>
      
      <img src="<?=$file?>" width="<?=$width?>" height="<?=$height?>" >
      
      <?endforeach;?>
    </div>

  </div>
  <div class="toggleSwitch">
      <a href="#" class="contact"></a>
  </div>
  <div class="contactFormContainer">
      <div class="overlay"></div>
      <div class="contactForm">
          <h1><span>KONTAKT</span></h1>
          <div class="leftCol">
              <form method="post" action="send.php">
                  <input type="text" name="name" class="required" required="true" placeholder="IMIĘ I NAZWISKO (WYMAGANE)">
                  <input type="text" name="email" class="required email" required="true" placeholder="ADRES EMAIL (WYMAGANE)">
                  <input type="text" name="subject" placeholder="TEMAT">
                  
                  <textarea name="text" placeholder="TREŚĆ"></textarea>
                  <input type="image" src="css/img/send.png" >
              </form>
              
              
          </div>
          <div class="rightCol">
<p>              
<strong>BIURO SPRZEDAŻY:</strong><br>
    <br>
Szmyd &amp; Partners Sp. z o.o. sp.k.<br>
ul. Bagno 2, klatka D, 2 piętro<br>
00-112 Warszawa<br>
    <br>
tel. + 48  696 18 80 00<br>
tel. + 48 22 4 18 80 00<br>
    <br>
<a href="mailto:sprzedaz@rezydencjafryderyk.pl">sprzedaz@rezydencjafryderyk.pl</a><br>
<a href="http://www.rezydencjafryderyk.pl">www.rezydencjafryderyk.pl</a><br>
  <br>
  <a href="https://www.facebook.com"><img src="css/img/fb.png" alt="Odwiedź nas na FB"></a>
</p>  
          </div>
      </div>
  </div>
  
  <div class="verticalOverlay"></div>

  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
  <script src="js/jquery.easing.1.3.js"></script>
  <script src="js/jquery.animate-enhanced.min.js"></script>
  <script src="js/superslides/jquery.superslides.js" type="text/javascript" charset="utf-8"></script>
  <script>
  
  jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + 
                                                $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + 
                                                $(window).scrollLeft()) + "px");
    return this;
  }
  
  $(function(){
    $('#slides').superslides({
      animation: 'fade',
      play : 5000,
      animation_speed: 600
    });
    
    $('.toggleSwitch').on('click','a.contact',function(){
        $(this).toggleClass('contact').toggleClass('close');
        $('.contactFormContainer').toggle();
        resCon();
    });
    
    $('.toggleSwitch').on('click','a.close',function(){
        $(this).toggleClass('contact').toggleClass('close');
        $('.contactFormContainer').toggle();
        resCon();
    });
    
    resCon();
    $(window).resize(resCon);
    
  })
  
  function resCon() {
      $('.verticalOverlay').height($(window).height());
      $('.verticalOverlay').width($(window).width());
      
      
    $('.contactFormContainer').height($(window).height());  
    
    if($(window).width() < 1310) {
        $('.contactForm').addClass('slim');
    }else{
        $('.contactForm').removeClass('slim');
    }
    
    if($(window).width() < 630) {
        $('.contactForm').addClass('full');
    }else{
        $('.contactForm').removeClass('full');
    }
    
    $('.contactForm').center();
    
    var h = $(window).height();
    var w = $(window).width();
    
    if(h > w) {
        $('.verticalOverlay').show();
    }else{
        $('.verticalOverlay').hide();
    }
    
  }
    
  </script>
</body>
</html>