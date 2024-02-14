"use client";

import { signInWithPasskey } from "@teamhanko/passkeys-next-auth-provider/client";
import { useCallback, useEffect } from "react";
import LoginForm from "./LoginForm";
import PasskeyLoginButton from "./PasskeyLoginButton";

const tenantId = process.env.NEXT_PUBLIC_TENANT_ID!;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;

export function LoggedOut() {
	const login = useCallback(() => {
		signInWithPasskey({ tenantId, baseUrl }).catch(enablePasskeyAutofill);
	}, []);

	/**
	 * Enables autofill support for every <input autoComplete="webauthn"> on the page
	 *
	 * This has to be called every time the LoginForm loads.
	 * When signInWithPasskey is called and FAILS, this function should be called again.
	 * Otherwise, browsers will not show the passkey as an autofill option.
	 */
	const enablePasskeyAutofill = useCallback(() => {
		signInWithPasskey.conditional({ tenantId, baseUrl });
	}, []);

	// Call enablePasskeyAutofill once, so autoComplete="webauthn" inputs show any registered passkeys
	// as a login option. Clicking on the option will immediately log the user in.
	useEffect(enablePasskeyAutofill, []);

	return (
		<>
			<LoginForm />
			<hr className="border-neutral-600" />
			<PasskeyLoginButton onClick={login} />
		</>
	);
}
