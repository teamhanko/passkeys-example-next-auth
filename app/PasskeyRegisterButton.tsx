"use client";

import { registerPasskey } from "@/client";
import { useRouter } from "next/navigation";

export default function PasskeyRegisterButton(props: { username: string }) {
	const router = useRouter();

	return (
		<button
			className="bg-[#f23054] text-white hover:bg-white hover:text-black transition-all px-4 py-2 rounded-full"
			onClick={() => registerPasskey().then(router.refresh)}
		>
			Register passkey for <b>{props.username}</b>
		</button>
	);
}
