import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import createType from 'mongoose-schema-to-graphql';
import { printType } from 'graphql';
import resolvers from './resolvers';
import { spiceSchema } from '../models/Spice';

const spiceTypeConfig = {
  name: 'Spice',
  description: 'Spice schema',
  class: 'GraphQLObjectType',
  schema: spiceSchema,
  exclude: ['_id', '__v']
};

const typeDefs = `
type Query {
  testString: String
  allSpices: [Spice]
}
type Mutation {
  addSpice(name: String!): Spice
}
${printType(createType(spiceTypeConfig as any))}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
