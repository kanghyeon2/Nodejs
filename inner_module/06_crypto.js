// 06_crypto.js
const crypto = require('crypto');
const data = 'pw1234';

let encData = crypto.createHash("sha512") // 암호화 알고리즘
                    .update(data)
                    .digest('base64'); // hex << 좀더 길게 쓰고 싶을 경우 (hex)
console.log(encData);
console.log(encData.length);