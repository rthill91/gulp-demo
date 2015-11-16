Gulp Demo
=========

### Description
A simple single-page application using AngularJS & UI.Router using gulp for all build processes.
This is intended to serve as a testing ground for better practices in front-end development through the use of automated building & unit testing.

### Gulp Tasks
	* appScripts
		~ Concatenates & optionally adds sourcemap or minifies the custom JS
		  files used in the SPA (e.g. controllers, routing, etc.)
	* pluginScripts
		~ Concatenates & optionally adds sourcemap or minifies the 3rd party JS
		  files used in the SPA (e.g. angularjs, ui.router, etc.)
	* css
		~ Compiles the SCSS files into CSS
	* templates
		~ Compiles angular templates and creates 'templates' module to store
		  them in $templateCache
	* watch
		~ Perform all tasks (i.e. default) and then re-runs needed task on file
		  change.
	* default
		~ Perform all tasks, excepting watch.

### Gulp Options
	* --dev
		~ When run with the dev flag, JavaScript files will not be minified, and
		  will instead have sourcemaps included to aid in debugging.


### Authors
	* Ryan Hill
