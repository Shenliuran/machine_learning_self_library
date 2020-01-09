class Vector {
    components: number[];
    constructor(components = new Array<number>()) {
        this.components = components;
    }
    
    add = function (v : Vector): Vector {
        let temp = new Vector([]);
        for (let i = 0; i < this.components.length; i++)
            temp.components[i] = this.components[i] + v.components[i];
        return temp;
    }
    multi = function (v : Vector): Vector {
        let temp = new Vector([]);
        for (let i = 0; i < this.components.length; i++)
            temp.components[i] = this.components[i] - v.components[i];
        return temp;
    }
    norm = function (): number {
        let sum = 0;
        for (let i = 0; i < this.components.length; i++)
            sum += this.components[i] * this.components[i];
        return Math.sqrt(sum);
    }
    dot = function (v: Vector | number): any {
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
    }
    cross = function (v : Vector): Vector {
        let temp = new Vector([]);
        if (this.components.length == 3) {
            temp.components[0] = this.components[1] * v.components[2] - this.components[2] * v.components[1];
            temp.components[1] = this.components[2] * v.components[0] - this.components[0] * v.components[2];
            temp.components[2] = this.components[0] * v.components[1] - this.components[1] * v.components[0];
            return temp;
        }
        else
            throw new Error("Dimension Error: " + this.components.length + " dimensions");
    }
    toArray = function (): number[] {
        return this.components;
    }
    static angle = function (v : Vector, w : Vector) {
        let temp: any = v.dot(w);
        return Math.acos(temp / (v.norm() * w.norm()));
    }
}

let v = new Vector([1, 1]);
v = v.dot(3);
console.log(v);