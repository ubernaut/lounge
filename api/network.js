"use strict";

var Collection = require("???");

var Buffer = require("./buffers");



/**
 * Represents a single network and its channels
 */
var Network = module.exports.Network = function() {
	/** Indicated whether this network is connectly connected */
	this.isConnected = false;

	/** The underlying irc-framework object */
	this.irc = null;

	/** Raw JSON configuration for this network */
	this.config = {};

	/** Collection of all buffers in the network, all kinds mixed. */
	this.buffers = new Collection(Buffer);
};


/**
 * Returns a query buffer (creating it if needed) with the target user
 *
 * @param {string} target The target user to talk to
 */
Network.prototype.query = function(target) {
	target;
};


/**
 * Returns a channel buffer for the target channel.
 *
 * @param {string} target The channel name without the prefix character
 */
Network.prototype.channel = function(target) {
	target;
};


/**
 * Quits the network with an optional message
 *
 * @param {string|null} message The quit message
 */
Network.prototype.quit = function(message) {
	message;
};


/**
 * Connects to the IRC network.
 *
 * @param {string} host The hostname of the server to connect to
 * @param {int} port The port to connect on
 * @param {bool} tls Sets whether this network uses TLS encryption
 * @param {options} options Extra options to be passed on to irc-framework
 * @throws {Error} If the network is already connected
 */
Network.prototype.connect = function(host, port, tls, options) {
	host;
	port;
	tls;
	options;
};


/**
 * Disconnects from the IRC network
 */
Network.prototype.disconnect = function() {

};


/**
 * Reconnects to the current IRC network using the same options
 */
Network.prototype.reconnect = function() {

};
