import moment from 'moment-timezone';

/**
 * Model representation of a World
 */
export class World {
    /**
     * Get the ID of the World
     * @return {String} the ID
     */
    get id() {
        return 'abcdef';
    }

    /**
     * Get the name fo the World
     * @return {String} the name of the world
     */
    get name() {
        return 'Discworld';
    }

    /**
     * Get when the world was created
     * @return {Moment} when the world was created
     */
    get created() {
        return moment('2014-06-01T12:00:00Z');
    }

    /**
     * Get when the world was last updated
     * @return {Moment} when the world was updated
     */
    get updated() {
        return moment('2014-06-01T12:00:00Z');
    }
}
