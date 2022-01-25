/* global variables */
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var wall;
var heroSkills;
var gameStatus = true;
var start;

const CANVAS_WIDTH = canvas.width;
const CANVAS_HEIGHT = canvas.height;


/* heroes */
wall = document.getElementsByClassName("wall")[0];


/* heroes skills */
heroSkills = document.getElementsByClassName("config")[0];


/* game start (animationFrame) */
lftd = () => {




	if (gameStatus)
		window.requestAnimationFrame(lftd);
}


/* get mouse position */
getMousePos = (canvas, event) => {
	let rect = canvas.getBoundingClientRect();
	return {
		x: event.clientX - rect.left,
		y: event.clientY - rect.top
	};
}