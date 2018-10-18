const crypto = require('crypto');

function md5(content) {
    const hash = crypto.createHash('md5');
    hash.update(content);
    return hash.digest('hex');
}

let i = 19000000; // bet from a normal year
while (i < 99999999) {
    if (md5(String(i)) === '7e38890b870934b126f66857ed6b57b9') break;

    i++;
}
console.log(i);
