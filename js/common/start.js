class Start {




	constructor() {
		this.startStatus = false;
		this.create();

	}



	create() {
		canvas.style.backgroundImage = "url('img/index/main.jpg')";

		// start button create
		this.startButtonDOM();
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


	getStartButtonRect() {
		return {
			x: CANVAS_WIDTH/2.5,
			y: CANVAS_HEIGHT/5,
			width: 160,
			heigth: 41
		};
	}


	isInside(pos){
		let rect = this.getStartButtonRect();
		return pos.x > rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.heigth && pos.y > rect.y;
	}




}