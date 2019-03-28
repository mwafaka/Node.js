// const mongoose = require("mongoose");
// mongoose
//   .connect("mongodb://localhost/playground", { useNewUrlParser: true })
//   .then(() => console.log("Connected to mongodb..."))
//   .catch(err => console.error("Could not connect to MongoDb...", err));

// const courseSchema = new mongoose.Schema({
//   name: { type: String, required: true, minlength: 5, maxlength: 55 },
//   category: {
//     type: String,
//     required: true,
//     enum: ["web", "mobile", "network"],
//     lowercase: true,
//     get: v => Math.round(v),
//     set: v => Math.round(v)
//   },
//   author: String,
//   tags: {
//     type: Array,
//     validate: {
//       validator: function(v) {
//         return v && v.length > 0;
//       },
//       message: "A course should have at least one tag.."
//     }
//   },
//   date: { type: Date, default: Date.now },
//   isPublished: Boolean,
//   price: {
//     type: Number,
//     required: function() {
//       return this.isPublished;
//     }
//   }
// });
// const Course = mongoose.model("Course", courseSchema);

// async function createCourse() {
//   const course = new Course({
//     name: "Angular course",
//     author: "Mf",
//     tags: [],
//     isPublished: true,
//     category: "web"
//   });
//   try {
//     const result = await course.save();
//     console.log(result);
//   } catch (ex) {
//     for (x in ex.errors) console.log(ex.errors[x].message);
//   }
// }
// createCourse();
// async function getCourses() {
//   const courses = await Course
//     //   .find({ author: "Mf", isPublished: true })
//     //   .find({ price: {$gte:10,$lte:20} })
//     // .find({ price: { $in: [10, 15, 20] } })

//     /////////Regualr expression////
//     .find({ author: /^Mf/ })
//     .find({ author: /arbash$/i })
//     .find({ author: /.*Mf.*/i })
//     ////////**********************//////////////////
//     .find()
//     // .or([{ author: "Mosh" }, { isPublished: true }])

//     .limit(10)
//     .sort({ name: 1 })
//     // .select({ name: 1, tags: 1 });
//     .count();
//   // console.log(courses);
// }

// // createCourse();

// /////////Update course 1 way
// // async function updateCourse(id) {
// //   const course = await Course.findById(id);
// //   if (!course) return;
// //   course.isPublished = true;
// //   course.author = "Another author";
// //   const result = await course.save();
// //   console.log(result);
// // }

// ///// Update course 2 way
// // async function updateCourse(id) {
// //   const result = await Course.update(
// //     { _id: id },
// //     {
// //       $set: {
// //         author: "not me",
// //         isPublished: true
// //       }
// //     }
// //   );
// // }
// //////get the document that was updated/////
// // async function updateCourse(id) {
// //   const course = await Course.findOneAndUpdate(
// //     id,
// //     {
// //       $set: {
// //         author: " i am me",
// //         isPublished: true
// //       }
// //     },
// //     { new: true }
// //   );
// //   console.log(course);
// // }
// //////////7Remove course////////////
// // async function removeCourse(id) {
// //   const result = await Course.deleteOne({ _id: id });
// //   console.log(result);
// // }

// ////////get the document that was deleted /////////7
// // async function removeCourse(id) {
// //   const result = await Course.findByIdAndRemove({ _id: id });
// //   console.log(result);
// // }
// // removeCourse("5c979cff85305120fc874f84");
