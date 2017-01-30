////
//// gulpfile.js for transcript-viewer
////
//// TODO
////
//// Usage: TODO.
////

var us = require('underscore');
var fs = require('fs');
var del = require('del');
var gulp = require('gulp');
var bump = require('gulp-bump');
var flatten = require('gulp-flatten');
var mocha = require('gulp-mocha');
var shell = require('gulp-shell');
var uglify = require('gulp-uglify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var tilde = require('expand-home-dir');
var server_restarter = require('gulp-develop-server');
//var watch = require('gulp-watch');
//var git = require('gulp-git');
//var watchify = require('watchify');
//var concat = require('gulp-concat');
//var sourcemaps = require('gulp-sourcemaps');

///
/// Helpers.
///

function _die(str){
    console.error(str);
    process.exit(-1);
}

function _tilde_expand(ufile){
    return tilde(ufile);
}

function _tilde_expand_list(list){
    return us.map(list, function(ufile){
	//console.log('ufile: ' + ufile);
	return tilde(ufile);
    });
}

function _to_boolean(thing){
    var ret = false;

    if( typeof(thing) === 'string' ){
	if( thing === 'true' ){
	    ret = true;
	}else if( thing === '1' ){
	    ret = true;
	}
    }else if( typeof(thing) === 'number' ){
	if( thing === 1 ){
	    ret = true;
	}
    }

    return ret;
}

function _run_cmd(command_bits){
    var final_command = command_bits.join(' ');
    return ['echo \'' + final_command + '\'', final_command];
}

function _run_cmd_list(commands){
    var final_list = [];

    us.each(commands, function(cmd){
	final_list.push('echo \'' + cmd + '\'');
	final_list.push(cmd);
    });
    
    return final_list;
}

///
/// Bring in the AmiGO and working environment.
///

var paths = {
    // WARNING: Cannot use glob for clients--I use the explicit listing
    // to generate a dynamic browserify set.
    clients: [
      'js/TranscriptViewer.js'
    ],
    scripts: [
    ],
    'tests-js': [
    ]
};

// Optional API port.
var app_port = 6455;

// Verbosity.
console.log('port: ' + app_port);

///
/// AmiGO install.
///

gulp.task('install', ['compile']);

// TODO/BUG: This should eventually be replaced by a read of
// javascript/web. For now, we'll just have this so we can work our
// way through the garage fixing things at our leisure.
var web_compilables = [
    'TranscriptViewer.js'
];

// See what browserify-shim is up to.
//process.env.BROWSERIFYSHIM_DIAGNOSTICS = 1;
// Browser runtime environment construction.
function _client_compile_task(file) {
    
    var infile = 'js/' +file;
    
    var b = browserify(infile);
    return b
    // not in npm, don't need in browser
	.exclude('ringo/httpclient')
	.bundle()
    // desired output filename to vinyl-source-stream
	.pipe(source(file))
	.pipe(gulp.dest('public'));
}

// Compile all JS used in AmiGO and move it to the staging/deployment
// directory.
gulp.task('compile', [] , function(cb){
    us.each(web_compilables, function(file){
	_client_compile_task(file);
    });
    cb(null);
});

// A version of compile that does not care about build--for rapid JS
// development.
gulp.task('compile-js-dev', function(cb){
    us.each(web_compilables, function(file){
	_client_compile_task(file);
    });
    cb(null);
});

///
/// Development.
///

// Rerun tasks when a file changes.
gulp.task('watch-js', function(cb) {
    //gulp.watch(web_compilables, ['compile-js-dev']);
    gulp.watch(us.map(web_compilables,
		      function(file){ return amigo_js_dev_path + '/'+file; } ),
	       ['compile-js-dev']);
    cb(null);
});

///
/// Runner.
///

gulp.task('run-tv', shell.task(_run_cmd([
    'node', './bin/transcript-viewer-server.js',
    '-p', app_port
])));

///
/// Default.
///

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['install']);
