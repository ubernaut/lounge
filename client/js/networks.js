"use strict";

const $ = require("jquery");
const _ = require("lodash");

$("#sidebar").on("scroll", _.debounce(() => {
	$("#more-unreads").css("position", "absolute");
	$("#more-unreads").css("bottom", "0");
	let wasUnread = false;
	const h = $("#sidebar").height();
	$("#sidebar").find(".chan").each(function() {
		if ($(this).position().top > h && $(this).find(".badge").innerHtml !== "") {
			console.log("More unread");
			wasUnread = true;
		}
	});
	console.log(`Was unread: ${wasUnread}`);
}, 250, {leading: true}));
