define(["backbone.app", "app/layouts/common", "app/views/index"], function( APP, Common, Content ){

	var Parent = Common;

	var Layout = Parent.extend({

		name: "default",

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
	APP.Layouts.Default = Layout;

	return Layout;

});