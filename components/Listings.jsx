import ListingItem from "../components/ListingItem";

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
