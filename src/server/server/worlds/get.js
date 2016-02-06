import {World} from '../../worlds/world';
import {convertToHAL} from './converter';

/**
 * Get a single World by ID
 * @param {Request} req The request to handle
 * @param {Response} res The Response
 * @param {function} next The next callback if we didn't handle the request
 */
export function getWorld(req, res, next) {
    const world = new World();
    res.send(convertToHAL(world));
}
