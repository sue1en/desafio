const nodeEnviroment = process.env.NODE_ENV || "development"

if (nodeEnviroment === "development"){
  require("dotenv").config()
};

module.exports={
  uri:`mongodb://${process.env.MONGO_DB_HOST}/${process.env.MONGO_DB_NAME}`
}