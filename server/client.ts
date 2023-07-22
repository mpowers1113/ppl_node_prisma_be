import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from './src/trpc/routers/routes';

const client = createTRPCProxyClient<AppRouter>({
  links: [httpBatchLink({ url: 'http://localhost:8000/trpc' })],
});

async function main() {
  const exercise = await client.exercise.list.query();
  console.log(exercise);
}
main();
