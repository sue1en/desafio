const tagsController = require("../../controllers/tags.controller");

module.exports = (appRouter) => {
  appRouter.route("/novatag").post(tagsController.createTags);
}