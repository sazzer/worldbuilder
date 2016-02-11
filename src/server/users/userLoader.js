import {User} from './user';

/**
 * Load a single User by it's unique ID
 * @param {String} id The ID of the User
 * @return {Promise} A promise for the users that matched
 */
export function loadById(id) {
    return new Promise((resolve, reject) => {
        resolve(new User())
    });
}
