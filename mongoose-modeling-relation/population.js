const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Connect to MongoDb..."))
  .catch(err => console.error("Could not connect to mongoDb...", err));

const Author = mongoose.model(
  "Author",
  new mongoose.Schema({
    name: String,
    bio: String,
    website: String
  })
);
const Course = mongoose.model(
  "Course",
  new mongoose.Schema({
    name: String
  })
);

async function createAuthor(name, bio, website) {
  const author = new Author({
    name,
    bio,
    website
  });
  const result = await author.save();
  console.log(result);
}

async function createCourse(name, author) {
  const course = new Course({
    nam,
    author
  });
  const result = await course.save();
  console.log(result);
}

async function listCourse() {
  const courses = await Course.find().select("name");
  console.log(courses);
}
createAuthor("mm", "my bio", "authorId");

// createCourse('Node course','authorId')

// listCourse();
