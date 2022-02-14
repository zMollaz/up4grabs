// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// const imageToBase64 = (img) =>
// new Promise((resolve, reject) => {
//   const reader = new FileReader();
//   reader.readAsDataURL(img);
//   reader.onload = () => resolve(reader.result);
//   reader.onerror = (error) => reject(error);
// });

const uploadToWebApi = async (listing) => {
  // console.log("Inside uploadToWebApi", listing.img_src);
  const rawImage = listing.img_src;
  const parsedImage = rawImage.split(",")[1];
  // console.log(222, rawImage);
  // const body = new FormData();
  const form = new URLSearchParams();
  form.append("image", parsedImage);
  // console.log(333, Object.fromEntries(body));
  // console.log(555, form)


  const imageServerWebApi = `https://api.imgbb.com/1/upload?key=44cfa4dc7b5f14fa19e55b846de10cd4`;
  // const response = await axios({
  //   method: "post",
  //   url: imageServerWebApi,
  //   data: form,
  //   headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  // })
  const response = await axios.post(imageServerWebApi, form)
    console.log(444, response.data.data.display_url);
  return response.data.data.display_url
};

export default async function formHandler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ messsage: "Method not allowed" });
  }
  // console.log(123, req.body)
  //  const listingData = JSON.parse(req.body);


  
  const imageUrl = await uploadToWebApi(req.body)
  console.log(555, imageUrl)
  const newListing = {
    ...req.body,
    img_src: imageUrl,
    user_id: 1,
    category_id: 3,
    start_date: "2022-02-28",
  };

  // use axios to upload the image with uploader function after moving it from the front to back
  // pass it the newListing and extract the retrieved url and reassign it to img_src in new listing
  
  const savedListing = await prisma.listings.create({
    data: newListing,
  });

  res.json({ savedListing });
}
