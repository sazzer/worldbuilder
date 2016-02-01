import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull
} from 'graphql';

import {UserType} from '../user';

export const WorldType = new GraphQLObjectType({
    name: 'World',
    description: 'A world',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The ID of the Word'
        },
        name: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The name of the world'
        },
        created: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The date/time that the world was created'
        },
        updated: {
            type: GraphQLString,
            description: 'The date/time that the world was last updated'
        },
        owner: {
            type: new GraphQLNonNull(UserType),
            description: 'The user that owns this world',
            resolve: ({id}, options) => {
                return {
                    id: id,
                    username: 'Owner',
                    email: 'Somebody',
                    created: 'Probably',
                    updated: 'Maybe'
                }
            }
        }
    })
});
