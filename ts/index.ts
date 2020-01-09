var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 500;
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
const dataSet = require("../data/trainingSet.json");
var arr = [];
Object.keys(dataSet).forEach(v => {
    let o = {};
    o[v] = dataSet[v];
    arr.push(o);
});
const inputs = arr.shift().inputs;

var trainingSet = new Array<TrainingData>();
inputs.forEach((input: any) => {
    trainingSet.push(new TrainingData(new Vector(input.component), input.label));
})
const drawDataSet = function () {
    trainingSet.forEach((point: TrainingData) => {
        ctx.beginPath()
        if (point.label == 1)
            ctx.fillStyle = "green";
        else
            ctx.fillStyle = "blue";
        ctx.arc(point.fVec.toArray()[0], point.fVec.toArray()[1], 3, 0, 2 * Math.PI);
        ctx.fill();
    });
}

const line = function (a: number, b: number, c: number, color: string): void {
    let point0 = {
        x: 0,
        y: -c / b
    };
    let point1 = {
        x: -c / a,
        y: 0
    };
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = color;
    if (a == 0) {
        ctx.moveTo(0, -c / b);
        ctx.lineTo(canvasWidth, -c / b);
    }
    if (b == 0) {
        ctx.moveTo(- c / a, 0);
        ctx.lineTo(- c / a, canvasHeight);
    }
    if (c == 0) {
        ctx.moveTo(0, 0);
        ctx.lineTo(canvasWidth, - (a * canvasWidth) / b);
    }
    if (a * b > 0 && a * c > 0 && b * c > 0) {
        console.log("the line is not suitable!!");
    }
    else {
        if (- a / b > 0) {
            if (-c > 0) {
                ctx.moveTo(0, - c / b);
                ctx.lineTo((-b * canvasHeight - c) / a, canvasHeight);
            }
            else if (-c < 0) {
                ctx.moveTo(- c / a, 0);
                ctx.lineTo(canvasWidth, (- c - a * canvasWidth) / b);
            }
        }
        else if (- a / b < 0) {
            ctx.moveTo(0, -c / b);
            ctx.lineTo(-c / a, 0);
        }
    }
    ctx.stroke();
}

var p = new Perceptron(trainingSet, 0.5);
console.log(p);
drawDataSet();
line(1, 1, -300, "red")
line(p.vectWeights.components[0], p.vectWeights.components[1], p.paramB, "black");
// const animate = function (): void {
//     var p = new Perceptron(trainingSet, 1);
//     requestAnimationFrame(animate);
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     line(1, 1, -500, "red")
//     drawDataSet();
//     line(p.vectWeights.components[0], p.vectWeights.components[1], p.paramB, "black");
// }
// animate();