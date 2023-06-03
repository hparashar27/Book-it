import NextAuth from "next-auth"
import User from "@/modals/userModal/user"
import Providers from "next-auth/providers"
import dbConnect from "@/config/dbConnect"

export default NextAuth({
    session:{
        jwt:true
    },
    providers:[
        Providers.Credentials({
async authorize(credentials){
    dbConnect();
    const {email,password} = credentials;

    // check that if user exist or not 

    if(!email || !password){
        throw new Error("please entered a valid email and password")
    }

       
    // find user in the database 

    const user = await User.findOne({email}).select('+password');
    if(!user){
        throw new Error("Invalid email and password !");
    }

    // check is the entered password is correct or not ?

    const isMatchedPassword  = await user.comparePassword(password);

    if(!isMatchedPassword){
        throw new Error("entered password is not correct !")
    }

    return Promise.resolve(user);
}
})
    ],
callbacks:{
    jwt: async (token,user) => {
        user && (token.user = user);
        return Promise.resolve(token)
    },
    session: async (session,user)=>{
      session.user = user.user;
      return Promise.resolve(session)
    }
}
})