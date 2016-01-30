import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull
} from 'graphql';

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
        }
    })
});
