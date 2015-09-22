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
	swim_left: function(){
		var fish1 = $("#" + this.props.id);
		fish1.attr("src", this.props.img + "L" + this.props.ext);

		var swimTime = Math.random() * 5000 + 1500;

		var upDrift = this.getRndUpDrift();

		fish1.animate({left: '-=800px', top: upDrift}, swimTime);
		window.setTimeout(this.swim_right, swimTime);
	},
	getRndUpDrift: function() {
		var upDriftAmt = Math.random() * 200;
		var smallDriftAmt = Math.random() * 50;
		if(Math.random > .1) upDriftAmt = smallDriftAmt;

		var upDriftDir = "+";
		if(Math.random() > .5) upDriftDir = "-";
		var upDrift = upDriftDir + "=" + upDriftAmt;
		return upDrift;
	},
	swim_right: function(){

		var swimTime = Math.random() * 5000 + 1500;

		var upDrift = this.getRndUpDrift();
	},
	swim_loop: function(){

		var fish1 = $("#" + this.props.id);
		console.log("fish1", fish1);
		var left = this.props.brain.left();
		var up = this.props.brain.up();
		var swimTime = this.props.brain.speed();
		var upDrift = this.getRndUpDrift();
		console.log("stuff", left, up, swimTime, upDrift);

		var leftAnim;
		if(left > 0) {
			fish1.attr("src", this.props.img + this.props.ext);
			leftAnim = "+" + left + "px";
		} else {
			fish1.attr("src", this.props.img + "L" + this.props.ext);
			leftAnim = left + "px";
		}

		fish1.animate({left: leftAnim, top: upDrift}, swimTime);

		window.setTimeout(this.swim_loop, swimTime);

	},
	render: function() {
		return <img id={this.props.id} src={this.props.img + this.props.ext} />;
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
		return 0;
	},
	speed: function() {
		return 1000;
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
			return <Fish id={"tinyFish" + id} img="static/img/fish/tinyFish" ext=".jpg" brain={TinyBrain} />;
		});
		return <div>
			<Fish id="s1" img="static/img/fish/scaredFish" ext=".png" brain={TinyBrain} />
			<Fish id="s2" img="static/img/fish/scaredFish" ext=".png" brain={TinyBrain} />
			<Fish id="t1" img="static/img/fish/toothFish" ext=".png" brain={TinyBrain} />
			<Fish id="bt1" img="static/img/fish/bigTooth" ext=".jpg" brain={TinyBrain} />
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

