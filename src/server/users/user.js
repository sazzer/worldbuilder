import moment from 'moment-timezone';

/**
 * Model representation of a User
 */
export class User {
    /**
     * Get the ID of the User
     * @return {String} the ID
     */
    get id() {
        return '123456';
    }

    /**
     * Get the name of the User
     * @return {String} the name of the user
     */
    get name() {
        return 'Graham';
    }
    
    /**
     * Get the Email Address of the User
     * @return {String} the email address of the user
     */
    get email() {
        return 'graham@grahamcox.co.uk';
    }

    /**
     * Get when the user was created
     * @return {Moment} when the user was created
     */
    get created() {
        return moment('2014-06-01T12:00:00Z');
    }

    /**
     * Get when the user was last updated
     * @return {Moment} when the user was updated
     */
    get updated() {
        return moment('2014-06-01T12:00:00Z');
    }
}
