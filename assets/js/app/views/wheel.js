define(["app/views/common"], function( Common ){

	var Parent = Common;

	var View = Parent.extend({

		el: ".wof",

		options: {
			render: false
		},

		events: {
			"click .needle": "start"
		},

		state: {
			degrees: 0,
			spinning: false
		},

		initialize: function( options ){
			this.setup();
			// post transition events
			return Parent.prototype.initialize.call(this, options);
		},

		setup: function(){
			var $spinner = $(this.el).find(".spinner");
			$spinner.on('transitionend webkitTransitionEnd oTransitionEnd', _.bind(this.reset, this));

		},

		start: function( e ){
			// prerequisites
			if( this.state.spinning ) return false;
			// variables
			var $spinner = $(this.el).find(".spinner");
			// randomize strength ( 5 < x < 10 )
			var rotations = 5 + ( Math.random()* 5 );
			var degrees = this.state.degrees + Math.round( rotations*360 );
			// in the future: update data-rotate attribute
			//$(this.el).find(".spinner").attr("data-rotate", degrees);

			$spinner.css({
				'-webkit-transform': "rotate3d(0,0,1,"+ degrees +"deg)",
				'-o-transform': "rotate3d(0,0,1,"+ degrees +"deg)",
				'-ms-transform': "rotate3d(0,0,1,"+ degrees +"deg)",
				'-moz-transform': "rotate3d(0,0,1,"+ degrees +"deg)",
				'transform': "rotate3d(0,0,1,"+ degrees +"deg)"
			});
			// update state
			this.state.spinning = true;
			this.state.degrees = degrees;
		},

		reset: function(){
			_.log("reset");
			var self = this;
			// reset degrees to < 360
			var degrees = this.state.degrees - ( Math.floor( this.state.degrees / 360 ) * 360 );
			// update dom
			var $spinner = $(this.el).find(".spinner");
			$spinner.removeClass("transition");
			$spinner.css({
				'-webkit-transform': "rotate3d(0,0,1,"+ degrees +"deg)",
				'-o-transform': "rotate3d(0,0,1,"+ degrees +"deg)",
				'-ms-transform': "rotate3d(0,0,1,"+ degrees +"deg)",
				'-moz-transform': "rotate3d(0,0,1,"+ degrees +"deg)",
				'transform': "rotate3d(0,0,1,"+ degrees +"deg)"
			});
			// why doesn't jQuery's delay() work?
			setTimeout(function(){
				$spinner.addClass("transition");
				// release the wheel
				self.state.spinning = false;
				// save new degrees in state
				self.state.degrees = degrees;
				// display achievement
				self._findPrize();
			},300);

		},

		// internal
		_findPrize: function(){
			//console.log( this.state.degrees );
			var degrees = this.state.degrees;
			// prizes are doubles to cover the whole circle
			var prizes = 2 * this.collection.length;
			var prize = Math.floor(degrees / (360 / prizes) );
			if( prize >= this.collection.length ) prize -= this.collection.length;
			console.log( prize );
			console.log( this.collection.at( prize ).get("text") );
		}

	});

	return View;

});
