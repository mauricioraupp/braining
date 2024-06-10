const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function minigame1Task(request, response) {

  const params = Array(
    request.body.currentLevel,
    request.body.userEmail
  );
  
  const query = "UPDATE user_minigame1 SET level = ? WHERE user_email = '?';";

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
  minigame1Task
}