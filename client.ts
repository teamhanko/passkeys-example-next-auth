import { create } from "@github/webauthn-json";
import { finishServerPasskeyRegistration, startServerPasskeyRegistration } from "./register-actions";

export async function registerPasskey() {
	const createOptions = await startServerPasskeyRegistration();

	// Open "register passkey" dialog
	const credential = await create(createOptions as any);

	await finishServerPasskeyRegistration(credential);

	// Now the user has registered their passkey and can use it to log in.
}
