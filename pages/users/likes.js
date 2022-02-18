import Layout from "../../components/Layout";
import Listings from "../../components/Listings";
import prisma from "../../lib/prisma";
import { ListingsContext } from "../../context/ListingsContext";
import {UsersContext} from "../../context/UsersContext"
import {useContext} from "react";
import useListings from "../../hooks/useListings";
// import cookie from "cookie-cutter";
// const cookie = require('cookie-cutter');

export async function getStaticProps() {

  const defaultListings = await prisma.listings.findMany();
  const defaultLikes = await prisma.biddings.findMany();

  return {
    props: { defaultListings, defaultLikes },
  };
}

export default function Likes(props) {
  // const {user} = useContext(UsersContext)
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
