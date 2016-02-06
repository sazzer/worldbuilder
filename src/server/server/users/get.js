import {loadUser} from '../../users/userDao';
import {convertToHAL} from './converter';

const ERROR_STATUSES = {
    UNKNOWN_USER: 404
};

/**
 * Get a single User by ID
 * @param {Request} req The request to handle
 * @param {Response} res The Response
 * @param {function} next The next callback if we didn't handle the request
 */
export function getUser(req, res, next) {
    const userId = req.params.user;

    loadUser(userId).then((user) => {
        res.set('Content-Type', 'application/hal+json');
        res.send(convertToHAL(user));
    }).catch((error) => {
        res.set('Content-Type', 'application/json');
        res.status(ERROR_STATUSES[error.error] || 400);
        res.send(error);
    });
}
