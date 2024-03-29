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
var user; // user

/* they will run when the page is loaded */
document.addEventListener("DOMContentLoaded", function() {

	user = new User(); // creating new user // difficulty level will be added
	user.domForMoney(); // dom for money
	user.domForHealt(); // dom for healt

	chapter = new Chapter1(); // creating chapter map
	chapter.getWrongPlaces(); // creating chapter in wrong places

});

mapOnTheHeroesConfigs.push({status:0});	// bunun ne ise yaradigini unuttum 


setInterval(draw, 250);

function draw(e) {

	if (typeof e != 'undefined') {
		lastOffSetX = e.offsetX;
		lastOffSetY = e.offsetY;
	}

	context.clearRect(0, 0, canvas.width, canvas.height); 	// context is clear
	putHeroesMap(); 	// puts the heroes on the map
	if (globalHeroImageSelected != null) {
		context.drawImage(
			globalHeroImageSelected,
			0,
			0,
			50,
			50,
			((typeof e === 'undefined' ? lastOffSetX : e.offsetX)-globalHeroImageSelected.getAttribute("wh")),
			((typeof e === 'undefined' ? lastOffSetY : e.offsetY)-globalHeroImageSelected.getAttribute("wh")),
			70,
			70
		);
		context.beginPath();
		context.arc((typeof e === 'undefined' ? lastOffSetX : e.offsetX),
					(typeof e === 'undefined' ? lastOffSetY : e.offsetY),
					globalHeroImageSelected.getAttribute("area"),
					(0*Math.PI),
					(2*Math.PI)
					);
		context.fillStyle = whiteOrRed((typeof e === 'undefined' ? lastOffSetX : e.offsetX), (typeof e === 'undefined' ? lastOffSetY : e.offsetY));
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

	
	var hero;
	if (globalHeroImageSelected != null){

		if (toString(globalHeroImageSelected) == toString(new Iceman().moveLeft())){
			hero = new Iceman();

			/* user check money */
			if (!user.checkMoney(hero.getCost())){
				console.log("Para yetersiz");
				return false;
			}

		}

		if (isitPut(e.offsetX, e.offsetY)) {

			/* hero is create in the map */
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

			/* keeps heroes' places on the map */
			if (toString(globalHeroImageSelected) == toString(new Iceman().moveLeft())) {
				hero = new Iceman();
				hero.create(
					{
						start: e.offsetX-globalHeroImageSelected.getAttribute("ww"),
						end: e.offsetX+parseInt(globalHeroImageSelected.getAttribute("ww"))
					}, 
					{
						start: e.offsetY-globalHeroImageSelected.getAttribute("wh"),
						end: e.offsetY+parseInt(globalHeroImageSelected.getAttribute("wh"))
					}, 
					Math.round(Math.random()*100)	// random degil, count sekline artan bir deger olmali
				);
				icemans[hero.getId()] = hero; // assigns hero iceman to directory icemans
			}

			/* user deduct money */
			if (!user.deductMoney(hero.getCost())){
				console.log("Kahramanı alamadin, paran yetersiz olabilir");
				return false;
			}

		}

		

	}
}


/* put heroes map */	/* canvac action click */
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
	if (mapOnTheHeroesConfigs.length > 0) {
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
function whiteOrRed(x, y) {
	if (isitPut(x, y)) {
		return white;
	} else {
		return red;
	}
}


/* hide hero skills */
function heroSkillsHide() {
	while (heroSkills.firstChild) {
    	heroSkills.removeChild(heroSkills.firstChild); 
    }
}
