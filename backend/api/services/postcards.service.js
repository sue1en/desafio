const { postcardModel, tagModel } = require("../models/index");

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
}



// const createPostCard = async (model) => {
//   const { text } = model;
//   if(text.length > 400){
//     return {
//       success:false,
//       message:"Operação não pode ser realizada.",
//       details: "O texto ultrapassou 400 caracteres."
//     };
//   };

//   const tagsFromDB = await tagModel.find({_id:model.tags});

//   const mapthetag = tagsFromDB.map(tagsFromDB => {
//     return toTagDTO(tagsFromDB)
//   })
//   console.log("###____", mapthetag)

//   // if(!tagsFromDB){
//   //   return{
//   //     success:false,
//   //     message:"Operação não pode ser realizada.",
//   //     details: "Tag informada não existe."
//   //   }
//   // };

//   const newPostCard = await postcardModel.create({
//     text:text,
//     tags: model.tags
//   });


//   mapthetag = [ ...mapthetag, newPostCard._id];
//   await tagsFromDB.save();

//   return{
//     success:true,
//     message:"Operação realizada com sucesso!",
//     data: toCardDTO(newPostCard)
//   };
// }


const createPostCard = async (model) => {
  const { text } = model;
  
  const tagsFromDB = await tagModel.find({_id:model.tags});

  const mapthetag = tagsFromDB.map(tagsFromDB => {
    return toTagDTO(tagsFromDB)
  })
  console.log("###____", mapthetag)


  const newPostCard = await postcardModel.create({
    text:text,
    tags: model.tags
  });


  mapthetag = [ ...mapthetag, newPostCard._id];
  await tagsFromDB.save();

  return{
    success:true,
    message:"Operação realizada com sucesso!",
    data: toCardDTO(newPostCard)
  };
}

const editPostCard = async (postcardId, model) => {
  const { text, tags } = model;
  const [postFromDB, tagFromDB] = await Promise.all([
    postcardModel.findById(postcardId),
    tagModel.findById(tags)
  ]);

  if(!postFromDB){
    return{
      success:false,
      message:"Operação não pode ser realizada.",
      details: "O Post informado não existe."
    }
  };
  if(!tagFromDB){
    return{
      success:false,
      message:"Operação não pode ser realizada.",
      details: "Tag informada não existe."
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
    data: `O post >> ${postcardId} << foi removido com sucesso.`
  };
};

const getAllPostCard = async () => {
  const postFromDB = await postcardModel.find();
  return{
    success:true,
    message:"Operação realizada com sucesso!",
    data: postFromDB.map( postFromDB => {
      return toCardDTO(postFromDB)
    }) 
  };
};

const getByIdPostCard = async (postcardId) => {
  const postFromDB = await postcardModel.findById(postcardId);

  if(!postFromDB){
    return{
      success:false,
      message:"Operação não pode ser realizada.",
      details: "Postcard informado não existe."
    }
  };
  return{
    success:true,
    message:"Operação realizada com sucesso!",
    data: toCardDTO(postFromDB)
  };
};

module.exports = {
  createPostCard,
  editPostCard,
  removePostCard,
  getAllPostCard,
  getByIdPostCard
}