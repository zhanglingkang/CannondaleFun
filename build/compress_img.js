var fs = require("fs");
var childProcess = require('child_process');
var projectDir = "/Users/xiongwei/Documents/code/node/CannondaleFun";
var buildDir = projectDir + "/build";
var jarPath = buildDir + "/compressImg.jar";
var imagesDir = projectDir + "/public/images/bikes";
var imagesMinDir = imagesDir + "_min";
var cmd = [
    "java",
    "util.CompressImg",
    imagesDir,
    imagesMinDir,
    750, 420
].join(" ");
console.log(cmd);
fs.exists(imagesMinDir, function (exists) {
    if (!exists) {
        fs.mkdirSync(imagesMinDir);
    }
});
childProcess.exec(cmd, {
    cwd: buildDir
}, function (error, stdout, stderr) {
    console.log('exec error: ' + error);
});
