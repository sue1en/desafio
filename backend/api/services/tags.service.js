const { tagModel } = require("../models/index");

const toTagDTO = (model) => {
  const { name, _id } = model;
  return{
    _id,
    name
  }
};

const isTagNameRegistered = async (name) => {
  const tagResult = await tagModel.find({name});
  return tagResult.length > 0 ? true : false;
};

const createTag = async (name) => {
  if(await isTagNameRegistered(name)){
    return{
      success:false,
      message: "Ops! operação não pode ser realizada.",
      details: "Já existe uma tag com esse nome."
    }
  };
  await tagModel.create({
    name:name
  });
  return {
    success:true,
    message:"Tag criada com sucesso!",
    data:`A tag ${name} foi criada com sucesso!`
  };
};

const getTagById = async (tagId) => {
  const tagFromDB = await tagModel.findById(tagId);
  
  if(!tagFromDB){
    return{
      success:false,
      message:"Operação não pode ser realizada.",
      details: "Ops! Postcard informado não existe."
    }
  };
  return{
    success:true,
    message:"Operação realizada com sucesso!",
    data: toTagDTO(tagFromDB)
  };
};

const getAllTags = async () => {
  const tagsFromDB = await tagModel.find();
  if(tagsFromDB.length < 0){
    return{
      success:false,
      message:"Operação realizada.",
      details:"Ops! Nenhuma tag foi criado ainda." 
    }
  };
  return{
    success:true,
    message:"Operação realizada com sucesso!",
    data: tagsFromDB.map( tagsFromDB => {
      return toTagDTO(tagsFromDB)
    }) 
  };
};

const getTagByName = async (model) => {
  const tagResult = await tagModel.find({ name:{ $regex: model.name, $options: "i" }});
  if(tagResult.length <= 0){
    return{
      success:false,
      message:"Operação não pode ser realizada.",
      details: "Ops! Tag informada não existe."
    }
  };
  return{
    success:true,
    message:"Operação realizada com sucesso!",
    data: tagResult
  }
};

module.exports = {
  createTag,
  getTagById,
  getAllTags,
  getTagByName
}