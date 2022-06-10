'use strict';

// setting the Handler object that will holds functions
const Handler = {};

// function that gets the home end point
Handler.getHome = async (request, response, next) => {
  try {
    response.status(200).send('hello from the home endpoint of the dinonug api');
  } catch (error) {
    error.customMsg = 'cant get the dinonugs home endpoint'
    console.error(error.customMsg + error);
    next(error);
  }

}
module.exports = Handler;