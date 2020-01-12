class InputLayer extends AbstractLayer {
    public loader(inputs: number[]) {
        this.in(inputs);
        this._nodeNum = inputs.length;
    }
    public out(): Matrix {
        return super.out();
    }
}

class HiddenLayer extends AbstractLayer {
    public input(inputs: Matrix) {
        this.in(inputs);
        this.initWeightMatrix();
    }
    public setActivation(activation: (elem: number) => number) {
        this._activation = activation;
    }
    public output() {
        this.compute();
        this.out();
    }
    public setBias(bias?: number) {
        this._bias = bias;
    }
}

class OutputLayer extends AbstractLayer{
    public processing(inputs: Matrix): Matrix {
        this.in(inputs);
        return this.out();
    }
}