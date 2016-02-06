import {loadWorld} from '../../worlds/worldDao';
import {convertToHAL} from './converter';

const ERROR_STATUSES = {
    UNKNOWN_WORLD: 404
};

/**
 * Get a single World by ID
 * @param {Request} req The request to handle
 * @param {Response} res The Response
 * @param {function} next The next callback if we didn't handle the request
 */
export function getWorld(req, res, next) {
    const worldId = req.params.world;

    loadWorld(worldId).then((world) => {
        res.set('Content-Type', 'application/hal+json');
        res.send(convertToHAL(world));
    }).catch((error) => {
        res.set('Content-Type', 'application/json');
        res.status(ERROR_STATUSES[error.error] || 400);
        res.send(error);
    });
}
