const fs = require("fs");

fs.readFile("./content/read_async.txt", "utf8", (err, data1) => {
  if (err) {
    return err;
  }

  fs.readFile("./content/read.txt", "utf8", (err, data2) => {
    if (err) {
      return err;
    }

    fs.writeFile(
      "./content/write_async_new.txt",
      `the data is ${data1} , ${data2} \n`,
      { flag: "a" },
      (err, data) => {
        if (err) {
          return err;
        }
      }
    );
  });
});
