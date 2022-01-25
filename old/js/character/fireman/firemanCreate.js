var imgFireman = document.createElement("img");
imgFireman.setAttribute("id", "imgFireman");
imgFireman.setAttribute("src", "img/character/fireman/fireman_wall.png");
imgFireman.setAttribute("width", "50");
imgFireman.setAttribute("height", "50");
imgFireman.setAttribute("onclick", "imageSelect(this)");


/* hero is in the map */
var imgFiremanSpriteLeft = document.createElement("img");
imgFiremanSpriteLeft.setAttribute("id", "imgFiremanSpriteLeft");
imgFiremanSpriteLeft.setAttribute("src", "img/character/fireman/fireman_map_in_left.png");
imgFiremanSpriteLeft.setAttribute("width", "50");
imgFiremanSpriteLeft.setAttribute("height", "50");
imgFiremanSpriteLeft.setAttribute("wH", "25");
imgFiremanSpriteLeft.setAttribute("wW", "10");
imgFiremanSpriteLeft.setAttribute("area", "100");



wall.appendChild(imgFireman);