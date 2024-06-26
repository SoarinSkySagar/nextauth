import { getServerSession } from "next-auth";
import { authOptions } from "../lib/nextAuth";
import {NextResponse} from "next/server"

export async function GET(request) {
    const session = await getServerSession(authOptions)
    console.log({session})
    return NextResponse.json({name: session.user.name, email: session.user.email, pfp: session.user.image})
}