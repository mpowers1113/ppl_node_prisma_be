import * as trpc from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';
export const createContext = ({ req, res }: trpcExpress.CreateExpressContextOptions) => ({
  req,
  res,
}); // no context
export type Context = trpc.inferAsyncReturnType<typeof createContext>;

export const t = trpc.initTRPC.context<Context>().create();
export const publicProcedure = t.procedure;
export const router = t.router;
