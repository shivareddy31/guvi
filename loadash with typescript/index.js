var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
//chunk
var array = ['a', 'b', 'c', 'd'];
var n = array.length;
var newarray;
var arr1;
var arr2;
chunkarray = function (array, value) {
    if (n > value) {
        arr1 = array.slice(0, value);
        arr2 = array.slice(value, value * 2);
    }
    else {
        console.log('array size not enough');
    }
    newarray = [arr1, arr2];
    return newarray;
};
console.log(chunkarray(array, 2));
//bind
var bind = function (fn, thisArg) {
    var partials = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        partials[_i - 2] = arguments[_i];
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return fn.apply(thisArg, __spreadArrays(partials, args));
    };
};
function greet(greeting, punctuation) {
    return greeting + " " + this.user + punctuation;
}
var object = {
    'user': 'shiva'
};
var bound = bind(greet, object, 'hi');
console.log(bound('!'));
//delay
var delay = function (fn, wait) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    setTimeout.apply(void 0, __spreadArrays([function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return fn.apply(void 0, args);
        }, wait], args));
};
delay(function (text) {
    console.log(text);
}, 1000, 'whats up?');
//unzip
var unzip = function (zipped) {
    var unzipped = zipped[0].map(function (z) { return []; });
    for (var j = 0; j < unzipped.length; j++) {
        for (var i = 0; i < zipped.length; i++) {
            unzipped[j].push(zipped[i][j]);
        }
    }
    return unzipped;
};
console.log(unzip([
    ['a', 1, true],
    ['b', 2, false]
]));
//unzipwith
var unzipWith = function (zipped, iteratee) {
    var unzipped = zipped[0].map(function (z) { return []; });
    for (var j = 0; j < unzipped.length; j++) {
        for (var i = 0; i < zipped.length; i++) {
            unzipped[j].push(zipped[i][j]);
        }
    }
    return unzipped.map(function (arr) {
        return arr.reduce(iteratee);
    });
};
console.log(unzipWith([
    [1, 10, 100],
    [2, 20, 200]
], function (a, b) { return a + b; }));
