let a = Number(prompt('Enter a side, please:', 0));
let b = Number(prompt('Enter b side, please:', 0));
let c = Number(prompt('Enter c side, please:', 0));

if (isFinite(a) && isFinite(b) && isFinite(c) && a > 0) {
    const D = Math.pow(b, 2) - 4 * a * c;
    if (D > 0) {
        const x1 = (-b - Math.sqrt(D)) / (2 * a);
        const x2 = (-b + Math.sqrt(D)) / (2 * a);
        alert(`x1 = ${x1} and x2 = ${x2}`);
    } else if (D === 0) {
        alert(`x = ${-b / (2 * a)}`);
    } else {
        alert('no real solution');
    }
} else {
    alert('Invalid input data');
}