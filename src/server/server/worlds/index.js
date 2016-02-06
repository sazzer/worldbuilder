import {getWorld} from './get';

export function addRoutes(router) {
    router.get('/api/worlds/:world', getWorld);
}
