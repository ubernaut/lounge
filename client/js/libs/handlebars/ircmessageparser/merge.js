"use strict";

const anyIntersection = require("./anyIntersection");
const fill = require("./fill");

function assign(textPart, fragment) {
	const start = Math.max(fragment.start, textPart.start);
	const end = Math.min(fragment.end, textPart.end);

	return Object.assign({}, fragment, {
		start: start,
		end: end,
		text: fragment.text.slice(start - fragment.start, end - fragment.start)
	});
}

function merge(textParts, styleFragments) {
	const cleanText = styleFragments.map(fragment => fragment.text).join("");

	const allParts = textParts
		.concat(fill(textParts, cleanText))
		.sort((a, b) => a.start - b.start);

	return allParts.map(textPart => {
		textPart.fragments = styleFragments
			.filter(fragment => anyIntersection(textPart, fragment))
			.map(fragment => assign(textPart, fragment));

		return textPart;
	});
}

module.exports = merge;
