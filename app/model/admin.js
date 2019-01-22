module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const date = new Date();
    const AadminSchema = ({
        username: {
            type: String
        },
        password: {
            type: String
        },
        mobile: {
            type: String
        },
        email: {
            type: String
        },
        status: {
            type: Number,
            default: 1
        },
        role_id: {
            type: Schema.Types.ObjectId
        },
        add_time: {
            type: Number,
            default: date.getTime()
        },
        is_super: {
            type: Number,
            default: 0
        }
    })
    return mongoose.model('Admin', AadminSchema, 'admin')
}