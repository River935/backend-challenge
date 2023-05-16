const monError = require("../models/errorModel.js");

class Helper{
    static createNewMonError(err, code, description) {
      console.log(err)
        const errorAnswer = new monError({
          type: "Database error",
          code: code,
          message: err.message,
          description: description,
        });
        return errorAnswer;
      }
}
module.exports = Helper;