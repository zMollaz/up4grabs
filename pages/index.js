import Layout from "../components/Layout";
import Header from "../components/Header";
import Listings from "../components/Listings";
import PageBreak from "../components/PageBreak";
import prisma from "../lib/prisma";
import { ListingsContext } from "../context/ListingsContext";
import useListings from "../hooks/useListings";

export async function getStaticProps() {
  const defaultListings = await prisma.listings.findMany();
  const users = await prisma.user.findMany();

  return {
    props: { defaultListings, users },
  };
}
//add somehting like Array.isArayy && map function
export default function Home(props) {
  return (
    <ListingsContext.Provider value={useListings(props)}>
      <Layout >
        <Header />
        <PageBreak />
        <Listings />
      </Layout>
    </ListingsContext.Provider>
  );
}
