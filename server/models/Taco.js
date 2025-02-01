const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TacoSchema = new Schema({
  FACILITY_NAME: { 
    type: String, 
    required: true 
  }, // Name of the taco
  // description: { 
  //   type: String, 
  //   required: true 
  // }, // Description of the taco

  // image: { 
  //   type: String 
  // }, // URL to an image of the taco
});

module.exports = mongoose.model('Taco', TacoSchema);

//   price: { 
//     type: Number, 
//     required: true 
//   }, // Price in dollars
//   ingredients: [{ 
//     type: String 
//   }], // List of ingredients
//   isAvailable: { 
//     type: Boolean, 
//     default: true 
//   }, // Whether the taco is available for order
//   createdAt: { 
//     type: Date, 
//     default: Date.now 
//   },
//   updatedAt: { 
//     type: Date, 
//     default: Date.now 
//   }