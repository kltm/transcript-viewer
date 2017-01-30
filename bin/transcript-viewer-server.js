////
//// TODO.
////

// Correct environment, ready testing.
// Std utils.
var us = require('underscore');
var fs = require('fs');
var path = require('path');
var us = require('underscore');
//var yaml = require('yamljs');

// Templating.
//var md = require('markdown');
var marked = require('marked');

///
/// Helpers and aliases.
///

var each = us.each;

function ll(arg1){
    console.log('amigo [' + (new Date()).toJSON() + ']: ', arg1); 
}

function _die(message){
    console.error('AMIGO [' + (new Date()).toJSON() + ']: ' + message);
    process.exit(-1);
}

// Generic response.
function _standard_response(res, code, type, body){
  res.setHeader('Content-Type', type);
  res.setHeader('Content-Length', body.length);
  res.end(body);
  return res;
}

// // Failure with a JSON response.
// function _response_json_fail(res, envl, message){
//     envl.status('failure');
//     envl.comments(message);
//     return res.json(envl.structure());
// }

// // Extract singular arguments; will take first if multiple.
// function _param(req, param, pdefault){

//     var ret = null;

//     // Try the route parameter space.
//     if( req && req.params && typeof(req.params[param]) !== 'undefined' ){
// 	ret = req.params[param];
//     }

//     // Try the get space.
//     if( ! ret ){

// 	if( req && req.query && req.query[param] && typeof(req.query[param]) !== 'undefined' ){
// 	    ret = req.query[param];
// 	}    
//     }

//     // Otherwise, try the body space.
//     if( ! ret ){

// 	var decoded_body = req.body || {};
// 	if( decoded_body && ! us.isEmpty(decoded_body) && decoded_body[param] ){
// 	    ret = decoded_body[param];
// 	}
//     }

//     // Reduce to first if array.
//     if( us.isArray(ret) ){
// 	if( ret.length === 0 ){
// 	    ret = pdefault;
// 	}else{
// 	    ret = ret[0];
// 	}
//     }

//     // Finally, default.
//     if( ! ret ){
// 	ret = pdefault;
//     }

//     return ret;
// }

// // Extract list arguments.
// function _extract(req, param){

//     var ret = [];

//     // Note: no route parameter possible with lists(?).

//     // Try the get space.
//     if( req && req.query && typeof(req.query[param]) !== 'undefined' ){
// 	//console.log('as query');
	
// 	// Input as list, remove dupes.
// 	var paccs = req.query[param];
// 	if( paccs && ! us.isArray(paccs) ){
// 	    paccs = [paccs];
// 	}
// 	ret = us.uniq(paccs);
//     }

//     // Otherwise, try the body space.
//     if( us.isEmpty(ret) ){
	
// 	var decoded_body = req.body || {};
// 	if( decoded_body && ! us.isEmpty(decoded_body) && decoded_body[param] ){
// 	    //console.log('as body');
	    
// 	    // Input as list, remove dupes.
// 	    var baccs = decoded_body[param];
// 	    //console.log('decoded_body', decoded_body);
// 	    //console.log('baccs', baccs);
// 	    if( baccs && ! us.isArray(baccs) ){
// 		baccs = [baccs];
// 	    }
// 	    ret = us.uniq(baccs);
// 	}
//     }

//     return ret;
// }

///
/// CLI handling, environment setup, and initialization of clients.
///

// CLI handling.
var argv = require('minimist')(process.argv.slice(2));
//console.dir(argv);

// What test port to listen on.
var port = argv['p'] || argv['port'];
if( ! port ){
    _die('Option (p|port) is required.');
}else{
    ll('Will listen on port: ' + port);
}

///
/// Environment startup.
///

// Initial server setup.	
var express = require('express');
var cors = require('cors');
//var body_parser = require('body-parser');
var app = express();
app.use(cors());
// Add POST via JSON.
//app.use(body_parser.json());
//app.use(body_parser.urlencoded({'extended': true, parameterLimit: 100000, limit: '50mb' }));
// Add a static route for everything in /publuc to be at the base URL.
app.use(express.static('public'));

// pup-tent for templates only.
var ppaths = ['templates'];
var pup_tent = require('pup-tent')(ppaths);
pup_tent.use_cache_p(false);
pup_tent.set_common('css_libs', [
  '/bootstrap.min.css'
]);
pup_tent.set_common('js_libs', [
  '/jquery-1.9.1.js',
  '/bootstrap.min.js',
  '/plotly.min.js',
  '/TranscriptViewer.js'
]);

///
/// User pages.
///

// Homepage! README!
app.all('/', function (req, res){
  // Grab markdown renderable file.
  var landing_raw = fs.readFileSync('./README.md').toString();
  var landing_md = marked(landing_raw);
  _standard_response(res, 200, 'text/html', landing_md);
});

///
/// Debugging.
///

// Return nested app.
app.all('/view/:foo?', function (req, res){
        // Variables, render, and output.
        var tmpl_args = {
            // 'show_editor_p': show_editor_p,
            // 'show_admin_p': show_admin_p,
            // 'barista_sessions_p': barista_sessions_p,
            // 'barista_sessions': sessions,
            // 'barista_user_reset': barista_user_reset,
            // 'barista_user_refresh': barista_user_refresh,
            // 'title': notw + ': Status'
        };
        var out = pup_tent.render('viewer.tmpl', tmpl_args, 'base.tmpl');
        _standard_response(res, 200, 'text/html', out);
});

///
/// Main.
///

// Spin up.
app.listen(port);
if( process && process.send ){
    process.send('Server started.'); // For gulp-develop-server, if listening
}
ll('Server started.');

