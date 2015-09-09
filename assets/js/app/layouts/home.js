define(["backbone.app", "app/layouts/common", "app/views/home"], function( APP, Common, Content ){

	var Parent = Common;

	var Layout = Parent.extend({

		name: "home",

		options: {
			classNames: ""
		},

		initialize: function(options){

			this.set({
				content: new Content()
			});

			return Parent.prototype.initialize.call(this, options);
		}
	});

	// save in the global namespace
	APP.Layouts.Home = Layout;

	return Layout;

});