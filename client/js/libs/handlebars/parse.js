"use strict";

const Handlebars = require("handlebars/runtime");
const parseStyle = require("./ircmessageparser/parseStyle");
const findChannels = require("./ircmessageparser/findChannels");
const findLinks = require("./ircmessageparser/findLinks");
const merge = require("./ircmessageparser/merge");

function createFragment(fragment) {
	let classes = [];
	if (fragment.bold) {
		classes.push("irc-bold");
	}
	if (fragment.textColor !== undefined) {
		classes.push("irc-fg" + fragment.textColor);
	}
	if (fragment.bgColor !== undefined) {
		classes.push("irc-bg" + fragment.bgColor);
	}
	if (fragment.italic) {
		classes.push("irc-italic");
	}
	if (fragment.underline) {
		classes.push("irc-underline");
	}
	const escapedText = Handlebars.Utils.escapeExpression(fragment.text);
	if (classes.length) {
		return `<span class="${classes.join(" ")}">${escapedText}</span>`;
	}
	return escapedText;
}

module.exports = function parse(text) {
	const styleFragments = parseStyle(text);
	const cleanText = styleFragments.map(fragment => fragment.text).join("");

	const channelPrefixes = ["#", "&"]; // TODO Channel prefixes should be RPL_ISUPPORT.CHANTYPES
	const userModes = ["!", "@", "%", "+"]; // TODO User modes should be RPL_ISUPPORT.PREFIX
	const channelParts = findChannels(cleanText, channelPrefixes, userModes);

	const linkParts = findLinks(cleanText);

	const parts = channelParts
		.concat(linkParts)
		.sort((a, b) => a.start - b.start);

	return merge(parts, styleFragments).map(textPart => {
		const fragments = textPart.fragments.map(createFragment).join("");

		if (textPart.link) {
			const escapedLink = Handlebars.Utils.escapeExpression(textPart.link);
			return `<a href="${escapedLink}" target="_blank" rel="noopener">${fragments}</a>`;
		} else if (textPart.channel) {
			const escapedChannel = Handlebars.Utils.escapeExpression(textPart.channel);
			return `<span class="inline-channel" role="button" tabindex="0" data-chan="${escapedChannel}">${fragments}</span>`;
		}

		return fragments;
	}).join("");
};
