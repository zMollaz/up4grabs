import Layout from "../../components/Layout";
import Listings from "../../components/Listings";
import prisma from "../../lib/prisma";
import { ListingsContext } from "../../context/ListingsContext";
import useListings from "../../hooks/useListings";

export async function getStaticProps() {

  const defaultListings = await prisma.listings.findMany();
  const defaultLikes = await prisma.biddings.findMany();

  return {
    props: { defaultListings, defaultLikes },
  };
}

export default function Likes(props) {
  return (
    <ListingsContext.Provider value={useListings(props)}>
      <Layout >
        <div
          aria-hidden="true"
          className={`max-w-fill relative overflow-y-auto overflow-x-auto fixed  right-0 left-0 top-4 z-100 justify-center items-center h-modal md:h-full md:inset-0`}
        >
          <div className="relative inset-0  w-full  h-full md:h-auto">
              <Listings />
          </div>
        </div>
      </Layout>
    </ListingsContext.Provider>
  );
}
