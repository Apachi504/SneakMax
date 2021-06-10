let project_folder = "dist";
let soure_folder = "src";

let path = {
    build:{
        html: project_folder+"/",
        css:project_folder+"/css/",
        js:project_folder+"/js/",
        fonts:soure_folder+"/fonts/",
        img:soure_folder+"/img/",
    },
    src:{
        html: soure_folder+"/",
        css:soure_folder+"/scss/style.scss",
        js:soure_folder+"/js/script.js",
        fonts:soure_folder+"/fonts/*.ttf",
        img:soure_folder+"/img/**/*.{jpg,png,svg,gif,ico,webp}",
    },
    watch:{
        html: soure_folder+"/**/*.html",
        css:soure_folder+"/scss/**/*.scss",
        js:soure_folder+"/js/**/*.js",
        img:soure_folder+"/img/**/*.{jpg,png,svg,gif,ico,webp}",
    },
    clean:"./" + project_folder +"/"
    
}
let {src, dist} = require('gulp'),
     gulp = require('gulp'),
     browsersync = require('browser-sync').create();

function browserSync(params){
    browsersync.init({
        server:{
            baseDir: "./" + project_folder +"/"
        },
        port: 3000,
        notify: false
    })
}     
let watch = gulp.parallel(browserSync);
exports.watch = watch;
exports.default = watch;