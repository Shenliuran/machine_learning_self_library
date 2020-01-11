class Perceptron {
    private __inputs: Array<TrainingData>;
    private __weights: Vector;
    private __b: number;
    private __lr: number;
    constructor(inputs: Array<TrainingData>, learningRate: number) {
        this.__inputs = inputs;
        this.__weights = new Vector(new Array<number>());
        for (let i = 0; i < this.__inputs[0].fVec.toArray().length; i++)
            this.__weights.components.push(Math.random());
        this.__lr = learningRate;
        this.__b = Math.random();
        this.conpute();
    }


    private conpute() {
        let i = 0;
        let n = this.__inputs.length;
        let currect: number;
        
        while (true) {
            currect = 0;
            this.__inputs.forEach((input: TrainingData) => {
                if (this.isClassifiedError(input)) {
                    this.__weights = this.__weights.add(input.fVec.dot(this.__lr * input.label));
                    this.__b += this.__lr * input.label;
                }
                else
                    currect++;
            });
            if (currect == n)
                break;
        }
    }
    private predict(traingData: TrainingData): number {
        return this.sign(this.__weights.dot(traingData.fVec) + this.__b);
    }
    private sign(n: number): number {
        if (n >= 0) return 1;
        else        return -1;
    }
    private isClassifiedError(traingData: TrainingData): boolean {
        let pre = this.predict(traingData)
        let coupler = traingData.label * pre;
        if (coupler <= 0)
            return true;
        else
            false;
    }
    
    public set learningRate(lr : number) {
        this.__lr = lr;
    }

    public get vectWeights() : Vector {
        return this.__weights;
    }
    
    public get paramB() : number {
        return this.__b;
    }
}


