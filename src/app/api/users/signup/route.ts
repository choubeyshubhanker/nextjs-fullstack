import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/user.models";
import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest } from "next";
import bcryptjs from "bcryptjs";


connect();

export async function POST(request:NextRequest){
    try {
        const reqBody = await request.json()
        const {username,email, password}=reqBody
        console.log(reqBody)
        // First check these values exists or not
        // Check if user already exists
        const user = await User.findOne({email})

        if(user){
            return NextResponse.json({error: "User already exists"}, {status: 400})
        }
        // Hash Password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })
        const savedUser = await newUser.save()
        console.log(savedUser)
        return NextResponse.json({
            message : "User created successfully",
            success: true,
            savedUser
        })
    } catch (error:any) {
        return NextResponse.json({error: error.message},{status:500})
    }
}