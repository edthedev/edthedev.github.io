var AniHelp = {
	toPlusMinus: function( value ) {
		var valueAnim;
		if(value > 0) {
			// fish1.attr("src", this.props.img + this.props.ext);
			valueAnim = "+=" + value + "px";
		} else {
			// fish1.attr("src", this.props.img + "L" + this.props.ext);
			valueAnim = "-=" + Math.abs(value) + "px";
		}
		return valueAnim;
	},
	toImgSrc: function( base, value, ext) {
		if(value > 0) {
			// fish1.attr("src", this.props.img + this.props.ext);
			return base + ext;
		} else {
			return base + "L" + ext;
		}
	}
}

var Flora = React.createClass({displayName: "Flora",
	render: function() {
		var newTop = Math.random() * 400;
		floraCount = [];
		for(i=0; i<3; i++){
			floraCount.push(i);
		}
		var flora = floraCount.map( function( id ) {
			var pos = Math.random() * 90;
			var topish  = Math.random() * 10 + 10;
			var shortish = Math.random() * 40;
			return React.createElement("img", {id: "plant" + this.props.id + id, 
					src: this.props.img, 
					style: {
						top:topish + shortish + "%",
						height:this.props.height - shortish + "%",
						left:pos + "%"
					}}
					);
		}.bind(this));
		return React.createElement("span", null, 
			flora
		);
	}
});

var Fish = React.createClass({displayName: "Fish",
	componentDidMount: function() {
		// console.log("mount");
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
		// console.log("fish1", fish1);
		var left = this.props.brain.left();
		var upDrift = this.props.brain.up();
		var swimTime = this.props.brain.speed();
		// console.log("stuff", left, swimTime, upDrift);

		var pos = fish1.position();
		if(pos.top + upDrift < 0) upDrift = 0;
		if(pos.top + upDrift > .4*screen.height ) upDrift = 0;
		if(pos.left + left < 0) {
			upDrift = 0; // Do not ever swim straight up and down.
			left = 20; // Do not hold totally still.
		}
		if(pos.left + left > screen.width) {
			upDrift = 0;
			left = - 20;
		}

		// Set left/right
		var baseImg = this.props.img;
		if(typeof this.props.brain.changeImg === "function"){
			console.log("change?");
			baseImg = this.props.brain.changeImg(baseImg);
		}
		fish1.attr("src", AniHelp.toImgSrc(baseImg, left, this.props.ext));

		var leftAnim = AniHelp.toPlusMinus(left);
		var upAnim = AniHelp.toPlusMinus(upDrift);

		// console.log("leftAnim", leftAnim);
		fish1.animate({left: leftAnim, top: upAnim}, swimTime);

		window.setTimeout(this.swim_loop, swimTime);

	},
	render: function() {
		// TODO: This method of rendering results in a lot of GET requests.
		return React.createElement("img", {id: this.props.id, src: this.props.img + this.props.ext, style: {width:this.props.size, backgroundColor:"transparent"}});
	}
});

var BrainHelp = {
	up: function( small, large) {
		var upDriftAmt = Math.random() * large;
		var smallDriftAmt = Math.random() * small;
		if(Math.random > .1) upDriftAmt = smallDriftAmt;
		if(Math.random() > .5) upDriftAmt *= -1;
		return upDriftAmt;
	}
}

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
		return BrainHelp.up(50, 400);
	},
	speed: function() {
		return Math.random() * 5000 + 1500;
	}
};

var CrawlBrain = {
	left: function() {
		if(Math.random() > .5)
		{
			return 20;
		}
		else
		{
			return -20
		}
	},
	up: function() {
		return BrainHelp.up(10, 20);
	},
	speed: function() {
		return Math.random() * 1000 + 5000;
	}
};


var FastBrain = jQuery.extend({}, TinyBrain);
FastBrain.speed = function() {
		return Math.random() * 1000 + 700;
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
		return BrainHelp.up(50, 200);
	},
	speed: function() {
		return Math.random() * 5000 + 1500;
	}
};

var PuffBrain = jQuery.extend({}, SlowBrain);
PuffBrain.img = "static/img/fish/littlePuff";
PuffBrain.changeImg = function(img) {
	return PuffBrain.img;
};
PuffBrain.speed = function() {
	var bit = Math.random();
	if(bit < .25)
	{
		PuffBrain.img = "static/img/fish/littlePuff";
	}
	if(bit > .9)
	{
		PuffBrain.img = "static/img/fish/bigPuff";
	}
	return bit * 5000 + 1500;
};

var Bubbler = React.createClass({displayName: "Bubbler",
	getInitialState: function() {
		return {open:false,
			leftPos: Math.random() * .5 * screen.width,
			wide: screen.width * .15,
		
		};
	},
	componentDidMount: function() {
		this.bubble();
	},
	moveBubble: function( timeIt ) {
		var bubs = $("#" + this.props.id + "bubbles");
		bubs.css({top:"75%"});
		bubs.show();
		bubs.animate({top: "-150px" }, 2000, function() {
			bubs.hide();
		});
	},
	bubble: function() {
		this.moveBubble();
		setTimeout(this.close, 1500);
		this.setState({open:true});
	},
	close: function() {
		this.setState({open:false});
		$(this.props.id + "bubbles").hide();
		setTimeout(this.bubble, Math.random() * 10000 + 1500);
	},
	render: function() {
		var open = "";
		if(this.state.open)
			open = "Open";
		return React.createElement("div", null, 
			React.createElement("img", {src: this.props.img + open + this.props.ext, style: {top:"80%", width: this.state.wide, height:"20%", left: this.state.leftPos}, onClick: this.bubble}), 
			React.createElement("img", {id: this.props.id + "bubbles", src: this.props.bubbleImg, style: {top:"60%", height:"40%", left:this.state.leftPos}})
			);
	}
});

var FishBowl = React.createClass({displayName: "FishBowl",
	render: function() {
		console.log("render bowl");
		var fishCount = [];
		for(i=0; i<9; i++){
			fishCount.push(i);
		}
		var scaryFish = "";
		if(Math.random() > .9)
		{
			scaryFish = React.createElement(Fish, {id: "scary", img: "static/img/fish/scarySharpTeethBanana", ext: ".png", brain: FastBrain, size: "200px"});
		} 


		var bubbler = React.createElement(Bubbler, {id: "chest", img: "static/img/fish/treasure", ext: ".png", bubbleImg: "static/img/fish/bubbles.png"});
		if(Math.random() > .95)
		{
			bubbler = React.createElement(Bubbler, {id: "chest", img: "static/img/fish/treasure", ext: ".png", bubbleImg: "static/img/fish/bubbleMan.png"});
		}

		var tinyFish = fishCount.map( function( id ) {
			return React.createElement(Fish, {id: "tinyFish" + id, img: "static/img/fish/tinyFish", ext: ".png", brain: TinyBrain, size: "30px"});
		});
		return React.createElement("div", null, 
React.createElement("img", {id: "sand", src: "static/img/fish/sand.png", className: "sand"}), 
			React.createElement(Fish, {id: "t2", img: "static/img/fish/buckToothFish", ext: ".png", brain: SlowBrain, size: "45px"}), 
			React.createElement(Fish, {id: "t5", img: "static/img/fish/buckToothFish", ext: ".png", brain: SlowBrain, size: "45px"}), 
			React.createElement(Flora, {id: "flora3", img: "static/img/fish/seaweedL.png", height: "80"}), 
			React.createElement(Fish, {id: "t6", img: "static/img/fish/buckToothFish", ext: ".png", brain: SlowBrain, size: "45px"}), 
			React.createElement(Fish, {id: "t7", img: "static/img/fish/buckToothFish", ext: ".png", brain: SlowBrain, size: "45px"}), 
			React.createElement(Fish, {id: "sub3", img: "static/img/fish/subBlack", ext: ".png", brain: SlowBrain, size: "90px"}), 
			React.createElement(Fish, {id: "subG", img: "static/img/fish/subGreen", ext: ".png", brain: SlowBrain, size: "90px"}), 
			React.createElement(Fish, {id: "subY", img: "static/img/fish/subYellow", ext: ".png", brain: SlowBrain, size: "90px"}), 
			React.createElement(Fish, {id: "squid", img: "static/img/fish/squid", ext: ".png", brain: TinyBrain, size: "120px"}), 
			React.createElement(Fish, {id: "puff", img: "static/img/fish/littlePuff", ext: ".png", brain: PuffBrain, size: "45px"}), 
			scaryFish, 
			tinyFish, 
			bubbler, 
			React.createElement(Flora, {id: "flora1", img: "static/img/fish/seaweed.png", height: "80"}), 
			React.createElement(Fish, {id: "t3", img: "static/img/fish/buckToothFish", ext: ".png", brain: SlowBrain, size: "45px"}), 
			React.createElement(Fish, {id: "t4", img: "static/img/fish/buckToothFish", ext: ".png", brain: SlowBrain, size: "45px"}), 
			React.createElement(Fish, {id: "slug", img: "static/img/fish/slug1", ext: ".png", brain: CrawlBrain, size: "15px"}), 
			React.createElement(Flora, {id: "flora2", img: "static/img/fish/seaweed.png", height: "80"})
		);
	}
});
React.render(React.createElement(FishBowl, null), document.getElementById('sea'));


/*
 *
 *
 * These need their backgrounds fixed:
			<Fish id="bt1" img="static/img/fish/bigTooth" ext=".jpg" brain={SlowBrain} size="100px"/>
			<Fish id="sub1" img="static/img/fish/subYellow" ext=".jpg" brain={SlowBrain} size="90px"/>
			<Fish id="sub2" img="static/img/fish/subGreen" ext=".jpg" brain={SlowBrain} size="90px"/>
			<Fish id="eye1" img="static/img/fish/eyeStalk" ext=".jpg" brain={SlowBrain} size="150px"/>
			<Fish id="s1" img="static/img/fish/scaredFish" ext=".png" brain={WiggleBrain} size="30px" />
			<Fish id="t1" img="static/img/fish/toothFish" ext=".png" brain={WiggleBrain} size="40px" />
 *
 *

			<Fish id="f1" img="static/img/fish/toothFishL.jpg" />
			<Fish id="f2" img="static/img/fish/scaredFishL.jpg" />
			<Fish id="f3" img="static/img/fish/toothFishL.jpg" />
			<Fish id="f4" img="static/img/fish/tinyFishL.jpg" />
			<Fish id="f4" img="static/img/fish/tinyFishL.jpg" />

 */

