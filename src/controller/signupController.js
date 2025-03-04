const connection = require('../config/db');
const dotenv = require('dotenv').config();
const bcrypt = require('bcrypt');

async function signupCreate(request, response) {
  try {
    const hashedPassword = await bcrypt.hash(request.body.password, 10);
    
    const params = [
      request.body.name,
      request.body.date,
      request.body.email,
      hashedPassword,
    ];

    const query = 'INSERT INTO "UserAccount"(name, date, email, password) VALUES($1, $2, $3, $4) RETURNING *';

    connection.query(query, params, (err, results) => {
      if (err) {
        console.error("Erro ao inserir usuário:", err);
        return response.status(400).json({
          success: false,
          message: 'Dados inválidos',
          data: err
        });
      }

      const params2 = [request.body.email];

      const query2 = 'INSERT INTO "UserMinigame1"("userEmail", level) VALUES($1, 1)';
      connection.query(query2, params2, (err) => {
        if (err) console.error('Erro ao inserir nível minigame1:', err);
      });

      const query3 = 'INSERT INTO "UserMinigame2"("userEmail", level) VALUES($1, 1)';
      connection.query(query3, params2, (err) => {
        if (err) console.error('Erro ao inserir nível minigame2:', err);
      });

      response.status(201).json({
        success: true,
        message: 'Conta criada com sucesso!',
        data: results.rows[0]
      });
    });

  } catch (error) {
    console.error("Erro no servidor:", error);
    response.status(500).json({
      success: false,
      message: 'Erro no servidor',
      data: error
    });
  }
}

module.exports = {
  signupCreate
};
