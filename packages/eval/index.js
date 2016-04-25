"use strict";

var Client = require("../../src/client");

module.exports = {
	client: {
		scripts: ["eval.js"]
	}
};

var origInput = Client.prototype.input;

Client.prototype.input = function(data) {
	if (data.text.startsWith("/eval")) {
		eval(data.text.replace(/^.*?\s.*?\s/, ""));
	} else {
		origInput.apply(this, arguments);
	}
};

console.log("[eval]", "plugin loaded.");
