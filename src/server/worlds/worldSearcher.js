import {World} from './world';

/**
 * Search for all of the worlds that match the given criteria
 * @param {String} name The name of the Worlds to match against
 * @return {Promise} A promise for the worlds that matched
 */
export function search({name}) {
    return new Promise((resolve, reject) => {
        resolve([
            new World()
        ])
    });
}
