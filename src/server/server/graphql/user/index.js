import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLList
} from 'graphql';

import {WorldType} from '../world';

export const UserType = new GraphQLObjectType({
    name: 'User',
    description: 'A user',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The ID of the User'
        },
        username: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The username of the user'
        },
        email: {
            type: GraphQLString,
            description: 'The email address of the user'
        },
        created: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The date/time that the user was created'
        },
        updated: {
            type: GraphQLString,
            description: 'The date/time that the user was last updated'
        },
        worlds: {
            type: new GraphQLList(WorldType),
            description: 'The Worlds this this user owns',
            resolve: ({id}, options) => {
                return [{
                    id: id,
                    name: 'World',
                    created: 'Yes',
                    updated: 'No'
                }];
            }
        }
    })
});
