// Generated by Wrangler by running `wrangler types`

interface Env {
	TYPEMONKEY_KV: KVNamespace;
	ROOM: DurableObjectNamespace<import("./server").Room>;
}
