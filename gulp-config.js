module.exports = {
	base: {
		src: 'site/app/',
		dest: 'site/public/'
	},
	paths: {
		dest: {
			js: 'site/public/js/',
			styles: 'site/public/css/'
		},
		src: {
			js: 'site/app/js/',
			styles: 'site/app/sass/',
			views: 'site/app/views/'
		}
	},
	appScripts: 'playground.js',
	pluginScripts: 'plugins.js'
}
