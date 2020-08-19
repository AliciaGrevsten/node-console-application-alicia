
const os = require('os');

function log() {
    console.log('SYSTEM MEMORY: ', (os.totalmem() / 1024 / 1024 /2024).toFixed(2) + 'GB');

    console.log('FREE MEMORY: ', (os.freemem() / 1024 / 1024 /2024).toFixed(2) + 'GB');

    console.log('CPU CORE: ', os.cpus().length);

console.log('ARCH: ', os.arch());

console.log('PLATFORM: ', os.platform());

console.log('RELEASE: ', os.release());

console.log('USER: ', os.userInfo().username);
}

module.exports = log;