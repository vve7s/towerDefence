/* kendime not */

/*	drawImage fonksiyonun icerisi
	resim,
	resim.x,
	resim.y,
	resim.yukseklik,
	resim.genislik,
	canvas.x,
	canvas.y,
	canvas.yukseklik, canvas.genislik
*/

/* kendime not */



canvas = document.getElementById("canvas");
context = canvas.getContext("2d");


/* heroes */
var wall = document.getElementsByClassName("wall")[0];


/* heroes skills */
var heroSkills = document.getElementsByClassName("config")[0];


/* variables */
var globalHeroImageSelected = null; 	// image of the chosen hero
var mapOnTheHeroes = []; 	// hero information on the map
var mapOnTheHeroesConfigs = []; 	// hero settings on the map
var wrongPlaces = []; 	// forbidden places on the map
var white = "rgba(0, 0, 0, 0.2)";
var red = "rgba(207, 0, 15, 0.3)";
var icemans = []; // array in icemans

mapOnTheHeroesConfigs.push({status:0});


//setInterval(draw,255);

function draw(e) {
	//console.log("x: ", e.offsetX, " y: ", e.offsetY);
	context.clearRect(0, 0, canvas.width, canvas.height); 	// context is clear
	putHeroesMap(); 	// puts the heroes on the map
	if (globalHeroImageSelected != null) {
		context.drawImage(
			globalHeroImageSelected,
			0,
			0,
			50,
			50,
			(e.offsetX-globalHeroImageSelected.getAttribute("ww")*3),
			(e.offsetY-globalHeroImageSelected.getAttribute("wh")),
			70,
			70
		);
		context.beginPath();
		context.arc(e.offsetX,
					e.offsetY,
					globalHeroImageSelected.getAttribute("area"),
					(0*Math.PI),
					(2*Math.PI)
					);
		context.fillStyle = whiteOrRed((e.offsetX), (e.offsetY));
		context.fill();
	}
}


/* hero is actions */
function imageSelect(selectedImage){
	console.log(selectedImage)
	//globalHeroImageSelected = selectedImage;
	/*
	if (selectedImage.id == "imgIceman") {
		globalHeroImageSelected = imgIcemanSpriteLeft;
	} else if (selectedImage.id == "imgFireman") {
		globalHeroImageSelected = imgFiremanSpriteLeft;
	}
	*/
	if (selectedImage.id == "imgIceman") {
		globalHeroImageSelected = new Iceman().moveLeft();
	} else if (selectedImage.id == "imgFireman") {
		globalHeroImageSelected = imgFiremanSpriteLeft;
	}
	
}


/* put heroes array */
function putHeroesArray(e) {
	if (globalHeroImageSelected != null){
		if (isitPut(e.offsetX, e.offsetY)) {
			mapOnTheHeroes.push({
				status: 1,
				isThereMap: 0,
				img: globalHeroImageSelected,
				imgX: 0,
				imgY: 0,
				imgH: 50,
				imgW: 50,
				cnsX: (e.offsetX-globalHeroImageSelected.getAttribute("ww")*3),
				cnsY: (e.offsetY-globalHeroImageSelected.getAttribute("wh")),
				cnsH: 70,
				cnsW: 70
			});

			/* wrong places adding */
			wrongPlaces.push({
				imgWX: {
					start: e.offsetX-globalHeroImageSelected.getAttribute("ww")*3,
					end: e.offsetX+parseInt(globalHeroImageSelected.getAttribute("ww")*3)
				},
				imgWY: {
					start: e.offsetY-globalHeroImageSelected.getAttribute("wh")*2,
					end: e.offsetY+parseInt(globalHeroImageSelected.getAttribute("wh")*2)
				}
			});

			/* hero is create */
			/*
			if (globalHeroImageSelected == imgIcemanSpriteLeft) {
				icemans.push(new Iceman(
					{
						start: e.offsetX-globalHeroImageSelected.getAttribute("ww"),
						end: e.offsetX+parseInt(globalHeroImageSelected.getAttribute("ww"))
					}, 
					{
						start: e.offsetY-globalHeroImageSelected.getAttribute("wh"),
						end: e.offsetY+parseInt(globalHeroImageSelected.getAttribute("wh"))
					}, 
					Math.round(Math.random()*100))
				);
			}
			*/

			/* hero is create in the map */
			if (toString(globalHeroImageSelected) == toString(new Iceman().moveLeft())) {
				var icemanTemp = new Iceman();
				icemanTemp.create(
				{
					start: e.offsetX-globalHeroImageSelected.getAttribute("ww"),
					end: e.offsetX+parseInt(globalHeroImageSelected.getAttribute("ww"))
				}, 
				{
					start: e.offsetY-globalHeroImageSelected.getAttribute("wh"),
					end: e.offsetY+parseInt(globalHeroImageSelected.getAttribute("wh"))
				}, 
				Math.round(Math.random()*100));
				icemans.push(icemanTemp);
			}

		}
	}
}


/* put heroes map */
function putHeroesMap() {
	if (mapOnTheHeroes != []) {
		mapOnTheHeroes.forEach(function(value){
			if (value.status == 1) {
				context.drawImage(
					value.img,
					value.imgX,
					value.imgY,
					value.imgH,
					value.imgW,
					value.cnsX,
					value.cnsY,
					value.cnsH,
					value.cnsW
				)
			}
		})
	}

	/* hero get area */
	if (mapOnTheHeroesConfigs != []) {
		mapOnTheHeroesConfigs.forEach(function(value){
			if (value.status == 1) {
				context.beginPath();
				context.arc(
					value.x,
					value.y,
					value.area,
					value.pi1,
					value.pi2,
				);
				context.fillStyle = white;
				context.fill();
			}
		})
	}
}


/* does the hero put on the map */
function isitPut(x, y){

	let isitFree = true;
	if ((x-globalHeroImageSelected.getAttribute("ww"))>0 && 
		 x<(canvas.width-globalHeroImageSelected.getAttribute("ww")*2) && 
		 (y-globalHeroImageSelected.getAttribute("wh"))>0 && 
		 y<(canvas.height-globalHeroImageSelected.getAttribute("wh")*2)
		) {
		wrongPlaces.forEach(function(wp){
			if (x > wp.imgWX.start &&
				x < wp.imgWX.end &&
				y > wp.imgWY.start &&
				y < wp.imgWY.end) {
				isitFree = false;
			}
			/* heroes area */
			/*
			if (x>(wp.imgWX-globalHeroImageSelected.getAttribute("ww")*2) &&
				x<(wp.imgWX+parseInt(globalHeroImageSelected.getAttribute("ww")*2)) &&
				y>(wp.imgWY-globalHeroImageSelected.getAttribute("wh")*2) &&
				y<(wp.imgWY+parseInt(globalHeroImageSelected.getAttribute("wh")*2))
			   ) {
				isitFree = false;
			}
			*/


		});

		if (isitFree) {
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}

}


/* area is white or red */
function whiteOrRed(x, y){
	if (isitPut(x, y)) {
		return white;
	} else {
		return red;
	}
}


