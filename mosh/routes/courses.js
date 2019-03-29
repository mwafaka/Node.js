const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const Course = mongoose.model(
  "Course",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
    }
  })
);

router.get("/", async (req, res) => {
  const courses = await Course.find().sort("name");
  res.send(courses);
});
router.get("/:id", async (req, res) => {
  const course = await Courses.findById(req.params.id);
  // const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send("The id not found ");
  res.send(course);
});

router.post("/", async (req, res) => {
  const { error } = validateCourse(req.body);
  if (error) return;
  res.status(400).send(error.details[0].message);

  let course = new Course({
    name: req.body.name
  });
  course = await course.save();
  res.send(course);
});

router.put("/:id", async (req, res) => {
  const { error } = validateCourse(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const course = await Course.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name },
    {
      new: true
    }
  );
  // const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send("The id not found");

  course.name = req.body.name;
  res.send(course);
});

function validateCourse(course) {
  const schema = {
    name: Joi.string()
      .min(3)
      .required()
  };
  return Joi.validate(course, schema);
}

router.delete("/:id", async (req, res) => {
  const course = await Course.findByIdAndRemove(req.params.id);
  // const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send("The id not found");
  // const index = courses.indexOf(course);
  // courses.splice(index, 1);
  res.send(course);
});
module.exports = router;
