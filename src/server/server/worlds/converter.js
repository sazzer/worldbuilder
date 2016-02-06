/**
 * Convert a provided World to the HAL representation to send over the wire
 * @param {World} world The world to convert
 * @return {Object} the HAL representation of the World
 */
export function convertToHAL(world) {
    return {
        _links: {
            self: {
                href: `/api/worlds/${world.id}`
            }
        },
        name: world.name,
        created: world.created.tz('UTC').format(),
        updated: world.created.tz('UTC').format()
    };
}
