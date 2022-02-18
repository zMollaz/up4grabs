import axios from "axios";
import moment from "moment";
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const uploadToWebApi = async (listing) => {
  const image = listing.img_src;
  const form = new URLSearchParams();
  form.append("image", image);
  const imageServerWebApi = `https://api.imgbb.com/1/upload?key=44cfa4dc7b5f14fa19e55b846de10cd4`;
  const response = await axios.post(imageServerWebApi, form);
  const retrievedUrl = response.data.data.display_url;
  return retrievedUrl;
};

export default async function formHandler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ messsage: "Method not allowed" });
  }
  const retrievedState = req.body.state;
  const categoryToInteger = Number(retrievedState.category_id)
  const user = req.body.user.id;
  const imageUrl = await uploadToWebApi(retrievedState);
  const startDate = moment().format("YYYY/MM/DD");
  const newListing = {
    ...retrievedState,
    img_src: imageUrl,
    user_id: user,
    category_id: categoryToInteger,
    start_date: startDate,
  };
  
  const savedListing = await prisma.listings.create({
    data: newListing,
  });

  res.json({ savedListing });
}
