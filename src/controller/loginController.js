const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function loginTask(request, response) {
  
  const params = Array(
    request.body.email,
  );
  
  const query = "SELECT name,date,email,password from user_account WHERE email = ?;";

  connection.query(query, params, (err, results) => {
    if(results.length > 0) {      
      let resultPassword = results[0].password;
      let formPassword = request.body.password;

      if (resultPassword === formPassword) {
        response
          .status(201)
          .json({
            success: true,
            message: 'Login feito com sucesso',
            data: results
          })
      } else {
        response
          .status(400)
          .json({
            success: false,
            message: 'Senha inválida'            
          })
      }      
    } else {
      response
      .status(400)
      .json({
        success: false,
        message: 'Email inválido',
        data: err
      })
    }
  })
}

module.exports = {
  loginTask
}