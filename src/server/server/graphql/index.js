import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString
} from 'graphql';

import {WorldsQuery} from './worlds/worldsQuery';
import {UsersQuery} from './users/usersQuery';

export const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            users: UsersQuery,
            worlds: WorldsQuery
        }
    })
});
