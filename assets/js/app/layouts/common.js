define(["backbone", "backbone.app", "app/views/header"], function( Backbone, APP, Header ){

	var Parent = APP.Layout;

	return Parent.extend({

		initialize: function(options){

			var data = options.data;

			this.set({
				header: new Header({
					model: data.get("header")
				})
			});

			return Parent.prototype.initialize.call(this, options);
		}

	});

});