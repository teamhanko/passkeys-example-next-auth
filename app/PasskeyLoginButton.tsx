"use client";

import { signInWithPasskey } from "@teamhanko/passkeys-next-auth-provider/client";

export default function PasskeyLoginButton() {
	return (
		<button
			className="bg-white text-black rounded-full px-4 py-2 flex justify-center items-center gap-2 hover:bg-neutral-200 transition-colors"
			onClick={() => signInWithPasskey({ tenantId: "261fda42-0d12-40ba-9b90-79ca06ce3c6f" })}
		>
			<span className="text-xs">🔑</span> Log in with Passkey
		</button>
	);
}
