const fs = require('fs');

// Usage: node <__filename> rf.data
const args = process.argv.slice(2);
const file = args[0];

const buf = fs.readFileSync(file);

// extract files to ./tmp
if (!fs.existsSync('tmp')) {
    fs.mkdirSync('tmp');
}

let offset = 0;
let i = 0;
while (offset < buf.length) {
    const flag = buf.readUInt8(offset);
    console.log(`flag=${flag}`);
    if (flag === 2) break;

    offset++;
    const size = buf.readInt32BE(offset); // Mac OSX is big endian
    console.log(`size=${size}`);

    offset += 4;
    fs.writeFileSync(`tmp/${i++}`, buf.slice(offset, offset + size));
    offset += size;
}
