const triangleArea = (base, height) => {
    if(base < 0 || height < 0){
        throw new Error("Base or height cannot be negative");
    }
    if(isNaN(base) || isNaN(height)){
        throw new Error("Base or height must be a number");
    }
    return 0.5 * base * height;
}

module.exports = triangleArea;