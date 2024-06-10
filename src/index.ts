// No node: prefix needed
import { AsyncLocalStorage } from 'async_hooks';

// Can import node.js APIs that *are not* available in the Workers runtime
import fs from 'fs';

// node-postgres just works
import { Client } from "pg";

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {

		// Process is available as a global:
		process.env = env;

		// Can use *global* Buffer without importing:
		const buf = Buffer.from('yeeee', 'utf8');

		return new Response(buf);
	},
};
