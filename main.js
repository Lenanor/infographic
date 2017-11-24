

(function($){

var allViruses = document.querySelectorAll("#virus path"),
redCircle1 = $("#red12-circle"),
twelwe = $("#red12-number"),
okadLon = $("#okad-lonsamhet"),
redCircle2 = $("#red28-circle"),
twentyEight = $("#red28-number"),
hogre = $("#hogre-sakerhet"),
redCircle3 = $("#red67-circle"),
sixtySeven = $("#red67-number"),
flerGenom = $("#fler-genomforda"),
oneHundred = $("#oneHundred"),
virus1 = $("#virus1"), 
virus2 = $("#virus2"),
virus3 = $("#virus3"),
virus4 = $("#virus4"),
virus6 = $("#virus6"),
i= 0,
tl = new TimelineMax();

	tl 
		.set(redCircle1, {y:-150})
		.set(redCircle2, {y:270,})
		.set(redCircle3, {x:270,})
		.to(redCircle1, 1.5, { y:0, delay: 1, ease:Bounce.easeOut })
		.from(twelwe, 1, {opacity:0}, '-=0.15')
		.from(okadLon, 1,{opacity:0},'-=0.35')
		.to(redCircle2, 1.5, { y:0, ease:Bounce.easeOut })
		.from(twentyEight, 1,{opacity:0}, '-=0.15')
		.from(hogre, 1,{opacity:0},'-=0.35')
		.to(redCircle3, 1.5, { x:0, ease:Bounce.easeOut })
		.from(sixtySeven, 1,{opacity:0}, '-=0.15')
		.from(flerGenom, 1,{opacity:0, onComplete: onComplete},'-=0.35')
		.to(virus1, 5, {rotation:360, transformOrigin: 'center center'})
		;

	TweenMax.to(allViruses, 20, {rotation:360, transformOrigin: 'center center', repeat:-1})
	TweenMax.fromTo(virus1, 6, {x:-120},{x:100, opacity:0, transformOrigin: 'center center', repeat:-1, yoyo: true});
	TweenMax.fromTo(virus2, 7, {y:70},{y:-70, opacity:0.5, repeat:-1, yoyo: true});
	TweenMax.fromTo(virus3, 10, {y:-20},{y:20, opacity:0.1, repeat:-1, yoyo: true});
	TweenMax.fromTo(virus4, 5, {y:-60, x:0, opacity:1},{y:30, x:200, opacity:0, repeat:-1, yoyo: true});
	TweenMax.fromTo(virus6, 9, {opacity:1},{opacity:0, repeat:-1, yoyo: true});

		var myVar;
		
		function onComplete() {
		    myVar = setInterval(alertFunc, 50);
		}
		
		function alertFunc() {
			if( i <= 99 ){
		    var counting = document.querySelector('#oneHundred').innerHTML = i++;
			}
			if(i == 100){
				document.querySelector('#oneHundred').innerHTML = "100% <br><span> ENGAGEMANG</span>";
			}
		}


})(jQuery);
	



