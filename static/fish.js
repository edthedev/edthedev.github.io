var Fish = React.createClass({displayName: "Fish",
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
		var fish1 = $("#" + this.props.id);
		fish1.attr("src", this.props.img + this.props.ext);

		var swimTime = Math.random() * 5000 + 1500;

		var upDrift = this.getRndUpDrift();
		fish1.animate({left: '+=800px', top: upDrift}, swimTime);
		window.setTimeout(this.swim_left, swimTime);
	},
	swim_loop: function(){
		if(Math.random() > .5)
		{
			this.swim_right();
		}
		else
		{
			this.swim_left();
		}
	},
	render: function() {
		return React.createElement("img", {id: this.props.id, src: this.props.img + this.props.ext});
	}
});

var FishBowl = React.createClass({displayName: "FishBowl",
	render: function() {
		console.log("render bowl");
		var fishCount = [];
		for(i=0; i<9; i++){
			fishCount.push(i);
		}
		var tinyFish = fishCount.map( function( id ) {
			return React.createElement(Fish, {id: "tinyFish" + id, img: "static/img/fish/tinyFish", ext: ".jpg"});
		});
		return React.createElement("div", null, 
			React.createElement(Fish, {id: "s1", img: "static/img/fish/scaredFish", ext: ".png"}), 
			React.createElement(Fish, {id: "s2", img: "static/img/fish/scaredFish", ext: ".png"}), 
			React.createElement(Fish, {id: "t1", img: "static/img/fish/toothFish", ext: ".png"}), 
			React.createElement(Fish, {id: "bt1", img: "static/img/fish/bigTooth", ext: ".jpg"}), 
			tinyFish
		);
	}
});
React.render(React.createElement(FishBowl, null), document.getElementById('sea'));
/*
 *
 *

			<Fish id="f1" img="static/img/fish/toothFishL.jpg" />
			<Fish id="f2" img="static/img/fish/scaredFishL.jpg" />
			<Fish id="f3" img="static/img/fish/toothFishL.jpg" />
			<Fish id="f4" img="static/img/fish/tinyFishL.jpg" />
			<Fish id="f4" img="static/img/fish/tinyFishL.jpg" />

 */

