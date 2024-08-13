const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function userTask(request, response) {
  try {

    const params = Array(
      request.body.email,
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

// async function userTask(request                                                                                                                                                  , response) {
//   try {

//     const params = Array(
//       request.body.name,
//     );

//     const query = 'INSERT INTO user_account(name, date, email, password) VALUES(?, ?, ?, ?)';

//     connection.query(query, params, (err, results) => {
//       if (results) {
//         response
//           .status(201)
//           .json({
//             success: true,
//             message: 'Conta criada com sucesso!',
//             data: results
//           });
//       } else {
//         response
//           .status(400)
//           .json({
//             success: false,
//             message: 'Dados inválidos',
//             data: err
//           });
//       }
//     });

//     const query2 = 'INSERT INTO user_minigame1(user_email, level) VALUES(?, 1)';

//     connection.query(query2, params2, (err, results2) => {
//       if (err) {
//         console.error('Erro ao inserir níveis iniciais', err);
//       }
//     });

//   } catch (error) {
//     response.status(500).json({
//       success: false,
//       message: 'Erro no servidor',
//       data: error
//     });
//   }
// }

module.exports = {
  userTask
};
 