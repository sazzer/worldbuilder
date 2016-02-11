import {UserType} from './userType';
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList
} from 'graphql';
import {search} from '../../../users/userSearcher';

export const UsersQuery = {
    type: new GraphQLList(UserType),
    description: 'Search all of the known Users',
    args: {
        name: {
            type: GraphQLString,
            description: 'The name of the user to search for'
        }
    },
    resolve: (root, {name}) => {
        return search({name});
    }
}
