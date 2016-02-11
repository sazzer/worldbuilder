import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull
} from 'graphql';

export const UserType = new GraphQLObjectType({
    name: 'User',
    description: 'A User',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The ID of the User'
        },
        name: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The Name of the User'
        },
        email: {
            type: GraphQLString,
            description: 'The Email Address of the User'
        },
        created: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'When the User was created'
        },
        updated: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'When the User was last updated'
        }
    })
});
