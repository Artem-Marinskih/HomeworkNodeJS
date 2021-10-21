const fs = require("fs");
const {getAverageColor} = require("fast-average-color-node");

module.exports = function picture() {
  const image = process.env.PIC;

  if (!image) {
    console.log("Путь к картинке не задан");
    return;
  }

  fs.readFile(image, (err, data) => {
    if (err) {
      console.log("По такому пути нет картинки");
    }

    getAverageColor(image).then(color => {
      console.log(color);
    });
  });
};
