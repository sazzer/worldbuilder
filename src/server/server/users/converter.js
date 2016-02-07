/**
 * Convert a provided User to the JSON-API representation to send over the wire
 * @param {User} user The user to convert
 * @return {Object} the JSON-API representation of the User
 */
export function convertToAPI(user) {
    return {
        data: {
            type: 'user',
            id: user.id,
            attributes: {
                name: user.name,
                created: user.created.tz('UTC').format(),
                updated: user.created.tz('UTC').format()
            }
        },
        relationships: {
            worlds: {
                links: {
                    self: `/api/users/${user.id}/relationships/worlds`,
                    related: `/api/users/${user.id}/worlds`
                }
            }
        },
        links: {
            self: `/api/users/${user.id}`
        }
    };
}
