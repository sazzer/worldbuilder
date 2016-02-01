import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString
} from 'graphql';

import {Users} from './user/users';
import {Worlds} from './world/worlds';

export const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            users: Users,
            worlds: Worlds
        }
    })
});
