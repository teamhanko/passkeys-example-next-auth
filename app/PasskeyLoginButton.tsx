"use client";

export default function PasskeyLoginButton(props: { onClick: () => void }) {
	return (
		<button
			className="bg-white text-black rounded-full px-4 py-2 flex justify-center items-center gap-2 hover:bg-neutral-200 transition-colors"
			{...props}
		>
			<span className="text-xs">🔑</span> Log in with Passkey
		</button>
	);
}
