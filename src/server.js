import http from "node:http";
import { jsonHandler } from "./middlewares/jsonHandler.js";
import { routeHandlesr } from "./middlewares/routeHandler.js";

async function listener(req, res) {
  await jsonHandler(req, res); // Passando os parâmetros corretamente para o jsonHandler

  routeHandlesr(req, res); // Corrigindo o uso de 'Response' para 'res'
}

http.createServer(listener).listen(3333, () => {
  console.log("Servidor rodando na porta 3333");
});
