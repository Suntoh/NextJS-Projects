import type { NextAuthOptions } from "next-auth";
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';

export const options: NextAuthOptions = {
    providers:[
        GoogleProvider({
            clientId : process.env.GOOGLE_ID as string,
            clientSecret : process.env.GOOGLE_SECRET as string,
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,

        }),
        CredentialsProvider({
            name: "Credentials",
            credentials:{
                username:{
                    label:"Username : ",
                    type: "text",
                    placeholder: "your-username",
                },
                password:{
                    label:"Password : ",
                    type:"password",
                    placeholder:"your-password",
                }
            },
            async authorize(credentials) {
                //get info from database
                //Docs : https://next-auth.js.org/configuration/providers/credentials
                const user = {id:"0" , name: "Suntoh", password: "nextauth"}

                if(credentials?.username === user.name && credentials?.password === user.password){
                    return user
                }else{
                    return null
                }
            }
            
        })
    ],
    // pages:{
    //     signIn: "/signin"
    // }
}

export default NextAuth(options)






