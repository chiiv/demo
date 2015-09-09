define([
	"backbone",
	"backbone.app",
	"app/controllers/common",
	"app/layouts/default",
	"app/layouts/home"
	], function( Backbone, APP, Common, LayoutDefault, LayoutHome ){

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
					title: ( onscribe.isAuth() ) ? locale.get("header-home") : locale.get("header-index")
				})
			});

			if( onscribe.isAuth() ){
				this.layout = new LayoutHome({ data: this.data });
			} else {
				this.layout = new LayoutDefault({ data: this.data });
			}
		}

	});

	// save in the global namespace
	APP.Routers.Default = Router;

	return Router;

});