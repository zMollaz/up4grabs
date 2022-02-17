const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export default async function likeHandler(req, res) {
  if (req.method !== "GET" && req.method !== "POST") {
    return res.status(405).json({ messsage: "Method not allowed" });
  }
  if (req.method === "GET") {
  const likes = await prisma.biddings.findMany();

  res.json({ likes });
}
if (req.method === "POST") {
  const { user_id, listing_id } = req.body;
  const like = await prisma.biddings.create({data: {user_id, listing_id}})
  res.json({like});

}
}

