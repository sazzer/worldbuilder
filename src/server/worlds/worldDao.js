import moment from 'moment-timezone';
import {World} from './world';

/**
 * Try and load a single world by the unique ID
 * @param {String} id The ID of the world
 * @return {Promise} A promise for the world
 */
export function loadWorld(id) {
    return new Promise((resolve, reject) => {
        if (id === 'abcdef') {
            resolve(new World({
                id: id,
                name: 'Discworld',
                created: moment('2014-06-01T12:00:00Z'),
                updated: moment('2014-06-01T12:00:00Z')
            }));
        } else {
            reject({
                error: 'UNKNOWN_WORLD'
            });
        }
    });
}
