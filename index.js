const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'src/test.txt');
console.log(fs.statSync(file));
fs.utimes(file, new Date('1999-01-01T00:00:00.000Z'), new Date('1999-01-01T00:00:00.000Z'), (err) => {
    console.warn(`Problem applying the timestamp: ${err}`);
});