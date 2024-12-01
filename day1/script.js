const fs = require('fs');

var args = process.argv.slice(2);
var file = args[0];

//partOne();
partTwo();

function partTwo() {
    fs.readFile(file, 'utf8', function(err, data) {
        if (err) {
            console.error(err);
            return;
        }
        var lines = data.replaceAll("\r", "").split('\n');
        console.log(lines);
        var left = lines.map(n => {
            var num = n.split('   ')[0];
            num = parseInt(num);
            return num;
        });
        var right = lines.map(n => {
            var num = n.split('   ')[1];
            num = parseInt(num);
            return num;
        });
        var diff = compareTwo(left, right);
        console.log(diff);
    });
}

function compareTwo(left, right) {
    var diff = 0;
    var map = countRight(right);
    for (var i = 0; i < left.length; i++) {
        if(map.has(left[i])) {
            var count = map.get(left[i]);
            diff += left[i] * count;
        }
    }
    return diff;
}

function countRight(right) {
    //mach ne hashmap mit den zahlen und wie oft diese vorkommen
    var map = new Map();
    for (var i = 0; i < right.length; i++) {
        if (map.has(right[i])) {
            map.set(right[i], map.get(right[i]) + 1);
        }
        else {
            map.set(right[i], 1);
        }
    }
    return map;
}

function partOne() {
    fs.readFile(file, 'utf8', function(err, data) {
        if (err) {
            console.error(err);
            return;
        }
        var lines = data.replaceAll("\r", "").split('\n');
        console.log(lines);
        var left = lines.map(n => {
            var num = n.split('   ')[0];
            num = parseInt(num);
            return num;
        });
        var right = lines.map(n => {
            var num = n.split('   ')[1];
            num = parseInt(num);
            return num;
        });
        //console.log(left);
        //console.log(right);
        left = sort(left);
        right = sort(right);
        var diff = compare(left, right);
        console.log(diff);
        
    });
}

function compare(left, right) {
    var diff = 0;
    for (var i = 0; i < left.length; i++) {
        if (left[i] != right[i]) {
            if(left[i] > right[i]) {
                diff += left[i] - right[i];
            }
            else {
                diff += right[i] - left[i];
            }
        }
    }
    return diff;
}

function sort(list) {
    var sorted = list.sort((a, b) => a - b);
    return sorted;
}