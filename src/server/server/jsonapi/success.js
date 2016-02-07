/**
 * Class to represent a JSON-API Success Payload
 */
export class Success {
    /**
     * Construct the Object
     */
    constructor () {
        this._attributes = {};
        this._links = {};
    }

    /**
     * Set the Type to use for the Object
     * @param {String} type The type to use
     * @return {Success} this, for chaining
     */
    withType(type) {
        this._type = type;
        return this;
    }

    /**
     * Set the ID to use for the Object
     * @param {String} id The ID to use
     * @return {Success} this, for chaining
     */
    withId(id) {
        this._id = id;
        return this;
    }

    /**
     * Add an Attribute to the object
     * @param {String} name The name of the Attribute
     * @param {Any} value The value of the Attribute
     * @return {Success} this, for chaining
     */
    withAttribute(name, value) {
        this._attributes[name] = value;
        return this;
    }

    /**
     * Add a Link to the object
     * @param {String} name The name of the Link
     * @param {String} value The value of the Link
     * @return {Success} this, for chaining
     */
    withLink(name, value) {
        this._links[name] = value;
        return this;
    }

    build() {
        return {
            data: {
                type: this._type,
                id: this._id,
                attributes: this._attributes
            },
            links: this._links
        };
    }
}
