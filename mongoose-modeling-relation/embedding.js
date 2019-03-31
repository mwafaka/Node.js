const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/playground", { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDb..."))
  .catch(err => console.log("Could not connect to mongodb..."));
const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String
});

const Author = mongoose.model("Author", authorSchema);

const Course = mongoose.model(
  "Course",
  new mongoose.Schema({
    name: String,
    authors: [authorSchema]
  })
);
async function createCourse(name, authors) {
  const course = new Course({
    name,
    authors
  });
  const result = await course.save();
  console.log(result);
}

async function listCourses() {
  const courses = await Course.find();
  console.log(courses);
}

async function updateAuthor(courseId) {
  const course = await Course.update(
    { _id: courseId },
    {
      $set: {
        "author.name": "John Smith"
      }
    }
  );
}

async function addAuthor(courseId, author) {
  const course = await Course.findById(courseId);
  course.authors.push(author);
  course.save();
}

async function removeAuthor(courseId, authorId) {
  const course = await Course.findById(courseId);
  const author = course.authors.id(authorId);
  author.remove();
  course.save();
}
// updateAuthor("5c9fa1371a00fb24f4397ba9");
// createCourse("Node Course", [
//   new Author({ name: "Mm" }),
//   new Author({ name: "Mo" })
// ]);

removeAuthor("5c9fa5d4c521ca1e3c116a12", "5c9fa746df4882441cf9c630");
