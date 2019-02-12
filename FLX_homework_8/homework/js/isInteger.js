const isInteger = x => !!(x % parseInt(x) === 0 || x === 0);
isInteger(5.1);