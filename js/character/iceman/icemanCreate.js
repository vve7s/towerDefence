var imgIceman = document.createElement("img");
imgIceman.setAttribute("id", "imgIceman");
imgIceman.setAttribute("src", "img/character/iceman/iceman_wall.png");
imgIceman.setAttribute("width", "50");
imgIceman.setAttribute("height", "50");
imgIceman.setAttribute("onclick", "imageSelect(this)");


/* hero is in the map */
var imgIcemanSpriteLeft = document.createElement("img");
imgIcemanSpriteLeft.setAttribute("id", "imgIcemanSpriteLeft");
imgIcemanSpriteLeft.setAttribute("src", "img/character/iceman/iceman_map_in_left.png");
imgIcemanSpriteLeft.setAttribute("width", "50");
imgIcemanSpriteLeft.setAttribute("height", "50");
imgIcemanSpriteLeft.setAttribute("wh", "25");
imgIcemanSpriteLeft.setAttribute("ww", "10");
imgIcemanSpriteLeft.setAttribute("area", "75");


wall.appendChild(imgIceman);