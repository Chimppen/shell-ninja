const _ = require('lodash')

/**
 * 
 * @param {*} user_answer 
 * @param {*} anticipated_answer 
 * @param {*} callback 
 */
module.exports = (user_answer, anticipated_answer, callback)=> {

    if (_.toLower(user_answer) === _.toLower(anticipated_answer)) {

      callback(user_answer);

    }  
  }
