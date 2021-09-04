const { tagModel } = require("../models/index");

const isTagNameRegistered = async (name) => {
  const tagResult = await tagModel.find({name});
  return tagResult.length > 0 ? true : false;
};

const createTag = async (name) => {
  if(await isTagNameRegistered(name)){
    return{
      success:false,
      message: "Já existe uma tag com esse nome."
    }
  };
  
  await tagModel.create({
    name:name
  });

  return {
    success:true,
    message:"Tag criada com sucesso!"
  };
};

module.exports = {
  createTag,
}