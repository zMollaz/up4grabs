const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export default async function likeHandler(req, res) {
  if (req.method !== "GET" && req.method !== "POST") {
    return res.status(405).json({ messsage: "Method not allowed" });
  }
  if (req.method === "GET") {
    const likes = await prisma.biddings.findMany({
      where: {
        listing_id: Number(req.query.id),
      },
    });

  res.json({ likes });
}

}

