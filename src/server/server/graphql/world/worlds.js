import {WorldType} from '.';
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLList
} from 'graphql';

export const Worlds = {
    type: new GraphQLList(WorldType),
    description: 'A list of worlds',
    resolve: (root, {username, email}) => {
        return [];
    }
}
