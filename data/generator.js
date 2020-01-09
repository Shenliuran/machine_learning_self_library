const innerHeight = 500;
const innerWidth = 500;

//y = x;
const a = 1;
const b = 1;
const c = -300;

//the number of point
const n = 100;


var fs = require('fs')
var path = require('path')
var data = {
    inputs: []
};
for (let i = 0; i < n; i++) {
    let tX = Math.random() * innerHeight;
    let tY = Math.random() * innerWidth;
    let point = {
        component: [tX, tY],
        label: a * tX + b * tY + c > 0 ? 1 : -1
    };
    data.inputs.push(point);
}

var content = JSON.stringify(data);
var file = path.join(__dirname, "./trainingSet.json");
fs.writeFile(file, content, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log("文件创建成功，地址：" + file);
})
console.log(data.inputs);
