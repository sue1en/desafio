const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tagsSchema = {
  name:{
    type:String,
    required:true
  },
  postcards:[{
    type:Schema.Types.ObjectId,
    ref:"postcardModel"
  }]
};

module.exports = tagsSchema;