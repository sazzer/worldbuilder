import {
    GraphQLString,
    GraphQLList
} from 'graphql';
import {UserType} from './user';

export const UsersQuery = {
    type: new GraphQLList(UserType),
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
            created: 'Now',
            updated: 'Then'
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
};
