/////////////////////////////////////////////// /* Imports */ //////////////////////////////////////////////////////////
let mongoose = require('mongoose');

/////////////////////////////////////////////// /* Initialize */ //////////////////////////////////////////////////////////
let Schema = mongoose.Schema; // Save a Reference to the Schema Constructor

/////////////////////////////////////////////// /* Model*/ //////////////////////////////////////////////////////////
// Everthing will be everchanging here!
let QuestionSchema = new Schema({ // Create a New Schema Constructor for News Article

  question: {
    type: String,
    required: true
  },

  answer: {
    type: String,
    required: false
  },

  nameofansweree: {
    type: String,
    required: false
  },

  nameofquestionairre: {
    type: String,
    required: true
  },

 

  // `comments` is an object that stores a Note id
  // The ref property links the ObjectId to the Note model
  // This allows us to populate the Article with an associated Comment
  note: [{
    type: Schema.Types.ObjectId,
    ref: "Note"
  }]

}); // End of New Schema

/////////////////////////////////////////////// /* Export */ //////////////////////////////////////////////////////////

// This creates our model from the above schema, using mongoose's model method
let Article = mongoose.model("Article", ArticleSchema);

module.exports = Article; // Export the Article Model
