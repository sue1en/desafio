const { Router } = require("express");
const {name, version} = require("../../package.json")

const tagsRouterV1 = require("./v1/tags");
const postCardRouterV1 = require("./v1/postcards")

module.exports = (Routers) => {
  Routers.get("/", (req, res, next) => {
    res.send(`Aplicação: ${name}, versão: ${version} - OK`);
  });

  const routerV1 = Router();
  tagsRouterV1(routerV1);
  postCardRouterV1(routerV1);
  Routers.use("/v1", routerV1);
}

