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
  const uploadToWebApi = async (listing) => {
    // console.log("Inside uploadToWebApi", listing.img_src);
    const rawImage = await imageToBase64(listing.img_src);
    const parsedImage = rawImage.split(",")[1];
    // console.log(222, parsedImage);
    const body = new FormData();
    body.append("image", parsedImage);
    // console.log(333, Object.fromEntries(body));
    const imageServerWebApi = `https://api.imgbb.com/1/upload?key=44cfa4dc7b5f14fa19e55b846de10cd4`;
    const response = await fetch(imageServerWebApi, {
      method: "POST",
      body,
    });
    const res = await response.json();
    console.log(res);
  };
//  const listingData = JSON.parse(req.body);
const newListing = {...req.body, user_id: 1, category_id: 3, start_date: "2022-02-28"}
// use axios to upload the image with uploader function after moving it from the front to back
// pass it the newListing and extract the retrieved url and reassign it to img_src in new listing
 const savedListing = await prisma.listings.create({
   data: newListing
 })

 res.json({savedListing});
}

