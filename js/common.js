$(document).ready(function() {

	$( ".google-map__window" ).parent().css( "position", "relative" );

	$(document).click(function() {
        $('.js-select-list').hide();
        $(".js-select").removeClass("is-active");
    });

	// select
	function select() {
		$(".js-select").each(function(){
			var select_list = $(this).parent().find(".js-select-list");
			var text = select_list.find("li").first().text();
			$(this).find(".js-select-text").text(text);
			$(this).click(function(event){
					if ($(this).hasClass("is-active")) {
						$(this).removeClass("is-active");
						select_list.slideUp("fast");
					}
					else {
						$(".js-select").removeClass("is-active");
						$(".js-select-list").hide();
						select_list.slideDown("fast");
						$(this).addClass("is-active");
					}
					event.stopPropagation();
				});
				select_list.find("li").click(function(event) {
					var id = $(this).attr("data-id");
					var text = $(this).text();
					$(this).parent().parent().find(".js-select-text").text(text);
					$(this).parent().parent().find(".js-select-input").val(id);
					$(this).parent().hide();
					$(this).parents(".js-select").removeClass("is-active");
					event.stopPropagation();
				});
			});
		}
		select();
		$('.js-select').click(function(event){
			event.stopPropagation();
		});

});

  	function initialize() {
	    var mapOptions = {
	      	zoom: 12,
	      	center: new google.maps.LatLng(55.749482, 37.731846),
	      	disableDefaultUI: true,
	      	scrollwheel: false,
	     	zoomControl: true,
	    	zoomControlOptions: {
	        	style: google.maps.ZoomControlStyle.DEFAULT,
	        	position: google.maps.ControlPosition.LEFT_CENTER
	      	},
	      	mapTypeId: google.maps.MapTypeId.ROADMAP,

	    }
	    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	    var image = 'img/icons/marker.png';
	   var myLatLng1 = new google.maps.LatLng(55.739482, 37.894566);
	   	var myLatLng2 = new google.maps.LatLng(55.729722, 37.623456);
	   	var myLatLng3 = new google.maps.LatLng(55.739822, 37.794446);
	   	var myLatLng4 = new google.maps.LatLng(55.737522, 37.595546);
	   	var myLatLng5 = new google.maps.LatLng(55.736532,37.871666);
	    var marker1 = new google.maps.Marker({
		      position: myLatLng1,
		      map: map,
		      title: 'Магазин “Детский Мир”', 
		      icon: image
		});
		var marker2 = new google.maps.Marker({
		      position: myLatLng2,
		      map: map,
		      title: 'Магазин “Детский Мир”', 
		      icon: image
		});
		var marker3 = new google.maps.Marker({
		      position: myLatLng3,
		      map: map,
		      title: 'Магазин “Детский Мир”', 
		      icon: image
		});
		var marker4 = new google.maps.Marker({
		      position: myLatLng4,
		      map: map,
		      title: 'Магазин “Детский Мир”', 
		      icon: image
		});
		var marker5 = new google.maps.Marker({
		      position: myLatLng5,
		      map: map,
		      title: 'Магазин “Детский Мир”', 
		      icon: image
		});
		var contentString1 =	'<div class="google-map__window">'
				+'<div class="google-map__block"><i></i><div class="t5">Магазин “Детский Мир”</div><p>ул. Ленина 387 / 8</p><p>Пн-Пт: 9 - 18:00</p><a href="#">www.detskiymir.ru</a></div>'
			'</div>';

		var contentString2 =	'<div class="google-map__window">'
				+'<div class="google-map__block"><i></i><div class="t5">Магазин “Детский Мир”</div><p>ул. Ленина 387 / 8</p><p>Пн-Пт: 9 - 18:00</p><a href="#">www.detskiymir.ru</a></div>'
			'</div>';

		var contentString3 =	'<div class="google-map__window">'
				+'<div class="google-map__block"><i></i><div class="t5">Магазин “Детский Мир”</div><p>ул. Ленина 387 / 8</p><p>Пн-Пт: 9 - 18:00</p><a href="#">www.detskiymir.ru</a></div>'
			'</div>';

    var contentString4 =	'<div class="google-map__window">'
				+'<div class="google-map__block"><i></i><div class="t5">Магазин “Детский Мир”</div><p>ул. Ленина 387 / 8</p><p>Пн-Пт: 9 - 18:00</p><a href="#">www.detskiymir.ru</a></div>'
			'</div>';

    var contentString5 =	'<div class="google-map__window">'
				+'<div class="google-map__block"><i></i><div class="t5">Магазин “Детский Мир”</div><p>ул. Ленина 387 / 8</p><p>Пн-Пт: 9 - 18:00</p><a href="#">www.detskiymir.ru</a></div>'
			'</div>';

		var infowindow1 = new google.maps.InfoWindow({
		    content: contentString1
		});
		var infowindow2 = new google.maps.InfoWindow({
		    content: contentString2
		});
		var infowindow3 = new google.maps.InfoWindow({
		    content: contentString3
		});
	  var infowindow4 = new google.maps.InfoWindow({
		    content: contentString4
		});
	  var infowindow5 = new google.maps.InfoWindow({
		    content: contentString5
		});
		google.maps.event.addListener(marker1, 'click', function(){
		    infowindow1.open(map,marker1);
		});
		google.maps.event.addListener(marker2, 'click', function(){
		    infowindow2.open(map,marker2);
		});
		google.maps.event.addListener(marker3, 'click', function(){
		    infowindow3.open(map,marker3);
		});
		google.maps.event.addListener(marker4, 'click', function(){
		    infowindow4.open(map,marker4);
		});
		google.maps.event.addListener(marker5, 'click', function(){
		    infowindow5.open(map,marker5);
		});
			//infowindow1.open(map,marker1);
		infowindow2.open(map,marker2);

	}
  	// Asynchronous Loading
	function loadScript() {
	  var script = document.createElement('script');
	  script.type = 'text/javascript';
	  script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&language=ru&' +
	      'callback=initialize';
	  document.body.appendChild(script);
	}
	window.onload = loadScript;
