const connection = require('../config/db');
const dotenv = require('dotenv').config();
const bcrypt = require('bcrypt');

async function userRequest(request, response) {

    const params = Array(
      request.query.email,
    );

    const query = 'SELECT password FROM user_account WHERE email = ? ';

    connection.query(query, params, async (err, results) => {
      if (err) {
        return response.status(500).json({
          success: false,
          message: 'Erro no servidor',
          data: err
        });
      }
  
      if (results.length > 0) {
        const account = results[0];
        const resultPassword = account.password;
        const formPassword = request.query.password;

  
        try {
          const match = await bcrypt.compare(formPassword, resultPassword);
          console.log(resultPassword, formPassword, match)
          if (match) {
            return response.status(200).json({
              success: true,
              message: 'Senha correta',
              data: account
            });
          } else {
            return response.status(400).json({
              success: false,
              message: 'Senha inválida'
            });
          }
        } catch (error) {
          return response.status(500).json({
            success: false,
            message: 'Erro ao comparar senhas',
            data: error
          });
        }
      } else {
        return response.status(400).json({
          success: false,
          message: 'Email inválido'
        });
      }
    })
}

async function userUpdate(request, response) {

  try {
    const params = Array(
      request.query.name,
      request.query.email
    );

    const query = 'UPDATE user_account SET name = ? WHERE email = ?';

    connection.query(query, params, (err, results) => {
      if (results) {
        response
          .status(201)
          .json({
            success: true,
            message: 'Nome alterado com sucesso',
            data: results
          });
      } else {
        response
          .status(400)
          .json({
            success: false,
            message: 'Não foi possível alterar o nome',
            data: err
          });
      }
    })
  } catch (error) {
    response.status(500).json({
      success: false,
      message: 'Erro no servidor',
      data: error
    });
  }
}

module.exports = {
  userRequest,
  userUpdate
};
 