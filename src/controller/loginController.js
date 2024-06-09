const connection = require('../config/db');
const dotenv = require('dotenv').config();

let account = null;

async function loginTask(request, response) {
  
  const params = [
    request.body.email,
  ];
  
  const query = "SELECT id, name, date, email, password FROM user_account WHERE email = ?;";

  connection.query(query, params, (err, results) => {
    if (err) {
      response
        .status(500)
        .json({
          success: false,
          message: 'Erro no servidor',
          data: err
        });
      return;
    }

    if (results.length > 0) {
      account = results[0];
      let resultPassword = account.password;
      let formPassword = request.body.password;

      if (resultPassword === formPassword) {
        response
          .status(200)
          .json({
            success: true,
            message: 'Login feito com sucesso',
            data: account
          });
      } else {
        response
          .status(400)
          .json({
            success: false,
            message: 'Senha inválida'
          });
      }      
    } else {
      response
        .status(400)
        .json({
          success: false,
          message: 'Email inválido'
        });
    }
  });
}

module.exports = {
  loginTask
}