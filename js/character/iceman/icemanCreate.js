class Iceman {
	constructor() {
		this.imgIcemanSpriteLeft = document.createElement("img");
		this.imgIcemanSpriteLeft.setAttribute("id", "imgIcemanSpriteLeft");
		this.imgIcemanSpriteLeft.setAttribute("src", "img/character/iceman/iceman_map_in_left.png");
		this.imgIcemanSpriteLeft.setAttribute("width", "50");
		this.imgIcemanSpriteLeft.setAttribute("height", "50");
		this.imgIcemanSpriteLeft.setAttribute("wh", "25");
		this.imgIcemanSpriteLeft.setAttribute("ww", "10");
		this.imgIcemanSpriteLeft.setAttribute("area", "75");
	}

	create(xpoint, ypoint, id) {
		this.xpoint = xpoint;
		this.ypoint = ypoint;
		this.id = id;
	}

	toString() {
		return this.xpoint + " " + this.ypoint;
	}

	moveLeft() {
		return this.imgIcemanSpriteLeft;
	}

	click(x, y) {
		if (x>this.xpoint.start &&
		    x<this.xpoint.end &&
		    y>this.ypoint.start &&
		    y<this.ypoint.end
		   ) {
		   	console.log(this.id);
			this.imgIcemanSpriteLeft.setAttribute("area", "150");
			this.getArea();
			return true;
		} else {
			return false;
		}
	}

	getArea() {
		/*
		console.log(mapOnTheHeroes)
		context.beginPath();
		context.arc((this.xpoint.start+this.xpoint.end)/2,
					(this.ypoint.start+this.ypoint.end)/2,
					this.imgIcemanSpriteLeft.getAttribute("area"),
					(0*Math.PI),
					(2*Math.PI)
					);
		context.fillStyle = white;
		context.fill();
		*/

			mapOnTheHeroesConfigs.push({
				status: 1,
				x: (this.xpoint.start+this.xpoint.end)/2,
				y: (this.ypoint.start+this.ypoint.end)/2,
				area: this.imgIcemanSpriteLeft.getAttribute("area"),
				pi1: (0*Math.PI),
				pi2: (2*Math.PI)
			})
		
		
	}
}


var imgIceman = document.createElement("img");
imgIceman.setAttribute("id", "imgIceman");
imgIceman.setAttribute("src", "img/character/iceman/iceman_wall.png");
imgIceman.setAttribute("width", "50");
imgIceman.setAttribute("height", "50");
imgIceman.setAttribute("onclick", "imageSelect(this)");

/*
var imgIcemanSpriteLeft = document.createElement("img");
imgIcemanSpriteLeft.setAttribute("id", "imgIcemanSpriteLeft");
imgIcemanSpriteLeft.setAttribute("src", "img/character/iceman/iceman_map_in_left.png");
imgIcemanSpriteLeft.setAttribute("width", "50");
imgIcemanSpriteLeft.setAttribute("height", "50");
imgIcemanSpriteLeft.setAttribute("wh", "25");
imgIcemanSpriteLeft.setAttribute("ww", "10");
imgIcemanSpriteLeft.setAttribute("area", "75");
*/

/* add the hero to the wall */
wall.appendChild(imgIceman);




//iceman.imgIceman.setAttribute("onclick", iceman.moveLeft());

/*
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}

let myCar = new Car("Ford", 2014);
document.getElementById("demo").innerHTML =
"My car is " + myCar.age() + " years old.";
*/


