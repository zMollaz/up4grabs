import ListingItem from "../../components/ListingItem";
import Layout from "../../components/Layout";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import prisma from "../../lib/prisma";
import { useContext, useEffect, useState } from "react";
import { UsersContext } from "../../context/UsersContext";
import { ListingsContext } from "../../context/ListingsContext";
import useListings from "../../hooks/useListings";

export async function getServerSideProps() {
  const defaultListings = await prisma.listings.findMany();
  const defaultLikes = await prisma.biddings.findMany();

  return {
    props: { defaultListings, defaultLikes },
  };
}

export default function UserLikes(props) {
  const { user } = useContext(UsersContext);
  const [view, setView] = useState(props.defaultListings);
  const myDate = function (date) {
    dayjs.extend(relativeTime);
    return dayjs(date).fromNow();
  };

  const filteredLikes = props.defaultLikes.filter(
    (like) => like.user_id === user.id
  );

  useEffect(() => {
    const listingsArr = filteredLikes.map((like) => like.listing_id);
    const userListings = props.defaultListings.filter((listing) =>
      listingsArr.includes(listing.id)
    );
    setView(userListings);
  }, [user]);

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
    <ListingsContext.Provider value={useListings(props)}>
      <Layout>
        {/* <div
          aria-hidden="true"
          className="max-w-fill h-full relative overflow-y-auto overflow-x-auto right-0 left-0 top-4 z-100 justify-center items-center h-modal md:h-full md:inset-0"
        > */}
          {/* <div className=" flex-1 flex-col inset-0  w-full  h-full md:h-auto"> */}
            <div className="bg-off-white pr-8 flex-1 h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6 ">
              {filteredLikes.length > 0 ? (
                parsedListings
              ) : (
                <div className="h-full">You currently have no biddings to display</div>
              )}
            </div>
          {/* </div> */}
        {/* </div> */}
      </Layout>
    </ListingsContext.Provider>
  );
}
