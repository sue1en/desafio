const { postcardModel, tagModel } = require("../models/index");
const { isTagNameRegistered } = require("./tags.service")
const toCardDTO = (model) => {
  const { _id, text, createdAt, updatedAt, tags} = model
  return{
    _id,
    text,
    createdAt,
    updatedAt,
    tags
  };
};

const toTagDTO = (model) => {
  const { postcards } = model;
  return{
    postcards
  }
};

const createPostCard = async (model) => {
  const { text, tags } = model;
  if(await text.length > 400){
    return {
      success:false,
      message:"Operação não pode ser realizada.",
      details: "O texto ultrapassou 400 caracteres."
    };
  };
  const newPost = await postcardModel.create({
    text:text,
    tags:tags
  });
  
  return {
    success:true,
    message:"Operação realizada com sucesso!",
    data: {...toCardDTO(newPost)}
  }
};

const editPostCard = async (postcardId, model) => {
  const { text, tags } = model;
  const postFromDB = await postcardModel.findById(postcardId);
  
  if(!postFromDB){
    return{
      success:false,
      message:"Operação não pode ser realizada.",
      details: "O Post informado não existe."
    }
  };

  if(text.length > 400){
    return {
      success:false,
      message:"Operação não pode ser realizada.",
      details: "O texto ultrapassou 400 caracteres."
    };
  };
      
  postFromDB.text = text;
  postFromDB.tags = tags;

  await postFromDB.save();

  return{
    success:true,
    message:"Operação realizada com sucesso!",
    data: toCardDTO(postFromDB)
  };
};

const removePostCard = async (postcardId) => {
  const postFromDB = await postcardModel.findById(postcardId);

  if(!postFromDB){
    return{
      success:false,
      message:"Operação não pode ser realizada.",
      details: "O Post informado não existe."
    }
  };
  await postcardModel.deleteOne(postFromDB)

  return {
    success:true,
    message:"Operação realizada com sucesso!",
    data: `O post >> ${postFromDB._id} << foi removido com sucesso.`
  };
};

const getAllPostCard = async () => {
  const postsFromDB = await postcardModel.find();
  if(postsFromDB.length < 0){
    return{
      success:false,
      message:"Operação realizada.",
      details:"Ops! Nenhum insight foi criado ainda." 
    }
  };

  return{
    success:true,
    message:"Operação realizada com sucesso!",
    data: postsFromDB.map( postsFromDB => {
      return toCardDTO(postsFromDB)
    }) 
  };
};

const getByIdPostCard = async (postcardId) => {
  const postFromDB = await postcardModel.findById(postcardId);
  
  if(!postFromDB){
    return{
      success:false,
      message:"Operação não pode ser realizada.",
      details: "Ops! Postcard informado não existe."
    }
  };
  return{
    success:true,
    message:"Operação realizada com sucesso!",
    data: toCardDTO(postFromDB)
  };
};

const findPostsByTag = async (model) => {
  const postsFromDB = await postcardModel.find({tags:{$in: [ model?.tags ] }});

  if(postsFromDB.length <= 0){
    return{
      success:false,
      message:"Operação não pode ser realizada.",
      details: "Ops! Não há postcards nessa categoria."
    }
  };
  return {
    success:true,
    message:"Operação realizada com sucesso!",
    data: postsFromDB.map(post => {return toCardDTO(post)})
  };
};

module.exports = {
  createPostCard,
  editPostCard,
  removePostCard,
  getAllPostCard,
  getByIdPostCard,
  findPostsByTag
}