const connection = require('../config/db');
const dotenv = require('dotenv').config();
const bcrypt = require('bcrypt');

async function loginRequest(request, response) {
  const params = [request.query.email];

  const query = 'SELECT name, TO_CHAR(date, \'YYYY-MM-DD\') as date, email, password, "profilePic" FROM "UserAccount" WHERE email = $1;';

  connection.query(query, params, async (err, results) => {
    if (err) {
      return response.status(500).json({
        success: false,
        message: 'Erro no servidor',
        data: err
      });
    }

    if (results.rows.length > 0) {
      const account = results.rows[0];
      const resultPassword = account.password;
      const formPassword = request.query.password;

      try {
        const match = await bcrypt.compare(formPassword, resultPassword);
        if (match) {
          delete account.password;
          return response.status(200).json({
            success: true,
            message: 'Login feito com sucesso',
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
  });
}

module.exports = {
  loginRequest
};
