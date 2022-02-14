import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Listings from "../components/Listings";
import PageBreak from "../components/PageBreak";

import prisma from "../lib/prisma";
import { useState } from "react";

export async function getStaticProps() {
  const listings = await prisma.listings.findMany();
  // console.log("inside fetcher", listings);
  return {
    props: { listings },
  };
}

//use useEffect inside the component when you want to make additional queries to db or api like create

export default function Home({ listings }) {

  const [filteredListings, setFilteredListings] = useState(listings);
  

  const onSearch = (searchValue) => {
    setFilteredListings(
      listings.filter((listing) => {
        if (!searchValue) return true 
        return listing.title.toLowerCase().includes(searchValue.toLowerCase())
      })
    );
  };

  return (
    <Layout onSearch={onSearch}>
      <Header />
      <PageBreak/>
      <Listings listings={filteredListings} />
      <Footer />
    </Layout>
  );
}
