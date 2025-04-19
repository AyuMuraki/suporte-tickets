export function updateStatus({ req, res, database }) {
  const { id } = req.params; // <-- pega da URL, não do body
  const { solucao } = req.body; // <-- pega do body, não da URL
  console.log(solucao);

  database.update("tickets", id, { status: "Encerrado", solucao });

  return res.end();
}
