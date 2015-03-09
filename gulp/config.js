var dest = "./public";
var src = './src';
var templates = "./craft/templates";

module.exports = {
    browserSync: {
        files: [
            dest + "/**",
            // Exclude Map files
            "!" + dest + "/**.map",
            templates + "/**"
        ],
        proxy: 'base.app'
    },
    sass: {
        src: src + '/styles',
        watch: src + '/styles/*.{sass,scss}',
        dest: dest + '/styles',
        settings: {
            loadPath: require('node-bourbon').includePaths,
            sourcemap: true
        }
    },
    images: {
        src: src + "/assets/images/**",
        watch: src + "/assets/images/**",
        dest: dest + "/assets/images"
    },
    browserify: {
        debug: true,
        // A separate bundle will be generated for each
        // bundle config in the list below
        bundleConfigs: [{
            entries: src + '/scripts/main.js',
            dest: dest + '/scripts',
            outputName: 'main.js'
        }]
    }
};