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
      title: "API Braining",
      version: "1.0.0",
      description: "API CRUD para gerenciar rotas de dados do usuário e desbloqueio de níveis",
    },
    servers: [{ url: "/" }],
  },
  apis: [`${__dirname}/routes/*.js`],
};

const fileUpload = require('express-fileupload');
const createRouter = require('./routes/createRouter');
const readRouter = require('./routes/readRouter');
const updateRouter = require('./routes/updateRouter');
const app = express();
const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.set('port', process.env.PORT || 3003);
app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use('/public/uploads', express.static(path.join(__dirname, 'public/uploads')));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.static(path.join(__dirname, '../')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../pages')));
app.use(express.static(path.join(__dirname, '../assets')));
app.use('/css', express.static(path.join(__dirname, '../pages/css')));
app.get('/', (req, res) => {res.sendFile(path.join(__dirname, '../index.html'));});

app.use('/api', createRouter);
app.use('/api', readRouter);
app.use('/api', updateRouter);

module.exports = app;