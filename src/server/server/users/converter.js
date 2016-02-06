/**
 * Convert a provided User to the HAL representation to send over the wire
 * @param {User} user The user to convert
 * @return {Object} the HAL representation of the User
 */
export function convertToHAL(user) {
    return {
        _links: {
            self: {
                href: `/api/users/${user.id}`
            }
        },
        name: user.name,
        created: user.created.tz('UTC').format(),
        updated: user.created.tz('UTC').format()
    };
}
