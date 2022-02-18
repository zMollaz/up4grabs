import ListingItem from "../../components/ListingItem";
import moment from "moment";
import { useContext} from "react";
import Layout from "../../components/Layout";
import prisma from "../../lib/prisma";
import { UsersContext } from "../../context/UsersContext";

export async function getServerSideProps() {
  const listings = await prisma.listings.findMany();
  const likes = await prisma.biddings.findMany();

  return {
    props: { listings, likes },
  };
}

export default function UserLikes({ listings, likes }) {
  const { user } = useContext(UsersContext);
  const myDate = function (date) {
    return moment(date, "").fromNow();
  };

  const filteredLikes = likes.filter((like) => like.user_id === user.id);
  const listingsArr = filteredLikes.map((like) => like.listing_id);
  const userListings = listings.filter((listing) =>
    listingsArr.includes(listing.id)
  );

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
    <Layout>
      <div
        aria-hidden="true"
        className="max-w-fill h-full relative overflow-y-auto overflow-x-auto right-0 left-0 top-4 z-100 justify-center items-center h-modal md:h-full md:inset-0"
      >
        <div className="relative inset-0  w-full  h-full md:h-auto">
          <div className="bg-off-white h-full pr-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6 ">
            {parsedListings}
          </div>
        </div>
      </div>
    </Layout>
  );
}
