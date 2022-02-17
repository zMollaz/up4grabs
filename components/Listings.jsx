import ListingItem from "./ListingItem";
import moment from "moment";
import { useContext, useEffect, useState } from 'react';
import {ListingsContext} from "../context/ListingsContext"
import {UsersContext} from "../context/UsersContext"


export default function Listings(props) {
  const {filteredListings, likes} = useContext(ListingsContext)
  const {user} = useContext(UsersContext)
  const [view, setView] = useState(filteredListings)

  const myDate = function (date) {
    return moment(date, "").fromNow();
  };

const getUserListings = (id, listings, likes) => {
  const filteredLikes = likes.filter(like => like.user_id === id)
  console.log(555, filteredListings)
  const listingsArr = filteredLikes.map(like => like.listing_id)
  console.log(666, listingsArr)
  const userListings = filteredListings.filter(listing => listingsArr.includes(listing.id))
  console.log(777, userListings)
  setView(userListings);
}

useEffect(() => {
  if (likes) {
    getUserListings(user.id, filteredListings, likes)
    }
  }, [])

  const parsedListings = view.map((listing) => {
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
