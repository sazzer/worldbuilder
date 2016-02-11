import {User} from './user';

/**
 * Search for all of the users that match the given criteria
 * @param {String} name The name of the Users to match against
 * @return {Promise} A promise for the users that matched
 */
export function search({name}) {
    return new Promise((resolve, reject) => {
        resolve([
            new User()
        ])
    });
}
