const fs = require("fs");
const path = require("path");
let filelist = [];
const res = path.resolve;
function getFile(dir) {
  try {
    const dirtoresolve = dir;
    const x = fs.readdirSync(dirtoresolve);
    for (let fi of x) {
      try {
        const filet = res(dirtoresolve, fi);
        const st = fs.statSync(filet);
        const isitfile = st.isFile();
        if (isitfile) {
          filelist.push(filet);
        } else {
          getFile(filet);
        }
      } catch (e) {}
    }
  } catch (e) {}
}
function promised(dir) {
  return new Promise((ok, err) => {
    getFile(dir);
    ok(filelist);
  });
}
module.exports = promised;
