const tagsService = require("../services/tags.service");

module.exports = {
  createTags: async (req, res, next) => {
    const { name } = req.body;
    const serviceResult = await tagsService.createTag(name);
    const statusCode = serviceResult.success ? 200 : 400;

    return res.status(statusCode).send({message: serviceResult.message});
  },

  
};