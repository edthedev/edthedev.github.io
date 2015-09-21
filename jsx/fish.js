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

		srcAttr = fish1.attr("src").replace(".png","");
		fish1.attr("src", srcAttr + "L.png");

		fish1.animate({left: '-=800px'}, 3000);
		window.setTimeout(this.swim_right, 3000);
	},
	swim_right: function(){
		var fish1 = $("#" + this.props.id);

		srcAttr = fish1.attr("src").replace("L.png","");
		fish1.attr("src", srcAttr + ".png");

		console.log("src attr", srcAttr);
		console.log("fish1", fish1);
		fish1.animate({left: '+=800px'}, 3000);
		window.setTimeout(this.swim_left, 3000);
	},
	swim_loop: function(){
		this.swim_right();
	},
	render: function() {
		return <img id={this.props.id} src="static/img/fish/toothFishL.png" />;
	}
});

var FishBowl = React.createClass({
	render: function() {
		console.log("render bowl");
		return <div>
			<Fish id="f1" img="static/img/fish/toothFishL.png" />
			<Fish id="f2" img="static/img/fish/toothFishL.png" />
			Hello world.
		</div>;
	}
});
React.render(<FishBowl />, document.getElementById('sea'));
