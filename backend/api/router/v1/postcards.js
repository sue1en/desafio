const postCardController = require("../../controllers/postcards.controller");

module.exports = (appRouter) => {
  appRouter.route("/novopost").post(postCardController.createPostCard);
  appRouter.route("/posts").get(postCardController.getAllPostCard);
  appRouter.route("/posts/:postcardId").get(postCardController.getByIdPostCard);
  appRouter.route("/posts/:postcardId").put(postCardController.editPostCard);
  appRouter.route("/posts/:postcardId").delete(postCardController.removePostCard);
}