const http = require("http");
const path = require("path");
const fs = require("fs");
const server = http.createServer((req, res) => {
  //   if ((req.url = "/")) {
  //     fs.readFile(
  //       path.join(__dirname, "public", "index.html"),
  //       (err, content) => {
  //         if (err) throw err;
  //         res.writeHead(200, { "Content-Type": "text/html" });
  //         res.end(content);
  //       }
  //     );
  //   }
  //   if ((req.url = "/api/users")) {
  //     const users = [{ name: "lara", age: 33 }, { name: "sara", age: 20 }];
  //     res.writeHead(200, { "Content-Type": "application/json" });
  //     res.end(JSON.stringify(users));
  //   }

  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );
  ///Extension of file
  let extname = path.extname(filePath);
  //Initial content type
  let contenType = "text/html";

  //Check ext and set content type
  switch (extname) {
    case ".js":
      contenType = "text/javascript";
      break;
    case ".css":
      contenType = "text/css";
      break;
    case ".json":
      contenType = "application/json";
    case "png":
      contenType = "image/png";
      break;
    case ".jpg":
      contenType = "image/jpg";
      break;
  }
  //read file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content, "utf8");
          }
        );
      } else {
        //Some server error
        res.writeHead(500);
        res.end(`Server Error:${err.code} `);
      }
    } else {
      //success
      res.writeHead(200, { "Content-Type": contenType });
      res.end(content, "utf8");
    }
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
