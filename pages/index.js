import Layout from "../components/Layout";
import Header from "../components/Header";
import Listings from "../components/Listings";
import PageBreak from "../components/PageBreak";
import prisma from "../lib/prisma";
import {ListingsContext} from "../context/ListingsContext"
import useListings from "../hooks/useListings";

export async function getStaticProps() {
  const listings = await prisma.listings.findMany();
  return {
    props: { listings },
  };
}

//use useEffect inside the component when you want to make additional queries to db or api like create

export default function Home(props) {

  return (
    <ListingsContext.Provider value={useListings(props.listings)}>
    <Layout >
      <Header />
      <PageBreak />
      <Listings />
    </Layout>
    </ListingsContext.Provider>
  );
}
