import {UserType} from '.';
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLList
} from 'graphql';

export const Users = {
    type: new GraphQLList(UserType),
    description: 'A list of users',
    args: {
        username: {
            type: GraphQLString,
            description: 'The username to search for'
        },
        email: {
            type: GraphQLString,
            description: 'The email address to search for'
        }
    },
    resolve: (root, {username, email}) => {
        return [{
            id: '123',
            username: 'graham',
            email: 'graham@grahamcox.co.uk',
            created: 'Before',
            updated: 'After'
        }].filter((u) => {
            let result = true;
            if (username) {
                result = username === u.username;
            }
            return result;
        }).filter((u) => {
            let result = true;
            if (email) {
                result = email === u.email;
            }
            return result;
        });
    }
}
