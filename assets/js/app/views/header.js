define(["app/views/common"], function( Common ){

	var Parent = Common;

	var View = Parent.extend({

		el: "body > header",

		postRender: function(){
			// replace the title
			$(this.el).find("h1").html( this.model.get("title") );
		}
	});

	// save in the global namespace
	APP.Views.Header = View;

	return View;

});
