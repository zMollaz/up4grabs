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
export default function Listings({ listings }) {
  console.log("inside component", listings);
  const parsedListings = listings.map((listing) => (
    <ListingItem
      title={listing.title}
      img={listing.img_src}
      date={listing.start_date}
      key={listing.id}
    />
  ));
  return  parsedListings ;
}
