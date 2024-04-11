"use client"
import { useSession } from "next-auth/react"

export default function ClientPage() {
    const {data, status} = useSession()
    console.log({data, status})
    return (
        <div>
            <h1>Client Page</h1>
        </div>
    )
}