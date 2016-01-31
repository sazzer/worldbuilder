import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString
} from 'graphql';

import {Users} from './users';

export const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            users: Users
        }
    })
});
