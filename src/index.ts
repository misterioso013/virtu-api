import { ip } from "@misterioso013/ipcli";
import Fastify from "fastify";
import cors from "@fastify/cors";
const fastify = Fastify({ logger: true });

fastify.register(cors);

fastify.get("/", function (request, reply) {
  reply.send({ hello: "world" });
});

// Run the server!
fastify.listen({ port: 3000 }, function (err, address) {
  console.log(`Server listening at http://${ip()}:3000`);
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
