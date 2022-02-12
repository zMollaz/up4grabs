import Layout from "../components/Layout";
import Header from "../components/Header";
import Listings from "../components/Listings";
import prisma from "../lib/prisma";

export async function getStaticProps() {
  const listings = await prisma.listings.findMany();
  // console.log("inside fetcher", listings);
  return {
    props: { listings },
  };
}

//use useEffect inside the component when you want to make additional queries to db or api like create

export default function Home({ listings }) {

  return (
    <Layout>
      <Header />
      <Listings listings={listings}/>
    </Layout>
  );
}
