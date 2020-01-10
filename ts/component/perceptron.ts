class Perceptron {
    private inputs: Array<TrainingData>;
    private weights: Vector;
    private b: number;
    private lr: number;
    constructor(inputs: Array<TrainingData>, learningRate: number) {
        this.inputs = inputs;
        this.weights = new Vector(new Array<number>());
        for (let i = 0; i < this.inputs[0].fVec.toArray().length; i++)
            this.weights.components.push(Math.random());
        this.lr = learningRate;
        this.b = Math.random();
        this.conpute();
    }


    private conpute = function () {
        let i = 0;
        let n = this.inputs.length;
        let currect: number;
        
        while (true) {
            currect = 0;
            this.inputs.forEach((input: TrainingData) => {
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
    }
    private predict = function (traingData: TrainingData): number {
        return this.sign(this.weights.dot(traingData.fVec) + this.b);
    }
    private sign = function (n: number): number {
        if (n >= 0) return 1;
        else        return -1;
    }
    private isClassifiedError = function(traingData: TrainingData): boolean {
        let pre = this.predict(traingData)
        let coupler = traingData.label * pre;
        if (coupler <= 0)
            return true;
        else
            false;
    }
    
    public set learningRate(lr : number) {
        this.lr = lr;
    }

    public get vectWeights() : Vector {
        return this.weights;
    }
    
    public get paramB() : number {
        return this.b;
    }
}


