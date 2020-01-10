/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./dist/sketch.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data/trainingSet.json":
/*!*******************************!*\
  !*** ./data/trainingSet.json ***!
  \*******************************/
/*! exports provided: inputs, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"inputs\\\":[{\\\"component\\\":[218.92275518195703,366.8777607446915],\\\"label\\\":1},{\\\"component\\\":[30.74298903463579,351.82976729424576],\\\"label\\\":1},{\\\"component\\\":[458.6197923189587,80.39834905767773],\\\"label\\\":1},{\\\"component\\\":[10.555253974246837,238.2189831053264],\\\"label\\\":-1},{\\\"component\\\":[151.4179224815886,24.531854547698238],\\\"label\\\":-1},{\\\"component\\\":[151.57956177620423,204.91392398160934],\\\"label\\\":1},{\\\"component\\\":[445.894941976723,362.16814578114696],\\\"label\\\":1},{\\\"component\\\":[433.1335129407361,279.009277575628],\\\"label\\\":1},{\\\"component\\\":[110.43050409677468,80.63951858808271],\\\"label\\\":-1},{\\\"component\\\":[399.7744837369933,172.4381292434217],\\\"label\\\":1},{\\\"component\\\":[210.5657456358946,200.1477680163075],\\\"label\\\":1},{\\\"component\\\":[102.0922795759982,409.31418623698613],\\\"label\\\":1},{\\\"component\\\":[448.5298992231807,468.01077473636553],\\\"label\\\":1},{\\\"component\\\":[136.29855586829376,199.48320380812677],\\\"label\\\":1},{\\\"component\\\":[234.79237311119172,393.3096433283494],\\\"label\\\":1},{\\\"component\\\":[248.95684749779434,299.3880024601956],\\\"label\\\":1},{\\\"component\\\":[243.93138914709235,4.927748618116845],\\\"label\\\":-1},{\\\"component\\\":[20.45938095480837,108.24711610659365],\\\"label\\\":-1},{\\\"component\\\":[284.3041821668183,94.40294435784335],\\\"label\\\":1},{\\\"component\\\":[442.701295815063,145.9720489225299],\\\"label\\\":1},{\\\"component\\\":[377.36471954918284,113.76808251100611],\\\"label\\\":1},{\\\"component\\\":[134.0644209834325,336.35341065873405],\\\"label\\\":1},{\\\"component\\\":[159.6597864227568,161.09768672636926],\\\"label\\\":1},{\\\"component\\\":[277.35266410003146,412.50050423822506],\\\"label\\\":1},{\\\"component\\\":[289.68636910168834,92.77334253180946],\\\"label\\\":1},{\\\"component\\\":[316.7435585076636,319.71449751478866],\\\"label\\\":1},{\\\"component\\\":[482.36256637534814,368.52275810684523],\\\"label\\\":1},{\\\"component\\\":[32.60942429660052,424.16271316199607],\\\"label\\\":1},{\\\"component\\\":[289.7077421193973,324.0885083955728],\\\"label\\\":1},{\\\"component\\\":[249.2283764592962,122.74473269301333],\\\"label\\\":1},{\\\"component\\\":[402.31064258222517,85.037877937455],\\\"label\\\":1},{\\\"component\\\":[71.02762213294544,397.7317671422836],\\\"label\\\":1},{\\\"component\\\":[281.2670868230941,66.40530566780578],\\\"label\\\":1},{\\\"component\\\":[322.5740242832339,2.1543814343061296],\\\"label\\\":1},{\\\"component\\\":[106.53004486199823,296.9022802016734],\\\"label\\\":1},{\\\"component\\\":[134.98395205921122,456.52790102885797],\\\"label\\\":1},{\\\"component\\\":[415.4595416237652,163.63033251979763],\\\"label\\\":1},{\\\"component\\\":[83.0345558820399,111.89289392394264],\\\"label\\\":-1},{\\\"component\\\":[477.7729453846077,209.97230111036492],\\\"label\\\":1},{\\\"component\\\":[345.5995432868565,151.186560771008],\\\"label\\\":1},{\\\"component\\\":[426.57060362145626,442.42611283949253],\\\"label\\\":1},{\\\"component\\\":[392.0192085974855,242.80079230393358],\\\"label\\\":1},{\\\"component\\\":[393.61849367455847,305.0323226392168],\\\"label\\\":1},{\\\"component\\\":[151.80379713683013,73.92888988977586],\\\"label\\\":-1},{\\\"component\\\":[37.4958802291554,238.09035472939732],\\\"label\\\":-1},{\\\"component\\\":[64.10838897019578,321.28924077916344],\\\"label\\\":1},{\\\"component\\\":[485.1377299505073,282.17374081828274],\\\"label\\\":1},{\\\"component\\\":[156.46363609164104,75.31260860029931],\\\"label\\\":-1},{\\\"component\\\":[407.46317199628265,240.21825495380477],\\\"label\\\":1},{\\\"component\\\":[454.6352780082613,242.01809843505873],\\\"label\\\":1},{\\\"component\\\":[405.6905723653954,310.7298117327244],\\\"label\\\":1},{\\\"component\\\":[3.4235309301643424,255.1401919833567],\\\"label\\\":-1},{\\\"component\\\":[156.18340964102572,336.3857496118493],\\\"label\\\":1},{\\\"component\\\":[376.4120422901016,207.9105989402058],\\\"label\\\":1},{\\\"component\\\":[294.10476898091986,98.40046207529596],\\\"label\\\":1},{\\\"component\\\":[428.21404333142755,458.72271142669507],\\\"label\\\":1},{\\\"component\\\":[163.5664930486731,48.34965654514578],\\\"label\\\":-1},{\\\"component\\\":[456.8568846650204,431.8042500503017],\\\"label\\\":1},{\\\"component\\\":[484.97884271219783,279.1594070656558],\\\"label\\\":1},{\\\"component\\\":[440.9018510769107,390.18682590426124],\\\"label\\\":1},{\\\"component\\\":[480.34929194110566,287.9498380579781],\\\"label\\\":1},{\\\"component\\\":[432.9770643247705,47.193785875541685],\\\"label\\\":1},{\\\"component\\\":[258.75820265851814,91.8893039619748],\\\"label\\\":1},{\\\"component\\\":[285.2435245848004,366.74934782934696],\\\"label\\\":1},{\\\"component\\\":[2.6316240335608754,293.99298336842304],\\\"label\\\":-1},{\\\"component\\\":[385.13245129302595,15.911898477129704],\\\"label\\\":1},{\\\"component\\\":[225.459441188391,249.45372458265948],\\\"label\\\":1},{\\\"component\\\":[25.769651378727332,116.20404058240952],\\\"label\\\":-1},{\\\"component\\\":[111.26077517974986,395.2725403734008],\\\"label\\\":1},{\\\"component\\\":[142.70953729944404,404.0755214106675],\\\"label\\\":1},{\\\"component\\\":[370.4240457989212,104.80262499395788],\\\"label\\\":1},{\\\"component\\\":[328.67301261930737,199.3694892125144],\\\"label\\\":1},{\\\"component\\\":[320.124413282579,329.040016399706],\\\"label\\\":1},{\\\"component\\\":[466.58735849289513,38.132746956217936],\\\"label\\\":1},{\\\"component\\\":[446.94686534506144,217.72525277065645],\\\"label\\\":1},{\\\"component\\\":[34.42356600148588,112.04286099727045],\\\"label\\\":-1},{\\\"component\\\":[323.1478067336183,273.7463153955401],\\\"label\\\":1},{\\\"component\\\":[131.65077060371777,425.0664168338624],\\\"label\\\":1},{\\\"component\\\":[23.100111886828255,476.7838209926455],\\\"label\\\":1},{\\\"component\\\":[218.20196892674048,63.93609826898161],\\\"label\\\":-1},{\\\"component\\\":[329.96397650753573,11.313292554112508],\\\"label\\\":1},{\\\"component\\\":[462.4013457254065,25.588863627983514],\\\"label\\\":1},{\\\"component\\\":[457.74352829452005,158.42954589740955],\\\"label\\\":1},{\\\"component\\\":[349.6788163408512,382.9363673039341],\\\"label\\\":1},{\\\"component\\\":[11.678185986692569,96.43536450043555],\\\"label\\\":-1},{\\\"component\\\":[31.52168647540443,221.7128465346636],\\\"label\\\":-1},{\\\"component\\\":[134.14032129548448,352.7164761299325],\\\"label\\\":1},{\\\"component\\\":[387.00635500982037,309.4822719638154],\\\"label\\\":1},{\\\"component\\\":[449.8879159858644,172.13464528500134],\\\"label\\\":1},{\\\"component\\\":[80.63927833830753,273.8314860836161],\\\"label\\\":1},{\\\"component\\\":[207.13363947933706,63.77242659117466],\\\"label\\\":-1},{\\\"component\\\":[404.8722102023712,476.5565460719524],\\\"label\\\":1},{\\\"component\\\":[88.20140771872586,413.48982168993365],\\\"label\\\":1},{\\\"component\\\":[102.38902525488957,298.23097572936973],\\\"label\\\":1},{\\\"component\\\":[394.0071103633823,6.2927795098066674],\\\"label\\\":1},{\\\"component\\\":[317.81437439664717,300.55321575680307],\\\"label\\\":1},{\\\"component\\\":[397.4129458072463,30.422554766172063],\\\"label\\\":1},{\\\"component\\\":[74.44720784376658,435.5226735231007],\\\"label\\\":1},{\\\"component\\\":[25.80499412494497,389.6973180350108],\\\"label\\\":1},{\\\"component\\\":[198.36739802865088,267.0379380427981],\\\"label\\\":1}]}\");\n\n//# sourceURL=webpack:///./data/trainingSet.json?");

/***/ }),

/***/ "./dist/sketch.js":
/*!************************!*\
  !*** ./dist/sketch.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("class Vector {\r\n    constructor(components = new Array()) {\r\n        this.add = function (v) {\r\n            let temp = new Vector([]);\r\n            for (let i = 0; i < this.components.length; i++)\r\n                temp.components[i] = this.components[i] + v.components[i];\r\n            return temp;\r\n        };\r\n        this.multi = function (v) {\r\n            let temp = new Vector([]);\r\n            for (let i = 0; i < this.components.length; i++)\r\n                temp.components[i] = this.components[i] - v.components[i];\r\n            return temp;\r\n        };\r\n        this.norm = function () {\r\n            let sum = 0;\r\n            for (let i = 0; i < this.components.length; i++)\r\n                sum += this.components[i] * this.components[i];\r\n            return Math.sqrt(sum);\r\n        };\r\n        this.dot = function (v) {\r\n            if (v instanceof Vector) {\r\n                let sum = 0;\r\n                for (let i = 0; i < this.components.length; i++)\r\n                    sum += this.components[i] * v.components[i];\r\n                return sum;\r\n            }\r\n            else {\r\n                let sum = new Vector([]);\r\n                for (let i = 0; i < this.components.length; i++)\r\n                    sum.components[i] = this.components[i] * v;\r\n                return sum;\r\n            }\r\n        };\r\n        this.cross = function (v) {\r\n            let temp = new Vector([]);\r\n            if (this.components.length == 3) {\r\n                temp.components[0] = this.components[1] * v.components[2] - this.components[2] * v.components[1];\r\n                temp.components[1] = this.components[2] * v.components[0] - this.components[0] * v.components[2];\r\n                temp.components[2] = this.components[0] * v.components[1] - this.components[1] * v.components[0];\r\n                return temp;\r\n            }\r\n            else\r\n                throw new Error(\"Dimension Error: \" + this.components.length + \" dimensions\");\r\n        };\r\n        this.toArray = function () {\r\n            return this.components;\r\n        };\r\n        this.components = components;\r\n    }\r\n}\r\nVector.angle = function (v, w) {\r\n    let temp = v.dot(w);\r\n    return Math.acos(temp / (v.norm() * w.norm()));\r\n};\r\nclass TrainingData {\r\n    constructor(fVec, label) {\r\n        this.fVec = fVec;\r\n        this.label = label;\r\n    }\r\n}\r\nclass Perceptron {\r\n    constructor(inputs, learningRate) {\r\n        this.conpute = function () {\r\n            let i = 0;\r\n            let n = this.inputs.length;\r\n            let currect;\r\n            while (true) {\r\n                currect = 0;\r\n                this.inputs.forEach((input) => {\r\n                    if (this.isClassifiedError(input)) {\r\n                        this.weights = this.weights.add(input.fVec.dot(this.lr * input.label));\r\n                        this.b += this.lr * input.label;\r\n                    }\r\n                    else\r\n                        currect++;\r\n                });\r\n                if (currect == n)\r\n                    break;\r\n            }\r\n        };\r\n        this.predict = function (traingData) {\r\n            return this.sign(this.weights.dot(traingData.fVec) + this.b);\r\n        };\r\n        this.sign = function (n) {\r\n            if (n >= 0)\r\n                return 1;\r\n            else\r\n                return -1;\r\n        };\r\n        this.isClassifiedError = function (traingData) {\r\n            let pre = this.predict(traingData);\r\n            let coupler = traingData.label * pre;\r\n            if (coupler <= 0)\r\n                return true;\r\n            else\r\n                false;\r\n        };\r\n        this.inputs = inputs;\r\n        this.weights = new Vector(new Array());\r\n        for (let i = 0; i < this.inputs[0].fVec.toArray().length; i++)\r\n            this.weights.components.push(Math.random());\r\n        this.lr = learningRate;\r\n        this.b = Math.random();\r\n        this.conpute();\r\n    }\r\n    set learningRate(lr) {\r\n        this.lr = lr;\r\n    }\r\n    get vectWeights() {\r\n        return this.weights;\r\n    }\r\n    get paramB() {\r\n        return this.b;\r\n    }\r\n}\r\nvar canvas = document.querySelector(\"canvas\");\r\nvar ctx = canvas.getContext(\"2d\");\r\ncanvas.width = 500;\r\ncanvas.height = 500;\r\nvar canvasWidth = canvas.width;\r\nvar canvasHeight = canvas.height;\r\nconst dataSet = __webpack_require__(/*! ../data/trainingSet.json */ \"./data/trainingSet.json\");\r\nvar arr = [];\r\nObject.keys(dataSet).forEach(v => {\r\n    let o = {};\r\n    o[v] = dataSet[v];\r\n    arr.push(o);\r\n});\r\nconst inputs = arr.shift().inputs;\r\nvar trainingSet = new Array();\r\ninputs.forEach((input) => {\r\n    trainingSet.push(new TrainingData(new Vector(input.component), input.label));\r\n});\r\nconst drawDataSet = function () {\r\n    trainingSet.forEach((point) => {\r\n        ctx.beginPath();\r\n        if (point.label == 1)\r\n            ctx.fillStyle = \"green\";\r\n        else\r\n            ctx.fillStyle = \"blue\";\r\n        ctx.arc(point.fVec.toArray()[0], point.fVec.toArray()[1], 3, 0, 2 * Math.PI);\r\n        ctx.fill();\r\n    });\r\n};\r\nconst line = function (a, b, c, color) {\r\n    let point0 = {\r\n        x: 0,\r\n        y: -c / b\r\n    };\r\n    let point1 = {\r\n        x: -c / a,\r\n        y: 0\r\n    };\r\n    ctx.beginPath();\r\n    ctx.lineWidth = 1;\r\n    ctx.strokeStyle = color;\r\n    if (a == 0) {\r\n        ctx.moveTo(0, -c / b);\r\n        ctx.lineTo(canvasWidth, -c / b);\r\n    }\r\n    if (b == 0) {\r\n        ctx.moveTo(-c / a, 0);\r\n        ctx.lineTo(-c / a, canvasHeight);\r\n    }\r\n    if (c == 0) {\r\n        ctx.moveTo(0, 0);\r\n        ctx.lineTo(canvasWidth, -(a * canvasWidth) / b);\r\n    }\r\n    if (a * b > 0 && a * c > 0 && b * c > 0) {\r\n        console.log(\"the line is not suitable!!\");\r\n    }\r\n    else {\r\n        if (-a / b > 0) {\r\n            if (-c > 0) {\r\n                ctx.moveTo(0, -c / b);\r\n                ctx.lineTo((-b * canvasHeight - c) / a, canvasHeight);\r\n            }\r\n            else if (-c < 0) {\r\n                ctx.moveTo(-c / a, 0);\r\n                ctx.lineTo(canvasWidth, (-c - a * canvasWidth) / b);\r\n            }\r\n        }\r\n        else if (-a / b < 0) {\r\n            ctx.moveTo(0, -c / b);\r\n            ctx.lineTo(-c / a, 0);\r\n        }\r\n    }\r\n    ctx.stroke();\r\n};\r\nvar p = new Perceptron(trainingSet, 0.5);\r\nconsole.log(p);\r\ndrawDataSet();\r\nline(1, 1, -300, \"red\");\r\nline(p.vectWeights.components[0], p.vectWeights.components[1], p.paramB, \"black\");\r\n// const animate = function (): void {\r\n//     var p = new Perceptron(trainingSet, 1);\r\n//     requestAnimationFrame(animate);\r\n//     ctx.clearRect(0, 0, canvas.width, canvas.height);\r\n//     line(1, 1, -500, \"red\")\r\n//     drawDataSet();\r\n//     line(p.vectWeights.components[0], p.vectWeights.components[1], p.paramB, \"black\");\r\n// }\r\n// animate();\r\n//# sourceMappingURL=sketch.js.map\n\n//# sourceURL=webpack:///./dist/sketch.js?");

/***/ })

/******/ });