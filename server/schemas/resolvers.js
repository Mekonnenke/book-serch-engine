// importing Authentication error from apollo servers to show the error message
const { AuthenticationError } = require("apollo-server-errors");
// importing User from the modules
const { User } = require("../models");
// importing signToken from utils
const { signToken } = require("../utils/auth");

// set the queries for me and data errors
const resolvers = {
  Query: {
   
  },
  Mutation: {
    
  },
};

module.exports = resolvers;