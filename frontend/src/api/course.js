export default {
    async getList() {
        // Use axios to consume API 'GET /course'

        const data = [{id: 5, name: 'toto'}, {id: 5, name: 'titi'}]

        return data.map(item => new Course(item))

        // [new Course({id: 5, name: 'toto'}), new Course({id: 5, name: 'titi'})]
    }
}