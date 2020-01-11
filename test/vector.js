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
let v = new Vector([1, 1]);
v = v.dot(3);
console.log(v);
