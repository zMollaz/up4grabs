import ListingItem from "../../components/ListingItem";
import moment from "moment";
import { useContext, useEffect, useState } from 'react';
import Layout from "../../components/Layout";
import Listings from "../../components/Listings";
import prisma from "../../lib/prisma";
import { ListingsContext } from "../../context/ListingsContext";
import { UsersContext } from "../../context/UsersContext";

export async function getStaticProps() {

  const defaultListings = await prisma.listings.findMany();
  const defaultLikes = await prisma.biddings.findMany();

  return {
    props: { defaultListings, defaultLikes },
  };
}

export default function UserLikes(props) {
  const {filteredListings, likes, bidding, setBidding} = useContext(ListingsContext)
  const {user} = useContext(UsersContext)
  const [view, setView] = useState(filteredListings)

  const myDate = function (date) {
    return moment(date, "").fromNow();
  };

// const getUserListings = (id, listings, likes) => {
  const filteredLikes = likes.filter(like => like.user_id === id)
  const listingsArr = filteredLikes.map(like => like.listing_id)
  const userListings = listings.filter(listing => listingsArr.includes(listing.id))
  // setView(userListings);
// }

// useEffect(() => {
//   if (bidding) {
//     getUserListings(user.id, filteredListings, likes)
//     }

//   }, [user])

  const parsedListings = userListings.map((listing) => {
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
    <div
          aria-hidden="true"
          className={`max-w-fill relative overflow-y-auto overflow-x-auto fixed  right-0 left-0 top-4 z-100 justify-center items-center h-modal md:h-full md:inset-0`}
        >
          <div className="relative inset-0  w-full  h-full md:h-auto">
            <div className="bg-off-white pr-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6 ">
              {parsedListings}
            </div>
          </div>
    </div>
  );
}
