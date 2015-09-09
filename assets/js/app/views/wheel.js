define(["app/views/common"], function( Common ){

	var Parent = Common;

	var View = Parent.extend({

		el: ".wof",

		options: {
		},

		events: {
			"click .needle": "start"
		},

		state: {
			degrees: 0,
			spinning: false
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
			// post transition events
			$spinner.on('transitionend webkitTransitionEnd oTransitionEnd', _.bind(this.reset, this));
		},

		reset: function(){
			_.log("reset");
			// release the wheel
			this.state.spinning = false;
			// reset degrees to < 360
			var degrees = this.state.degrees - ( Math.floor( this.state.degrees / 360 ) * 360 );
			// update dom
			$(this.el).find(".spinner").removeClass("transition").delay(100).css({
				'-webkit-transform': "rotate3d(0,0,1,"+ degrees +"deg)",
				'-o-transform': "rotate3d(0,0,1,"+ degrees +"deg)",
				'-ms-transform': "rotate3d(0,0,1,"+ degrees +"deg)",
				'-moz-transform': "rotate3d(0,0,1,"+ degrees +"deg)",
				'transform': "rotate3d(0,0,1,"+ degrees +"deg)"
			}).delay(100).addClass("transition");
			// save new degrees in state
			this.state.degrees = degrees;
		}

	});

	return View;

});
