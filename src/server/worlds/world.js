/**
 * Model representation of a World
 */
export class World {
    /**
     * Construct the world
     * @param {String} id The ID of the world
     * @param {String} name The name of the world
     * @param {Moment} created When the world was created
     * @param {Moment} updared When the world was updated
     */
    constructor({id, name, created, updated}) {
        this._id = id;
        this._name = name;
        this._created = created;
        this._updated = updated;
    }
    /**
     * Get the ID of the World
     * @return {String} the ID
     */
    get id() {
        return this._id;
    }

    /**
     * Get the name fo the World
     * @return {String} the name of the world
     */
    get name() {
        return this._name;
    }

    /**
     * Get when the world was created
     * @return {Moment} when the world was created
     */
    get created() {
        return this._created;
    }

    /**
     * Get when the world was last updated
     * @return {Moment} when the world was updated
     */
    get updated() {
        return this._updated;
    }
}
