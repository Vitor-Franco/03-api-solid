import { app } from "./app";
import { env } from "./env";

app.listen({
  host: '0.0.0.0', // Facilitar o uso com o frontend
  port: env.PORT,
}).then(() => {
  console.log('🔥 Server is running on port 3333');
});
