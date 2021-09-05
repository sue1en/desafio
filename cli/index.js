#!/usr/bin/env node

const cliApp = require("commander");
const inquirer = require("inquirer");
const { version } = require("./package.json");
const { createPostCard } = require("../backend/api/services/postcards.service")

const questions = [
  {
    type:"input",
    name: "text",
    message: "Seu Insight:",
  },
  {
    type:"input",
    name: "tags",
    message: "Indique a Tag:",
  },
];

cliApp
  .version(version)
  .command("cria")
  .description("adiciona Insight ao banco.")
  .action(() => {
    inquirer.prompt(questions).then(answers => {
      createPostCard(answers)}).then(() => {
        console.log(`sucesso!!!`)
      }).catch((error) => {
        console.log(error)
      })
  })
          
cliApp.parse(process.argv);