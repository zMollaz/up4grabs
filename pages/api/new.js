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
  console.log(123, req.body)
//  const listingData = JSON.parse(req.body);
const newListing = {...req.body, user_id: 1, category_id: 3, start_date: "2022-02-28", img_src: "blablabla"}

 const savedListing = await prisma.listings.create({
   data: newListing
 })

 res.json({savedListing});
}

