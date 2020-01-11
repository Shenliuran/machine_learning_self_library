var Vector = /** @class */ (function () {
    function Vector(components) {
        if (components === void 0) { components = new Array(); }
        this.add = function (v) {
            var temp = new Vector([]);
            for (var i = 0; i < this.components.length; i++)
                temp.components[i] = this.components[i] + v.components[i];
            return temp;
        };
        this.multi = function (v) {
            var temp = new Vector([]);
            for (var i = 0; i < this.components.length; i++)
                temp.components[i] = this.components[i] - v.components[i];
            return temp;
        };
        this.norm = function () {
            var sum = 0;
            for (var i = 0; i < this.components.length; i++)
                sum += this.components[i] * this.components[i];
            return Math.sqrt(sum);
        };
        this.dot = function (v) {
            if (v instanceof Vector) {
                var sum = 0;
                for (var i = 0; i < this.components.length; i++)
                    sum += this.components[i] * v.components[i];
                return sum;
            }
            else {
                var sum = new Vector([]);
                for (var i = 0; i < this.components.length; i++)
                    sum.components[i] = this.components[i] * v;
                return sum;
            }
        };
        this.cross = function (v) {
            var temp = new Vector([]);
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
    Vector.angle = function (v, w) {
        var temp = v.dot(w);
        return Math.acos(temp / (v.norm() * w.norm()));
    };
    return Vector;
}());
var Matrix = /** @class */ (function () {
    function Matrix() {
        this.shape = {
            row: this.__row,
            column: this.__column
        };
        this.__matrix = new Array();
    }
    Matrix.prototype.init = function (row, column) {
        this.__column = column;
        this.__row = row;
        for (var i = 0; i < this.__row; i++)
            this.__matrix[i] = new Array();
    };
    Matrix.prototype.zero = function (row, column) {
        this.init(row, column);
        for (var i = 0; i < row; i++)
            for (var j = 0; j < column; j++)
                this.__matrix[i][j] = 0;
    };
    Matrix.prototype.elem = function (rank) {
        this.init(rank, rank);
        for (var i = 0; i < rank; i++) {
            for (var j = 0; j < rank; j++) {
                if (i == j)
                    this.__matrix[i][j] = 1;
                else
                    this.__matrix[i][j] = 0;
            }
        }
    };
    Matrix.prototype.matrix = function (sheet) {
        this.init(sheet.length, sheet[0].length);
        this.__matrix = sheet;
    };
    Matrix.prototype.add = function (m) {
        if (this.__column == m.__column && this.__row == m.__row) {
            var t = new Matrix();
            t.init(this.__row, this.__column);
            for (var i = 0; i < this.__row; i++)
                for (var j = 0; j < this.__column; j++)
                    t.__matrix[i][j] = this.__matrix[i][j] + m.__matrix[i][j];
            return t;
        }
        else
            throw new Error("shape is different\n" + "shape of this: " + this.shape + ", shape of m: " + m.shape);
    };
    Matrix.prototype.sub = function (m) {
        if (this.__column == m.__column && this.__row == m.__row) {
            var t = new Matrix();
            t.init(this.__row, this.__column);
            for (var i = 0; i < this.__row; i++)
                for (var j = 0; j < this.__column; j++)
                    t.__matrix[i][j] = this.__matrix[i][j] - m.__matrix[i][j];
            return t;
        }
        else
            throw new Error("shape is different\n" + "shape of this: " + this.shape + ", shape of m: " + m.shape);
    };
    Matrix.prototype.multiply = function (m) {
        if (m instanceof Matrix) {
            var t = new Matrix();
            t.zero(this.__row, m.__column);
            var temp = 0;
            if (this.__column == m.__row && this.__row == m.__column) {
                for (var i = 0; i < this.__row; i++)
                    for (var j = 0; j < m.__column; j++)
                        for (var k = 0; k < m.__row; k++) {
                            t.__matrix[i][j] += this.__matrix[i][k] * m.__matrix[k][j];
                        }
                return t;
            }
            else
                throw new Error("Can't multiply\n" + "shape of this: " + this.shape + ", shape of m: " + m.shape);
        }
        else {
            var t = new Matrix();
            t.zero(this.__row, this.__column);
            for (var i = 0; i < this.__row; i++)
                for (var j = 0; j < this.__column; j++)
                    t.__matrix[i][j] = m * this.__matrix;
        }
    };
    Matrix.prototype.transpose = function (generateNewMatrix) {
        var t = new Matrix();
        t.init(this.__column, this.__row);
        for (var i = 0; i < this.__row; i++)
            for (var j = 0; j < this.__column; j++)
                t.__matrix[j][i] = this.__matrix[i][j];
        if (generateNewMatrix == false) {
            this.__matrix = t.__matrix;
            this.__column = t.__column;
            this.__row = t.__row;
        }
        else
            return t;
    };
    Matrix.prototype.toRowVectorSet = function () {
        var vs = new Array();
        for (var i = 0; i < this.__row; i++)
            vs.push(new Vector(this.__matrix[i]));
        return vs;
    };
    Matrix.prototype.toColumnVectorSet = function () {
        var vs = new Array();
        for (var i = 0; i < this.__column; i++) {
            var t = [];
            for (var j = 0; j < this.__row; j++)
                t.push(this.__matrix[j][i]);
            vs.push(new Vector(t));
        }
        return vs;
    };
    Matrix.prototype.toSheet = function () {
        return this.__matrix;
    };
    Matrix.prototype.fn = function (func, isCopy) {
        if (isCopy == true) {
            var m = new Matrix();
            m.init(this.__row, this.__column);
            for (var i = 0; i < this.__row; i++)
                for (var j = 0; j < this.__column; j++)
                    m.__matrix[i][j] = func(this.__matrix[i][j]);
            return m;
        }
        else {
            for (var i = 0; i < this.__row; i++)
                for (var j = 0; j < this.__column; j++)
                    func(this.__matrix[i][j]);
        }
    };
    return Matrix;
}());
var u = new Matrix();
u.matrix([[1, 2, 3], [2, 3, 4]]);
u.fn(f, true);
console.log(u);
function f(e) {
    if (e > 2)
        return e = 1;
    else
        e = -1;
}
