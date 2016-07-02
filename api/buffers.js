"use strict";

var Collection = require("???");
var Message = require("./message");


/**
 * Represents a very basic buffer. It contains messages of any kind and a generic API, and nothing more. A buffer
 * typically also is a tab on clients, but can be used for other uses and clients can opt to detach from buffers.
 *
 * @abstract
 */
var Buffer = module.exports.Buffer = function() {
	/** Holds all the messages in this buffer. By default, stores to RAM. */
	this.messages = new Collection(Message);
};



/**
 * A special kind of buffer that doesn't process incoming messages. It instead stores everything as HTML, and can
 * be used for special cases such as plugin interfaces or the server window.
 *
 * @extends {Buffer}
 */
var Terminal = module.exports.Terminal = function() {

};
Terminal.prototype = Object.create(Buffer.prototype);

/**
 * Puts a line on this terminal
 */
Terminal.prototype.putLine = function(line) {
	line;
};



/**
 * Represents an IRC chat between two users. Chat lines are to be processed by the client.
 */
var Query = module.exports.Query = function() {
	/** Sets whether this conversation/user should be ignored */
	this.ignore = false;
};
Query.prototype = Object.create(Buffer.prototype);


/**
 * Performs a `/whois` on the target user of this query
 */
Query.prototype.whois = function() {

};


/**
 * Sends a `/notice` to the target user of this query
 *
 * @param {string} message The message to send in the notice
 */
Query.prototype.notice = function(message) {
	message;
};



/**
 * Sends a raw message to this user
 *
 * @param {string} message The message to send to the user
 */
Query.prototype.say = function(message) {
	message;
};


/**
 * Sends a CTCP
 *
 * @param {string} type The CTCP type
 * @param {string} message The CTCP content message to send
 */
Query.prototype.ctcp = function(type, message) {
	type;
	message;
};


/**
 * Sends an action CTCP
 *
 * @param {string|null} message The action message to send
 */
Query.prototype.action = function(message) {
	message;
};



/**
 * Represents an IRC channel: based on an IRC query, it adds a user list, a topic and modes.
 */
var Channel = module.exports.Channel = function() {

};
Channel.prototype = Object.create(Query.prototype);


/**
 * Joins this channel if not already joined
 *
 * @param {function} error Called if the server reports an error trying to join this channel
 */
Channel.prototype.join = function(error) {
	error;
};


/**
 * Parts this channel
 *
 * @param {string|null} message The part message to send along
 */
Channel.prototype.part = function(message) {
	message;
};
