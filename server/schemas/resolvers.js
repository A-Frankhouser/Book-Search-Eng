const { User, Book } = require('../models');
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require('../utils/auth');

const resolvers = {
    // QUERIES:
    Query: {
        me: async(parents, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
                return userData;
            }
            throw new AuthenticationError('Sorry, you are not logged in!')
        }
    },

    // MUTATIONS:
    Mutations: {
        
    }
}