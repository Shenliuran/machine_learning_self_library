! function (t) {
    var n = {};

    function e(o) {
        if (n[o]) return n[o].exports;
        var s = n[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return t[o].call(s.exports, s, s.exports, e), s.l = !0, s.exports
    }
    e.m = t, e.c = n, e.d = function (t, n, o) {
        e.o(t, n) || Object.defineProperty(t, n, {
            enumerable: !0,
            get: o
        })
    }, e.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, e.t = function (t, n) {
        if (1 & n && (t = e(t)), 8 & n) return t;
        if (4 & n && "object" == typeof t && t && t.__esModule) return t;
        var o = Object.create(null);
        if (e.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: t
            }), 2 & n && "string" != typeof t)
            for (var s in t) e.d(o, s, function (n) {
                return t[n]
            }.bind(null, s));
        return o
    }, e.n = function (t) {
        var n = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return e.d(n, "a", n), n
    }, e.o = function (t, n) {
        return Object.prototype.hasOwnProperty.call(t, n)
    }, e.p = "", e(e.s = 0)
}([function (t, n, e) {
    class o {
        constructor(t = new Array) {
            this.add = function (t) {
                let n = new o([]);
                for (let e = 0; e < this.components.length; e++) n.components[e] = this.components[e] + t.components[e];
                return n
            }, this.multi = function (t) {
                let n = new o([]);
                for (let e = 0; e < this.components.length; e++) n.components[e] = this.components[e] - t.components[e];
                return n
            }, this.norm = function () {
                let t = 0;
                for (let n = 0; n < this.components.length; n++) t += this.components[n] * this.components[n];
                return Math.sqrt(t)
            }, this.dot = function (t) {
                if (t instanceof o) {
                    let n = 0;
                    for (let e = 0; e < this.components.length; e++) n += this.components[e] * t.components[e];
                    return n
                } {
                    let n = new o([]);
                    for (let e = 0; e < this.components.length; e++) n.components[e] = this.components[e] * t;
                    return n
                }
            }, this.cross = function (t) {
                let n = new o([]);
                if (3 == this.components.length) return n.components[0] = this.components[1] * t.components[2] - this.components[2] * t.components[1], n.components[1] = this.components[2] * t.components[0] - this.components[0] * t.components[2], n.components[2] = this.components[0] * t.components[1] - this.components[1] * t.components[0], n;
                throw new Error("Dimension Error: " + this.components.length + " dimensions")
            }, this.toArray = function () {
                return this.components
            }, this.components = t
        }
    }
    o.angle = function (t, n) {
        let e = t.dot(n);
        return Math.acos(e / (t.norm() * n.norm()))
    };
    class s {
        constructor(t, n) {
            this.fVec = t, this.label = n
        }
    }
    var r = document.querySelector("canvas");
    r.getContext("2d");
    r.width = 500, r.height = 500;
    const i = e(1);
    var c = [];
    Object.keys(i).forEach(t => {
        let n = {};
        n[t] = i[t], c.push(n)
    });
    const l = c.shift().inputs;
    var h = new Array;
    l.forEach(t => {
        h.push(new s(new o(t.component), t.label))
    });
    var u = new class {
        constructor(t, n) {
            this.conpute = function () {
                this.inputs.length;
                this.inputs.forEach(t => {
                    this.isClassifiedError(t) && (this.weights = this.weights.add(t.fVec.dot(this.lr * t.label)), this.b += this.lr * t.label)
                })
            }, this.predict = function (t) {
                return console.log("predict is called"), this.sign(this.weights.dot(t.fVec) + this.b)
            }, this.sign = function (t) {
                return console.log("sign is called"), t >= 0 ? 1 : -1
            }, this.isClassifiedError = function (t) {
                console.log("isClassifiedError is called");
                let n = t.label * this.predict(t);
                if (console.log("coupler is :" + n), n <= 0) return !0
            }, this.inputs = t, this.weights = new o(new Array(t[0].fVec.toArray().length)), this.weights.components.forEach(t => Math.random()), this.b = Math.random(), console.log("constructor is called : " + this.weights.toArray()), this.conpute()
        }
        set learningRate(t) {
            this.lr = t
        }
        get vectWeights() {
            return this.weights
        }
        get paramB() {
            return this.b
        }
    }(h, 1);
    console.log(u.vectWeights)
}, function (t) {
    t.exports = JSON.parse('{"inputs":[{"component":[216.71554401992603,198.95920679759894],"label":1},{"component":[12.964057488466985,252.57724947224494],"label":-1},{"component":[259.2656157940114,307.7528358891363],"label":-1}]}')
}]);