import { db } from "@/db";
import passkeyApi from "@/passkeyApi";
import { PasskeyProvider } from "@teamhanko/passkeys-next-auth-provider";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Required for Server Components as of writing https://github.com/nextauthjs/next-auth/issues/7658#issuecomment-1683225019
export const authOptions: AuthOptions = {
	callbacks: {
		session({ session, token }) {
			if (token.sub && session.user) {
				session.user.id = token.sub;
			}

			return session;
		},
	},
	providers: [
		CredentialsProvider({
			credentials: {
				username: { label: "Username", type: "text" },
				password: { label: "Password", type: "password" },
			},
			authorize(credentials) {
				// Just for the sake of this example.
				// In a real app, you should hash passwords and use a proper database, of course.
				const user = db.users.find(
					(user) => user.username === credentials?.username && user.password === credentials?.password
				);

				if (!user) return null;

				return {
					id: user.id,
					name: user.username,
				};
			},
		}),
		PasskeyProvider({
			tenant: passkeyApi,
			async authorize({ userId }) {
				const user = db.users.find((user) => user.id === userId); // Like above, the userId stored in the Passkey API is the `username` in our DB

				if (!user) return null;

				return {
					id: user.id,
					name: user.username,
				};
			},
		}),
	],
};

export default NextAuth(authOptions);
