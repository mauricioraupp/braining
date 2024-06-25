const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function minigame1Update(request, response) {

  const params = Array(
    request.body.unlockedLevel,
    request.body.userEmail
  );
  
  const query = "UPDATE user_minigame1 SET level = ? WHERE user_email = ?;";

  connection.query(query, params, (err, results) => {
    if(results) {      
      response
        .status(201)
        .json({
          success: true,
          message: `Nível ${request.body.unlockedLevel} desbloqueado`,
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
  minigame1Update
}