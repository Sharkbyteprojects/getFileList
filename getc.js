const xss = require("./getContent");
xss(__dirname)
  .then((s) => {
    console.log(s);
  })
  .catch((err) => {
    console.log(err);
  });
