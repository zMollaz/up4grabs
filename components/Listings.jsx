import ListingItem from "./ListingItem";
import moment from "moment";
import { useContext } from 'react';
import {ListingsContext} from "../context/ListingsContext"

export default function Listings(props) {
  const {filteredListings} = useContext(ListingsContext)

  const myDate = function (date) {
    return moment(date, "").fromNow();
  };

  const parsedListings = filteredListings.map((listing) => {
    return (
      <ListingItem
        title={listing.title}
        img={listing.img_src}
        date={myDate(listing.start_date)}
        id={listing.id}
        key={listing.id}
      />
    );
  });
  return (
    <div className="bg-off-white pr-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6 ">
      {parsedListings}
    </div>
  );
}
