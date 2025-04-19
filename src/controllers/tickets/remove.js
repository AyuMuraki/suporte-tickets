export function remove({ req, res, database }) {
  const { id } = req.params; // <-- pega da URL, não do body

  database.delete("tickets", id); // <-- deleta o ticket do banco de dados

  return res.end();
}
