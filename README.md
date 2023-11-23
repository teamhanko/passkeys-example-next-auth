## Getting Started

First, create `.env.local` and add the following environment variables to it:

```
PASSKEYS_API_KEY=<your secret api key>
PASSKEYS_TENANT_ID=<your tenant id>
```

These values both come from the Passkey API. The tenant ID will be shown to you when you create a new tenant. The API key must remain secret (don't prefix with `NEXT_PUBLIC_`).

Then install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Then try to log in as one of the following users:

| Username  | Password             |
| --------- | -------------------- |
| johnd     | password123          |
| sergio_mq | very_secure_password |

You can add more users to the "database" in [db.ts](./db.ts) ;-)

### Once logged in, add a passkey to the account

Passkeys can only be added once you're logged in &mdash; now that you are (using the username + password combos above), add a passkey by clicking the <kbd>Register passkey for johnd</kbd> button.

When you're done, log out.

You'll be able to log into the same account using the same passkey you just registered. Click on <kbd>🔑 Log in with Passkey</kbd> and follow the promp that appears.

At the end, you should be logged in without having had to enter any username/password.

# Community

## Questions, bugs, ideas

If you have any questions or issues, please check this project's [Q&A section in discussions](https://github.com/teamhanko/hanko/discussions/categories/q-a) and the [open issues](https://github.com/teamhanko/hanko/issues). Feel free to comment on existing issues or create a new issue if you encounter any bugs or have a feature request. For yet unanswered questions, feedback, or new ideas, please open a new discussion.

## Discord community & X

We invite you to join our growing [Discord community](https://www.hanko.io/community) if you want to get the latest updates on passkeys, WebAuthn, and this project or if you just want to chat with us. You can also [follow us on X](https://x.com/hanko_io).
