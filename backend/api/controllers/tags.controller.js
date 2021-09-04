const tagsService = require("../services/tags.service");

module.exports = {
  createTags: async (req, res, next) => {
    const { name } = req.body;
    const serviceResult = await tagsService.createTag(name);
    const statusCode = serviceResult.success ? 200 : 400;
    const dataReturn = serviceResult.success ? {data: serviceResult.data} : {details: serviceResult.details}

    return res.status(statusCode).send({message: serviceResult.message, ...dataReturn});
  },

  getByIdTag: async (req, res, next) => {
    const { params } = req;
  
    const serviceResult = await tagsService.getTagById(params.tagId)
    const statusCode = serviceResult.success ? 200 : 400;
    const dataReturn = serviceResult.success ? {data: serviceResult.data} : {details: serviceResult.details}
    return res.status(statusCode).send({message: serviceResult.message, ...dataReturn});
  },

  getAllTags: async (req, res, next) => {
    const serviceResult = await tagsService.getAllTags();
    const dataReturn = serviceResult.success ? {data: serviceResult.data} : {details: serviceResult.details}
    return res.status(200).send({message: serviceResult.message, ...dataReturn});
  },
  
};