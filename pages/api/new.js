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

  const imageUrl = await uploadToWebApi(req.body);
  const startDate = moment().format("YYYY/MM/DD");
  const newListing = {
    ...req.body,
    img_src: imageUrl,
    user_id: 1,
    category_id: 3,
    start_date: startDate,
  };

  const savedListing = await prisma.listings.create({
    data: newListing,
  });

  res.json({ savedListing });
}
