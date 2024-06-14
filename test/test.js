var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 600;

document.addEventListener("DOMContentLoaded", () => {
	lftd();
});

lftd = () => {
    window.requestAnimationFrame(lftd);
    draw();
}

/*

context.drawImage(
    value.img,
    value.imgX,
    value.imgY,
    value.imgW,
    value.imgH,
    value.cnsX,
    value.cnsY,
    value.cnsW,
    value.cnsH
)

*/

var x = 0;
var y = 0;

var spriteMonsterImage = new Image();
var iw = 800;
var cx = 400;
var cy = 300;
var frame = 0;
spriteMonsterImage.src = "../img/character/iceman/icemanv2_fire1.png";

var TO_RADIANS = Math.PI/180; 

var fireHereReal = [];
showed = () => {
    fireHere.forEach((val) => {
        fireHereReal.push(JSON.parse(val));
    });
}

fire = (val) => {

    context.drawImage(
        spriteMonsterImage,
        iw,
        0,
        80,
        80,
        cx,
        cy,
        40,
        40
    );
    
}

draw = () => {

    

        context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        showed();

        fireHereReal.forEach((val) => {
            fire(val)
        });



        return;

        context.drawImage(
            spriteMonsterImage,
            iw,
            0,
            80,
            80,
            cx,
            cy,
            40,
            40
        );

        if (x>400) {
            context.save(); 
            context.translate(x, y);
            context.rotate(180 * TO_RADIANS);
            context.drawImage(
                spriteMonsterImage,
                iw,
                0,
                80,
                80,
                x-cx,
                y-cy,
                40,
                40
            );
        } else {
            context.drawImage(
                spriteMonsterImage,
                iw,
                0,
                80,
                80,
                cx, // x-cx,
                cy, // y-cy,
                40,
                40
            );
        }
    
        

        iw -= 80;
        if (iw <= 0) {
            iw = 800;
        }

        if (Math.abs(x-cx) <= x/10 && Math.abs(y-cy) <= y/10) {
            console.log("cx: " + cx + "- x: " + x + " cy: " + cy + "- y: " + y);
            cx = 400;
            cy = 300;
        }

        if (cy < y) {
            cy += 3;
        }
        if (cy > y) {
            cy -= 3;
        } 
        if (cx < x) {
            cx += 3;
        }
        if (cx > x) {
            cx -= 3;
        } 
        
        
        /*
        if (cx+20 >= x && cy+20 >= y) {
            cx = 400;
            cy = 400;
        }
        if (cx < x) {
            cx += x/100;
        } 
        if (cx > x) {
            cx -= x/100;
        } 
        if (cy < y) {
            cy += y/100;
        }
        if (cy > y) {
            cy -= y/100;
        }
        */

        context.restore(); 


}


var fireHere = [];
document.addEventListener("mousemove", (event) => {
    // console.log("X: " + event.clientX + "- Y: " + event.clientY);
    
    x = event.clientX;
    y = event.clientY;
    
        let t = {"x":x,"y":y};
        fireHere.push(JSON.stringify(t));
        fireHere = fireHere.filter(onlyUnique);
    
})



function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
}