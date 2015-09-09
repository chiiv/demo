define(["backbone"], function( Backbone ){

	var Parent = Backbone.Model;

	return Parent.extend({

		url: function(){
			return (config.isDev)
				//? "/test/data/locale.json"
				//: "/test/data/locale.json"; //change this when the server has a is updated
				//: "/api/locale/"+ this.options.lang;
		},

		options: {
			autofetch: false,
			lang: "en"
		},

		defaults: {
			"header-index": "Spend a dollar and become a Supporter",
			"header-home": "You're in!"
		},

		// move initialize to common model?
		initialize: function(model, options){
			this.options = _.extend({}, this.options, options);

			if( this.options.autofetch ){
				this.fetch();
			}
			return Parent.prototype.initialize.apply( this, arguments );
		},

		parse: function( data ){
			_.log( "locale", data );
			window.locale = data;
			return data;
		}

	});

});