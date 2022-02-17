const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export default async function likeHandler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ messsage: "Method not allowed" });
  }
  if (req.method === "GET") {
  const likes = await prisma.biddings.findMany();

  res.json({ likes });
}
if (req.method === "POST") {
  console.log(req.body)

  res.json({ message: "Hello World!"});

}
}

