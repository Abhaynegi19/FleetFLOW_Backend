import mongoose from 'mongoose'

const vehicleSchema = mongoose.Schema({
    organizationId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Organization",
        index : true,
        required : true
    },
    branchId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Branch",
        index : true,
        required : true
    },
    registrationNumber : {
        type : String,
        required : true,
        uppercase :true,
        trim : true
    },
    vehicleType : {
        type : String,
        enum : ["truck"]
    }

})