module.exports = function reverse (n) {
    const a = String(Math.abs(n)).split("").reverse(); 
    const b = String(a.join(''));
    return b;
}
