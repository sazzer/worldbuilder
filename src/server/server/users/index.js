import {getUser} from './get';

export function addRoutes(router) {
    router.get('/api/users/:user', getUser);
}
