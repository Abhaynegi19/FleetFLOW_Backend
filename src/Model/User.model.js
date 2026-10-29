import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    organizationId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Organization",
        required : true,
        index : true
    },
    name : {
        type :String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    role : {
        type :String,
        enum : [
            "owner",
            "admin",
            "transport_manager",
            "dispatcher",
            "accountant",
            "viewer"
        ],
        default : "viewer"
    },
    branchAccess : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Branch"
    },
    accessScope : {
        type : String,
        enum : [ "organization","selected_branches"],
        default : "selected_branches"
    },
    isActive : {
        type : Boolean,
        default : true
    }
},{
    timestamps : true
})

userSchema.index(
    {organizationId : 1, email : 1},
    {unique : true}
)

export default mongoose.model("User",userSchema)