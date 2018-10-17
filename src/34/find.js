const crypto = require('crypto');

// replace if need
const today = '20181017';
const user = 'chinesedfan';
const max = 1001;

// if current vote is i, then the validation code is result[i]
const result = {};

let i = 1;
let found = 0;
while (found <= max) {
    const hash = md5(`${today}${user}${i}`);
    if (hash.substr(0, 6) === '000000') {
        const str = String(i);
        for (let j = 1; j <= 3; j++) {
            if (addHash(result, +str.substr(0, j), str.substr(j))) found++;
        }

        console.log(`i=${i}, found=${found}`);
    }
    i++;
}

const output = [];
for (let key = 1; key <= max; key++) {
    output.push(`/* ${key} */${result[key]}`);
}
console.log(output.join(', '));

function md5(content) {
    const hash = crypto.createHash('md5');
    hash.update(content);
    return hash.digest('hex');
}

function addHash(result, i, hash) {
    console.log(`${i} ${hash}`);
    // not count for empty result, invalid i, or already found
    if (!hash || i > max || result[i]) return false;

    result[i] = hash;
    return true;
}
