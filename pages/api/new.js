// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// export default async function formHandler(req, res) {
//   const listings = await prisma.listings.findMany();
//   res.status(200).json(listings)
// }

export default async function formHandler(req, res) {

  if(req.method !== 'POST') {
    return res.status(405).json({ messsage: 'Method not allowed'});
  }
 const listingData = JSON.parse(req.body);

 const savedListing = await prisma.listings.create({
   data: listingData
 })

 res.json({savedListing});
}
