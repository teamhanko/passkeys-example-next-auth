import { tenant } from "@teamhanko/passkeys-next-auth-provider";

if (!process.env.PASSKEYS_API_KEY || !process.env.NEXT_PUBLIC_TENANT_ID) {
	// These need to be set in .env.local
	// You get them from the Passkey API itself, e.g. when first setting up the server.
	throw new Error("Please set PASSKEYS_API_KEY and PASSKEYS_TENANT_ID in your .env.local file.");
}

const passkeyApi = tenant({
	apiKey: process.env.PASSKEYS_API_KEY!,
	tenantId: process.env.NEXT_PUBLIC_TENANT_ID!,
	baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
});

export default passkeyApi;
