import ListingItem from "./ListingItem";
// import prisma from '../lib/prisma';

// export async function getStaticProps() {
//   const res = await fetch("https://localhost:3000/api/listings")
//   const data = await res
//   console.log("inside fetcher", data);
//   const listings = data.listings
//   return {
//     props: { listings },
//   };
// }

const moment = require('moment');
const myDate = function (date) {
  return moment(date, "").fromNow(); 
}

export default function Listings({ listings }) {
  // console.log("inside component", listings);
  const parsedListings = listings.map((listing) => {
  return (
      <ListingItem
      title={listing.title}
      img={listing.img_src}
      date={myDate(listing.start_date)}
      id={listing.id}
      key={listing.id}
    />
  )});
  return  parsedListings ;
}
