import {WorldType} from './worldType';
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList
} from 'graphql';
import {search} from '../../../worlds/worldSearcher';

export const WorldsQuery = {
    type: new GraphQLList(WorldType),
    description: 'Search all of the known Worlds',
    args: {
        name: {
            type: GraphQLString,
            description: 'The name of the world to search for'
        }
    },
    resolve: (root, {name}) => {
        return search({name});
    }
}
