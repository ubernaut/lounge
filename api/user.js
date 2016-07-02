"use strict";

var Collection = require("???");
var Network = require("./Network");


/**
 * Represents a connected client (usually, a browser, but can be anything protocol-compatible as well). Its only
 * responsibility is to abstract and manage the client connection.
 */
var Client = module.exports.Client = function() {

};



/**
 * Represents any kind of user, whether it is a permanent database-backed one or a temporary one.
 */
var User = module.exports.User = function() {
	/** Holds all the user's networks */
	this.networks = new Collection(Network);

	/** Holds all the user's connected clients */
	this.clients = new Collection(Client);
};
module.exports.User = User;



/**
 * Represents a registered user.
 */
var UserAccount = module.exports.UserAccount = function() {
	User.apply(this, arguments);

	/** The user's ID used to find it back from the underlying storage */
	this.id = null;

	/** The user's username for login  */
	this.username = null;

	/** The user's encrypted passsword */
	this.password = null;
};
UserAccount.prototype = Object.create(User.prototype);



/**
 * Master user manager: keeps track of every temporary and permanent users and is responsible of ensuring their
 * proper lifecycle (by properly disconnecting networks on shutdown, saving configs, etc.)
 */
var UserManager = module.exports.UserManager = function() {

};
module.exports.UserManager = UserManager;
