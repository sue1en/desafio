const tagsController = require("../../controllers/tags.controller");

module.exports = (appRouter) => {
  appRouter.route("/novatag").post(tagsController.createTags);
  appRouter.route("/tags").get(tagsController.getAllTags);
  appRouter.route("/tags/:tagId").get(tagsController.getByIdTag);
  appRouter.route("/tagname").get(tagsController.tagByName);
}