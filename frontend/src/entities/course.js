class Course {
    constructor(props = {}) {
        this.title = props.title
        this.description = props.description
        this.chaptersIds = props.chaptersIds || []
    }
}