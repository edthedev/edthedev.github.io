var Fish = React.createClass({
	componentDidMount: function() {
		console.log("mount");
		// Be random start point
		// var sea = $("#sea");
	// var newFish = "<img id=fish1 src='static/img/fish/toothFishL.png'>";
	// var newFish = Fish()
	// sea.append(newFish);
		var newFish = $("#" + this.props.id);
		var newTop = Math.random() * 400;
		var newLeft = Math.random() * 900;
		// console.log("moving", this.props.id, "to", newtop, newLeft);
		newFish.css({top: newTop, left: newLeft, position:'absolute'});
		this.swim_loop();
	},
	swim_loop: function(){

		var fish1 = $("#" + this.props.id);
		console.log("fish1", fish1);
		var left = this.props.brain.left();
		var upDrift = this.props.brain.up();
		var swimTime = this.props.brain.speed();
		console.log("stuff", left, swimTime, upDrift);

		var leftAnim;
		if(left > 0) {
			fish1.attr("src", this.props.img + this.props.ext);
			leftAnim = "+=" + left + "px";
		} else {
			fish1.attr("src", this.props.img + "L" + this.props.ext);
			leftAnim = "-=" + Math.abs(left) + "px";
		}

		console.log("leftAnim", leftAnim);
		fish1.animate({left: leftAnim, top: upDrift}, swimTime);

		window.setTimeout(this.swim_loop, swimTime);

	},
	render: function() {
		return <img id={this.props.id} src={this.props.img + this.props.ext} style={{width:this.props.size}} />;
	}
});

var TinyBrain = {
	left: function() {
		if(Math.random() > .5)
		{
			return 800;
		}
		else
		{
			return -800
		}
	},
	up: function() {
		var upDriftAmt = Math.random() * 400;
		var smallDriftAmt = Math.random() * 50;
		if(Math.random > .1) upDriftAmt = smallDriftAmt;

		var upDriftDir = "+";
		if(Math.random() > .5) upDriftDir = "-";
		var upDrift = upDriftDir + "=" + upDriftAmt;
		return upDrift;
	},
	speed: function() {
		return Math.random() * 5000 + 1500;
	}
};

var FastBrain = jQuery.extend({}, TinyBrain);
FastBrain.speed = function() {
		return Math.random() * 2000 + 600;
};

var WiggleBrain = {
	dir: 1,
	upDir: 1,
	left: function() {
		if(Math.random() > .9) this.dir = -this.dir;
		return this.dir * 200;
	},
	up: function() {
		this.upDir = -this.upDir;
		var upDriftAmt = Math.random() * 100;
		var smallDriftAmt = Math.random() * 50;
		if(Math.random > .1) upDriftAmt = smallDriftAmt;

		var upDriftDir = "+";
		if(this.upDir < 0) upDriftDir = "-";
		var upDrift = upDriftDir + "=" + upDriftAmt;
		return upDrift;
	},
	speed: function() {
		return Math.random() * 4000 + 500;
	}
};


var SlowBrain = {
	left: function() {
		if(Math.random() > .5)
		{
			return 300;
		}
		else
		{
			return -300
		}
	},
	up: function() {
		var upDriftAmt = Math.random() * 200;
		var smallDriftAmt = Math.random() * 50;
		if(Math.random > .1) upDriftAmt = smallDriftAmt;

		var upDriftDir = "+";
		if(Math.random() > .5) upDriftDir = "-";
		var upDrift = upDriftDir + "=" + upDriftAmt;
		return upDrift;
	},
	speed: function() {
		return Math.random() * 5000 + 1500;
	}
};


var FishBowl = React.createClass({
	render: function() {
		console.log("render bowl");
		var fishCount = [];
		for(i=0; i<9; i++){
			fishCount.push(i);
		}
		var tinyFish = fishCount.map( function( id ) {
			return <Fish id={"tinyFish" + id} img="static/img/fish/tinyFish" ext=".jpg" brain={TinyBrain} size="30px" />;
		});
		return <div>
			<Fish id="eye1" img="static/img/fish/eyeStalk" ext=".jpg" brain={SlowBrain} size="200px"/>
			<Fish id="s1" img="static/img/fish/scaredFish" ext=".png" brain={WiggleBrain} />
			<Fish id="t1" img="static/img/fish/toothFish" ext=".png" brain={WiggleBrain} />
			<Fish id="t2" img="static/img/fish/buckToothFish" ext=".jpg" brain={TinyBrain} />
			<Fish id="bt1" img="static/img/fish/bigTooth" ext=".jpg" brain={SlowBrain} />
			<Fish id="bt2" img="static/img/fish/scarySharpTeethBanana" ext=".jpg" brain={FastBrain} size="450px"/>
			{tinyFish}
		</div>;
	}
});
React.render(<FishBowl />, document.getElementById('sea'));
/*
 *
 *

			<Fish id="f1" img="static/img/fish/toothFishL.jpg" />
			<Fish id="f2" img="static/img/fish/scaredFishL.jpg" />
			<Fish id="f3" img="static/img/fish/toothFishL.jpg" />
			<Fish id="f4" img="static/img/fish/tinyFishL.jpg" />
			<Fish id="f4" img="static/img/fish/tinyFishL.jpg" />

 */

