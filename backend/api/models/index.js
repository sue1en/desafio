const mongoose = require("mongoose");
const Schema = mongoose.Schema

const createSchema = (model, options = {}) => {
  return new Schema({
    ...model,
  }, {
    versionKey:false,
    toJSON:{
      virtuals:true
    },
    ...options,
  });
};

const tagsSchema = require("./tags.model");
const tagModel = mongoose.model("tags", createSchema(tagsSchema, {collection:"TagsCollection"}));

const postCardsSchema = require("./postcards.model");
const postcardModel = mongoose.model("postcards", createSchema(postCardsSchema, {collection:"PostCardsCollection", timestamps:true}));

module.exports={
  tagModel,
  postcardModel
};