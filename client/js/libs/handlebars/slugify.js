"use strict";

module.exports = function(orig) {
	return orig ? orig.toLowerCase().replace(/[^a-z0-9]/, "-") : undefined;
};
