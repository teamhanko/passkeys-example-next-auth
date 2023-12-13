"use client";

import { signInWithPasskey } from "@teamhanko/passkeys-next-auth-provider/client";
import { signIn } from "next-auth/react";
import { useEffect } from "react";

export default function LoginForm() {
	useEffect(() => signInWithPasskey.conditional({ tenantId: process.env.NEXT_PUBLIC_TENANT_ID! }), []);

	return (
		<form
			className="flex flex-col gap-4"
			onSubmit={(e) => {
				e.preventDefault();

				const username = e.currentTarget.username.value;
				const password = e.currentTarget.password.value;

				signIn("credentials", { username, password });
			}}
		>
			<input
				className="px-4 py-2 rounded-full dark:bg-neutral-900 border-2 dark:border-neutral-800"
				type="text"
				name="username"
				placeholder="Username"
				autoComplete="username webauthn"
			/>
			<input
				className="px-4 py-2 rounded-full dark:bg-neutral-900 border-2 dark:border-neutral-800"
				type="password"
				name="password"
				placeholder="Password"
			/>
			<button
				type="submit"
				className="bg-white text-black rounded-full px-4 py-2 hover:bg-neutral-200 transition-colors"
			>
				Log in
			</button>
		</form>
	);
}
