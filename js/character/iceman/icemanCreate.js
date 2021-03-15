class Iceman {
	constructor(xpoint, ypoint, number) {
		this.xpoint = xpoint;
		this.ypoint = ypoint;
		this.number = number;
		
	}

	moveLeft() {
		
	}

	hops(x, y) {
		if (x>this.xpoint.start &&
		    x<this.xpoint.end &&
		    y>this.ypoint.start &&
		    y<this.ypoint.end
		   ) {
		   	console.log(this.number);
			return true;
		} else {
			return false;
		}
	}
}


var imgIceman = document.createElement("img");
imgIceman.setAttribute("id", "imgIceman");
imgIceman.setAttribute("src", "img/character/iceman/iceman_wall.png");
imgIceman.setAttribute("width", "50");
imgIceman.setAttribute("height", "50");
imgIceman.setAttribute("onclick", "imageSelect(this)");


var imgIcemanSpriteLeft = document.createElement("img");
imgIcemanSpriteLeft.setAttribute("id", "imgIcemanSpriteLeft");
imgIcemanSpriteLeft.setAttribute("src", "img/character/iceman/iceman_map_in_left.png");
imgIcemanSpriteLeft.setAttribute("width", "50");
imgIcemanSpriteLeft.setAttribute("height", "50");
imgIcemanSpriteLeft.setAttribute("wh", "25");
imgIcemanSpriteLeft.setAttribute("ww", "10");
imgIcemanSpriteLeft.setAttribute("area", "75");


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


