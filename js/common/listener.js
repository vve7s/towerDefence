/* map in keypress listen */
window.addEventListener("keydown", function (event) {
	/* leave the hero */
	if (event.key === "Escape") {
        globalHeroImageSelected = null; /* selected hero not showing */
        mapOnTheHeroesConfigs = []; /* selected hero area not showing */
        heroSkillsHide(); /* hero skills not showing */

    } else {
    	//console.log(mapOnTheHeroes);
    }
});


/* map in click listen */
canvas.addEventListener("click", function (event) {

	const rect = canvas.getBoundingClientRect();
	const x = event.clientX - rect.left;
	const y = event.clientY - rect.top;
	

	heroSkillsHide(); /* hero skills not showing */
	mapOnTheHeroesConfigs = [];	/* click outside area, delete area */

	for (iceman in icemans) {
		if (icemans[iceman].click(x, y)) {


			break;
		}
	}
	

	
});


document.getElementById("start").addEventListener("click", function(){
	console.log("Chapter Start");

	let canavarSayisi = 10;
	let yolKonumu = [];

	context.beginPath();
	context.lineWidth = 1;
	context.strokeStyle = "blue";
	context.lineJoin = "round";

	context.moveTo(0,330);
	context.lineTo(132,330);
	context.lineTo(132,148);
	context.lineTo(295,148);
	context.lineTo(295,390);
	context.lineTo(505,390);
	context.lineTo(505,270);
	context.lineTo(800,270);

	context.stroke();


	yolKonumu.push(
		[0,380],
		[132,380],
		[132,198],
		[295,198],
		[295,440],
		[505,440],
		[505,320],
		[820,320]
	);

	for (let i = 0; i < canavarSayisi; i++) {
		let canavar = document.createElement("span");
		canavar.className = "canavar"+i;
		document.body.appendChild(canavar);
		$(".canavar"+i).css({
			'height': '25px',
			'width': '25px',
			'background': 'black',
			'position': 'absolute',
			'left': 0,
    		'top': 380
		});
	}


	for (let i = 0; i < canavarSayisi; i++) {
		setTimeout(function(){
			yolKonumu.forEach(function(val,ind){
				$(".canavar"+i).animate({
	        		left: val[0],
	        		top: val[1]
	        	},1000);
			})
			
		},500*i);
	}


})