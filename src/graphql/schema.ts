import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import createType, { ConfigurationObject } from 'mongoose-schema-to-graphql';
import { printType } from 'graphql';
import resolvers from './resolvers';
import { spiceSchema } from '../models/Spice';
import { cloudinaryImageSchema } from '../models/CloudinaryImage';

const spiceTypeConfig: ConfigurationObject = {
  name: 'Spice',
  description: 'Spice schema',
  class: 'GraphQLObjectType',
  schema: spiceSchema,
  exclude: ['_id', '__v']
};

const cloudinaryImageTypeConfig: ConfigurationObject = {
  name: 'Spice_images',
  description: 'CloudinaryImage schema',
  class: 'GraphQLObjectType',
  schema: cloudinaryImageSchema,
  exclude: ['_id', '__v']
};

const cloudinaryImageInputTypeConfig: ConfigurationObject = {
  name: 'CloudinaryImage',
  description: 'CloudinaryImage input schema',
  class: 'GraphQLInputObjectType',
  schema: cloudinaryImageSchema,
  exclude: ['_id', '__v']
};

const typeDefs = `
  type Query {
    testString: String
    allSpices: [Spice]
  }
  type Mutation {
    addSpice(name: String!, images: [CloudinaryImage]): Spice
  }
  ${printType(createType(spiceTypeConfig))}
  ${printType(createType(cloudinaryImageTypeConfig))}
  ${printType(createType(cloudinaryImageInputTypeConfig))}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
