"use strict";

/**
 * Represents a message to be displayed in a buffer. Depending on its type, it may or may not contain specialized
 * information such as the source. This aims to provide a stable generic API for dumb clients.
 */
var Message = module.exports.Message = function() {

};


/** Bold format code */
Message.BOLD = "\x02";

/** Italic format code */
Message.ITALIC = "\x1D";

/** Underline format code */
Message.UNDERLINE = "\x1F";

/** Inverts the background and foreground color */
Message.INVERT = "\x16";

/** Set color format code */
Message.COLOR = "\x03";

/** Reset all formating code */
Message.RESET = "\x0F";
