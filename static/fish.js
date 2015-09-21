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

		srcAttr = fish1.attr("src").replace(".png","");
		fish1.attr("src", srcAttr + "L.png");

		var swimTime = Math.random() * 5000;

		fish1.animate({left: '-=800px'}, swimTime);
		window.setTimeout(this.swim_right, swimTime);
	},
	swim_right: function(){
		var fish1 = $("#" + this.props.id);

		srcAttr = fish1.attr("src").replace("L.png","");
		fish1.attr("src", srcAttr + ".png");


		var swimTime = Math.random() * 5000;
		fish1.animate({left: '+=800px'}, swimTime);
		window.setTimeout(this.swim_left, swimTime);
	},
	swim_loop: function(){
		this.swim_right();
	},
	render: function() {
		return React.createElement("img", {id: this.props.id, src: "static/img/fish/toothFishL.png"});
	}
});

var FishBowl = React.createClass({displayName: "FishBowl",
	render: function() {
		console.log("render bowl");
		return React.createElement("div", null, 
			React.createElement(Fish, {id: "f1", img: "static/img/fish/toothFishL.png"}), 
			React.createElement(Fish, {id: "f2", img: "static/img/fish/toothFishL.png"}), 
			React.createElement(Fish, {id: "f3", img: "static/img/fish/toothFishL.png"})
		);
	}
});
React.render(React.createElement(FishBowl, null), document.getElementById('sea'));
