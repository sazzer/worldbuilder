import {Success} from '../jsonapi/success';

/**
 * Convert a provided World to the JSON-API representation to send over the wire
 * @param {World} world The world to convert
 * @return {Object} the JSON-API representation of the World
 */
export function convertToAPI(world) {
    return new Success()
        .withType('world')
        .withId(world.id)
        .withAttribute('name', world.name)
        .withAttribute('created', world.created.tz('UTC').format())
        .withAttribute('updated', world.updated.tz('UTC').format())
        .withLink('self', `/api/worlds/${world.id}`)
        .build();
}
