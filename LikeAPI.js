const http = require("http");

let like = 0;

const requestListener = function (req, res) {
  res.setHeader("Content-type", "application/json");

  switch (req.url) {
    case "/like":
      res.writeHead(200);
      like++;
      res.write(JSON.stringify({status: "Лайк тебе"}));
      break;
    case "/dislike":
      res.writeHead(200);
      like--;
      res.write(JSON.stringify({status: "Дизлайайк тебе"}));
      break;
    case "/stats":
      res.writeHead(200);
      res.write(JSON.stringify({status: `Количество лайков: ${like}`}));
      break;
    default:
      res.writeHead(400);
      res.write(JSON.stringify({status: "error"}));
  }

  res.end();
};

const server = http.createServer(requestListener);
server.listen(8080);

module.exports = function LikeAPI() {};
