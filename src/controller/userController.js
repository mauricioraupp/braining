const connection = require('../config/db');
const dotenv = require('dotenv').config();
const bcrypt = require('bcrypt');
const path = require('path');
const fs = require('fs');

const uploadPath = path.join(__dirname, '..', '/uploads')

if(!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
};

async function uploadPic(request, response) {
  console.log(uploadPath);
  if(!request.files) {
    console.log(request.files)
    return response.status(400).json({
      success: false,
      message: "Nenhuma imagem enviada."
    });
  }

  const pfp = request.files.inputfile
  const pfpName = Date.now() + path.extname(pfp.name)

  pfp.mv(path.join(uploadPath, pfpName), (error) => {
    if(error){
      return response.status(400).json({
        success: false,
        message: "Funcionalidade desativada por tempo indeterminado"
      })
    }
  })

  const params = Array(
    pfpName,
    request.body.email
  );

  const query = 'UPDATE "UserAccount" SET "profilePic" = $1 WHERE email = $2';

  connection.query(query, params, (err, results) => {
    if (results) {
      response
        .status(201)
        .json({
          success: true,
          message: 'Imagem alterada com sucesso',
          data: params[0]
        });
    } else {
      response
        .status(400)
        .json({
          success: false,
          message: 'Erro ao alterar imagem',
          data: err
        });
    }
  })
}

async function userRequest(request, response) {

    const params = Array(
      request.query.email,
    );

    const query = 'SELECT password FROM "UserAccount" WHERE email = $1 ';

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

async function userNameUpdate(request, response) {

  try {
    const params = Array(
      request.query.name,
      request.query.email
    );

    const query = 'UPDATE "UserAccount" SET name = $1 WHERE email = $2';

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

async function userDateUpdate(request, response) {

  try {
    const params = Array(
      request.query.date,
      request.query.email
    );

    const query = 'UPDATE "UserAccount" SET date = $1 WHERE email = $2';

    connection.query(query, params, (err, results) => {
      if (results) {
        response
          .status(201)
          .json({
            success: true,
            message: 'Data de nascimento alterada com sucesso',
            data: results
          });
      } else {
        response
          .status(400)
          .json({
            success: false,
            message: 'Não foi possível alterar a data de nascimento',
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

async function userEmailUpdate(request, response) {
  const { email, newEmail } = request.query;

  if (!email || !newEmail) {
    return response.status(400).json({
      success: false,
      message: 'Parâmetros de e-mail não fornecidos'
    });
  }

  try {
    const updateUserEmail = async (oldEmail, newEmail) => {
      try {
        await connection.query('BEGIN');
        await connection.query('SET CONSTRAINTS ALL DEFERRED');

        const updateUserQuery = 'UPDATE "UserAccount" SET email = $1 WHERE email = $2';
        await connection.query(updateUserQuery, [newEmail, oldEmail]);

        const updateMinigameQuery = 'UPDATE "UserMinigame1" SET "userEmail" = $1 WHERE "userEmail" = $2';
        await connection.query(updateMinigameQuery, [newEmail, oldEmail]);

        await connection.query('COMMIT');
      } catch (error) {
        await connection.query('ROLLBACK');
        throw new Error('Erro ao atualizar o e-mail: ' + error.message);
      }
    };

    await updateUserEmail(email, newEmail);

    response.status(200).json({
      success: true,
      message: 'E-mail alterado com sucesso'
    });

  } catch (error) {
    response.status(500).json({
      success: false,
      message: 'Erro no servidor',
      data: error.message
    });
  }
}


async function userPasswordUpdate(request, response) {

  const hashedPassword = await bcrypt.hash(request.query.newPassword, 10);

  try {
    const params = Array(
      hashedPassword,
      request.query.email
    );

    const query = 'UPDATE "UserAccount" SET password = $1 WHERE email = $2';

    connection.query(query, params, (err, results) => {
      if (results) {
        response
          .status(201)
          .json({
            success: true,
            message: 'Senha alterada com sucesso',
            data: results
          });
      } else {
        response
          .status(400)
          .json({
            success: false,
            message: 'Não foi possível alterar a senha',
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
  userNameUpdate,
  userDateUpdate,
  userEmailUpdate,
  userPasswordUpdate,
  uploadPic
};