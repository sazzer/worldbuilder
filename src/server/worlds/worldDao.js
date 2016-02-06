import {World} from './world';

/**
 * Try and load a single world by the unique ID
 * @param {String} id The ID of the world
 * @return {Promise} A promise for the world
 */
export function loadWorld(id) {
    return new Promise((resolve, reject) => {
        if (id === 'abcdef') {
            resolve(new World());
        } else {
            reject({
                error: 'UNKNOWN_WORLD'
            });
        }
    });
}
