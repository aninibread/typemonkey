import { DurableObject } from "cloudflare:workers";

export default {
  // async fetch(request:Request, env:Env, ctx: ExecutionContext) {
  //   return new Response('Hello World!');
  // },
};


export class Room extends DurableObject {
  constructor(state: DurableObjectState, env: Env) {
      super(state, env);
  }
}
