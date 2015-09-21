define(["backbone.app", "app/layouts/common", "app/views/wheel", "app/views/next-achievements"], function( APP, Common, Wheel, NextAchievements ){

	var Parent = Common;

	var Layout = Parent.extend({

		name: "default",

		options: {
			classNames: ""
		},

		initialize: function(options){

			this.set({
				wheel: new Wheel({
					collection: options.data.get("prizes")
				}),
				"next-achievements": new NextAchievements()
			});

			return Parent.prototype.initialize.call(this, options);
		}
	});

	// save in the global namespace
	APP.Layouts.Default = Layout;

	return Layout;

});
