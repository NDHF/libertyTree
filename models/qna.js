var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var QuestionAndAnswerSchema = new Schema({
  // `title` is of type String
  question: String,
  // `body` is of type String
  answer: String,
  // 'answererID' is of type String
  answererID: String
});

// This creates our model from the above schema, using mongoose's model method
var QuestionAndAnswer = mongoose.model("QuestionAndAnswer", QuestionAndAnswerSchema);

// Export the Note model
module.exports = QuestionAndAnswer;