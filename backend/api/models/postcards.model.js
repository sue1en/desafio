const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postCardsSchema = {
  text:{
    type:String,
    required:true,
    maxlength: 400,
  },
  tags:[{
    type:Schema.Types.ObjectId,
    ref:"tagModel",
  }],
};

module.exports = postCardsSchema;