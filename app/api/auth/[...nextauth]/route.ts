import NextAuth from "next-auth/next";
import { authOptions } from "./options";

const hanlde = NextAuth(authOptions);

export { hanlde as GET, hanlde as POST };
