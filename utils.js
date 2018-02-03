const fs = require('fs');

require('shelljs/global');

const makeFolder = (folderPath) => {
    if (!fs.existsSync(folderPath)) {
        mkdir('-p', folderPath);
    }
};

module.exports = {makeFolder};