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
			spinning: false
		},

		start: function( e ){
			// prerequisites
			if( this.state.spinning ) return false;

			// randomize strength ( 5 < x < 10 )
			var rotations = 5 + ( Math.random()* 5 );
			var degrees = Math.round( rotations*360 );
			// in the future: update data-rotate attribute
			//$(this.el).find(".spinner").attr("data-rotate", degrees);

			$(this.el).find(".spinner").css(
				{
					'-webkit-transform': "rotate3d(0,0,1,"+ degrees +"deg)",
					'-o-transform': "rotate3d(0,0,1,"+ degrees +"deg)",
					'-ms-transform': "rotate3d(0,0,1,"+ degrees +"deg)",
					'-moz-transform': "rotate3d(0,0,1,"+ degrees +"deg)",
					'transform': "rotate3d(0,0,1,"+ degrees +"deg)"
				}
			);
		}

	});

	return View;

});
