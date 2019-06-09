# dactyl-openjscad
The original dactyl keyboard model at
https://github.com/adereth/dactyl-keyboard is written in clojure that generates
OpenSCAD. I found it difficult to edit:
* Clojure is not a common language.
* It takes at least half an hour to render any changes.
* The build chain has a lot of dependencies.

So I ported the model to OpenJSCAD. Unfortunately as this is a direct port, it
contains just as much copy-pasted as the original clojure source.

The original clojure version depended on OpenSCAD's 3d convex hulls. OpenJSCAD
lacks native support for both of those features. So this project includes a
port of [quickhull3d](https://github.com/mauriciopoppe/quickhull3d) and all of
its dependencies with minor modifications for OpenJSCAD. The clojure version
also depended on OpenSCAD's 2d-to-3d projections. I wrote a simple projection
function that is good enough for this project, but possibly not stable enough
for arbitrary shapes.

To render the OpenJSCAD files:
1. Download them.
1. Visit https://openjscad.org
1. Drag the files onto the box that says, "drop one or more supported files here."

![Screenshot](https://raw.githubusercontent.com/bluelightning32/dactyl-openjscad/master/screenshot.png)
