export function update({ req, res, database }) {
  const { id } = req.params; // <-- pega da URL, não do body
  const { equipamento, descricao } = req.body;

  database.update("tickets", id, {
    equipamento,
    descricao,
    updated_at: new Date(),
  });

  return res.end();
}
