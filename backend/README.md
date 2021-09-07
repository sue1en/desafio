# API - Cards de conteúdo esportivos (Insights)

O Projeto é uma API RESTful, para ser utilizada na criação de postagens (cards) e tags, servindo uma interface gráfica com objetivo de criação de conteúdo esportivo por meio e cards. O projeto foi desenvolvido usando NodeJS e MongoDB.

## Bibliotecas Utilizadas:
  - ExpressJs
  - mongoose
  - dotenv
  - cors
  - nodemon (devDependencies)

## Requerimento:
- NodeJS
- MongoDB

## Primeiros Passos:
1. Faça a Instalação do NodeJS correspondente ao seu sistema operacional. [Link de acesso a página](https://nodejs.org/en/).
2. Faça a Instalação do MongoDB correspondente ao seu sistema operacional. [Link de acesso a página](https://docs.mongodb.com/guides/server/install/).
3. Faça a Instalação da sua GUI de preferencia, para facilitar a visualização dos dados. Nesse projeto foi utilizado o Mongo Compass. [Link de acesso a página para download](https://docs.mongodb.com/guides/server/install/).
4. Clone o projeto em uma pasta de sua preferencia.
5. Instale as dependências com o comando <b>`npm install`</b> ou <b>`yarn install`</b> para instalar com o yarn.
7. Crie um arquivo <b>`.env`</b> na pasta raíz do backend com as seguintes informações:
  ```
    # Porta padrão usada no projeto. Exemplo:  
    PORT=3333

    # Nome do seu banco. Exemplo:  
    MONGO_DB_NAME=desafio_esporte_feed

    # Endereço de serviço usado no mongo. Exemplo:
    MONGO_DB_HOST=localhost:27017
  ```
  
8. Para rodar o projeto execute o comando <b>`npm run dev`</b> na pasta raiz do projeto de backend.
  
## Rotas
```
  ### - GET
    - PostCards (Insights):
      /v1/posts (Busca todos os posts existentes).
      /v1/posts/:postcardId (Busca posts por id).
      /v1/buscapost (Busca posts pelo id de uma tag informada).
    - Tags:
      /v1/tags (Busca todas as tags existentes).
      /v1/tags/:tagId (Busca tag por id).
      /v1/tagname (Busca posts pelo campo nome de uma tag).
  
  ### - POST
    - PostCards (Insights):
      /v1/novopost (Cria novo post).
  
    - Tags:
      /v1/novatag (Cria nova tag).
  
  ### - PUT
    - PostCards (Insights):
      /v1/posts/:postcardId (Edita posts referente ao id indicado).
 
  ### - DELETE
    - PostCards (Insights):
      /v1/posts/:postcardId (Excluí posts referente ao id indicado).
```
