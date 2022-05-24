const fs = require('node:fs');
const path = require('path');

const _path = path.join(__dirname, 'files');
const _newPath = path.join(__dirname, 'files-copy');

fs.mkdir(_newPath, {recursive: true}, (err) => {
    if(err) {
        throw err;
    }

    fs.readdir(_newPath, (err, files) => {
        if(err) {
            throw err;
        }
        files.forEach((file) => {
            fs.unlink(path.join(newFiles, file), (err) => {
                if (err) {
                  throw err;
                }
            });
        });
    });

    fs.readdir(_path, (err, files) => {
        if (err) {
          throw err;
        }
        files.forEach((file) => {
          fs.copyFile(
            path.join(_path, file),
            path.join(_newPath, file),
            (err) => {
              if (err) {
                throw err;
              }
            }
          );
        });
      });
});