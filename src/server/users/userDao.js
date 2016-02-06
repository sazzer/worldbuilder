import moment from 'moment-timezone';
import {User} from './user';

/**
 * Try and load a single user by the unique ID
 * @param {String} id The ID of the user
 * @return {Promise} A promise for the user
 */
export function loadUser(id) {
    return new Promise((resolve, reject) => {
        if (id === 'abcdef') {
            resolve(new User({
                id: id,
                name: 'Graham Cox',
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
