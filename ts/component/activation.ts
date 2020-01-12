const sigmoid = function(x: number): number {
    return 1 / (1 + Math.pow(Math.E, -x));
}
const tanh = function(x: number): number {
    return Math.tanh(x);
}