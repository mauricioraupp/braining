const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc")

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API do Braining",
      version: "1.0.0",
      description: "API CRUD para gerenciar rotas de dados do usuário e desbloquio de níveis",
    },
    servers: [{ url: "http://localhost:3003" }],
  },
  apis: [`${__dirname}/routes/*.js`],
};

const fileUpload = require('express-fileupload');
const createRouter = require('./routes/createRouter');
const readRouter = require('./routes/readRouter');
const updateRouter = require('./routes/updateRouter');
const app = express();
const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.set('port', process.env.PORT || 3008);
app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use('uploads/', express.static(path.join(__dirname, 'uploads')))
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use('/api', createRouter);
app.use('/api', readRouter);
app.use('/api', updateRouter);

module.exports = app;