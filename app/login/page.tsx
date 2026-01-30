"use client"
import { useState } from "react"
import userDb from "@/lib/user"
export default function LoginPage(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit=()=>{}
    return(
        <>
            <form>
                <h1>Log In</h1>
                <input type="text" placeholder="username" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                <button type="submit"></button>
            </form>
        </>
    )
}