require('babel-register')();

let jsdom = require('jsdom');

let noop = () => {
    return null;
};

//require.extension[".scss"] = noop;
//require.extension[".css"] = noop;

global.document = jsdom.jsdom({src : '<!DOCTYPE html> <html> <head> </head> <body> </body> </html>'});
global.window = global.document.defaultView;

Object.keys(global.document.defaultView).forEach((property) => {
    if (typeof global[property] === 'undefined') {
        global[property] = global.document.defaultView[property]
    }
});

