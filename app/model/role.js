module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const date = new Date();
    const RoleSchema = ({
        title: {
            type: String
        },
        description: {
            type: String
        },
        mobile: {
            type: String
        },
        status: {
            type: Number,
            default: 1
        },
        add_time: {
            type: Number,
            default: date.getTime()
        }
    })
    return mongoose.model('Role', RoleSchema, 'role')
}