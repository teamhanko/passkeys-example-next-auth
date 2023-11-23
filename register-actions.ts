"use server";

import { db } from "@/db";
import passkeyApi from "@/passkeyApi";
import { getServerSession } from "./session";

export async function startServerPasskeyRegistration() {
	const session = await getServerSession();
	if (!session?.user?.id) throw new Error("Not logged in");

	const createOptions = await passkeyApi.registration.initialize({
		userId: session.user.id,
		username: session.user.name,
	});

	return createOptions;
}

// This is *your* server-side code; you need to implement this yourself.
// NextAuth takes care of logging in the user after they have registered their passkey.
export async function finishServerPasskeyRegistration(credential: any) {
	const session = await getServerSession();
	if (!session) throw new Error("Not logged in");

	await passkeyApi.registration.finalize(credential);

	// Now the user has registered their passkey and can use it to log in.

	const user = db.users.find((user) => user.username === session.user?.name);

	if (user) {
		user.hasPasskeys = true;
	}
}
