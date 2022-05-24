const fs = require('node:fs');
const path = require('path');

const Styles = path.join(__dirname, "styles");
const Bundle = path.join(__dirname, "project-dist/bundle.css");

fs.readdir(Styles, (err, files) => {
    if (err) {
        throw err;
    }

    fs.writeFile(Bundle, "", (err) => {
        if (err) {
          throw err;
        }
    });

    files.forEach((file) => {
        const ext = path.extname(file);
        if (ext == '.css') {
            const rl = fs.createReadStream(`${Styles}/${file}`);
            rl.on('data', (data) => {
                fs.appendFile(Bundle, data, (err) => {
                    if (err) {
                      throw err;
                    }
                });
            });
        }
    });
});