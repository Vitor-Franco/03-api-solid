import { app } from "./app";

app.listen({
  host: '0.0.0.0', // Facilitar o uso com o frontend
  port: 3333,
}).then(() => {
  console.log('🔥 Server is running on port 3333');
});
