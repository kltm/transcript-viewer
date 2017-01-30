////
//// Render pretty ponies!
//// https://plot.ly/javascript/shapes/
////

// Let jshint pass over over our external globals (browserify takes
// care of it all).
/* global jQuery */
/* global Plotly */

var us = require('underscore');

// Config.

function BasePageInit(){    
    // Nuttin' doin' here.
    console.log("Initialized...");
}

function GetData(){

    var ret = null;

    // http://zfin.org/ZDB-TSCRIPT-110325-1752
    // Copied from x-formed gbrowse GFF3 from zfin, in /data directory.
    ret = {
	"name": "pax6a-001",
	"sequence-region": "chr25",
	"start": 14929945,
	"end": 14954833,
	"ordered-transcripts": [
	    {
		"name": "pax6a-001",
		"start": 14932641,
		"end": 14953319,
		"type": ".",
		"alias": "ENSDART00000164384",
		"data": [
		    [14932641, 14933678, "."],
		    [14932641, 14933592, "."],
		    [14933593, 14933678, "2"],
		    [14933593, 14933595, "0"],
		    [14935057, 14935198, "0"],
		    [14935057, 14935198, "."],
		    [14935346, 14935458, "2"],
		    [14935346, 14935458, "."],
		    [14935653, 14935803, "0"],
		    [14935653, 14935803, "."],
		    [14937543, 14937625, "2"],
		    [14937543, 14937625, "."],
		    [14938075, 14938233, "2"],
		    [14938075, 14938233, "."],
		    [14942079, 14942244, "0"],
		    [14942079, 14942244, "."],
		    [14942525, 14942740, "0"],
		    [14942525, 14942740, "."],
		    [14942831, 14942872, "0"],
		    [14942831, 14942872, "."],
		    [14943183, 14943313, "2"],
		    [14943183, 14943313, "."],
		    [14946104, 14946157, "2"],
		    [14946104, 14946157, "."],
		    [14948743, 14948755, "0"],
		    [14948743, 14948892, "."],
		    [14948753, 14948755, "0"],
		    [14948756, 14948892, "x"],
		    [14952968, 14953319, "."],
		    [14952968, 14953319, "."]
		]
	    },
	    {
		"name": "pax6a-002",
		"start": 14932641,
		"end": 14953294,
		"type": ".",
		"alias": "ENSDART00000162485",
		"data": [
		    [14932641, 14933678, "."],
		    [14932641, 14933592, "."],
		    [14933593, 14933678, "2"],
		    [14933593, 14933595, "0"],
		    [14935057, 14935198, "0"],
		    [14935057, 14935198, "."],
		    [14935346, 14935458, "2"],
		    [14935346, 14935458, "."],
		    [14935653, 14935803, "0"],
		    [14935653, 14935803, "."],
		    [14937543, 14937625, "2"],
		    [14937543, 14937625, "."],
		    [14938075, 14938233, "2"],
		    [14938075, 14938233, "."],
		    [14942079, 14942244, "0"],
		    [14942079, 14942244, "."],
		    [14942525, 14942740, "0"],
		    [14942525, 14942740, "."],
		    [14943183, 14943313, "2"],
		    [14943183, 14943313, "."],
		    [14946104, 14946157, "2"],
		    [14946104, 14946157, "."],
		    [14948743, 14948755, "0"],
		    [14948743, 14948892, "."],
		    [14948753, 14948755, "0"],
		    [14948756, 14948892, "x"],
		    [14952968, 14953294, "."],
		    [14952968, 14953294, "."]
		]
	    },
	    {
		"name": "pax6a-005",
		"start": 14933331,
		"end": 14948963,
		"type": ".",
		"alias": "ENSDART00000165774",
		"data": [
		    [14933331, 14933678, "."],
		    [14933331, 14933592, "."],
		    [14933593, 14933678, "2"],
		    [14933593, 14933595, "0"],
		    [14935057, 14935198, "0"],
		    [14935057, 14935198, "."],
		    [14935346, 14935458, "2"],
		    [14935346, 14935458, "."],
		    [14935653, 14935803, "0"],
		    [14935653, 14935803, "."],
		    [14937543, 14937625, "2"],
		    [14937543, 14937625, "."],
		    [14938075, 14938233, "2"],
		    [14938075, 14938233, "."],
		    [14942079, 14942244, "0"],
		    [14942079, 14942244, "."],
		    [14942525, 14942740, "0"],
		    [14942525, 14942740, "."],
		    [14942831, 14942872, "0"],
		    [14942831, 14942872, "."],
		    [14943183, 14943313, "2"],
		    [14943183, 14943313, "."],
		    [14945307, 14945330, "2"],
		    [14945307, 14945330, "."],
		    [14946104, 14946116, "0"],
		    [14946104, 14946157, "."],
		    [14946114, 14946116, "0"],
		    [14946117, 14946157, "x"],
		    [14946384, 14946455, "."],
		    [14946384, 14946455, "."],
		    [14948743, 14948963, "."],
		    [14948743, 14948963, "."]
		]
	    },
	    {
		"name": "pax6a-008",
		"start": 14937556,
		"end": 14944042,
		"type": ".",
		"alias": "ENSDART00000166490",
		"data": [
		    [14937556, 14937625, "2"],
		    [14937556, 14937625, "."],
		    [14938075, 14938233, "2"],
		    [14938075, 14938233, "."],
		    [14942079, 14942193, "0"],
		    [14942079, 14942244, "."],
		    [14942191, 14942193, "0"],
		    [14942194, 14942244, "x"],
		    [14942525, 14942740, "."],
		    [14942525, 14942740, "."],
		    [14943183, 14943313, "."],
		    [14943183, 14943313, "."],
		    [14943874, 14944042, "."],
		    [14943874, 14944042, "."]
		]
	    },
	    {
		"name": "pax6a-009",
		"start": 14937560,
		"end": 14943969,
		"type": ".",
		"alias": "ENSDART00000159342",
		"data": [
		    [14937560, 14937625, "2"],
		    [14937560, 14937625, "."],
		    [14938075, 14938233, "2"],
		    [14938075, 14938233, "."],
		    [14942079, 14942193, "0"],
		    [14942079, 14942244, "."],
		    [14942191, 14942193, "0"],
		    [14942194, 14942244, "x"],
		    [14942525, 14942740, "."],
		    [14942525, 14942740, "."],
		    [14942831, 14942872, "."],
		    [14942831, 14942872, "."],
		    [14943183, 14943313, "."],
		    [14943183, 14943313, "."],
		    [14943874, 14943969, "."],
		    [14943874, 14943969, "."]
		]
	    },
	    {
		"name": "pax6a-006",
		"start": 14938127,
		"end": 14948938,
		"type": ".",
		"alias": "ENSDART00000161165",
		"data": [
		    [14938127, 14938233, "2"],
		    [14938127, 14938233, "."],
		    [14942079, 14942193, "0"],
		    [14942079, 14942244, "."],
		    [14942191, 14942193, "0"],
		    [14942194, 14942244, "x"],
		    [14942525, 14942740, "."],
		    [14942525, 14942740, "."],
		    [14942831, 14942872, "."],
		    [14942831, 14942872, "."],
		    [14943183, 14943313, "."],
		    [14943183, 14943313, "."],
		    [14945307, 14945328, "."],
		    [14945307, 14945328, "."],
		    [14946104, 14946157, "."],
		    [14946104, 14946157, "."],
		    [14946384, 14946455, "."],
		    [14946384, 14946455, "."],
		    [14948743, 14948938, "."],
		    [14948743, 14948938, "."]
		]
	    },
	    {
		"name": "pax6a-007",
		"start": 14942525,
		"end": 14949040,
		"type": ".",
		"alias": "ENSDART00000172538",
		"data": [
		    [14942525, 14942740, "0"],
		    [14942525, 14942740, "."],
		    [14943183, 14943313, "2"],
		    [14943183, 14943313, "."],
		    [14946104, 14946157, "2"],
		    [14946104, 14946157, "."],
		    [14948743, 14948755, "0"],
		    [14948743, 14949040, "."],
		    [14948753, 14948755, "0"],
		    [14948756, 14949040, "x"]
		]
	    },
	    {
		"name": "pax6a-003",
		"start": 14942663,
		"end": 14953349,
		"type": ".",
		"alias": "ENSDART00000165632",
		"data": [
		    [14942663, 14942740, "0"],
		    [14942663, 14942740, "."],
		    [14942831, 14942872, "0"],
		    [14942831, 14942872, "."],
		    [14943183, 14943313, "2"],
		    [14943183, 14943313, "."],
		    [14945307, 14945330, "2"],
		    [14945307, 14945330, "."],
		    [14946104, 14946116, "0"],
		    [14946104, 14946157, "."],
		    [14946114, 14946116, "0"],
		    [14946117, 14946157, "x"],
		    [14946384, 14946455, "."],
		    [14946384, 14946455, "."],
		    [14948743, 14948892, "."],
		    [14948743, 14948892, "."],
		    [14952968, 14953349, "."],
		    [14952968, 14953349, "."]
		]
	    },
	    {
		"name": "pax6a-010",
		"start": 14943094,
		"end": 14943959,
		"type": ".",
		"alias": "ENSDART00000169876",
		"data": [
		    [14943094, 14943313, "."],
		    [14943874, 14943959, "."]
		]
	    },
	    {
		"name": "pax6a-004",
		"start": 14943299,
		"end": 14953381,
		"type": ".",
		"alias": "ENSDART00000159490",
		"data": [
		    [14943299, 14943313, "2"],
		    [14943299, 14943313, "."],
		    [14945307, 14945330, "2"],
		    [14945307, 14945330, "."],
		    [14946104, 14946116, "0"],
		    [14946104, 14946157, "."],
		    [14946114, 14946116, "0"],
		    [14946117, 14946157, "x"],
		    [14946384, 14946455, "."],
		    [14946384, 14946455, "."],
		    [14948743, 14948892, "."],
		    [14948743, 14948892, "."],
		    [14949039, 14949169, "."],
		    [14949039, 14949169, "."],
		    [14952968, 14953381, "."],
		    [14952968, 14953381, "."]
		]
	    }
	]
    };

    return ret;
}

// Try just using shapes.
function BaseViewerInit01(data, div_id, hover_id){

    var offset = 10;
    var text_offset = 4;
    
    // Raw base data lines.
    var traces = [];

    // Raw base data lines.
    var text_traces = {
	// Put labels in 10%.
	x: [],
	y: [],
	text: [],
	//label: 'Labels',
	showlegend: false,
	mode: 'text'
    };

    // Glyphs to appear on data lines.
    var shapes = [];

    us.each(data['ordered-transcripts'], function(transcript, index){

	// Give us the right y-offset for the data.
	var yoff = (data['ordered-transcripts'].length - index) * offset;

	// Add transcript line to the plot.
	var main_line = {
	    type: 'line',
	    xref: 'x',
	    yref: 'y',
	    x0: transcript['start'],
	    y0: yoff,
	    x1: transcript['end'],
	    y1: yoff,
	    line: {
		color: 'rgb(55, 128, 191)',
		width: 3
	    }
	};
	shapes.push(main_line);

	// Add the (hopefully anonymous) segements to the trace.
	var toggle = false;        
	us.each(transcript['data'], function(d){

	    var a = d[0];
	    var b = d[1];
	    var t = d[2];

	    // Flip.
	    if( t === 'x' ){
	      toggle = true;
	    }

	    // Get a better shape.
	    var seg_line = {
		type: 'rect',
		x0: a,
		y0: yoff + 2,
		x1: b,
		y1: yoff - 2,
		line: {
		    color: 'rgb(55, 128, 191)',
		    width: 1
		}
	    };
	    if( ! toggle ){
		seg_line['fillcolor'] = 'rgba(55, 128, 191, 1.0)';
	    }else{
		seg_line['fillcolor'] = 'rgba(255, 255, 255, 1.0)';
	    }
	    shapes.push(seg_line);
	});

	// Put labels in 10%.
	text_traces['x'].push(transcript['start']);
	text_traces['y'].push(yoff + text_offset);
	// Add text description to the trace.
	text_traces['text'].push(transcript['name']);

    });

    // Put it all together into final bundle for rendering.    
    traces.push(text_traces);
    
    ///
    var layout = {
	title: data['name'] + ' / ' + data['sequence-region'],
	xaxis: {
	    range: [data['start'], data['end']],
	    zeroline: false,
	    side: 'top',
	    gridcolor: '#ccc',
	    zerolinecolor: '#fff'
	},
	yaxis: {
	    range: [0, (data['ordered-transcripts'].length * (offset + 1))],
	    showgrid: false,
	    showticklabels: false,
	},
	// width: 800,
	// height: 600,
	hovermode: false,
	shapes: shapes
    };

    Plotly.newPlot(div_id, traces, layout);
}

// Try just using data.
function BaseViewerInit02(data, div_id, hover_id){

    var offset = 10;
    
    // Raw base data lines.
    var traces = [];

    // Glyphs to appear on data lines.
    var shapes = [];

    us.each(data['ordered-transcripts'], function(transcript, index){

	// Give us the right y-offset for the data.
	var yoff = (data['ordered-transcripts'].length - index) * offset;

	// Add a main background data trace.
	var main_data_trace = {
	    x: [transcript['start'], transcript['end']],
	    y: [yoff, yoff],
	    mode: 'line',
	    line :{
		color: 'rgb(55, 128, 191)',
		width: 3		
	    },
	    hoverinfo: 'x+name',
	    name: transcript['name']
	};
	traces.push(main_data_trace);

	// Add the (hopefully anonymous) segements to the trace.
	us.each(transcript['data'], function(d){

	    var a = d[0];
	    var b = d[1];
	    var t = d[2];

	    // Add the data for highlighting.
	    var anon_seg_trace = {
		x: [a, b],
		y: [yoff, yoff],
		mode: 'line',
		line :{
		    color: 'rgb(55, 128, 191)',
		    width: 10		
		},
		showlegend: false,
		hoverinfo:"x+name",
		name: transcript['name']
	    };
	    traces.push(anon_seg_trace);

	});
    });

    ///
    var layout = {
	title: data['name'] + ' / ' + data['sequence-region'],
	xaxis: {
	    range: [data['start'], data['end']],
	    zeroline: false,
	    side: 'top',
	    gridcolor: '#ccc',
	    zerolinecolor: '#fff'
	},
	yaxis: {
	    range: [0, (data['ordered-transcripts'].length * (offset + 1))],
	    showgrid: false,
	    showticklabels: false,
	},
	// width: 800,
	// height: 600,
	shapes: []
    };

    // var plot = document.getElementById(div_id);
    // var hinf = document.getElementById(hover_id);

    Plotly.newPlot(div_id, traces, layout);

    // plot.on('plotly_hover', function(data){
    // 	var infotext = data.points.map(function(d){
    // 	    return (d.data.name+': x= '+d.x+', y= '+d.y.toPrecision(3));
    // 	});
    // 	hinf.innerHTML = infotext.join('\n');
    // }).on('plotly_unhover', function(data){
    // 	hinf.innerHTML = '';
    // });
}

// Embed the jQuery setup runner.
(function (){
    jQuery(document).ready(function(){

	BasePageInit();
	
	var stash = GetData();

	BaseViewerInit01(stash, 'graph01', 'graph01hoverinfo');
	BaseViewerInit01(stash, 'graph02', 'graph02hoverinfo');
	BaseViewerInit02(stash, 'graph03', 'graph03hoverinfo');
    });
})();
