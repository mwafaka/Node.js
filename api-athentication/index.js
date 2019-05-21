const app = require("./server/app");

//Start server
const port = process.env.PORT || 5000;
app.listen(port);
console.log(`Server listening at ${port}`);
