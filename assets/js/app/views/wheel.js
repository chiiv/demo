define(["app/views/common"], function( Common ){

	var Parent = Common;

	var View = Parent.extend({

		el: ".wheel",

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
			var rotations = 5 + Math.floor( Math.random()* 5 );
			// in the future: update data-rotate attribute
			//$(this.el).find(".spinner").attr("data-rotate", rotations * 360);

			$(this.el).find(".spinner").css(
				{
					'-webkit-transform': "rotate3d(0,0,1,"+ rotations*360 +"deg)",
					'-o-transform': "rotate3d(0,0,1,"+ rotations*360 +"deg)",
					'-ms-transform': "rotate3d(0,0,1,"+ rotations*360 +"deg)",
					'-moz-transform': "rotate3d(0,0,1,"+ rotations*360 +"deg)",
					'transform': "rotate3d(0,0,1,"+ rotations*360 +"deg)"
				}
			);
		}

	});

	return View;

});
