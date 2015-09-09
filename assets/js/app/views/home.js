define(["app/views/common"], function( Common ){

	var Parent = Common;

	var View = Parent.extend({

		el: ".main-content",

		options: {
			url: "/assets/html/home.html"
		}
	});

	// save in the global namespace
	APP.Views.Home = View;

	return View;

});
