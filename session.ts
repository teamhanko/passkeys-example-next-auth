import { getServerSession as gss } from "next-auth";
import { authOptions } from "./pages/api/auth/[...nextauth]";

export function getServerSession() {
	return gss(authOptions);
}
