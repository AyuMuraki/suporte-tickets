export async function jsonHandler(request, response) {
  const buffer = [];

  for await (const chunk of request) {
    buffer.push(chunk);
  }

  try {
    request.body = JSON.parse(Buffer.concat(buffer).toString("utf-8"));
  } catch (error) {
    request.body = null; // ou {} se preferir
  }

  response.setHeader("Content-Type", "application/json");
}
