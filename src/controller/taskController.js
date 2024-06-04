const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function storeTask(request, response) {
  
  const params = Array(
    request.body.name,
    request.body.date,
    request.body.email,
    request.body.password
  );

  const query = 'INSERT INTO user_account(name, date, email, password) VALUES(?, ?, ?, ?)';

  connection.query(query, params, (err, results) => {
    if(results) {
      response
        .status(201)
        .json({
          success: true,
          message: 'Conta criada com sucesso!',
          data: results
        })
    } else {
      response
      .status(400)
      .json({
        success: false,
        message: 'Dados inválidos',
        data: err
      })
    }
  })
}

module.exports = {
  storeTask
}