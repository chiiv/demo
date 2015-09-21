define(["underscore", "backbone.app"], function( _, APP ){

	var Parent = APP.Collection;

	return Parent.extend({

		options: {
			autofetch: true
		},

		url: "/data/prizes.json"

	});

});
