declare class Vector {
    components: number[];
    constructor(components?: number[]);
    add(v: Vector): Vector;
    multi(v: Vector): Vector;
    norm(): number;
    dot(v: Vector | number): any;
    cross(v: Vector): Vector;
    toArray: () => number[];
    static angle(v: Vector, w: Vector): number;
}
declare class TrainingData {
    fVec: Vector;
    label: number;
    constructor(fVec: Vector, label: number);
}
declare class Perceptron {
    private inputs;
    private weights;
    private b;
    private lr;
    constructor(inputs: Array<TrainingData>, learningRate: number);
    private conpute;
    private predict;
    private sign;
    private isClassifiedError;
    set learningRate(lr: number);
    get vectWeights(): Vector;
    get paramB(): number;
}
declare var canvas: HTMLCanvasElement;
declare var ctx: CanvasRenderingContext2D;
declare var canvasWidth: number;
declare var canvasHeight: number;
declare const dataSet: any;
declare var arr: any[];
declare const inputs: any;
declare var trainingSet: TrainingData[];
declare const drawDataSet: () => void;
declare const line: (a: number, b: number, c: number, color: string) => void;
declare var p: Perceptron;
