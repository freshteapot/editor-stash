var fs = require('fs'),
    lazy = require('lazy');

exports.outputLines = function (src, log) {
    var i = 0,
        source = fs.createReadStream(src),
        lines = {};

    new lazy(source)
        .lines
        .forEach(function (line) {
            lineNumber = i;
            content = line.toString();

            // New lines with no content are written as 0,
            // clear them out...
            content = content == 0 ? '' : content;

            if (log) {
                console.log(lineNumber + ': ' + content);
            }

            lines[lineNumber] = content;

            i += 1;
        });
};
