const mongoose = require('mongoose');

import Spice from '../models/Spice';

const resolvers = {
  Query: {
    allSpices: async () => {
      const spices = await Spice.find();
      return spices;
    }
  },
  Mutation: {
    addSpice: async (root: any, args: any) => {
      const spice = await new Spice(args).save();
      return spice;
    }
  }
};

export default resolvers;
