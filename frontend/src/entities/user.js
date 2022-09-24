class User {
    constructor(props = {}) {
        this.id = props.id
        this.firstName = props.firstName
        this.lastName = props.lastName
        this.status = props.status || 'INVERIFED'
        this.roles = props.roles || []
    }
}
