const connection = require('../config/db');
const dotenv = require('dotenv').config();
const bcrypt = require('bcrypt');
const path = require('path');
const fs = require('fs');

const uploadPath = path.join(__dirname, '..', 'public/uploads')

if(!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
};

async function uploadPic(request, response) {
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
        message: "Erro ao enviar arquivo."
      })
    }
  })

  const params = Array(
    pfpName,
    request.body.email
  );

  const query = 'UPDATE user_account SET profile_pic = ? WHERE email = ?';

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

async function userDateUpdate(request, response) {

  try {
    const params = Array(
      request.query.date,
      request.query.email
    );

    const query = 'UPDATE user_account SET date = ? WHERE email = ?';

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

  try {
    const params = Array(
      request.query.newEmail, 
      request.query.secondEmail, 
      request.query.email
    );

    const disableForeignKeyChecks = 'SET FOREIGN_KEY_CHECKS = 0;';
    const updateQuery = `
      UPDATE user_account ua
      INNER JOIN user_minigame1 um ON ua.email = um.user_email
      SET ua.email = ?, um.user_email = ?
      WHERE ua.email = ?;
    `;
    const enableForeignKeyChecks = 'SET FOREIGN_KEY_CHECKS = 1;';

    connection.query(disableForeignKeyChecks, (err) => {
      if (err) {
        throw err;
      }

      connection.query(updateQuery, params, (err, results) => {
        if (err) {
          throw err;
        }

        connection.query(enableForeignKeyChecks, (err) => {
          if (err) {
            throw err;
          }

          response.status(201).json({
            success: true,
            message: 'Email alterado com sucesso',
            data: results
          });
        });
      });
    });
    
  } catch (error) {
    response.status(500).json({
      success: false,
      message: 'Erro no servidor',
      data: error
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

    const query = 'UPDATE user_account SET password = ? WHERE email = ?';

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