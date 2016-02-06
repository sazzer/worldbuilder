/**
 * Model representation of a User
 */
export class User {
    /**
     * Construct the user
     * @param {String} id The ID of the user
     * @param {String} name The name of the user
     * @param {Moment} created When the user was created
     * @param {Moment} updared When the user was updated
     */
    constructor({id, name, created, updated}) {
        this._id = id;
        this._name = name;
        this._created = created;
        this._updated = updated;
    }
    /**
     * Get the ID of the User
     * @return {String} the ID
     */
    get id() {
        return this._id;
    }

    /**
     * Get the name fo the User
     * @return {String} the name of the user
     */
    get name() {
        return this._name;
    }

    /**
     * Get when the user was created
     * @return {Moment} when the user was created
     */
    get created() {
        return this._created;
    }

    /**
     * Get when the user was last updated
     * @return {Moment} when the user was updated
     */
    get updated() {
        return this._updated;
    }
}
