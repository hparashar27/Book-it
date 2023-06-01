import User from "../modals/userModal";
import ApiFeatures from "@/utils/apiFeatures";
import catchAsyncError from "@/middlewares/catchAsyncError";


const registerNewUser = catchAsyncError(async(req,res)=>{

    const {name,email,password} = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar:{
            public_id:"PUBLIC_ID",
            url:"URL"
        }
    })
    res.status(200).json({
        success : true,
        message :" A register is registered successfully"
    })
})

export {registerNewUser} 