const postCardsService = require("../services/postcards.service");
const testePostService = require("../services/testepost.service");

module.exports = {
  createPostCard: async (req, res, next) => {
    const { body } = req

    const serviceResult = await postCardsService.createPostCard(body);
    const statusCode = serviceResult.success ? 200 : 400;
    const dataReturn = serviceResult.success ? {data: serviceResult.data} : {details: serviceResult.details}
    return res.status(statusCode).send({message: serviceResult.message, ...dataReturn});
  },
  
  getPostByTag: async (req, res, next) => {
    const {body} = req;
    const serviceResult = await postCardsService.findPostsByTag(body);
    const statusCode = serviceResult.success ? 200 : 400;
    const dataReturn = serviceResult.success ? {data: serviceResult.data} : {details: serviceResult.details}
    return res.status(statusCode).send({message: serviceResult.message, ...dataReturn});
  },

  getAllPostCard: async (req, res, next) => {
    const serviceResult = await postCardsService.getAllPostCard();
    const dataReturn = serviceResult.success ? {data: serviceResult.data} : {details: serviceResult.details}
    return res.status(200).send({message: serviceResult.message, ...dataReturn});
  },

  getByIdPostCard: async (req, res, next) => {
    const { params } = req;
  
    const serviceResult = await postCardsService.getByIdPostCard(params.postcardId);
    const statusCode = serviceResult.success ? 200 : 400;
    const dataReturn = serviceResult.success ? {data: serviceResult.data} : {details: serviceResult.details}
    return res.status(statusCode).send({message: serviceResult.message, ...dataReturn});
  },

  editPostCard: async (req, res, next) => {
    const { params, body } = req;
  
    const serviceResult = await postCardsService.editPostCard(params.postcardId, body);
    const statusCode = serviceResult.success ? 200 : 400;
    const dataReturn = serviceResult.success ? {data: serviceResult.data} : {details: serviceResult.details}
    return res.status(statusCode).send({message: serviceResult.message, ...dataReturn});
  },

  removePostCard: async (req, res, next) => {
    const { params } = req;
  
    const serviceResult = await postCardsService.removePostCard(params.postcardId);
    const statusCode = serviceResult.success ? 200 : 400;
    const dataReturn = serviceResult.success ? {data: serviceResult.data} : {details: serviceResult.details}
    return res.status(statusCode).send({message: serviceResult.message, ...dataReturn});
  },
};