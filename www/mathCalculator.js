var exec = require('cordova/exec');

exports.add = function (arg0, success, error) {
    exec(success, error, 'mathCalculator', 'add', [arg0]);
}

