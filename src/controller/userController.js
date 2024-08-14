const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function userRequest(request, response) {
  try {

    const params = Array(
      request.query.email,
    );

    const query = 'SELECT password FROM user_account WHERE email = ? ';

    connection.query(query, params, (err, results) => {
      if (results) {
        console.log(query, params, results)
        response
          .status(201)
          .json({
            success: true,
            message: 'select sucesso',
            data: results
          });
      } else {
        response
          .status(400)
          .json({
            success: false,
            message: 'select errado',
            data: err
          });
      }
    });
  } catch (error) {
    response.status(500).json({
      success: false,
      message: 'Erro no servidor',
      data: error
    });
  }
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
 