const crypto = require('crypto');
const fetch = require('node-fetch');

// replace if need
const today = '20181019';
const user = 'chinesedfan';
const max = 1001;
const token = '';

(async function() {
    let cur = 230;
    while (cur <= max) {
        let i = 1;
        while (1) {
            if (!(i % 10000000)) console.log(`${i / 10000000}0m`);

            const hash = md5(`${today}${user}${cur}${i}`);
            if (hash.substr(0, 6) === '000000') {
                console.log(`cur=${cur} i=${i}`);
                await send(i);
                break;
            }

            i++;
        }
        cur++;
    }
})();

function md5(content) {
    const hash = crypto.createHash('md5');
    hash.update(content);
    return hash.digest('hex');
}

function send(i) {
    return fetch(`http://www.qlcoder.com/train/handsomerank?_token=${token}&user=${user}&checkcode=${i}`)
        .then((res) => res.text())
        .then((text) => console.log(`${i}...${text.substr(0, 10)}`));
}
