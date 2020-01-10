class Vector {
    constructor(components = new Array()) {
        this.add = function (v) {
            let temp = new Vector([]);
            for (let i = 0; i < this.components.length; i++)
                temp.components[i] = this.components[i] + v.components[i];
            return temp;
        };
        this.multi = function (v) {
            let temp = new Vector([]);
            for (let i = 0; i < this.components.length; i++)
                temp.components[i] = this.components[i] - v.components[i];
            return temp;
        };
        this.norm = function () {
            let sum = 0;
            for (let i = 0; i < this.components.length; i++)
                sum += this.components[i] * this.components[i];
            return Math.sqrt(sum);
        };
        this.dot = function (v) {
            if (v instanceof Vector) {
                let sum = 0;
                for (let i = 0; i < this.components.length; i++)
                    sum += this.components[i] * v.components[i];
                return sum;
            }
            else {
                let sum = new Vector([]);
                for (let i = 0; i < this.components.length; i++)
                    sum.components[i] = this.components[i] * v;
                return sum;
            }
        };
        this.cross = function (v) {
            let temp = new Vector([]);
            if (this.components.length == 3) {
                temp.components[0] = this.components[1] * v.components[2] - this.components[2] * v.components[1];
                temp.components[1] = this.components[2] * v.components[0] - this.components[0] * v.components[2];
                temp.components[2] = this.components[0] * v.components[1] - this.components[1] * v.components[0];
                return temp;
            }
            else
                throw new Error("Dimension Error: " + this.components.length + " dimensions");
        };
        this.toArray = function () {
            return this.components;
        };
        this.components = components;
    }
}
Vector.angle = function (v, w) {
    let temp = v.dot(w);
    return Math.acos(temp / (v.norm() * w.norm()));
};
class TrainingData {
    constructor(fVec, label) {
        this.fVec = fVec;
        this.label = label;
    }
}
class Perceptron {
    constructor(inputs, learningRate) {
        this.conpute = function () {
            let i = 0;
            let n = this.inputs.length;
            let currect;
            while (true) {
                currect = 0;
                this.inputs.forEach((input) => {
                    if (this.isClassifiedError(input)) {
                        this.weights = this.weights.add(input.fVec.dot(this.lr * input.label));
                        this.b += this.lr * input.label;
                    }
                    else
                        currect++;
                });
                if (currect == n)
                    break;
            }
        };
        this.predict = function (traingData) {
            return this.sign(this.weights.dot(traingData.fVec) + this.b);
        };
        this.sign = function (n) {
            if (n >= 0)
                return 1;
            else
                return -1;
        };
        this.isClassifiedError = function (traingData) {
            let pre = this.predict(traingData);
            let coupler = traingData.label * pre;
            if (coupler <= 0)
                return true;
            else
                false;
        };
        this.inputs = inputs;
        this.weights = new Vector(new Array());
        for (let i = 0; i < this.inputs[0].fVec.toArray().length; i++)
            this.weights.components.push(Math.random());
        this.lr = learningRate;
        this.b = Math.random();
        this.conpute();
    }
    set learningRate(lr) {
        this.lr = lr;
    }
    get vectWeights() {
        return this.weights;
    }
    get paramB() {
        return this.b;
    }
}
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
var trainingSet = new Array();
inputs.forEach((input) => {
    trainingSet.push(new TrainingData(new Vector(input.component), input.label));
});
const drawDataSet = function () {
    trainingSet.forEach((point) => {
        ctx.beginPath();
        if (point.label == 1)
            ctx.fillStyle = "green";
        else
            ctx.fillStyle = "blue";
        ctx.arc(point.fVec.toArray()[0], point.fVec.toArray()[1], 3, 0, 2 * Math.PI);
        ctx.fill();
    });
};
const line = function (a, b, c, color) {
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
        ctx.moveTo(-c / a, 0);
        ctx.lineTo(-c / a, canvasHeight);
    }
    if (c == 0) {
        ctx.moveTo(0, 0);
        ctx.lineTo(canvasWidth, -(a * canvasWidth) / b);
    }
    if (a * b > 0 && a * c > 0 && b * c > 0) {
        console.log("the line is not suitable!!");
    }
    else {
        if (-a / b > 0) {
            if (-c > 0) {
                ctx.moveTo(0, -c / b);
                ctx.lineTo((-b * canvasHeight - c) / a, canvasHeight);
            }
            else if (-c < 0) {
                ctx.moveTo(-c / a, 0);
                ctx.lineTo(canvasWidth, (-c - a * canvasWidth) / b);
            }
        }
        else if (-a / b < 0) {
            ctx.moveTo(0, -c / b);
            ctx.lineTo(-c / a, 0);
        }
    }
    ctx.stroke();
};
var p = new Perceptron(trainingSet, 0.5);
console.log(p);
drawDataSet();
line(1, 1, -300, "red");
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
//# sourceMappingURL=sketch.js.map