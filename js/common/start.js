class Start {


	constructor() {
		this.startStatus = false; // game start status
		this.create();

	}



	create() {
		canvas.style.backgroundImage = "url('img/index/main.jpg')"; // createt background
		this.startButtonDOM(); // start button create
	}



	startButtonDOM() {
		context.beginPath();
		context.rect(CANVAS_WIDTH/2.5, CANVAS_HEIGHT/5, 160, 41); 
		context.fillStyle = '#FFFFFF'; 
		context.fillStyle = 'rgba(0,0,0,1)';
		context.fill(); 
		context.lineWidth = 2;
		context.strokeStyle = '#fff'; 
		context.stroke();
		context.closePath();
		context.font = 'bold 25pt roboto-regulars';
		context.fillStyle = '#fff';
		context.fillText('Start', CANVAS_WIDTH/2.2, CANVAS_HEIGHT/4);

	}

	startButtonClear() {
		context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
	}


	getStartButtonRect() {
		return {
			x: CANVAS_WIDTH/2.5,
			y: CANVAS_HEIGHT/5,
			width: 160,
			heigth: 41
		};
	}


	isInside(x, y){
		let rect = this.getStartButtonRect();
		return x > rect.x && x < rect.x+rect.width && y < rect.y+rect.heigth && y > rect.y;
	}




}