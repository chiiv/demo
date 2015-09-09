define(["app/views/common"], function( Common ){

	var Parent = Common;

	var View = Parent.extend({

		el: ".main-content",

		options: {
			url: "/assets/html/index.html"
		}
	});

	// save in the global namespace
	APP.Views.Index = View;

	return View;

});
