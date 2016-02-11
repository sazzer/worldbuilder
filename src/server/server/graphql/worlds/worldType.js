import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull
} from 'graphql';
import {UserType} from '../users/userType';
import {loadById as loadUserById} from '../../../users/userLoader';

export const WorldType = new GraphQLObjectType({
    name: 'World',
    description: 'A World',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The ID of the World'
        },
        name: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The Name of the World'
        },
        created: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'When the World was created'
        },
        updated: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'When the World was last updated'
        },
        owner: {
            type: new GraphQLNonNull(UserType),
            description: 'The User that owns this World',
            resolve: (world) => {
                return loadUserById(world.owner);
            }
        }
    })
});
