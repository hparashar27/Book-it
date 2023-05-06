import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    name :{
        type: String,
        required : [true,"a room must have a valid name"],
        trim : true,
        maxLength : [100,"a room name must not greater than 100 characters"]
    },
    price :{
        type :Number,
        required :[true,"a room must have a price"],
        maxLength : [4," a room price not more than 4 digits"],
        default : 0.00
    },
    description :{
        type : String,
        required : [true,"a room must have a valid description"],
        default : "it is one of the best room on bookit !"
    },
    address:{
        type : String,
        required : [true,"a room have a proper address"],
    },
    numOfguests:{
        type : Number,
        required : [true,"a room have a number of guests"],
        minLength: 1,
        default : 0
    },
    numOfbathrooms:{
        type : Number,
        required : [true,"a room have a number of bathroom"],
        minLength:1,
        default:1,
    },
    numOfBeds:{
        type : Number,
        required : [true,"a room have number of beds"],
        default : 1,
        minLength : 1,
    },
    breakfast:{
        type : Boolean,
        default : false
    },
    petsAllowed:{
        type : Boolean,
        default : false
    },
    internetFaclilty :{
        type : Boolean,
        default : false
    },
    airConditioning :{
        type : Boolean,
        default : false
    },
    breakfast :{
        type : Boolean,
        default : false
    },
    ratings:{
        type:Number,
        default : 0
    },
    numOfratings:{
       type: Number,
       default : 0
    },
    images:[
        {public_id:{
            type : String,
            required : true
        },
        url:{
            type : String,
            required : true
        }}
    ],
    category:{
        type:String,
        required:true,
        enum :{
            values:[
                'King','Single','twins'
            ],
            message:"Please select the room category for the room"
        },
    },
    reviews:[{
        user:{
            type:mongoose.Schema.ObjectId,
            ref :"User",
            required :true
        },
        name:{
            type: String,
            required:true
        },
        rating:{
            type : Number,
            required : true
        },
        comment:{
            type:String,
            required:true
        }
    }],
    user:{
        type:mongoose.Schema.ObjectId,
        ref : "User",
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

export default mongoose.model.RoomModal