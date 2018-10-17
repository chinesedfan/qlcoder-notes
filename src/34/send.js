const fetch = require('node-fetch');

// replace if need
const token = '';
const user = 'chinesedfan';

function send(i) {
    return fetch(`http://www.qlcoder.com/train/handsomerank?_token=${token}&user=${user}&checkcode=${i}`)
        .then((res) => res.text())
        .then((text) => console.log(`${i}...${text.substr(0, 10)}`));
}

const list = [
    // paste final result of find.js below
];

let p = Promise.resolve();
list.forEach((x) => p = p.then(() => send(x)));
