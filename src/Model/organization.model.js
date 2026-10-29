import mongoose from 'mongoose'

const organizationSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    organizationId : {
        type : String,
        required : true,
        unique : true,
        lowercase :true 
    },
    email : {
        type : String,
        required : true,
        lowercase : true
    },
    phone : {
        type : String,
        required : true
    },
    gstin : String,
    address : {
        type : String,
        city : String,
        State : String,
        pincode : String,
        country : {type : String ,default : "INDIA" , uppercase : true}
    },
    status : {
        type : String,
        enum : ["active","suspended"],
        default : "active"
    }
},{
    timestamps : true
})

export default mongoose.model("Organization",organizationSchema)