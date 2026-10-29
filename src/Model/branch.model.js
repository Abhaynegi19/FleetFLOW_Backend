import mongoose from 'mongoose'

const branchSchema = mongoose.Schema({
    organizationId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Organization",
        requried : true,
        index : true
    },
    name : {
        type : String,
        requied : true,
        trim : true
    },
    code : {
        type : String,
        requried : true,
        uppercase : true,
        trim : true
    },
    type : {
        type : String,
        enum : ["head_office","branch"],
        requried : true
    },
    address: {
      street: String,
      city: String,
      state: String,
      pincode: String,
    },
    phone : String,
    mangerId : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : "User",
        default : null
    },
    isActive : {
        type : Boolean,
        default : true
    }
},{
    timestamps : true
})

branchSchema.index(
    {organizationId : 1 ,code : 1},
    {unique : true}
)

export default mongoose.model("Branch",branchSchema)