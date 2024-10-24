const mongoose=require("mongoose");


const orderSchema=new mongoose.Schema({
    shippingInfo:{
        address:{
            localaddress:
            {
                type:String,
                required:true,
            },
            pincode:{
                type:Number,
                required:true,
            },
            city:{
                type:String,
                required:true,
            },
            state:{
                type:String,
                required:true,
            }
        },
        phone:{
            type:Number,
            required:true
        },
    },
    orderItems:[
        {
            name:{
                type:String,
                required:true,
            },
            quantity:{
                type:Number,
                required:true,
            },
            price:{
                type:Number,
                required:true,
            },
            image:{
                type:String,
                required:true,
            },
            sellerID:{
                type:mongoose.Schema.ObjectId,
                ref:"User",
                required:true,
            },
            sellerName:{
                type:String
            },
            productID:{
                type:mongoose.Schema.ObjectId,
                ref:"Product",
                required:false,
            }
        },
    ],
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
    },
    paidAt:{
        type:Date,
    },
    itemsPrice:{
        type:Number,
        required:true,
        default:0
    },
    shippingPrice:{
        type:Number,
        required:true,
        default:0
    },
    totalPrice:{
        type:Number,
        required:true,
        default:0
    },
    orderStatus:{
        type:String,
        required:true,
        default:"Not Delivered"
    },
    orderDate:{
        type:Date,
        default:Date.now,
    },
    deliveredDate:{
        type:Date
    }
});

module.exports=mongoose.model("Order", orderSchema);