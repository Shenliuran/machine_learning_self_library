class AbstractLayer {
    protected _inputs: number[];
    protected _nodeNum: number;
    protected _inputMatrix: Matrix;
    protected _weightMatrix: Matrix;
    protected _threshold: number = 1;
    protected _activation: (elem: number) => number;
    protected _bias: number = 0;
    protected in(inputs: number[] | Matrix) {
        if (inputs instanceof Matrix)
            this._inputMatrix = inputs;
        else {
            this._inputs = inputs;
            this._inputMatrix = new Matrix();
            this._inputMatrix.matrix([inputs])
        }
    }
    protected initWeightMatrix() {
        this._weightMatrix = new Matrix();
        this._weightMatrix.init(this._inputs.length, this._nodeNum);
        for (let i = 0; i < this._weightMatrix.shape.row; i++) {
            for (let j = 0; j < this._weightMatrix.shape.column; j++) {
                this._weightMatrix[i][j] = Math.random() * 2 * this._threshold - this._threshold;
            }
        }
    }
    protected compute(): Matrix {
        return this._inputMatrix.multiply(this._weightMatrix).fn(this._activation, this._bias);
    }
    protected out(): Matrix {
        return this._inputMatrix;
    }
    protected set threshold(threshold: number) {
        this._threshold = threshold;
    }
    protected set bias(bias: number) {
        this._bias = bias;
    }
}