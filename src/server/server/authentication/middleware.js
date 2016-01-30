/** The name of the header to get the token from */
const AUTHORIZATION_HEADER = 'Authorization';

/** The prefix to use for Bearer Authorization headers */
const BEARER_PREFIX = 'Bearer ';

/**
 * Express Middleware to attempt to authenticate a request as it comes in.
 * This will look for an Authorization header that is of type "Bearer". If present
 * then it will take the rest as an OAuth2 Token and try to decode it.
 * If the token is legal and valid then the request will continue as authenticated.
 * If the token is illegal or invalid then the request will be terminated now.
 * If the token is not present then the request will continue as unauthenticated
 * @param {Request} req The request to authenticate
 * @param {Response} res The response to write to if needed
 * @param {Function} next The next callback if we are continuing with the request
 */
export function authenticateRequest(req, res, next) {
    const authorization = req.get(AUTHORIZATION_HEADER) || '';
    if (authorization.startsWith(BEARER_PREFIX)) {
        const token = authorization.substring(BEARER_PREFIX.length);

        req.authentication = {
            token: token
        };
    }
    next();
}
