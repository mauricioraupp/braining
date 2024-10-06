const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function minigame1Request(request, response) {

  const params = Array(
    request.query.userEmail
  );
  
  const query = "SELECT level FROM user_minigame1 WHERE user_email = ?;";

  connection.query(query, params, (err, results) => {
    if(results) {      
      response
        .status(201)
        .json({
          success: true,
          message: 'Nivel checkado com sucesso',
          data: results
        })    
    } else {
      response
      .status(400)
      .json({
        success: false,
        message: 'Nivel não registrado',
        data: err
      })
    }
  })
}

async function minigame2Request(request, response) {

  const params = Array(
    request.query.userEmail
  );
  
  const query = "SELECT level FROM user_minigame2 WHERE user_email = ?;";

  connection.query(query, params, (err, results) => {
    if(results) {      
      response
        .status(201)
        .json({
          success: true,
          message: 'Nivel checkado com sucesso',
          data: results
        })    
    } else {
      response
      .status(400)
      .json({
        success: false,
        message: 'Nivel não registrado',
        data: err
      })
    }
  })
}

module.exports = {
  minigame1Request,
  minigame2Request
}