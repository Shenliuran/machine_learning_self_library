class Matrix {
    private __matrix: any;
    private __column: number;
    private __row: number;
    constructor() {
        this.__matrix = new Array();
    }
    public init(row: number, column: number) {
        this.__column = column;
        this.__row = row;
        for (let i = 0; i < this.__row; i++)
            this.__matrix[i] = new Array();
    }
    public shape = {
            row: this.__row,
            column: this.__column
    };
    public zero(row: number, column: number) {
        this.init(row, column);
        for (let i = 0; i < row; i++)
            for (let j = 0; j < column; j++)
                this.__matrix[i][j] = 0;
    }
    public elem(rank: number) {
        this.init(rank, rank);
        for (let i = 0; i < rank; i++) {
            for (let j = 0; j < rank; j++) {
                if (i == j)
                    this.__matrix[i][j] = 1;
                else
                    this.__matrix[i][j] = 0;
            }
        }
    }
    public matrix(sheet: number[][]) {
        this.init(sheet.length, sheet[0].length)
        this.__matrix = sheet;
    }
    public add(m: Matrix): Matrix {
        if (this.__column == m.__column && this.__row == m.__row) {
            let t = new Matrix();
            t.init(this.__row, this.__column);
            for (let i = 0; i < this.__row; i++)
                for (let j = 0; j < this.__column; j++)
                    t.__matrix[i][j] = this.__matrix[i][j] + m.__matrix[i][j];
            return t;
        }
        else
            throw new Error("shape is different\n" + "shape of this: " + this.shape + ", shape of m: " + m.shape);
    }
    public sub(m: Matrix): Matrix {
        if (this.__column == m.__column && this.__row == m.__row) {
            let t = new Matrix();
            t.init(this.__row, this.__column);
            for (let i = 0; i < this.__row; i++)
                for (let j = 0; j < this.__column; j++)
                    t.__matrix[i][j] = this.__matrix[i][j] - m.__matrix[i][j];
            return t;
        }
        else
            throw new Error("shape is different\n" + "shape of this: " + this.shape + ", shape of m: " + m.shape);
    }
    public multiply(m: Matrix | number): Matrix {
        if (m instanceof Matrix) {
            let t = new Matrix();
            t.zero(this.__row, m.__column);
            let temp = 0;
            if (this.__column == m.__row && this.__row == m.__column) {
                for (let i = 0; i < this.__row; i++)
                    for (let j = 0; j < m.__column; j++)
                        for (let k = 0; k < m.__row; k++) {
                            t.__matrix[i][j] += this.__matrix[i][k] * m.__matrix[k][j];
                        }
                return t;
            }
            else
                throw new Error("Can't multiply\n" + "shape of this: " + this.shape + ", shape of m: " + m.shape);
        }
        else {
            let t = new Matrix();
            t.zero(this.__row, this.__column);
            for (let i = 0; i < this.__row; i++)
                for (let j = 0; j < this.__column; j++)
                    t.__matrix[i][j] = m * this.__matrix;
        }
    }
    public transpose(generateNewMatrix: boolean) {
        let t = new Matrix();
        t.init(this.__column, this.__row);
        
        for (let i = 0; i < this.__row; i++)
            for (let j = 0; j < this.__column; j++)
                t.__matrix[j][i] = this.__matrix[i][j];
        if (generateNewMatrix == false) {
            this.__matrix = t.__matrix;
            this.__column = t.__column;
            this.__row = t.__row;
        }
        else
            return t;
    }
    public toRowVectorSet(): Vector[] {
        let vs = new Array<Vector>();
        for (let i = 0; i < this.__row; i++)
            vs.push(new Vector(this.__matrix[i]));
        return vs;
    }
    public toColumnVectorSet(): Vector[] {
        let vs = new Array<Vector>();
        for (let i = 0; i < this.__column; i++){
            let t = [];
            for (let j = 0; j < this.__row; j++)
                t.push(this.__matrix[j][i]);
            vs.push(new Vector(t));
        }
        return vs;
    }
    public toSheet(): number[] {
        return this.__matrix;
    }
    public fn(func: (elem: number) => number, linearParam: number): Matrix {
        let m = new Matrix();
        m.init(this.__row, this.__column);
        for (let i = 0; i < this.__row; i++)
            for (let j = 0; j < this.__column; j++)
                m.__matrix[i][j] = func(this.__matrix[i][j] + linearParam);
        return m;
    }
}