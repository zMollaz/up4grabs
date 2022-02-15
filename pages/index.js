import Layout from "../components/Layout";
import Header from "../components/Header";
import Listings from "../components/Listings";
import PageBreak from "../components/PageBreak";
import prisma from "../lib/prisma";
import {ListingsContext} from "../context/ListingsContext"
import useListings from "../hooks/useListings";

export async function getServerSideProps() {
  const listings = await prisma.listings.findMany();
  // console.log("inside fetcher", listings);
  return {
    props: { listings },
  };
}

//use useEffect inside the component when you want to make additional queries to db or api like create

export default function Home(props) {
  // const {setListings, filteredListings, onSearch} = useContext(ListingsContext)
  // setListings(props.listings);
 

  // useEffect(() => {
    
  // }, [])

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
