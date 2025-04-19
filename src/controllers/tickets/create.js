import { randomUUID } from "node:crypto";

export function create({ req, res, database }) {
  const { equipamento, descricao, nome_usuario } = req.body;

  const ticket = {
    id: randomUUID(),
    equipamento,
    descricao,
    nome_usuario,
    status: "aberto",
    created_at: new Date(),
    updated_at: new Date(),
  };

  database.insert("tickets", ticket);

  return res.writeHead(201).end(JSON.stringify(ticket));
}
