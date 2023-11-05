const db = require("../configuration/dbConfig.js");
var mysql = require("mysql");
var methods = {};

const mysql2 = require("mysql2");
async function main(query, data) {
  let connection = await mysql2.createPool({
    user: "root",
    host: "localhost",
    password: "password",
    database: "sachindb",
    connectionLimit: 20,
    debug: false,
    multipleStatements: true,
  });
  try {
    query = mysql2.format(query, data);
    connection = connection.promise();
    const [result] = await connection.query(query);
    return result;
  } catch (err) {
    return err;
  } finally {
    connection.end();
  }
  //return getSlotData
}
methods.callConnection1 = async (query, data) => {
  console.log(mysql.format(query, data));
  let result = await main(query, data);
  return await result;
};

methods.callConnection = function (query, data, callback) {
  console.log(mysql.format(query, data));
  db.getConnection(function (err, connection) {
    if (err) {
      connection.release();
      throw err;
    }
    connection.query(query, data, function (err, rows) {
      connection.release();
      if (!err) {
        const response = {
          success: "1",
          successMessage: "Success",
          errorMessage: "",
          dataSet: rows,
        };
        return callback(response);
      }
    });
    connection.on("error", function (err) {
      throw err;
      return;
    });
  });
};
module.exports = methods;
