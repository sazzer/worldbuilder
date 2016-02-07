/**
 * Convert a provided World to the JSON-API representation to send over the wire
 * @param {World} world The world to convert
 * @return {Object} the JSON-API representation of the World
 */
export function convertToAPI(world) {
    return {
        data: {
            type: 'world',
            id: world.id,
            attributes: {
                name: world.name,
                created: world.created.tz('UTC').format(),
                updated: world.created.tz('UTC').format()
            }
        },
        links: {
            self: `/api/worlds/${world.id}`
        }
    };
}
