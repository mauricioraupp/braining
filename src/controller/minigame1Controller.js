// const connection = require('../config/db');
// const dotenv = require('dotenv').config();
// var LocalStorage = require('node-localstorage').LocalStorage,
// localStorage = new LocalStorage('./scratch');
// const storedAccount = localStorage.getItem('@account_logged');

// const parsedAccount = JSON.parse(storedAccount)

// async function minigame1Task(request, response) {
//   if (!parsedAccount) {
//     response
//       .status(400)
//       .json({
//         success: false,
//         message: localStorage
//       });
//   }

//   const params = Array(
//     parsedAccount.id
//   );
  
//   const query = "SELECT level FROM user_minigame1 WHERE user_id = ?;";

//   connection.query(query, params, (err, results) => {
//     console.log(results)
//     if(results == 1) {      
//       let resultPassword = results[0].password;
//       let formPassword = request.body.password;

//       if (resultPassword === formPassword) {
//         response
//           .status(201)
//           .json({
//             success: true,
//             message: 'Login feito com sucesso',
//             data: results
//           })
//       } else {
//         response
//           .status(400)
//           .json({
//             success: false,
//             message: 'Senha inválida'            
//           })
//       }      
//     } else {
//       response
//       .status(400)
//       .json({
//         success: false,
//         message: 'Email inválido',
//         data: err
//       })
//     }
//   })
// }

// module.exports = {
//   minigame1Task
// }