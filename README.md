JavaScript Transcript Viewer Demonstration
===

# What is this?

This is a very basic demonstration of the possibilities of using a
basic plotting package or graphics library to simply create a JS
viewer to look at transcript information (e.g. GFF3 gbrowse
downloads).

This is meant to stand as an argument against more complicated methods
of embedding a transcript viewer into a web application--what is here
uses basic data and simple drawing methods.

Please see http://zfin.org/ZDB-TSCRIPT-110325-1752 to see what this
demonstration was being modeled towards.

# Where can I see it?

The compiled and "usable" demonstration can be found [here](https://kltm.github.io/transcript-viewer/).

# What can I do with it?

There are currently three displays of two attempts at using the
Plotly.js package. Some are more functional/usable than others.

The current highlights are things like zooming (click and drag in the
display), panning (pull left and right while over the x-axis), and
screen shots. Notice the controls that appear above the display when
hovering over the display; as well, double-clicking returns the zoom
to its normal level.

# What are these made with?

The graphics library is [Ploty.js](https://plot.ly/javascript/),
mostly using the "shapes" API. The "application" was developed with
Node.js, using the usual suspects, and compiled into a static
deliverable.

# What data is being used here?

The data is from a GFF3 taken from the ZFIN [GBrowse
instance](http://zfin.org/action/gbrowse/?name=25%3A14932641..14953381&h_feat=pax6a-001).

It was then massaged down to something more palatable using a series of Emacs macros, taking it to its final form [here](https://github.com/kltm/transcript-viewer/blob/master/data/data.json).
