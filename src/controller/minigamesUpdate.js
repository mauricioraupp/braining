const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function minigame1Update(request, response) {

  const params = Array(
    request.query.unlockedLevel,
    request.query.userEmail
  );
  
  const query = 'UPDATE "UserMinigame1" SET level = $1 WHERE "userEmail" = $2;';

  connection.query(query, params, (err, results) => {
    if(results) {      
      response
        .status(201)
        .json({
          success: true,
          message: `Nível ${request.query.unlockedLevel} desbloqueado`,
          data: results
        })    
    } else {
      response
      .status(400)
      .json({
        success: false,
        message: 'Nenhum nível desbloquado',
        data: err
      })
    }
  })
}

async function minigame2Update(request, response) {

  const params = Array(
    request.query.unlockedLevel,
    request.query.userEmail
  );
  
  const query = 'UPDATE "UserMinigame2" SET level = $1 WHERE "userEmail" = $2;';

  connection.query(query, params, (err, results) => {
    if(results) {      
      response
        .status(201)
        .json({
          success: true,
          message: `Nível ${request.query.unlockedLevel} desbloqueado`,
          data: results
        })    
    } else {
      response
      .status(400)
      .json({
        success: false,
        message: 'Nenhum nível desbloquado',
        data: err
      })
    }
  })
}

module.exports = {
  minigame1Update,
  minigame2Update
}