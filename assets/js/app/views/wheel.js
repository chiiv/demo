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
			//$(this.el).attr("data-rotate", rotations * 360);

		}

	});

	return View;

});
