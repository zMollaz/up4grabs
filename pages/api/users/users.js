const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export default async function userHandler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ messsage: "Method not allowed" });
  }
  const users = await prisma.user.findMany();
  // console.log(567, users)

  res.json({ users });
}
