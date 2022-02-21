import ListingItem from "./ListingItem";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useContext } from 'react';
import {ListingsContext} from "../context/ListingsContext";

export default function Listings(props) {
  const {filteredListings} = useContext(ListingsContext)
  
  const myDate = function (date) {
    dayjs.extend(relativeTime)
    return dayjs(date).fromNow();
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
    <div className="bg-off-white lg:pb-4 lg:pr-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6 ">
      {parsedListings}
    </div>
  );
}
