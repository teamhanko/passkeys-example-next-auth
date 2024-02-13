import { db } from "@/db";
import Image from "next/image";
import { use } from "react";
import LoginForm from "./LoginForm";
import PasskeyLoginButton from "./PasskeyLoginButton";
import PasskeyRegisterButton from "./PasskeyRegisterButton";
import { getServerSession } from "@/session";
import Link from "next/link";

export default function Home() {
	const session = use(getServerSession());
	const { hasPasskeys } = db.users.find((u) => u.username === session?.user?.name) ?? {};

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
				<div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
					<Link
						className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
						href="https://hanko.io"
						target="_blank"
						rel="noopener noreferrer"
					>
						By <Image src="/hanko.svg" alt="Hanko Logo" width={20} height={20} priority /> Hanko
					</Link>
				</div>
			</div>

			<div className="relative flex gap-32 items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
				<div className="flex flex-col gap-8 items-center">
					<Image
						className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
						src="/next.svg"
						alt="Next.js Logo"
						width={180}
						height={37}
						priority
					/>
					<span className="text-4xl font-medium mt-1.5">+</span>
					<div className="text-4xl flex items-center gap-3 font-semibold ">
						<Image
							className="dark:drop-shadow-[0_0_0.5rem_#f23054]"
							src="/hanko.svg"
							alt="Hanko Logo"
							width={40}
							height={40}
							priority
						/>
						<span className="dark:drop-shadow-[0_0_0.3rem_#ffffff70]">Hanko Passkey API</span>
					</div>
				</div>

				<div className="flex flex-col gap-8">
					{session?.user?.name ? (
						// Logged in
						<>
							<PasskeyRegisterButton username={session?.user.name} />
							{hasPasskeys ? (
								<div>
									Now try to log in with your passkey!{" "}
									<Link
										className="text-center underline decoration-2 text-[#f23054]"
										href="/api/auth/signout"
									>
										Log out
									</Link>
								</div>
							) : (
								<Link
									className="text-center underline decoration-2 opacity-75"
									href="/api/auth/signout"
								>
									Log out
								</Link>
							)}
						</>
					) : (
						// Logged out, show login form and passkey-login button
						<>
							<LoginForm />
							<hr className="border-neutral-600" />
							<PasskeyLoginButton />
						</>
					)}
				</div>
			</div>

			<div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
				<a
					href="https://docs.hanko.io/passkey-api/introduction"
					className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className={`mb-3 text-2xl font-semibold`}>
						Docs{" "}
						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
							-&gt;
						</span>
					</h2>
					<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
						Find guides and in-depth information about the Hanko Passkey API.
					</p>
				</a>

				<a
					href="https://github.com/teamhanko/passkey-server"
					className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className={`mb-3 text-2xl font-semibold`}>
						GitHub{" "}
						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
							-&gt;
						</span>
					</h2>
					<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
						View the GitHub repository of the Passkey API, including self-hosting instructions.
					</p>
				</a>

				<a
					href="https://cloud.hanko.io"
					className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className={`mb-3 text-2xl font-semibold`}>
						Hanko Cloud{" "}
						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
							-&gt;
						</span>
					</h2>
					<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
						Sign up for a free account and get started with the Passkey API in minutes.
					</p>
				</a>

				<a
					href="https://discord.com/invite/tAG6RrRqJD"
					className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className={`mb-3 text-2xl font-semibold`}>
						Discord{" "}
						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
							-&gt;
						</span>
					</h2>
					<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
						Stuck or have questions? Join our Discord server and get help directly from the Hanko team.
					</p>
				</a>
			</div>
		</main>
	);
}
