const mongoose = require('mongoose');

// Connect to MongoDB with the database name "playground"
mongoose.connect('mongodb://localhost/playground', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

// Define the schema for the "courses" collection
const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean
});

// Create the "Course" model based on the schema
const Course = mongoose.model('Course', courseSchema);

// Now, you can use the "Course" model to interact with the "courses" collection in the "playground" database

// Example: Creating a new course document and saving it to the database
const newCourse = new Course({
  name: 'Node.js Basics',
  author: 'John Doe',
  tags: ['node.js', 'javascript'],
  isPublished: true
});

newCourse.save()
  .then(course => {
    console.log('New course saved:', course);
  })
  .catch(err => {
    console.error('Error saving course:', err);
  });
