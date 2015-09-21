define(["underscore", "backbone.app"], function( _, APP ){

	var Parent = APP.Model;

	var Model = Parent.extend({

		idAttribute: '_id',
		//

	});

	// save in the global namespace
	APP.Models.Common = Model;

	return Model;

});
