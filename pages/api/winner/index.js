const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export default async function winnerHandler(req, res) {
  if (req.method !== "GET" && req.method !== "POST") {
    return res.status(405).json({ messsage: "Method not allowed" });
  }

  if (req.method === "POST") {
    const { user_id, listing_id } = req.body;
    const winner = await prisma.Winners.create({
      data: { user_id, listing_id },
    });
    console.log("post winner", winner);
    res.json({ winner });
  }
}
