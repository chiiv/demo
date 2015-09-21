define([
	"backbone",
	"backbone.app",
	"app/controllers/common",
	"app/layouts/default",
	"app/collections/prizes"
], function( Backbone, APP, Common, Layout, Prizes ){

	var Router = Common.extend({

		routes: {
			"": "index"
		},

		index: function(){
			_.log("in index");
			//
			var locale = this.data.get("locale");

			this.data.set({
				header: new Backbone.Model({
					//title: ( onscribe.isAuth() ) ? locale.get("header-home") : locale.get("header-index")
				}),
				prizes: new Prizes()
			});

			this.layout = new Layout({ data: this.data });

		}

	});

	// save in the global namespace
	APP.Routers.Default = Router;

	return Router;

});
